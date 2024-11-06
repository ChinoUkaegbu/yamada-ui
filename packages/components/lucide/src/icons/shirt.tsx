import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Shirt as LucideShirtIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ShirtIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShirtIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideShirtIcon} {...props} />
))

/**
 * @deprecated Use `ShirtIcon` instead.
 */
export const Shirt = ShirtIcon
