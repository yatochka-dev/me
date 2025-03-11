"use client"

import { useState, useEffect } from "react"
import {Link} from "@/i18n/navigation"
import { usePathname } from "@/i18n/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import LanguageSwitcher from "@/components/language-switcher"
import { Menu, X } from "lucide-react"
import {Dictionary} from "@/lib/dictionaries";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"


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
        <div className="flex h-16 items-center justify-between" dir={'ltr'}>
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
            <ModeToggle />
            <LanguageSwitcher currentLang={lang} label={dictionary.languageSwitcher as string} />
          </div>

          {/* Mobile Menu Button */}
          {/*<div className="flex md:hidden">*/}
          <Drawer >
            <DrawerTrigger className={"md:hidden"} asChild>
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={"Toggle menu"} role={"menu"}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              {/*<DrawerHeader>*/}
              {/*  <DrawerTitle>Are you absolutely sure?</DrawerTitle>*/}
              {/*  <DrawerDescription>This action cannot be undone.</DrawerDescription>*/}
              {/*</DrawerHeader>*/}
              {/*<DrawerFooter>*/}
              {/*  <Button>Submit</Button>*/}
              {/*  <DrawerClose>*/}
              {/*    <Button variant="outline">Cancel</Button>*/}
              {/*  </DrawerClose>*/}
              {/*</DrawerFooter>*/}
              <div>
                <nav className="py-20 gap-4 flex flex-col justify-center items-center">
               <div className={' flex-row  space-x-7 '}>
                 <Link href={`/${lang}`} className="text-lg font-medium transition-colors hover:text-primary">
                   {dictionary.home}
                 </Link>
                 <Link href={`/${lang}#projects`} className="text-lg font-medium transition-colors hover:text-primary">
                   {dictionary.projects}
                 </Link>
                 <Link href={`/${lang}#faq`} className="text-lg font-medium transition-colors hover:text-primary">
                   {dictionary.faq}
                 </Link>
               </div>
                  <div className="flex items-center space-x-4 pt-2" dir={'ltr'}>
                    <ModeToggle/>
                    <LanguageSwitcher currentLang={lang} label={dictionary.languageSwitcher as string}/>
                  </div>
                </nav>

              </div>
            </DrawerContent>
          </Drawer>

          {/*</div>*/}

        </div>
      </div>

      {/* Mobile Menu */}
      {/*{isMenuOpen && (*/}

      {/*)}*/}
    </header>
  )
}

