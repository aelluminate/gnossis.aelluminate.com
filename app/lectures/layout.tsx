import type { ReactNode } from "react"
import { DocsLayout } from "fumadocs-ui/layouts/docs"

import { baseOptions } from "@/app/layout.config"
import { lectures } from "@/lib/source"
import { IconContainer } from "@/components/shared/icon-container"

import { SideBarFooter } from "@/components/shared/sidebar-footer"
import { BookOpen } from "lucide-react"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={lectures.pageTree}
      {...baseOptions}
      sidebar={{
        prefetch: true,
        collapsible: true,
        tabs: [
          {
            title: "Lectures",
            url: "/lectures",
            icon: <IconContainer icon={BookOpen} />,
            description: "All the lectures",
          },
        ],
        footer: <SideBarFooter />,
      }}
    >
      {children}
    </DocsLayout>
  )
}
