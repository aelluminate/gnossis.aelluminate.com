import { cn } from "@/lib/utils"
import React, { ReactNode } from "react"

import AnimatedGridPattern from "@/components/ui/animated-grid-pattern"
import { Footer } from "@/components/shared/footer"
import { Plus } from "lucide-react"
import WordReveal from "@/components/ui/word-reveal"
import {
  ActionButton,
  HeroParagraph,
  ResourcesMarquee,
  SectionTitle,
} from "@/components/shared/home"

export default function HomePage() {
  return (
    <>
      <div className="m-4">
        <div className="mt-4 md:mt-10" />
        <Section className="relative flex h-[calc(100vh-10rem)] items-center justify-center p-0">
          <PlusIcon position="-top-3 -right-3" />
          <div className="container z-20 py-10 lg:py-16">
            <div className="mx-auto max-w-5xl text-center">
              <WordReveal
                text="Level up your knowledge."
                className="mb-6 text-5xl font-semibold text-fd-foreground md:text-7xl"
              />
              <HeroParagraph />
              <ActionButton />
            </div>
          </div>
          <div className="absolute z-10 h-full w-full overflow-hidden">
            <AnimatedGridPattern
              numSquares={50}
              maxOpacity={0.1}
              duration={2}
              repeatdelay={1}
              className={cn(
                "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
              )}
            />
          </div>
        </Section>
        <Section className="p-10">
          <PlusIcon position="-top-3 -left-3" />
          <SectionTitle>Our knowledge sources</SectionTitle>
        </Section>
        <Section className="md:py-20">
          <PlusIcon position="-top-3 -right-3" />
          <ResourcesMarquee />
        </Section>
      </div>
      <Footer />
    </>
  )
}

const PlusIcon = ({ position }: { position: string }) => (
  <Plus className={`absolute ${position} size-6 stroke-1 text-muted-foreground`} />
)

const Section = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div
    className={cn(
      "relative mx-auto max-w-6xl border border-b-0 bg-background/80 p-4 md:p-10",
      className,
    )}
  >
    {children}
  </div>
)
