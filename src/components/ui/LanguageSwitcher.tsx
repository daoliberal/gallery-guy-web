"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { routing } from "@/i18n/routing";

const LOCALE_LABELS: Record<string, { short: string; full: string }> = {
  tr: { short: "TR", full: "Türkçe" },
  en: { short: "EN", full: "English" },
  es: { short: "ES", full: "Español" },
  fr: { short: "FR", full: "Français" },
  de: { short: "DE", full: "Deutsch" },
  ar: { short: "AR", full: "العربية" },
  it: { short: "IT", full: "Italiano" },
  pt: { short: "PT", full: "Português" },
  ru: { short: "RU", full: "Русский" },
  ko: { short: "KO", full: "한국어" },
  zh: { short: "ZH", full: "中文" },
  hi: { short: "HI", full: "हिन्दी" },
  ja: { short: "JA", full: "日本語" },
  sv: { short: "SV", full: "Svenska" },
  no: { short: "NO", full: "Norsk" },
  nl: { short: "NL", full: "Nederlands" },
  ro: { short: "RO", full: "Română" },
  el: { short: "EL", full: "Ελληνικά" },
  da: { short: "DA", full: "Dansk" },
  bg: { short: "BG", full: "Български" },
  cs: { short: "CS", full: "Čeština" },
  az: { short: "AZ", full: "Azərbaycan" },
  mk: { short: "MK", full: "Македонски" },
  sl: { short: "SL", full: "Slovenščina" },
  pl: { short: "PL", full: "Polski" },
  uk: { short: "UK", full: "Українська" },
  fi: { short: "FI", full: "Suomi" },
  hu: { short: "HU", full: "Magyar" },
  sr: { short: "SR", full: "Srpski" },
  he: { short: "HE", full: "עברית" },
  id: { short: "ID", full: "Bahasa Indonesia" },
  th: { short: "TH", full: "ไทย" },
  vi: { short: "VI", full: "Tiếng Việt" },
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  function switchLocale(newLocale: string) {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
    setOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="glass flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide text-foreground transition-all duration-200 hover:bg-white/80"
      >
        {LOCALE_LABELS[locale]?.short ?? locale.toUpperCase()}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div className="glass absolute right-0 mt-2 max-h-[320px] min-w-[140px] overflow-y-auto rounded-xl border border-border p-1 shadow-lg">
          {[...routing.locales].sort((a, b) => a.localeCompare(b)).map((l) => (
            <button
              key={l}
              onClick={() => switchLocale(l)}
              className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold tracking-wide transition-all duration-150 ${
                l === locale
                  ? "bg-foreground text-white"
                  : "text-muted hover:bg-black/5 hover:text-foreground"
              }`}
            >
              {LOCALE_LABELS[l]?.short ?? l.toUpperCase()}
              <span className="font-normal opacity-70">
                {LOCALE_LABELS[l]?.full ?? l}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
