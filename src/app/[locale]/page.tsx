import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AppShowcaseSection from "@/components/sections/AppShowcaseSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AppShowcaseSection />
      <HowItWorksSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
