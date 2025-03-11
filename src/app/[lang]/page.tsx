import { getDictionary } from "@/lib/dictionaries"
import HeroSection from "@/components/hero-section"
import ProjectsSection from "@/components/projects-section"
import FaqSection from "@/components/faq-section"
import { projectsData } from "@/data/projects"

export default async function Home({
  params,
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(params.lang)

  return (
    <div className="container mx-auto px-4">
      <HeroSection dictionary={dict.hero} />
      <ProjectsSection dictionary={dict.projects} lang={params.lang} projects={projectsData} />
      <FaqSection dictionary={dict.faq} />
    </div>
  )
}

