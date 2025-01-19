import Image from "next/image"
import React from "react"

import { HomeLayoutProps } from "fumadocs-ui/layouts/home"
import {
  NotebookPen,
  BookMarked,
  BrainCircuit,
  Hammer,
  LibraryBig,
  Code,
  Atom,
  Info,
} from "lucide-react"

import Preview from "@/public/banner.png"

export const baseOptions: HomeLayoutProps = {
  githubUrl: "https://github.com/aelluminate/gnossis",
  nav: {
    title: <div className="flex pl-2 font-space-grotesk text-2xl">Gnossis</div>,
    enableSearch: true,
  },
  links: [
    {
      type: "menu",
      text: "Developer Notes",
      icon: <NotebookPen />,
      items: [
        {
          menu: {
            banner: (
              <div className="-mx-3 -mt-3">
                <Image
                  src={Preview}
                  alt="Perview"
                  className="rounded-t-lg object-cover"
                  style={{
                    maskImage: "linear-gradient(to bottom,white 60%,transparent)",
                  }}
                />
              </div>
            ),
            className: "md:row-span-3",
          },
          icon: <Info />,
          text: "Learn more about us.",
          description: "Get to know the team behind Gnossis.",
          url: "https://www.linkedin.com/company/aelluminate/",
        },
        {
          icon: <BrainCircuit />,
          text: "Computer Science",
          description:
            "Learn the basics to advance topics of computer science, machine learning, data science, and more.",
          url: "/docs/computer-science",
          menu: {
            className: "lg:col-start-2",
          },
        },
        {
          icon: <Atom />,
          text: "Challenges",
          description: "Solve coding challenges and improve your problem-solving skills.",
          url: "/",
          menu: {
            className: "lg:col-start-2",
          },
        },
        {
          icon: <Code />,
          text: "Coding",
          description: "Learn the basics of programming languages.",
          url: "/docs/coding",
          menu: {
            className: "lg:col-start-2",
          },
        },
        {
          icon: <Hammer />,
          text: "Projects",
          description: "Find projects that you can contribute to.",
          url: "/",
          menu: {
            className: "lg:col-start-3 lg:row-start-1",
          },
        },
        {
          icon: <BookMarked />,
          text: "Bookmarks",
          description: "Quick access resources and tools.",
          url: "/docs/bookmarks",
          menu: {
            className: "lg:col-start-3 lg:row-start-2",
          },
        },
      ],
    },
  ],
}
