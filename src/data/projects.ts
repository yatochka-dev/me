export interface ProjectData {
  title: Record<"en" | "he" | "ru", string>;
  description: Record<"en" | "he" | "ru", string>;
  image: string;
  link: string;
}

export const projectsData: ProjectData[] = [
  {
    title: {
      en: "E-Commerce Platform",
      he: "פלטפורמת מסחר אלקטרוני",
      ru: "Платформа электронной коммерции",
    },
    description: {
      en: "A modern e-commerce platform built with Next.js and Tailwind CSS, featuring product listings, cart functionality, and checkout.",
      he: "פלטפורמת מסחר אלקטרוני מודרנית שנבנתה עם Next.js ו-Tailwind CSS, הכוללת רשימות מוצרים, פונקציונליות עגלה ותשלום.",
      ru: "Современная платформа электронной коммерции, созданная с использованием Next.js и Tailwind CSS, с листингами продуктов, функциями корзины и оформлением заказа.",
    },
    image: "/placeholder.jpg?height=300&width=500",
    link: "https://example.com/project1",
  },
  {
    title: {
      en: "Portfolio Website",
      he: "אתר פורטפוליו",
      ru: "Сайт-портфолио",
    },
    description: {
      en: "A responsive portfolio website for a photographer, showcasing their work with a beautiful gallery and contact form.",
      he: "אתר פורטפוליו רספונסיבי לצלם, המציג את עבודתם עם גלריה יפה וטופס יצירת קשר.",
      ru: "Адаптивный сайт-портфолио для фотографа, демонстрирующий их работы с красивой галереей и контактной формой.",
    },
    image: "/placeholder.jpg?height=300&width=500",
    link: "https://example.com/project2",
  },
  {
    title: {
      en: "Task Management App",
      he: "אפליקציית ניהול משימות",
      ru: "Приложение для управления задачами",
    },
    description: {
      en: "A task management application with drag-and-drop functionality, user authentication, and real-time updates.",
      he: "אפליקציית ניהול משימות עם פונקציונליות גרור ושחרר, אימות משתמשים ועדכונים בזמן אמת.",
      ru: "Приложение для управления задачами с функцией перетаскивания, аутентификацией пользователей и обновлениями в реальном времени.",
    },
    image: "/placeholder.jpg?height=300&width=500",
    link: "https://example.com/project3",
  },
  {
    title: {
      en: "Blog Platform",
      he: "פלטפורמת בלוג",
      ru: "Блог-платформа",
    },
    description: {
      en: "A full-featured blog platform with markdown support, categories, tags, and a powerful admin dashboard.",
      he: "פלטפורמת בלוג מלאה עם תמיכה ב-markdown, קטגוריות, תגיות ולוח מחוונים מנהל חזק.",
      ru: "Полнофункциональная блог-платформа с поддержкой markdown, категориями, тегами и мощной панелью администратора.",
    },
    image: "/placeholder.jpg?height=300&width=500",
    link: "https://example.com/project4",
  },
  {
    title: {
      en: "Weather Application",
      he: "אפליקציית מזג אוויר",
      ru: "Погодное приложение",
    },
    description: {
      en: "A weather application that provides real-time weather data, forecasts, and beautiful visualizations.",
      he: "אפליקציית מזג אוויר המספקת נתוני מזג אוויר בזמן אמת, תחזיות וויזואליזציות יפות.",
      ru: "Погодное приложение, предоставляющее данные о погоде в реальном времени, прогнозы и красивые визуализации.",
    },
    image: "/placeholder.jpg?height=300&width=500",
    link: "https://example.com/project5",
  },
  {
    title: {
      en: "Fitness Tracker",
      he: "מעקב כושר",
      ru: "Фитнес-трекер",
    },
    description: {
      en: "A fitness tracking application that helps users monitor their workouts, set goals, and track progress over time.",
      he: "אפליקציית מעקב כושר העוזרת למשתמשים לעקוב אחר האימונים שלהם, להגדיר יעדים ולעקוב אחר ההתקדמות לאורך זמן.",
      ru: "Приложение для отслеживания фитнеса, которое помогает пользователям контролировать свои тренировки, ставить цели и отслеживать прогресс с течением времени.",
    },
    image: "/placeholder.jpg?height=300&width=500",
    link: "https://example.com/project6",
  },
];
