import { getTranslations } from "next-intl/server";
import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AppShowcaseSection from "@/components/sections/AppShowcaseSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import PricingValueSection from "@/components/sections/PricingValueSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import Footer from "@/components/sections/Footer";
import { APP_STORE_URL } from "@/lib/constants";

export default async function HomePage() {
  const t = await getTranslations("faq");

  const faqCount = 15;
  const faqItems = Array.from({ length: faqCount }, (_, i) => ({
    question: t(`q${i + 1}`),
    answer: t(`a${i + 1}`),
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Gallery Guy",
        operatingSystem: "iOS",
        applicationCategory: "PhotographyApplication",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          ratingCount: "100",
        },
        url: APP_STORE_URL,
        description:
          "Best photo cleaner app for iPhone — remove duplicate photos, blurry shots, and screenshots with a Tinder-like swipe. One-time purchase, no subscription.",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <HeroSection />
      <PricingValueSection />
      <AppShowcaseSection />
      <HowItWorksSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
