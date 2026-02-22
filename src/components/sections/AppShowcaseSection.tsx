"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Zap, Copy, Image, HardDrive, EyeOff } from "lucide-react";
import NextImage from "next/image";
import type { LucideIcon } from "lucide-react";

interface ShowcaseItem {
  key: string;
  icon: LucideIcon;
  color: string;
  bg: string;
  glowClass: string;
  screenshotKey: string | null;
}

const showcaseItems: ShowcaseItem[] = [
  {
    key: "smartMaintenance",
    icon: Zap,
    color: "text-purple",
    bg: "bg-purple/10",
    glowClass: "showcase-purple",
    screenshotKey: "swipe",
  },
  {
    key: "similarPhotos",
    icon: Copy,
    color: "text-orange",
    bg: "bg-orange/10",
    glowClass: "showcase-orange",
    screenshotKey: null,
  },
  {
    key: "screenshots",
    icon: Image,
    color: "text-blue",
    bg: "bg-blue/10",
    glowClass: "showcase-blue",
    screenshotKey: null,
  },
  {
    key: "largeVideos",
    icon: HardDrive,
    color: "text-accent",
    bg: "bg-accent/10",
    glowClass: "showcase-green",
    screenshotKey: null,
  },
  {
    key: "hidePhotos",
    icon: EyeOff,
    color: "text-pink",
    bg: "bg-pink/10",
    glowClass: "showcase-pink",
    screenshotKey: null,
  },
];

export default function AppShowcaseSection() {
  const t = useTranslations("showcase");
  const locale = useLocale();

  return (
    <section id="showcase" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="mb-16 text-center"
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

        <div className="flex flex-col gap-16">
          {showcaseItems.map((item, i) => {
            const Icon = item.icon;
            const isReversed = i % 2 === 1;
            const screenshotSrc = item.screenshotKey
              ? `/screenshots/${item.screenshotKey}-${locale}.jpeg`
              : null;

            return (
              <motion.div
                key={item.key}
                className={`showcase-wrapper ${item.glowClass}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <div
                  className={`relative z-10 flex flex-col items-center gap-10 lg:flex-row lg:gap-16 ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Phone Mockup — outside the card */}
                  <div className="shrink-0">
                    <div className="relative h-[440px] w-[210px] overflow-hidden rounded-[2.5rem] border-[5px] border-gray-900 bg-gray-900 shadow-2xl sm:h-[500px] sm:w-[240px]">
                      <div className="relative">
                        <div className="absolute top-0 left-1/2 z-10 h-5 w-20 -translate-x-1/2 rounded-b-xl bg-gray-900" />
                      </div>
                      {screenshotSrc ? (
                        <NextImage
                          src={screenshotSrc}
                          alt={t(`${item.key}.title`)}
                          width={240}
                          height={500}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="h-full w-full bg-white" />
                      )}
                    </div>
                  </div>

                  {/* Glass card — text only */}
                  <div className="showcase-glass relative z-10 flex-1 rounded-[2rem] p-8 shadow-lg shadow-black/4 transition-shadow duration-500 hover:shadow-xl hover:shadow-black/8 sm:p-12">
                    <div className="relative z-10 text-center lg:text-left">
                      <div
                        className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${item.bg} backdrop-blur-sm`}
                      >
                        <Icon className={`h-6 w-6 ${item.color}`} />
                      </div>
                      <h3 className="font-heading mb-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
                        {t(`${item.key}.title`)}
                      </h3>
                      <p className="mb-6 max-w-md text-lg leading-relaxed text-muted">
                        {t(`${item.key}.description`)}
                      </p>
                      <ul className="space-y-3">
                        {[1, 2, 3].map((n) => (
                          <li
                            key={n}
                            className="flex items-start gap-3 text-left text-sm text-muted"
                          >
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                              ✓
                            </span>
                            {t(`${item.key}.bullet${n}`)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
