"use client";

import { useRef } from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Dictionary, Language } from "@/lib/dictionaries";
import { ProjectData } from "@/data/projects";
import { LampContainer } from "@/components/ui/lamp"; // Remove the import of projectsData and receive it as a prop instead
import { Spotlight } from "./ui/spotlight-new";
import { useWindowSize } from "@uidotdev/usehooks"; // Remove the import of projectsData and receive it as a prop instead

// Remove the import of projectsData and receive it as a prop instead
export default function ProjectsSection({
  dictionary,
  lang,
  projects,
}: {
  dictionary: Dictionary;
  lang: Language;
  projects: ProjectData[];
}) {
  const containerRef = useRef(null);
  const { width } = useWindowSize();
  return (
    <section id="projects" className="max-md:pt-20pb-20 relative">
      <div className="container mx-auto px-4">
        <LampContainer className={"hidden translate-y-40 md:flex"}>
          <div className="text-center">
            <h1 className="mb-4 text-3xl font-bold md:text-5xl">
              {dictionary.title}
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              {dictionary.description}
            </p>
          </div>
        </LampContainer>
        <div className="py-10 text-center md:hidden">
          <div
            className={
              "absolute inset-0 z-50 h-full max-w-[100vw] overflow-x-clip"
            }
          >
            <Spotlight />
          </div>
          <h1 className="mb-4 text-3xl font-bold md:text-5xl">
            {dictionary.title}
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            {dictionary.description}
          </p>
        </div>

        <motion.div
          ref={containerRef}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
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
  );
}

function ProjectCard({
  project,
  lang,
}: {
  project: ProjectData;
  lang: Language;
}) {
  const title = project.title[lang] || project.title.en;
  const description = project.description[lang] || project.description.en;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="aspect-video overflow-hidden">
          <img
            src={project.image || "/placeholder.svg?height=300&width=500"}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription className="line-clamp-2">
            {description}
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button asChild variant="outline" className="group w-full">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <span>View Project</span>
              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
