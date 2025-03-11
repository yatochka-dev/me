import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { getDictionary } from "@/lib/dictionaries"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "he" }, { lang: "ru" }]
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const {lang} = await params
  // Add error handling for the dictionary fetch
  let dictionary
  try {
    dictionary = await getDictionary(lang);
  } catch (error) {
    console.error("Error loading dictionary:", error)
    // Fallback to a basic structure if dictionary fails to load
    dictionary = {
      navigation: {
        home: "Home",
        projects: "Projects",
        faq: "FAQ",
        languageSwitcher: "Change language",
      },
      footer: {
        copyright: "© 2025 Portfolio. All rights reserved.",
        socialLinks: "Connect with me",
      },
    }
  }

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
          <Navbar lang={lang} dictionary={dictionary.navigation} />
          <main className="flex-grow">
            {/* Ensure children is always rendered, even if it's null */}
            {children ?? <div>Loading...</div>}
          </main>
          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
          <Footer dictionary={dictionary.footer} />
        </ThemeProvider>
      </body>
    </html>
  )
}

