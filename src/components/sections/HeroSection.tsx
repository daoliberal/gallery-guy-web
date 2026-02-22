"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import NextImage from "next/image";
import AppStoreButton from "@/components/ui/AppStoreButton";
import { APP_STORE_URL } from "@/lib/constants";

export default function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();

  const screenshots: (string | null)[] = [
    `/screenshots/swipe-${locale}.jpeg`,
    null,
    null,
    null,
    null,
  ];

  return (
    <section className="hero-mesh relative pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {t("badge")}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-heading mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t("tagline").split("\n").map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {i === 1 ? (
                <span className="text-gradient">{line}</span>
              ) : (
                line
              )}
            </span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t("subtagline")}
        </motion.p>

        {/* CTA Row */}
        <motion.div
          className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col items-center gap-2">
            <AppStoreButton href={APP_STORE_URL} />
            <span className="text-xs font-medium text-muted">
              {t("rating")}
            </span>
          </div>

          {/* QR Code Card */}
          <div className="hidden items-center gap-4 rounded-2xl border border-border bg-white p-4 shadow-sm sm:flex">
            <QRCodeSVG
              value={APP_STORE_URL}
              size={72}
              bgColor="transparent"
              fgColor="#1A1918"
              level="M"
            />
            <div className="text-left">
              <p className="text-sm font-medium text-foreground">
                {t("qrLabel")}
              </p>
              <p className="text-xs text-muted">{t("qrSublabel")}</p>
            </div>
          </div>
        </motion.div>

        {/* Phone Mockups */}
        <motion.div
          className="scrollbar-hide mt-16 flex gap-5 overflow-x-auto px-2 pb-4 snap-x snap-mandatory md:justify-center md:overflow-x-visible"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {[1, 2, 3, 4, 5].map((num, i) => (
            <div key={num} className="flex-shrink-0 snap-center">
              <div className="h-[400px] w-[192px] overflow-hidden rounded-[2.2rem] border-[5px] border-gray-900 bg-gray-900 shadow-xl transition-transform duration-300 hover:-translate-y-2 sm:h-[460px] sm:w-[220px]">
                <div className="relative">
                  <div className="absolute top-0 left-1/2 z-10 h-5 w-20 -translate-x-1/2 rounded-b-xl bg-gray-900" />
                </div>
                {screenshots[i] ? (
                  <NextImage
                    src={screenshots[i]}
                    alt={`Screenshot ${num}`}
                    width={220}
                    height={460}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-white" />
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
