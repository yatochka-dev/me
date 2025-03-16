import { type Language } from "@/lib/dictionaries";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import FaqSection from "@/components/faq-section";
import { projectsData } from "@/data/projects";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;

  return (
    <div className="mx-auto">
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
      <HeroSection />
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
      <ProjectsSection lang={lang} projects={projectsData} />
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
      <FaqSection />
    </div>
  );
}
