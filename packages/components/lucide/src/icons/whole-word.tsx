import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { WholeWord as LucideWholeWordIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `WholeWordIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WholeWordIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideWholeWordIcon} {...props} />,
)

/**
 * @deprecated Use `WholeWordIcon` instead.
 */
export const WholeWord = WholeWordIcon
