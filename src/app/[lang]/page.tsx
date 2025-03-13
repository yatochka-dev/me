import { getDictionary, type Language } from "@/lib/dictionaries";
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
  const dict = await getDictionary(lang);

  return (
    <div className="container mx-auto px-4">
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
      <HeroSection dictionary={dict.hero} />
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
      <ProjectsSection
        dictionary={dict.projects}
        lang={lang}
        projects={projectsData}
      />
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
      <FaqSection dictionary={dict.faq} />
    </div>
  );
}
