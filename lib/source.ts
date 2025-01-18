import * as React from "react"
import { icons } from "lucide-react"
import { loader } from "fumadocs-core/source"
import { createMDXSource } from "@fumadocs/content-collections"

import { allDocs, allMetas } from "content-collections"

import { IconContainer } from "@/components/shared/icon-container"

export const source = loader({
	baseUrl: "/docs",
	icon(icon) {
    if (icon && icon in icons)
      return React.createElement(IconContainer, {
        icon: icons[icon as keyof typeof icons],
      })
  },
	source: createMDXSource(allDocs, allMetas),
})
