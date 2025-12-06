import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/SectionContainer";
import { WandSparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="bg-background py-8 md:py-20">
      <SectionContainer>
        <div className="flex flex-col items-center text-center">
          {/* Heading */}
          <h1 className="mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-3xl font-bold leading-tight text-transparent md:mb-8 md:text-4xl lg:text-5xl text-shadow-muted">
            Transform Your Selfies
            <br />
            Into Stunning AI Art
          </h1>

          {/* USP Badges */}
          <div className="mb-5 flex flex-wrap items-center justify-center gap-3 md:mb-10">
            <div className="group flex items-center gap-1 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 px-4 py-2 ring-1 ring-amber-500/30 backdrop-blur-sm transition-all hover:ring-amber-500/50">
              <span className="text-base">⚡</span>
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-sm font-bold text-transparent">
                2-second generation
              </span>
            </div>
            <div className="group flex items-center gap-1 rounded-xl bg-gradient-to-r from-violet-500/20 to-purple-500/20 px-4 py-2 ring-1 ring-violet-500/30 backdrop-blur-sm transition-all hover:ring-violet-500/70">
              <span className="text-base">✨</span>
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-sm font-bold text-transparent">
                Unlimited FREE creates
              </span>
            </div>
            <div className="group flex items-center gap-1 rounded-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 px-4 py-2 ring-1 ring-emerald-500/30 backdrop-blur-sm transition-all hover:ring-emerald-500/50">
              <span className="text-base">👍</span>
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-sm font-bold text-transparent">
                Easy to use
              </span>
            </div>
          </div>

          {/* Subheading */}
          <p className="mb-6 max-w-2xl text-base text-muted-foreground md:mb-10 md:text-lg">
            Turn any selfie into professional headshots, viral memes, or
            stunning artistic portraits with AI magic.
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            className="mb-8 bg-primary/80 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:translate-y-[-3px] hover:bg-primary hover:shadow-xl md:mb-10 ease-in-out duration-500"
          >
            Start Creating Now
            <WandSparkles className="h-5 w-5 font-bold" />
          </Button>

          {/* Before/After Images */}
          <div className="flex w-full flex-col items-center gap-4 md:flex-row md:justify-center md:gap-6">
            {/* Before Image */}
            <div className="flex flex-col items-center">
              <div className="relative h-96 w-64 overflow-hidden rounded-2xl border border-border/50 bg-muted shadow-xl md:h-[28rem] md:w-80">
                <img
                  src="/Origina.jpeg"
                  alt="Original Selfie"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="mt-2 text-xs font-medium uppercase tracking-wide text-muted-foreground bg-primary/50 px-2 py-1 rounded-lg">
                BEFORE
              </span>
            </div>

            {/* Arrow */}
            <div className="hidden text-3xl font-bold text-primary md:block">
              →
            </div>
            <div className="block text-3xl font-bold text-primary md:hidden">
              ↓
            </div>

            {/* After Image */}
            <div className="flex flex-col items-center">
              <div className="relative h-96 w-64 overflow-hidden rounded-2xl border border-primary/30 bg-muted shadow-xl shadow-primary/10 md:h-[28rem] md:w-80">
                <img
                  src="/after.jpg"
                  alt="Transformed Version"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="mt-2 text-xs font-medium uppercase tracking-wide text-foreground bg-primary/50 px-2 py-1 rounded-lg">
                AFTER
              </span>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
