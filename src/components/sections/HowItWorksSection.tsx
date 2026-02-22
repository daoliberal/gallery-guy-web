"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Download, Scan, Trash2 } from "lucide-react";

const steps = [
  { key: "step1", icon: Download, color: "text-accent", bg: "bg-accent/10", num: "1" },
  { key: "step2", icon: Scan, color: "text-purple", bg: "bg-purple/10", num: "2" },
  { key: "step3", icon: Trash2, color: "text-orange", bg: "bg-orange/10", num: "3" },
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

export default function HowItWorksSection() {
  const t = useTranslations("howItWorks");

  return (
    <section id="how-it-works" className="bg-section py-24">
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
        </motion.div>
        <motion.div
          className="grid gap-6 sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.key}
                variants={item}
                className="rounded-3xl border border-border bg-white p-8 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-sm font-bold text-white">
                  {step.num}
                </div>
                <div
                  className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${step.bg}`}
                >
                  <Icon className={`h-7 w-7 ${step.color}`} />
                </div>
                <h3 className="font-heading mb-2 text-lg font-bold">
                  {t(`${step.key}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {t(`${step.key}.description`)}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
