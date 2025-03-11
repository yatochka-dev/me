// This can be a client component since it doesn't fetch data
"use client"

import type React from "react"

import Link from "next/link"
import { Github, Instagram, Linkedin, Facebook, Mail } from "lucide-react"

export default function Footer({
  dictionary,
}: {
  dictionary: {
    copyright: string
    socialLinks: string
  }
}) {
  return (
    <footer className="bg-muted/40 py-12 no-print">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-sm text-muted-foreground">{dictionary.copyright}</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-sm font-medium mb-4">{dictionary.socialLinks}</h3>
            <div className="flex space-x-4">
              <SocialLink href="https://github.com" icon={<Github className="h-5 w-5" />} label="GitHub" />
              <SocialLink href="https://instagram.com" icon={<Instagram className="h-5 w-5" />} label="Instagram" />
              <SocialLink href="https://linkedin.com" icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
              <SocialLink href="https://facebook.com" icon={<Facebook className="h-5 w-5" />} label="Facebook" />
              <SocialLink href="mailto:example@example.com" icon={<Mail className="h-5 w-5" />} label="Email" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string
  icon: React.ReactNode
  label: string
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
      aria-label={label}
    >
      {icon}
    </Link>
  )
}

