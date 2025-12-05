import { SectionContainer } from "@/components/SectionContainer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="bg-background py-8 md:py-14">
      <SectionContainer>
        <div className="flex flex-col items-center text-center">
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
            Ready to Transform Your Selfies?
          </h2>

          <p className="mb-8 max-w-2xl text-base text-muted-foreground md:text-lg">
            Start creating stunning AI art in seconds. Join thousands of
            creators today.
          </p>

          <Button
            size="lg"
            className="mb-8 bg-primary/80 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:translate-y-[-3px] hover:bg-primary hover:shadow-xl md:mb-10 ease-in-out duration-500"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Button>

          <div className="flex flex-col gap-3 text-sm text-muted-foreground md:flex-row md:gap-8">
            <div className="flex items-center justify-center gap-2">
              <Check className="h-4 w-4 text-primary" strokeWidth={3} />
              <span>No credit card needed</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Check className="h-4 w-4 text-primary" strokeWidth={3} />
              <span>Unlimited free creates</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Check className="h-4 w-4 text-primary" strokeWidth={3} />
              <span>2-second generation</span>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
