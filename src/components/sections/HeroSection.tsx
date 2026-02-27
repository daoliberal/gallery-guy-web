"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import NextImage from "next/image";
import AppStoreButton from "@/components/ui/AppStoreButton";
import { APP_STORE_URL } from "@/lib/constants";

const ROTATING_COUNT = 5;
const ROTATE_INTERVAL = 3000;
const ROTATING_COLORS = [
  "text-purple",   // culls like a pro
  "text-orange",   // spots duplicates
  "text-blue",     // swipe game
  "text-accent",   // frees storage
  "text-pink",     // hides privates
];

export default function HeroSection() {
  const t = useTranslations("hero");
  const [rotatingIndex, setRotatingIndex] = useState(0);
  const [qrExpanded, setQrExpanded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingIndex((prev) => (prev + 1) % ROTATING_COUNT);
    }, ROTATE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const heroSlots: { type: "video" | "image" | "empty"; src?: string }[] = [
    { type: "video", src: "/videos/swipe-web.mp4" },
    { type: "video", src: "/videos/smilar-web.mp4" },
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
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="shrink-0">
              <path d="M12.152 8.374c-.02-1.89 1.546-2.804 1.617-2.848-.883-1.29-2.254-1.467-2.74-1.484-1.155-.121-2.27.692-2.86.692-.6 0-1.512-.68-2.49-.661-1.268.02-2.454.752-3.106 1.892-1.34 2.32-.342 5.737.944 7.615.64.92 1.39 1.95 2.374 1.914.962-.04 1.322-.618 2.484-.618 1.154 0 1.483.618 2.482.596.03 0 .058 0 .088-.002.968-.022 1.613-.93 2.234-1.856.718-1.048 1.006-2.082 1.02-2.136-.023-.008-1.942-.742-1.962-2.958l-.085.854zM10.334 2.754c.51-.636.862-1.5.764-2.378-.742.032-1.664.512-2.194 1.134-.47.55-.89 1.448-.782 2.296.836.064 1.694-.428 2.212-1.052z" />
            </svg>
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
          {t("taglineStatic")}
          <br />
          <span className="inline-block min-h-[1.2em] perspective-[600px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={rotatingIndex}
                className={`${ROTATING_COLORS[rotatingIndex]} inline-block origin-bottom`}
                initial={{ rotateX: -90, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                exit={{ rotateX: 90, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {t(`rotating${rotatingIndex}`)}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        {/* Subtitle + Explore */}
        <motion.div
          className="mx-auto mt-6 flex max-w-xl flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg leading-relaxed text-muted">
            {t("subtagline")}
          </p>
          <button
            onClick={() => document.getElementById("showcase")?.scrollIntoView({ behavior: "smooth" })}
            className="group inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-5 py-2.5 text-base font-semibold text-accent transition-all hover:bg-accent/20 hover:shadow-sm"
          >
            {t("explore")}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transition-transform group-hover:translate-y-0.5">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-10 flex justify-center"
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
        </motion.div>

        {/* Phone Mockups */}
        <motion.div
          className="scrollbar-hide mt-16 flex gap-5 overflow-x-auto px-2 pb-4 snap-x snap-mandatory md:justify-center md:overflow-x-visible"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {heroSlots.map((slot, i) => (
            <div key={i} className="flex-shrink-0 snap-center">
              <div className="relative h-[400px] w-[192px] overflow-hidden rounded-[2.2rem] border-[5px] border-gray-900 bg-gray-900 shadow-xl transition-transform duration-300 hover:-translate-y-2 sm:h-[460px] sm:w-[220px]">
                {/* Dynamic Island */}
                <div className="absolute top-[6px] left-1/2 z-10 h-[16px] w-[76px] -translate-x-1/2 rounded-full bg-black sm:top-[7px] sm:h-[18px] sm:w-[86px]" />
                {slot.type === "video" && slot.src ? (
                  <video
                    src={slot.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover object-top"
                  />
                ) : slot.type === "image" && slot.src ? (
                  <NextImage
                    src={slot.src!}
                    alt={`Screenshot ${i + 1}`}
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

      {/* QR Code — fixed bottom bar */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-40 hidden border-t border-border bg-white/90 backdrop-blur-md lg:block"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20, delay: 1.5 }}
      >
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-4">
            <div className="relative">
              <motion.div
                animate={{ width: qrExpanded ? 160 : 48, height: qrExpanded ? 160 : 48 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <QRCodeSVG
                  value={APP_STORE_URL}
                  size={qrExpanded ? 160 : 48}
                  bgColor="transparent"
                  fgColor="#1A1918"
                  level="M"
                />
              </motion.div>
              <button
                onClick={() => setQrExpanded(!qrExpanded)}
                className="absolute -top-3 -right-3 flex h-7 w-7 items-center justify-center rounded-full border border-border bg-white shadow-sm transition-colors hover:bg-gray-50"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className={`text-muted transition-transform duration-300 ${qrExpanded ? "rotate-180" : ""}`}
                >
                  {qrExpanded ? (
                    <path d="M9 5L5 5L5 9M5 5L9.5 9.5M5 9L9 9L9 5M9 9L4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  ) : (
                    <path d="M1 5L1 1L5 1M1 1L5 5M13 9L13 13L9 13M13 13L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  )}
                </svg>
              </button>
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-foreground">
                {t("qrLabel")}
              </p>
              <p className="text-xs text-muted">{t("qrSublabel")}</p>
            </div>
          </div>
          <AppStoreButton href={APP_STORE_URL} />
        </div>
      </motion.div>
    </section>
  );
}
