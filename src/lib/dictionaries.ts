// Simplified dictionary loading without server-only
const dictionaries: Record<string, () => Promise<any>> = {
  en: () => import("../dictionaries/en.json").then((module) => module.default),
  he: () => import("../dictionaries/he.json").then((module) => module.default),
  ru: () => import("../dictionaries/ru.json").then((module) => module.default),
}


type Dictionary = Record<string, any>

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  // Add error handling and fallback
  try {
    if (!locale || !dictionaries[locale]) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      return dictionaries.en() as Promise<Dictionary>
    }
    return dictionaries[locale]() as Promise<Dictionary>
  } catch (error) {
    console.error(`Error loading dictionary for locale ${locale}:`, error)
    // Return a minimal dictionary as fallback
    return {
      navigation: {
        home: "Home",
        projects: "Projects",
        faq: "FAQ",
        languageSwitcher: "Change language",
      },
      hero: {
        title: "Hello, I'm a Developer",
        subtitle: "Building beautiful and functional web experiences",
        cta: "View My Work",
      },
      projects: {
        title: "My Projects",
        description: "Here are some of the projects I've worked on",
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [],
      },
      footer: {
        copyright: "© 2025 Portfolio. All rights reserved.",
        socialLinks: "Connect with me",
      },
    }
  }
}

