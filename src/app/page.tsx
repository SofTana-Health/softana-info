import { Navbar } from "@/components/organisms/Navbar";
import { HeroSection } from "@/components/organisms/HeroSection";
import { FeaturesSection } from "@/components/organisms/FeaturesSection";
import { PricingSection } from "@/components/organisms/PricingSection";
import { Footer } from "@/components/organisms/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
