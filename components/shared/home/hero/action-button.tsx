"use client"
import React, { FC } from "react"
import { motion } from "motion/react"
import Link from "next/link"
import { GithubIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

const ActionButton: FC = () => {
  return (
    <div className="relative z-10 mt-8 flex justify-center gap-3">
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(10px)", scale: 0.9 }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
        transition={{ delay: 0.75, type: "spring", damping: 12, stiffness: 100 }}
        exit={{ opacity: 0, y: 20 }}
      >
        <Button size="lg" asChild>
          <Link
            href="https://github.com/aelluminate/gnossis.aelluminate.com/issues"
            aria-label="Wanna Contribute?"
            className="flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="h-5 w-5" />
            Wanna Contribute?
          </Link>
        </Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(10px)", scale: 0.9 }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
        transition={{ delay: 1, type: "spring", damping: 12, stiffness: 100 }}
        exit={{ opacity: 0, y: 20 }}
      >
        <Button variant="outline" size="lg" asChild>
          <Link
            href="https://www.linkedin.com/company/aelluminate/"
            aria-label="Be part of the team"
            target="_blank"
            rel="noopener noreferrer"
          >
            Be part of the team!
          </Link>
        </Button>
      </motion.div>
    </div>
  )
}
ActionButton.displayName = "ActionButton"

export default ActionButton
