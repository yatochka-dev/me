"use client"

import { useRef } from "react"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import ScrollReveal from "@/components/animations/ScrollReveal/ScrollReveal"
import DecryptedText from "@/components/animations/DecryptedText/DecryptedText";
import StarBorder from "./animations/StarBorder/StarBorder"

// Remove the import of projectsData and receive it as a prop instead
export default function ProjectsSection({
  dictionary,
  lang,
  projects,
}: {
  dictionary: any
  lang: string
  projects: any[]
}) {
  const containerRef = useRef(null)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {/*<h2 className="text-3xl md:text-4xl font-bold mb-4">{dictionary.title}</h2>*/}
          <DecryptedText
              text={dictionary.title ?? ""}
              animateOn={"view"}
              speed={130}
              maxIterations={20}
              revealDirection={"start"}
              sequential={true}
              // characters="ABCD1234!?"
              className="revealed"
              parentClassName="text-3xl md:text-4xl font-bold mb-4"
              encryptedClassName="encrypted"
          />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{dictionary.description}</p>
        </div>

        <motion.div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} lang={lang} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  lang,
}: {
  project: any
  lang: string
}) {
  const title = project.title[lang] || project.title.en
  const description = project.description[lang] || project.description.en

  return (
    <StarBorder
  as="div"
  className="rounded-lg border bg-card text-card-foreground shadow-sm h-full overflow-hidden transition-all duration-300 hover:shadow-lg"
  color="red"
  speed="5s"
      >

        <div className="aspect-video overflow-hidden">
          <img
            src={project.image || "/placeholder.svg?height=300&width=500"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription className="line-clamp-2">{description}</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button asChild variant="outline" className="w-full group">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <span>View Project</span>
              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </CardFooter>
    </StarBorder>
  )
}

