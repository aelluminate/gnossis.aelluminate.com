import React from "react"
import Link from "next/link"

import { Linkedin, Github } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="mt-10 border-t bg-fd-card py-12 text-fd-secondary-foreground">
      <div className="flex flex-col gap-4 px-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-1 text-sm font-semibold">Gnossis</p>
          <p className="text-xs">All rights reserved. © {new Date().getFullYear()}</p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <Link
            href="https://www.linkedin.com/company/aelluminate/"
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 font-medium underline"
          >
            <Linkedin className="h-5 w-4" />
          </Link>
          <Link
            href="https://github.com/aelluminate"
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 font-medium underline"
          >
            <Github className="h-5 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
