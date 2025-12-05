import { GenZHero } from "@/components/sections/genz/GenZHero";
import { ViralShowcase } from "@/components/sections/genz/ViralShowcase";
import { BenefitsGrid } from "@/components/sections/genz/BenefitsGrid";
import { FOMOSection } from "@/components/sections/genz/FOMOSection";
import { CommunityVibe } from "@/components/sections/genz/CommunityVibe";
import { GenZFinalCTA } from "@/components/sections/genz/GenZFinalCTA";

export function GenZLanding() {
  return (
    <main>
      <GenZHero />
      <ViralShowcase />
      <BenefitsGrid />
      <FOMOSection />
      <CommunityVibe />
      <GenZFinalCTA />
    </main>
  );
}
