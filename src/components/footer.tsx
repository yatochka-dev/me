"use client";

import type React from "react";

import { Link } from "@/i18n/navigation";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { useTranslations } from "next-intl";

const socialLinks = [
  {
    href: "https://github.com/yatochka-dev",
    icon: <Github className="h-5 w-5" />,
    label: "GitHub",
  },
  {
    href: "https://www.instagram.com/sagan.philip?igsh=MXdyNHFsZzZkNTdvZA==",
    icon: <Instagram className="h-5 w-5" />,
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/philip-sagan-896586267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: <Linkedin className="h-5 w-5" />,
    label: "LinkedIn",
  },
  {
    href: "mailto: philip.chef13@gmail.com",
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
  },
];

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="no-print bg-muted/40 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-6 md:mb-0">
            <p className="text-sm text-muted-foreground">{t("copyright")}</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h3 className="mb-4 text-sm font-medium">{t("socialLinks")}</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <SocialLink
                  key={link.label}
                  href={link.href}
                  icon={link.icon}
                  label={link.label}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
      aria-label={label}
    >
      {icon}
    </Link>
  );
}
