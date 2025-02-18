import type { LucideIcon } from "lucide-react"
import { TerminalIcon } from "lucide-react"
import { type HTMLAttributes } from "react"

import { cn } from "@/lib/utils"

export function IconContainer({
  icon: Icon,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  icon?: LucideIcon
}): React.ReactElement {
  return (
    <div
      {...props}
      className={cn(
        "rounded-md border bg-gradient-to-b from-fd-secondary p-0.5 shadow-sm",
        props.className,
      )}
    >
      {Icon ? <Icon /> : <TerminalIcon />}
    </div>
  )
}
