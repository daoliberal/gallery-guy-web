import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const BASE_URL = "https://gallery-guy-web.vercel.app";

const meta: Record<string, { title: string; description: string }> = {
  en: {
    title: "Gallery Guy — Best iPhone Photo Cleaner · No Subscription",
    description:
      "The best way to delete similar photos on iPhone. AI-powered gallery cleaner — one-time purchase, no subscription. Swipe to compare, pick the best shot, free up storage.",
  },
  tr: {
    title: "Gallery Guy — En İyi iPhone Galeri Temizleyici · Aboneliksiz",
    description:
      "iPhone'daki benzer fotoğrafları silmenin en kolay yolu. AI destekli galeri temizleyici — tek ödeme, abonelik yok. Kaydırarak karşılaştır, en iyisini seç, yer aç.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { title, description } = meta[locale] ?? meta.en;
  const altLocale = locale === "tr" ? "en" : "tr";

  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        [locale]: `${BASE_URL}/${locale}`,
        [altLocale]: `${BASE_URL}/${altLocale}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}`,
      siteName: "Gallery Guy",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "tr" | "en")) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${inter.variable} ${bricolage.variable} font-sans antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
