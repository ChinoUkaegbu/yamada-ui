import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CircleUserRound as LucideCircleUserRoundIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CircleUserRoundIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleUserRoundIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCircleUserRoundIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CircleUserRoundIcon` instead.
 */
export const CircleUserRound = CircleUserRoundIcon
