import { BrainCircuit, Code, BookMarked } from "lucide-react"
import { IconContainer } from "@/components/shared/icon-container"
import { describe } from "node:test"

export const RootOptions = [
  {
    title: "Computer Science",
    icon: <IconContainer icon={BrainCircuit} />,
    description: "ML, DS, AI, and more.",
    url: "/docs/computer-science",
  },
  {
    title: "Coding",
    icon: <IconContainer icon={Code} />,
    description: "From zero to mastery.",
    url: "/docs/coding",
  },
  {
    title: "Bookmarks",
    icon: <IconContainer icon={BookMarked} />,
    description: "Quick access.",
    url: "/docs/bookmarks",
  },
]
