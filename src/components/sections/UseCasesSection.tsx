import { SectionContainer } from "@/components/SectionContainer";
import { Briefcase, Share2, Palette, Laugh } from "lucide-react";

const useCases = [
  {
    icon: Briefcase,
    title: "Professional Headshots",
    description: "Create LinkedIn-ready professional headshots in seconds",
  },
  {
    icon: Share2,
    title: "Social Media Content",
    description: "Generate viral posts and profile pictures that stand out",
  },
  {
    icon: Palette,
    title: "Creative Projects",
    description:
      "Bring your artistic visions to life with AI-powered transformations",
  },
  {
    icon: Laugh,
    title: "Memes & Fun Content",
    description: "Make hilarious memes and shareable content instantly",
  },
];

export function UseCasesSection() {
  return (
    <section className="bg-background py-8 md:py-14">
      <SectionContainer>
        <div className="rounded-3xl bg-sidebar px-6 py-12 md:px-12 md:py-16">
          <h2 className="mb-12 text-center text-2xl font-semibold text-sidebar-foreground md:text-3xl">
            Perfect For Every Need
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {useCases.map((useCase) => {
              const Icon = useCase.icon;
              return (
                <div
                  key={useCase.title}
                  className="rounded-xl border border-dashed border-primary/50 p-6 text-center transition-all duration-300 hover:border-primary/70 hover:shadow-lg"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" strokeWidth={2} />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    {useCase.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {useCase.description}
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
