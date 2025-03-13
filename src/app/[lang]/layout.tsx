import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Dictionary, getDictionary } from "@/lib/dictionaries";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ClickSpark from "@/components/animations/ClickSpark/ClickSpark";
import { routing, ZLocale } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "he" }, { lang: "ru" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!routing.locales.includes(ZLocale.parse(lang))) {
    notFound();
  }

  const messages = await getMessages();

  // Add error handling for the dictionary fetch
  let dictionary: Dictionary;
  try {
    dictionary = await getDictionary(lang);
  } catch (error) {
    console.error("Error loading dictionary:", error);
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
    };
  }

  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={`${inter.className} flex min-h-screen flex-col`}
        dir={lang === "he" ? "rtl" : "ltr"}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
            <ClickSpark>
              {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
              <Navbar lang={lang} dictionary={dictionary.navigation} />
              <main className="flex-grow">
                {/* Ensure children is always rendered, even if it's null */}
                {children ?? <div>Loading...</div>}
              </main>
              {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
              <Footer dictionary={dictionary.footer} />
            </ClickSpark>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
