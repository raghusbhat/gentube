import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { TransformationsCarousel } from "@/components/sections/TransformationsCarousel";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export function ClassicLanding() {
  return (
    <main>
      <HeroSection />
      <HowItWorksSection />
      <TransformationsCarousel />
      <FeaturesSection />
      <UseCasesSection />
      <SocialProofSection />
      <FinalCTASection />
    </main>
  );
}
