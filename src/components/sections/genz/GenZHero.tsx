import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/SectionContainer";
import { Sparkles, TrendingUp, Users } from "lucide-react";

export function GenZHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-background to-cyan-900 py-12 md:py-20">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <SectionContainer className="relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Main Headline - Bold, Clear Value Prop */}
          <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent animate-gradient">
              Your Face.
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Any Vibe.
            </span>
            <br />
            <span className="text-white">Zero Effort.</span>
          </h1>

          {/* Subheadline - Benefit Focused */}
          <p className="mb-8 max-w-2xl text-lg text-gray-300 md:text-xl">
            Turn yourself into literally anything in 2 seconds. No AI knowledge needed.
            No credit card. Just pure creativity. 💫
          </p>

          {/* Dual CTA - Primary is low friction */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-6 text-lg font-bold text-white shadow-2xl shadow-purple-500/50 transition-all hover:scale-105 hover:shadow-purple-500/70"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Creating Free
                <Sparkles className="h-5 w-5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 transition-opacity group-hover:opacity-100" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-purple-500/50 bg-transparent px-8 py-6 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:border-purple-500 hover:bg-purple-500/10"
            >
              See What's Trending
              <TrendingUp className="h-5 w-5" />
            </Button>
          </div>

          {/* Trust Signals - Remove friction */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-purple-400" />
              <span>100K+ creators</span>
            </div>
            <div>⚡ 2-second generation</div>
            <div>✨ Unlimited free creates</div>
            <div>🔒 Your pics stay private</div>
          </div>

          {/* Before/After - Visual Proof */}
          <div className="mt-12 grid grid-cols-2 gap-4 md:mt-16 md:grid-cols-4 md:gap-6">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className="group relative overflow-hidden rounded-2xl border-2 border-purple-500/30 bg-sidebar/50 backdrop-blur-sm transition-all hover:border-purple-500 hover:scale-105"
              >
                <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute bottom-3 left-3 right-3 transform translate-y-10 transition-transform group-hover:translate-y-0">
                  <span className="text-xs font-bold text-white">Style {num}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
