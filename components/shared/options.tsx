import { BrainCircuit, Code } from "lucide-react"
import { IconContainer } from "@/components/shared/icon-container"

export const RootOptions = [
  {
    title: "Computer Science",
    icon: <IconContainer icon={BrainCircuit} />,
    description: "ML, DS, AI, and more.",
    url: "/computer-science",
  },
  {
    title: "Coding",
    icon: <IconContainer icon={Code} />,
    description: "From zero to mastery.",
    url: "/coding",
  },
]
