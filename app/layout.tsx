import { Metadata } from "next"
import type { ReactNode } from "react"

import { RootProvider } from "fumadocs-ui/provider"

import "@/assets/globals.css"
import { geistSans, spaceGroteskMono } from "@/lib/fonts"
import { metadata as SiteData } from "@/lib/metadata"
export const metadata: Metadata = SiteData

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={[geistSans.variable, spaceGroteskMono.variable].join(" ")}
    >
      <body className="relative">
        <RootProvider
          theme={{
            enabled: true,
            defaultTheme: "light",
          }}
          search={{
            options: {
              tags: [
                {
                  name: "Computer Science",
                  value: "computer-science",
                },
                {
                  name: "Coding",
                  value: "coding",
                },
              ],
            },
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  )
}
