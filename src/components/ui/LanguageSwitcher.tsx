"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale: string) {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  }

  return (
    <div className="glass flex items-center gap-0.5 rounded-full p-1">
      <button
        onClick={() => switchLocale("tr")}
        className={`rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 ${
          locale === "tr"
            ? "bg-foreground text-white shadow-md"
            : "text-muted hover:text-foreground"
        }`}
      >
        TR
      </button>
      <button
        onClick={() => switchLocale("en")}
        className={`rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 ${
          locale === "en"
            ? "bg-foreground text-white shadow-md"
            : "text-muted hover:text-foreground"
        }`}
      >
        EN
      </button>
    </div>
  );
}
