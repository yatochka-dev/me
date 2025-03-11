"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import LanguageSwitcher from "@/components/language-switcher"
import { Menu, X } from "lucide-react"
import {Dictionary} from "@/lib/dictionaries";

export default function Navbar({
  lang,
  dictionary,
}: {
  lang: string
  dictionary: Dictionary
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu when path changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 no-print ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href={`/${lang}`} className="text-xl font-bold transition-colors hover:text-primary">
              Yatochka
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href={`/${lang}`} className="text-sm font-medium transition-colors hover:text-primary ml-6">
              {dictionary.home}
            </Link>
            <Link href={`/${lang}#projects`} className="text-sm font-medium transition-colors hover:text-primary">
              {dictionary.projects}
            </Link>
            <Link href={`/${lang}#faq`} className="text-sm font-medium transition-colors hover:text-primary">
              {dictionary.faq}
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher currentLang={lang} label={dictionary.languageSwitcher as string} />
            <ModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container mx-auto px-4 py-4 bg-background border-t">
            <nav className="flex flex-col space-y-4">
              <Link href={`/${lang}`} className="text-sm font-medium transition-colors hover:text-primary">
                {dictionary.home}
              </Link>
              <Link href={`/${lang}#projects`} className="text-sm font-medium transition-colors hover:text-primary">
                {dictionary.projects}
              </Link>
              <Link href={`/${lang}#faq`} className="text-sm font-medium transition-colors hover:text-primary">
                {dictionary.faq}
              </Link>
              <div className="flex items-center space-x-4 pt-2">
                <LanguageSwitcher currentLang={lang} label={dictionary.languageSwitcher as string} />
                <ModeToggle />
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

