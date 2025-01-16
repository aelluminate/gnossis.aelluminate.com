import React from "react"
import { Book, LibraryBig } from "lucide-react"
import { HomeLayoutProps } from "fumadocs-ui/layouts/home"

export const baseOptions: HomeLayoutProps = {
  githubUrl: "https://github.com/aelluminate/gnossis",
  nav: {
    title: (
      <>
        <LibraryBig />
        Gnossis
      </>
    ),
  },
  links: [
    {
      icon: <LibraryBig />,
      text: "Lectures",
      url: "/lectures",
      active: "none",
    },
  ],
}
