export interface ProjectData {
  title: Record<"en" | "he" | "ru", string>;
  description: Record<"en" | "he" | "ru", string>;
  image: string;
  link: string;
}

export const projectsData: ProjectData[] = [
  {
    title: {
      en: "Linker",
      he: "לינקר",
      ru: "Линкер",
    },
    description: {
      en: "Linker is a simple and modern solution for sharing multiple links at once.",
      he: "לינקר הוא פתרון פשוט ומודרני לשיתוף מספר קישורים בבת אחת.",
      ru: "Линкер — это простое и современное решение для одновременного обмена несколькими ссылками.",
    },
    image: "/projects/linker.png",
    link: "https://l.yatochka.dev/",
  },

  {
    title: {
      en: "Keyvaro Promo Site",
      he: "Keyvaro Promo Site",
      ru: "Keyvaro Promo Site",
    },
    description: {
      en: "A responsive promo website company I work at, showcasing what we do and letting businesses/consumers enter our waitlist.",
      he: "אתר פרומו של חברתי מתכננות שלי, שמציג  מה אנחנו מציעים ומאפשר לחברות/בני עבודה להכנס לרשימת ההכרזה שלנו.",
      ru: "Адаптивный рекламный сайт компании, в которой я работаю, демонстрирующий нашу деятельность и позволяющий компаниям/потребителям попасть в наш лист ожидания.",
    },
    image: "/projects/keyvaro.png",
    link: "https://keyvaro.com/",
  },
  // {
  //   title: {
  //     en: "Task Management App",
  //     he: "אפליקציית ניהול משימות",
  //     ru: "Приложение для управления задачами",
  //   },
  //   description: {
  //     en: "A task management application with drag-and-drop functionality, user authentication, and real-time updates.",
  //     he: "אפליקציית ניהול משימות עם פונקציונליות גרור ושחרר, אימות משתמשים ועדכונים בזמן אמת.",
  //     ru: "Приложение для управления задачами с функцией перетаскивания, аутентификацией пользователей и обновлениями в реальном времени.",
  //   },
  //   image: "/placeholder.jpg?height=300&width=500",
  //   link: "https://example.com/project3",
  // },
  {
    title: {
      en: "Universe (Student Association)",
      he: "Universe (חברה סטודנטית)",
      ru: "Universe (Студенческая организация)",
    },
    description: {
      en: "Website for a student led organization, providing high schoolers with a platform to connect with their peers and learn about their community.",
      he: "אתר לחברה של סטודנטים, שמציג לחברות בשנה קבועה ומציגה את סביבת החברה.",
      ru: "Сайт организации, которая предоставляет студентам платформу для связи с коллегами и изучения их сообщества.",
    },
    image: "/universe.png",
    link: "https://universe-gamma-three.vercel.app/",
  },

];
