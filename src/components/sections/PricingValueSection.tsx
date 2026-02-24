"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { CreditCard, ShieldCheck, EyeOff } from "lucide-react";
import AppStoreButton from "@/components/ui/AppStoreButton";
import { APP_STORE_URL } from "@/lib/constants";

const values = [
  { key: "oneTime", icon: CreditCard, color: "text-accent", bg: "bg-accent/10" },
  { key: "noAds", icon: ShieldCheck, color: "text-purple", bg: "bg-purple/10" },
  { key: "privacy", icon: EyeOff, color: "text-blue", bg: "bg-blue/10" },
] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function PricingValueSection() {
  const t = useTranslations("pricing");

  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold tracking-widest text-accent">
            {t("label")}
          </span>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t("heading")}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-muted">
            {t("subtext")}
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.key}
                variants={item}
                className="rounded-3xl border border-border bg-white p-8 text-center shadow-sm"
              >
                <div
                  className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${value.bg}`}
                >
                  <Icon className={`h-7 w-7 ${value.color}`} />
                </div>
                <h3 className="font-heading mb-2 text-lg font-bold">
                  {t(`${value.key}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {t(`${value.key}.description`)}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <AppStoreButton href={APP_STORE_URL} />
        </motion.div>
      </div>
    </section>
  );
}
