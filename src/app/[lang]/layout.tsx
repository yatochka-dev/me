import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ClickSpark from "@/components/animations/ClickSpark/ClickSpark";
import { routing, ZLocale } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { getLangDir } from "rtl-detect";

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

  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={`${inter.className} flex min-h-screen flex-col`}
        dir={getLangDir(lang)}
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
              <Navbar lang={lang} />
              <main className="flex-grow">
                {/* Ensure children is always rendered, even if it's null */}
                {children ?? <div>Loading...</div>}
              </main>
              {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
              <Footer />
            </ClickSpark>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
