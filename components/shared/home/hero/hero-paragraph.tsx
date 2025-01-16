"use client"

import React, { FC } from "react"
import Link from "next/link"
import { motion } from "motion/react"

import { ArrowUpRight } from "lucide-react"

const HeroParagraph: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(10px)", scale: 0.9 }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
      transition={{ delay: 0.5, type: "spring", damping: 12, stiffness: 100 }}
      exit={{ opacity: 0, y: 20 }}
      className="mx-auto my-6 inline-block h-fit max-w-[50ch] items-center p-2 text-fd-muted-foreground md:text-xl"
    >
      Level up your knowledge. Access a wealth of{" "}
      <span className="font-semibold text-foreground">information</span> and{" "}
      <span className="font-semibold text-foreground">insights</span> shared by the{" "}
      <Link
        href="/guides"
        aria-label="Learn guides"
        className="font-semibold text-foreground underline underline-offset-2"
      >
        team
      </Link>
      . Find solutions, learn new skills, and grow professionally.
    </motion.div>
  )
}
HeroParagraph.displayName = "HeroParagraph"

export default HeroParagraph
