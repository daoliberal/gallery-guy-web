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

const meta: Record<
  string,
  { title: string; description: string; ogDescription: string }
> = {
  en: {
    title: "Gallery Guy — Best iPhone Photo Cleaner · No Subscription",
    description:
      "The best way to delete similar photos on iPhone. Smart photo cleaner app — one-time purchase, no subscription. Swipe to compare, pick the best shot, free up storage.",
    ogDescription:
      "Swipe through photos like Tinder — find duplicates, pick the best shot, free up iPhone storage. Best photo cleaner app with no subscription.",
  },
  tr: {
    title: "Gallery Guy — En İyi iPhone Galeri Temizleyici · Aboneliksiz",
    description:
      "iPhone'daki benzer fotoğrafları silmenin en kolay yolu. Akıllı fotoğraf temizleme uygulaması — tek ödeme, abonelik yok. Kaydırarak karşılaştır, en iyisini seç, yer aç.",
    ogDescription:
      "Fotoğraflarınız arasında Tinder gibi kaydırın — kopyaları bulun, en iyisini seçin, yer açın. Aboneliksiz en iyi fotoğraf temizleme uygulaması.",
  },
  es: {
    title: "Gallery Guy — Mejor Limpiador de Fotos para iPhone · Sin Suscripción",
    description:
      "La mejor forma de eliminar fotos similares en iPhone. Limpiador de fotos inteligente — pago único, sin suscripción. Desliza para comparar, elige la mejor foto, libera espacio.",
    ogDescription:
      "Desliza entre tus fotos como en Tinder — encuentra duplicados, elige la mejor toma, libera espacio en tu iPhone. La mejor app limpiadora de fotos sin suscripción.",
  },
  fr: {
    title: "Gallery Guy — Meilleur Nettoyeur de Photos iPhone · Sans Abonnement",
    description:
      "La meilleure façon de supprimer les photos similaires sur iPhone. Nettoyeur de photos intelligent — achat unique, sans abonnement. Balayez pour comparer, gardez la meilleure, libérez de l'espace.",
    ogDescription:
      "Balayez vos photos comme sur Tinder — trouvez les doublons, gardez la meilleure prise, libérez de l'espace sur votre iPhone. Meilleure app de nettoyage photos sans abonnement.",
  },
  de: {
    title: "Gallery Guy — Bester iPhone Foto-Bereiniger · Ohne Abo",
    description:
      "Der beste Weg, ähnliche Fotos auf dem iPhone zu löschen. Intelligenter Foto-Bereiniger — Einmalkauf, kein Abo. Wischen zum Vergleichen, bestes Foto behalten, Speicher freigeben.",
    ogDescription:
      "Wische durch deine Fotos wie bei Tinder — finde Duplikate, wähle das beste Foto, gib iPhone-Speicher frei. Beste Foto-Bereinigungs-App ohne Abo.",
  },
  ar: {
    title: "Gallery Guy — أفضل منظف صور للآيفون · بدون اشتراك",
    description:
      "أفضل طريقة لحذف الصور المتشابهة على الآيفون. تطبيق تنظيف صور ذكي — دفعة واحدة، بدون اشتراك. اسحب للمقارنة، اختر أفضل صورة، وفّر مساحة التخزين.",
    ogDescription:
      "اسحب بين صورك مثل تيندر — اعثر على المكررات، اختر أفضل لقطة، وفّر مساحة الآيفون. أفضل تطبيق تنظيف صور بدون اشتراك.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { title, description, ogDescription } = meta[locale] ?? meta.en;
  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${BASE_URL}/${l}`])
      ),
    },
    openGraph: {
      title,
      description: ogDescription,
      url: `${BASE_URL}/${locale}`,
      siteName: "Gallery Guy",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: ogDescription,
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
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
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
