import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["tr", "en", "es", "fr", "de", "ar"],
  defaultLocale: "tr",
});
