"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { motion, useInView, useAnimation } from "framer-motion"
import Threads from "@/components/animations/Threads/Threads";
import BlurText from "@/components/animations/BlurText/BlurText";
import {useTheme} from "next-themes";

// Accept dictionary as a prop, don't import it
export default function HeroSection({
  dictionary,
}: {
  dictionary: {
    title: string
    subtitle: string
    cta: string
  }
}) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const {resolvedTheme} = useTheme();
  useEffect(() => {
    if (isInView) {
      void controls.start("visible")
    }
  }, [controls, isInView])

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 min-h-screen md:py-32">
      <div className="container mx-auto px-4">
        <div

          className="max-w-4xl mx-auto text-center "
        >
          {/*<h1 className="text-4xl md:text-6xl font-bold mb-6">{dictionary.title}</h1>*/}
          <div className={'flex flex-col items-center justify-center'}>
            <BlurText
                text={dictionary.title}
                delay={150}
                animateBy="words"
                direction="top"
                // onAnimationComplete={handleAnimationComplete}
                className="text-4xl md:text-7xl font-bold mb-6 text-center"
            />
          </div>
          {/*<p className="text-xl md:text-2xl text-muted-foreground mb-8">{dictionary.subtitle}</p>*/}
          <div className={"flex flex-col items-center justify-center text-center"}>
            <BlurText
                text={dictionary.subtitle}
                delay={120}
                animateBy="words"
                direction="bottom"
                // onAnimationComplete={handleAnimationComplete}
                className="text-xl md:text-3xl text-muted-foreground mb-8 text-center flex items-center justify-center"
            />
          </div>
          <Button size="lg" onClick={scrollToProjects} className=" h-12 px-9 transition-transform hover:scale-105">
            {dictionary.cta}
          </Button>
        </div>
      </div>
      <div className={'absolute w-full h-[700px]  z-[150] left-[0%] '}>
        <Threads
            color={resolvedTheme === "light" ? [0, 0, 0] : [1, 1, 1]}
          amplitude={1.5}
            distance={0.1}
        />
      </div>
    </section>
  )
}

