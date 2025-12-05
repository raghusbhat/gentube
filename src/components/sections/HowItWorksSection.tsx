import { SectionContainer } from "@/components/SectionContainer";
import { Upload, MessageSquareText, Download } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Upload",
    description: "Upload your selfie or photo to get started",
    icon: Upload,
  },
  {
    number: "2",
    title: "Describe",
    description: "Tell AI what you want in plain words",
    icon: MessageSquareText,
  },
  {
    number: "3",
    title: "Download",
    description: "Get your transformed image in seconds",
    icon: Download,
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-background py-8 md:py-14">
      <SectionContainer>
        <div className="rounded-3xl bg-sidebar px-6 py-12 md:px-12 md:py-16">
          <h2 className="mb-12 text-center text-2xl font-semibold text-sidebar-foreground md:text-3xl">
            How It Works
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="rounded-xl border border-dashed border-primary/50 p-6 text-center hover:border-primary/70 hover:shadow-lg transition-all duration-300"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5">
                    <Icon className="h-7 w-7 text-primary" strokeWidth={2} />
                  </div>
                  <div className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">
                    STEP {step.number}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
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
