"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useAnimation, useInView } from "framer-motion";
import BlurText from "@/components/animations/BlurText/BlurText";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

const LazyThreads = dynamic(
  () => import("@/components/animations/Threads/Threads"),
  { ssr: false },
);

// Accept dictionary as a prop, don't import it
export default function HeroSection() {
  const t = useTranslations("hero");

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { resolvedTheme } = useTheme();
  useEffect(() => {
    if (isInView) {
      void controls.start("visible");
    }
  }, [controls, isInView]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen py-20 max-md:mt-10 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/*<h1 className="text-4xl md:text-6xl font-bold mb-6">{dictionary.title}</h1>*/}
          <div className={"flex flex-col items-center justify-center"}>
            <BlurText
              text={t("title")}
              delay={150}
              animateBy="words"
              direction="top"
              // onAnimationComplete={handleAnimationComplete}
              className="mb-6 text-center text-4xl font-bold md:text-7xl"
            />
          </div>
          {/*<p className="text-xl md:text-2xl text-muted-foreground mb-8">{dictionary.subtitle}</p>*/}
          <div
            className={"flex flex-col items-center justify-center text-center"}
          >
            <BlurText
              text={t("subtitle")}
              delay={120}
              animateBy="words"
              direction="bottom"
              // onAnimationComplete={handleAnimationComplete}
              className="mb-8 flex items-center justify-center text-center text-xl text-muted-foreground md:text-3xl"
            />
          </div>
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="mt-6 h-12 px-9 transition-transform hover:scale-105"
          >
            {t("cta")}
          </Button>
        </div>
      </div>
      <div
        className={
          "absolute left-[0%] h-[400px] w-full max-md:top-[10%] md:h-[700px]"
        }
      >
        <LazyThreads
          color={resolvedTheme === "light" ? [0, 0, 0] : [255, 255, 255]}
          amplitude={1.5}
          distance={0.1}
        />
      </div>
    </section>
  );
}
