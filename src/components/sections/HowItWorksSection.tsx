import { SectionContainer } from "@/components/SectionContainer";
import { Upload, MessageSquare, Download } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Upload",
    description: "Upload your selfie in any format - free, no signup needed",
    icon: Upload,
  },
  {
    number: "2",
    title: "Describe",
    description: "Tell AI what you want in plain words",
    icon: MessageSquare,
  },
  {
    number: "3",
    title: "Download",
    description: "Get your transformed image instantly - in seconds",
    icon: Download,
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-sidebar py-8 md:py-12">
      <SectionContainer>
        <h2 className="mb-6 text-center text-2xl font-semibold text-sidebar-foreground md:text-3xl">
          How It Works
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="rounded-xl border border-border bg-background p-6"
              >
                <div className="mb-4 flex items-start gap-4">
                  <Icon className="h-8 w-8 flex-shrink-0 text-primary" strokeWidth={2} />
                  <div>
                    <div className="mb-1 text-sm font-bold text-primary">STEP {step.number}</div>
                    <h3 className="mb-2 text-xl font-semibold text-foreground">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}
