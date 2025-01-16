"use client"

import { Marquee } from "@/components/ui/marquee"
import { motion } from "motion/react"
import CustomCard from "../resources/custom-card"
import { FC } from "react"

const resources = [
  {
    title: "DataCamp",
    description:
      "Learn Data Science & AI from the comfort of your browser, at your own pace with DataCamp's video tutorials & coding challenges on R, Python, Statistics & more.",
    icon: "/resources/companies/datacamp.svg",
    href: "https://www.datacamp.com/",
  },
  {
    title: "Codecademy",
    description:
      "Learn the technical skills to get the job you want. Join over 50 million people choosing Codecademy to start a new career (or advance in their current one).",
    icon: "/resources/companies/codecademy.svg",
    href: "https://www.codecademy.com/",
  },
  {
    title: "LinkedIn Learning",
    description:
      "Accelerate skills & career development for yourself or your team | Business, AI, tech, & creative skills | Find your LinkedIn Learning plan today.",
    icon: "/resources/companies/linkedin.svg",
    href: "https://www.linkedin.com/learning/",
  },
  {
    title: "LeetCode",
    description:
      "The best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.",
    icon: "/resources/companies/leetcode.svg",
    href: "https://leetcode.com/",
  },
  {
    title: "Holy Angel University",
    description:
      "Holy Angel University offers cutting-edge academic programs from Basic Education to Graduate School and has a package of scholarships and grants programs for qualified and deserving applicants. In its 9th decade, HAU continues to provide a remarkable campus experience for every Angelite.",
    icon: "/resources/companies/hau.png",
    href: "https://hau.edu.ph/",
  },
]

const firstRow = resources.slice(0, resources.length / 2)
const secondRow = resources.slice(resources.length / 2)

const ResourcesMarquee: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.25, duration: 0.5, type: "spring", damping: 15, stiffness: 100 }}
      className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-background/80"
    >
      <Marquee pauseOnHover className="[--duration:20s]" aria-label="First row of resource reviews">
        {firstRow.map((resource) => (
          <CustomCard className="max-w-52 md:max-w-sm" key={resource.title} {...resource} />
        ))}
      </Marquee>
      <Marquee
        reverse
        pauseOnHover
        className="[--duration:20s]"
        aria-label="Second row of resource reviews"
      >
        {secondRow.map((resource) => (
          <CustomCard className="max-w-52 md:max-w-sm" key={resource.title} {...resource} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-fd-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-fd-background"></div>
    </motion.div>
  )
}
ResourcesMarquee.displayName = "ResourcesMarquee"

export default ResourcesMarquee
