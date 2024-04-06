import { Octokit } from "@octokit/rest"
import { config } from "dotenv"

config()

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

const SERVICE_NAME = "github"
const ORGANIZATION_NAME = "yamada-ui"
const REPO_NAME = "yamada-ui"
const API_ENDPOINT = `https://codecov.io/api/v2/${SERVICE_NAME}/${ORGANIZATION_NAME}`
const REPORT_ENDPOINT = `https://app.codecov.io/gh/yamada-ui/yamada-ui/blob/main`
const REQUEST_OPTIONS: RequestInit = {
  headers: {
    method: "GET",
    Authorization: `bearer ${process.env.CODECOV_API_TOKEN}`,
    accept: "application/json",
  },
}

const TARGET_COVERAGE = 80

const GITHUB_OPTIONS = { owner: "yamada-ui", repo: "yamada-ui" }

const ISSUE_BODY = (packageName: string, files: Record<string, number[]>) =>
  [
    `package: ${packageName}`,
    "",
    "### Description",
    `\`${packageName}\` has a test coverage of less than 80%. We will enhance it to above 80%.`,
    "",
    "### Target files",
    ...Object.entries(files).flatMap(([path, lines]) => [
      `- [${path}](${REPORT_ENDPOINT}/${path})`,
      ...lines.map(
        (line) => `  - [L${line}](${REPORT_ENDPOINT}/${path}#L${line})`,
      ),
    ]),
    "",
    "### Problem Statement/Justification",
    "Testing is essential to ensure quality when operating a package.",
    "",
    "### Additional Information",
    "While it's ideal to cover all tests, if there are too many lines to work on, please create a PR within your capacity.",
    "Any deficiencies not covered by the PR will be automatically created as issues.",
  ].join("\n")

type Issue = Awaited<
  ReturnType<typeof octokit.issues.listForRepo>
>["data"][number]

type CoverageReportTotals = {
  files: number
  lines: number
  hits: number
  misses: number
  partials: number
  coverage: number
  branches: number
  methods: number
  messages: number
  sessions: number
  complexity: number
  complexity_total: number
  complexity_ratio: number
  diff: any
}

type CoverageReportFile = {
  name: string
  totals: CoverageReportTotals
  line_coverage: [number, number][]
}

type CoverageReport = {
  totals: CoverageReportTotals
  files: CoverageReportFile[]
  commit_file_url: string
}

const codecov = async <T extends any>(path: string, options?: RequestInit) => {
  const res = await fetch(`${API_ENDPOINT}/${path}`, {
    ...REQUEST_OPTIONS,
    ...options,
  })
  const data = await res.json()

  return data as T
}

const getIssues = async () => {
  let issues: Issue[] = []
  let page = 1
  let count = 0
  const perPage = 100

  do {
    const { data } = await octokit.issues.listForRepo({
      ...GITHUB_OPTIONS,
      state: "open",
      labels: "coverage",
      per_page: perPage,
      page,
    })

    issues.push(...data)

    count = data.length

    page++
  } while (count === perPage)

  issues = issues.filter(({ pull_request }) => !pull_request)

  return issues
}

const getExistPackages = (issues: Issue[]) =>
  issues.reduce(
    (prev, issue) => {
      const packageName = issue.body?.match(/^package: ([^\s]+)/m)?.[1]

      if (packageName) prev[packageName] = issue

      return prev
    },
    {} as Record<string, Issue>,
  )

const getCoverageReport = async () => {
  const data = await codecov<CoverageReport>(`repos/${REPO_NAME}/report`)

  return data
}

const getTargetFiles = (files: CoverageReportFile[]) => {
  const targetFiles: Record<string, number[]> = {}

  files.forEach(({ name, totals, line_coverage }) => {
    const { lines, misses, partials, coverage } = totals

    if (coverage >= TARGET_COVERAGE) return

    if (lines === misses + partials) {
      targetFiles[name] = []
    } else {
      const targetLines: number[] = []

      line_coverage.forEach(([line, flg], index) => {
        const [, prevFlg] = line_coverage[index - 1] ?? []

        if (flg === 1 && prevFlg !== 1) targetLines.push(line)
      })

      targetFiles[name] = targetLines
    }
  })

  return targetFiles
}

const getTargetPackages = (files: Record<string, number[]>) => {
  return Object.entries(files).reduce(
    (prev, [path, lines]) => {
      const resolvedPath = path.replace(/^packages\//, "")
      const isGroup = /^(components|hooks)\//.test(resolvedPath)

      let packageName = resolvedPath.split("/")[isGroup ? 1 : 0]

      packageName = `@yamada-ui/${packageName}`

      prev[packageName] = { ...prev[packageName], [path]: lines }

      return prev
    },
    {} as Record<string, Record<string, number[]>>,
  )
}

const createIssues = async (
  existPackages: Record<string, Issue>,
  packages: Record<string, Record<string, number[]>>,
) => {
  for await (const [packageName, files] of Object.entries(packages)) {
    const isExist = Object.keys(existPackages).includes(packageName)

    const body = ISSUE_BODY(packageName, files)

    if (isExist) {
      const { number, body: prevBody } = existPackages[packageName]

      if (prevBody === body) {
        console.log("Skipped issue", number, packageName)

        continue
      }

      await octokit.issues.update({
        ...GITHUB_OPTIONS,
        issue_number: number,
        body,
      })

      console.log("Updated issue", number, packageName)
    } else {
      await octokit.issues.create({
        ...GITHUB_OPTIONS,
        title: `Enhance Test Coverage for \`${packageName}\``,
        body,
        labels: ["coverage", "test", "good first issue"],
      })

      console.log("Created issue", packageName)
    }

    await new Promise((resolve) => setTimeout(resolve, 3000))
  }
}

const main = async () => {
  try {
    const issues = await getIssues()

    const existPackages = getExistPackages(issues)

    const { files } = await getCoverageReport()

    const targetFiles = getTargetFiles(files)

    const targetPackages = getTargetPackages(targetFiles)

    await createIssues(existPackages, targetPackages)
  } catch (e) {
    if (e instanceof Error) console.log(e.message)
  }
}

main()
