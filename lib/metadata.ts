import { Metadata } from "next"

import { keywords } from "./keywords"

const siteName = "Gnossis"
const siteURL = "https://gnossis.aelluminate.com/"
const description = "Boost your productivity with valuable web development resources and educational guides."

export const metadata: Metadata = {
  title: {
      default: siteName,
      template: "%s | Gnossis",
    },
    keywords: keywords,
    description: description,
    generator: siteName,
    applicationName: siteName,
    openGraph: {
      title: siteName,
      description:
        description,
      url: siteURL,
      siteName: siteName,
      images: [
        {
          url: "https://gnossis.aelluminate.com//banner.png",
          width: 1920,
          height: 1080,
          alt: "Gnossis Open Graph Image",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      }
    },
    twitter: {
      title: siteName,
      card: "summary_large_image",
      site: "@aelluminate",
      creator: "@aelluminate",
      creatorId: "1658936245899370503",
      description:
        description,
      images: [
          {
          url: "https://gnossis.aelluminate.com//banner.png",
          width: 1920,
          height: 1080,
          alt: "Gnossis Twitter Image",
        }
      ],
    },
    icons: {
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
      icon: [
        { url: "/favicon-32x32.png", sizes: "32x32" },
        { url: "/favicon-16x16.png", sizes: "16x16" },
      ],
    },
    alternates: {
      canonical: siteURL,
      languages: {},
    },
    verification: {
      other: {
        me: ["info@aelluminate.com"]
      },
    },  
    appLinks: {
      web: {
        url: siteURL,
        should_fallback: true,
      }
    },
    category: "Education",
}

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: siteURL,
      siteName: siteName,
      images: [
        {
          url: "https://gnossis.aelluminate.com//banner.png",
          width: 1920,
          height: 1080,
          alt: "Gnossis Open Graph Image",
        },
      ],
      ...override.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      site: "@aelluminate",
      creator: "@aelluminate",
      creatorId: "1658936245899370503",
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: [
        {
          url: "https://gnossis.aelluminate.com//banner.png",
          width: 1920,
          height: 1080,
          alt: "Gnossis Twitter Image",
        },
      ],
      ...override.twitter,
    }
  }
}