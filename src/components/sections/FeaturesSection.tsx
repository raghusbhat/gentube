import { SectionContainer } from "@/components/SectionContainer";
import { Zap, Palette, Sparkles, Flame, Briefcase, Rocket } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Generate stunning transformations in just 2 seconds",
  },
  {
    icon: Flame,
    title: "Unlimited Creates",
    description: "Transform as many selfies as you want - completely free",
  },
  {
    icon: Palette,
    title: "Multiple Styles",
    description: "Choose from hundreds of artistic styles and filters",
  },
  {
    icon: Sparkles,
    title: "HD Quality",
    description: "Get high-resolution outputs perfect for any use",
  },
  {
    icon: Briefcase,
    title: "Commercial Use",
    description: "Full rights to use your creations commercially",
  },
  {
    icon: Rocket,
    title: "No Watermarks",
    description: "Get clean, professional images without any branding",
  },
];

export function FeaturesSection() {
  return (
    <section className="bg-background py-8 md:py-14">
      <SectionContainer>
        <div className="rounded-3xl bg-sidebar px-6 py-12 md:px-12 md:py-16">
          <h2 className="mb-12 text-center text-2xl font-semibold text-sidebar-foreground md:text-3xl">
            Why Choose GenTube?
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="rounded-xl border border-dashed border-primary/50 p-6 text-center transition-all duration-300 hover:border-primary/70 hover:shadow-lg"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" strokeWidth={2} />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
