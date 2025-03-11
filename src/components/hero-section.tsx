"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { motion, useInView, useAnimation } from "framer-motion"
import Threads from "@/components/animations/Threads/Threads";
import BlurText from "@/components/animations/BlurText/BlurText";

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
          // ref={ref}
          // initial="hidden"
          // animate={controls}
          // variants={{
          //   hidden: { opacity: 0, y: 50 },
          //   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },

          className="max-w-3xl mx-auto text-center "
        >
          {/*<h1 className="text-4xl md:text-6xl font-bold mb-6">{dictionary.title}</h1>*/}
          <div className={'flex flex-col items-center justify-center'}>
            <BlurText
                text={dictionary.title}
                delay={150}
                animateBy="words"
                direction="bottom"
                // onAnimationComplete={handleAnimationComplete}
                className="text-4xl md:text-6xl font-bold mb-6 text-center"
            />
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">{dictionary.subtitle}</p>
          <Button size="lg" onClick={scrollToProjects} className=" h-12 px-9 transition-transform hover:scale-105">
            {dictionary.cta}
          </Button>
        </div>
      </div>
      <div className={'absolute w-full h-[700px]  z-[150] left-[0%] '}>
        <Threads
          amplitude={1.5}
        />
      </div>
    </section>
  )
}

