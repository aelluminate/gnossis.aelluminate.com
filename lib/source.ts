import * as React from "react"
import { icons } from "lucide-react"
import { loader } from "fumadocs-core/source"
import { createMDXSource } from "@fumadocs/content-collections"
import { attachFile } from 'fumadocs-openapi/server';

import { allComputerScienceMetas, allCodingMetas, allComputerSciences, allCodings } from "content-collections"

import { IconContainer } from "@/components/shared/icon-container"

export const computerScience = loader({
	baseUrl: "/computer-science",
	icon(icon) {
    if (icon && icon in icons)
      return React.createElement(IconContainer, {
        icon: icons[icon as keyof typeof icons],
      })
  },
	source: createMDXSource(allComputerSciences, allComputerScienceMetas),
})

export const coding = loader({
  baseUrl: "/coding",
  icon(icon) {
    if (icon && icon in icons)
      return React.createElement(IconContainer, {
        icon: icons[icon as keyof typeof icons],
      })
  },
  source: createMDXSource(allCodings, allCodingMetas),
  pageTree: {
    attachFile,
  }
})