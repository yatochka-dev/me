"use client";

import { useMemo, useRef } from "react";
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
import { type Language } from "@/lib/dictionaries";
import { type ProjectData } from "@/data/projects";
import { useWindowSize } from "@uidotdev/usehooks";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl"; // Remove the import of projectsData and receive it as a prop instead

const LazyLamp = dynamic(
  () => import("@/components/ui/lamp").then((mod) => mod.LampContainer),
  { ssr: false },
);

const LazySpotlight = dynamic(
  () => import("./ui/spotlight-new").then((mod) => mod.Spotlight),
  { ssr: false },
);

// Remove the import of projectsData and receive it as a prop instead
export default function ProjectsSection({
  lang,
  projects,
}: {
  lang: Language;
  projects: ProjectData[];
}) {
  const containerRef = useRef(null);
  const { width } = useWindowSize();
  const lamp = useMemo(() => {
    if (!width) return false;
    return width > 768;
  }, [width]);
  const t = useTranslations("projects");
  return (
    <section id="projects" className="relative pb-20 max-md:pt-20">
      <div className="container mx-auto px-4">
        {lamp ? (
          <LazyLamp className={"hidden translate-y-40 md:flex"}>
            <div className="text-center">
              <h1 className="mb-4 text-3xl font-bold md:text-5xl">
                {t("title")}
              </h1>
              <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
                {t("description")}
              </p>
            </div>
          </LazyLamp>
        ) : (
          <div className="py-10 text-center md:hidden">
            <div
              className={
                "absolute inset-0 z-50 h-full max-w-[100vw] overflow-x-clip"
              }
            >
              <LazySpotlight />
            </div>
            <h1 className="mb-4 text-3xl font-bold md:text-5xl">
              {t("title")}
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              {t("description")}
            </p>
          </div>
        )}

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
        <div className="relative aspect-video overflow-hidden">
          <Image
            fill
            src={project.image ?? "/placeholder.svg?height=300&width=500"}
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
