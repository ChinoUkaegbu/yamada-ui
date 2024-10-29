import type { ThemeTokens } from "@yamada-ui/core"

export const colors: ThemeTokens = {
  black: "#141414",
  white: "#fbfbfb",

  border: ["#dcdcde", "#434248"],
  current: "currentColor",
  focus: "#0070F0",

  blackAlpha: {
    50: "rgba(0, 0, 0, 0.04)",
    100: "rgba(0, 0, 0, 0.06)",
    200: "rgba(0, 0, 0, 0.08)",
    300: "rgba(0, 0, 0, 0.16)",
    400: "rgba(0, 0, 0, 0.24)",
    500: "rgba(0, 0, 0, 0.36)",
    600: "rgba(0, 0, 0, 0.48)",
    700: "rgba(0, 0, 0, 0.64)",
    800: "rgba(0, 0, 0, 0.80)",
    900: "rgba(0, 0, 0, 0.92)",
    950: "rgba(0, 0, 0, 0.96)",
  },
  whiteAlpha: {
    50: "rgba(255, 255, 255, 0.04)",
    100: "rgba(255, 255, 255, 0.06)",
    200: "rgba(255, 255, 255, 0.08)",
    300: "rgba(255, 255, 255, 0.16)",
    400: "rgba(255, 255, 255, 0.24)",
    500: "rgba(255, 255, 255, 0.36)",
    600: "rgba(255, 255, 255, 0.48)",
    700: "rgba(255, 255, 255, 0.64)",
    800: "rgba(255, 255, 255, 0.80)",
    900: "rgba(255, 255, 255, 0.92)",
    950: "rgba(255, 255, 255, 0.96)",
  },

  amber: {
    50: "#fdf0d8",
    100: "#fde8c4",
    200: "#fbd593",
    300: "#f9c367",
    400: "#f7b23b",
    500: "#f59f0a",
    600: "#ce8509",
    700: "#a26907",
    800: "#764c05",
    900: "#4e3303",
    950: "#362302",
  },
  blue: {
    50: "#e2edfd",
    100: "#cfe0fc",
    200: "#adcbfa",
    300: "#8bb5f8",
    400: "#659cf6",
    500: "#4387f4",
    600: "#186bf2",
    700: "#0c59d4",
    800: "#0a47a9",
    900: "#07357d",
    950: "#062c6a",
  },
  cyan: {
    50: "#cef6fd",
    100: "#b0f1fd",
    200: "#7ee8fb",
    300: "#4de0f9",
    400: "#16d6f8",
    500: "#07b6d5",
    600: "#0590a8",
    700: "#046e81",
    800: "#034854",
    900: "#012228",
    950: "#011114",
  },
  emerald: {
    50: "#d0fbed",
    100: "#b4f8e2",
    200: "#80f4cd",
    300: "#4defb9",
    400: "#19eba5",
    500: "#10b77f",
    600: "#0d9165",
    700: "#096748",
    800: "#06422e",
    900: "#021710",
    950: "#000503",
  },
  flashy: {
    50: "#fdedf5",
    100: "#fbdaeb",
    200: "#f7b5d6",
    300: "#f390c2",
    400: "#ef6bad",
    500: "#ec4699",
    600: "#e82185",
    700: "#c6156e",
    800: "#a21159",
    900: "#780d42",
    950: "#660b38",
  },
  fuchsia: {
    50: "#f9e3fd",
    100: "#f5d0fb",
    200: "#eeaff8",
    300: "#e78af5",
    400: "#e069f2",
    500: "#d948ef",
    600: "#d01eeb",
    700: "#b112ca",
    800: "#900ea4",
    900: "#6b0b7a",
    950: "#5b0967",
  },
  gray: {
    50: "#dedfe3",
    100: "#d3d5da",
    200: "#b7bbc3",
    300: "#9ea3ae",
    400: "#828997",
    500: "#6b7280",
    600: "#565c67",
    700: "#434851",
    800: "#2e3138",
    900: "#1c1e21",
    950: "#101113",
  },
  green: {
    50: "#cff7de",
    100: "#b5f2cb",
    200: "#85eaaa",
    300: "#51e186",
    400: "#23d163",
    500: "#1ba14c",
    600: "#16833e",
    700: "#126932",
    800: "#0d4e25",
    900: "#083017",
    950: "#062311",
  },
  indigo: {
    50: "#e8e8fd",
    100: "#d9dafc",
    200: "#bdbef9",
    300: "#9c9ef6",
    400: "#8082f4",
    500: "#6467f2",
    600: "#3a3dee",
    700: "#1417e6",
    800: "#1114c0",
    900: "#0d0f96",
    950: "#0b0d83",
  },
  lime: {
    50: "#e7facc",
    100: "#ddf7b5",
    200: "#c7f287",
    300: "#b2ee59",
    400: "#9de92b",
    500: "#82cb15",
    600: "#6ba611",
    700: "#507d0d",
    800: "#385809",
    900: "#1e2e05",
    950: "#121c03",
  },
  neutral: {
    50: "#dedede",
    100: "#d4d4d4",
    200: "#bababa",
    300: "#a3a3a3",
    400: "#8a8a8a",
    500: "#737373",
    600: "#5c5c5c",
    700: "#474747",
    800: "#303030",
    900: "#1c1c1c",
    950: "#0f0f0f",
  },
  orange: {
    50: "#fef0e6",
    100: "#fee4d2",
    200: "#fdc7a1",
    300: "#fbac74",
    400: "#fa9247",
    500: "#f97415",
    600: "#e06106",
    700: "#b34d05",
    800: "#863a03",
    900: "#5e2902",
    950: "#461e02",
  },
  pink: {
    50: "#fde8ed",
    100: "#fcd9e3",
    200: "#f9b9ca",
    300: "#f693ad",
    400: "#f37295",
    500: "#f0517c",
    600: "#ec275c",
    700: "#d81347",
    800: "#ae0f39",
    900: "#880c2d",
    950: "#710a25",
  },
  purple: {
    50: "#f0e2fe",
    100: "#e9d3fd",
    200: "#d7b1fb",
    300: "#c994fa",
    400: "#b772f8",
    500: "#a855f7",
    600: "#9229f5",
    700: "#7e0bea",
    800: "#6609be",
    900: "#510797",
    950: "#44067f",
  },
  red: {
    50: "#fdeae8",
    100: "#fbd9d5",
    200: "#f6b2ac",
    300: "#f28c82",
    400: "#ee6a5d",
    500: "#ea4334",
    600: "#de2817",
    700: "#b42013",
    800: "#8a190f",
    900: "#66120b",
    950: "#530f09",
  },
  rose: {
    50: "#feecef",
    100: "#fdd8de",
    200: "#fbb2be",
    300: "#f88b9d",
    400: "#f6657d",
    500: "#f43e5c",
    600: "#f2183c",
    700: "#cf0c2d",
    800: "#a40a23",
    900: "#7d071b",
    950: "#650616",
  },
  sky: {
    50: "#ddf3fd",
    100: "#c5eafc",
    200: "#95d9f9",
    300: "#65c8f6",
    400: "#35b7f3",
    500: "#0da2e7",
    600: "#0b87c1",
    700: "#096995",
    800: "#064e6f",
    900: "#042f43",
    950: "#032230",
  },
  teal: {
    50: "#cdf9f4",
    100: "#b1f6ee",
    200: "#7ef1e3",
    300: "#51ecda",
    400: "#1ee6cf",
    500: "#14b8a5",
    600: "#108e80",
    700: "#0c6a5f",
    800: "#07403a",
    900: "#031c19",
    950: "#010504",
  },
  transparent: "transparent",
  violet: {
    50: "#eee7fe",
    100: "#e3d8fd",
    200: "#cbb6fb",
    300: "#b699fa",
    400: "#a17cf8",
    500: "#895af6",
    600: "#6d34f4",
    700: "#500ced",
    800: "#410ac2",
    900: "#34089b",
    950: "#2e0788",
  },
  yellow: {
    50: "#fef4d7",
    100: "#feefc3",
    200: "#fde290",
    300: "#fdd663",
    400: "#fcc931",
    500: "#fbbd04",
    600: "#ce9b03",
    700: "#a67d03",
    800: "#795b02",
    900: "#503d01",
    950: "#372a01",
  },
}
