import "@/assets/globals.css"
import { RootProvider } from "fumadocs-ui/provider"
import type { ReactNode } from "react"

import { Metadata } from "next"
import { geistSans, spaceGroteskMono } from "@/lib/fonts"

export const metadata: Metadata = {
  title: {
    template: "%s | Gnossis",
    default: "Gnossis",
  },
  description: `Boost your productivity with valuable web development resources and educational guides.`,
  openGraph: {
    title: "Gnossis",
    description:
      "Boost your productivity with valuable web development resources and educational guides.",
    url: "https://ca-resources.vercel.app",
    siteName: "Gnossis",
    images: [
      {
        url: "https://ca-resources.vercel.app/banner.png",
        width: 1920,
        height: 1080,
        alt: "Gnossis",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gnossis",
    description:
      "Boost your productivity with valuable web development resources and educational guides.",
    images: ["https://ca-resources.vercel.app/banner.png"],
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={[geistSans.variable, spaceGroteskMono.variable].join(" ")}
    >
      <body className="relative">
        <RootProvider
          search={{
            options: {
              defaultTag: "all",
              tags: [
                {
                  name: "Lectures",
                  value: "lectures",
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

// ʕ•ᴥ•ʔ
