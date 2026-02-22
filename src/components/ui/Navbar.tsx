"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";

const navLinks = ["features", "howItWorks", "about"] as const;
const sectionIds: Record<string, string> = {
  features: "showcase",
  howItWorks: "how-it-works",
  about: "final-cta",
};

export default function Navbar() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "glass-strong shadow-lg shadow-black/4"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2.5">
          <Image
            src="/gg-green.png"
            alt="Gallery Guy"
            width={32}
            height={32}
            className="h-8 w-8 rounded-lg"
          />
          <span className="text-lg font-bold tracking-tight">
            {t("appName")}
          </span>
        </a>
        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((key) => (
              <a
                key={key}
                href={`#${sectionIds[key]}`}
                className="text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                {t(key)}
              </a>
            ))}
          </div>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}
