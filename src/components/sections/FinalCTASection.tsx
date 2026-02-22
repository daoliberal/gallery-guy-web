"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import AppStoreButton from "@/components/ui/AppStoreButton";
import { APP_STORE_URL } from "@/lib/constants";

export default function FinalCTASection() {
  const t = useTranslations("finalCta");

  return (
    <section
      id="final-cta"
      className="relative overflow-hidden bg-foreground py-24"
    >
      {/* Green radial glow */}
      <div className="absolute inset-0 bg-glow-green opacity-40" />

      <motion.div
        className="relative z-10 mx-auto max-w-2xl px-6 text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {t("heading")}
        </h2>
        <p className="mt-4 text-lg text-white/70">{t("subtext")}</p>
        <div className="mt-10">
          <AppStoreButton href={APP_STORE_URL} variant="outline" />
        </div>
        <p className="mt-6 text-sm font-medium text-white/50">
          {t("badges")}
        </p>
      </motion.div>
    </section>
  );
}
