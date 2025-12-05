import { SectionContainer } from "@/components/SectionContainer";
import { Button } from "@/components/ui/button";
import { Zap, Star, Sparkles, Rocket } from "lucide-react";

export function FOMOSection() {
  return (
    <section className="bg-background py-12 md:py-16">
      <SectionContainer>
        <div className="rounded-3xl border-2 border-pink-500/30 bg-gradient-to-br from-pink-900/20 via-sidebar to-purple-900/20 p-8 md:p-12">
          {/* Main Headline */}
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-black text-white md:text-4xl">
              Start Creating In Seconds 🚀
            </h2>
            <p className="text-lg text-gray-300">
              No signup required. Just upload and transform. It's that simple.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Quick Start Features */}
            <div className="rounded-2xl border border-purple-500/30 bg-sidebar/50 p-6 backdrop-blur-sm">
              <div className="mb-6">
                <h3 className="mb-4 text-xl font-bold text-white">
                  Why GenTube?
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-purple-500/20">
                      <Zap className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Lightning Fast</h4>
                      <p className="text-sm text-gray-400">Results in 2 seconds, no waiting around</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-pink-500/20">
                      <Sparkles className="h-5 w-5 text-pink-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Unlimited Creates</h4>
                      <p className="text-sm text-gray-400">Make as many transformations as you want</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-cyan-500/20">
                      <Rocket className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">No Skills Needed</h4>
                      <p className="text-sm text-gray-400">If you can upload a photo, you can use this</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 py-6 text-base font-bold text-white hover:from-pink-600 hover:to-purple-700">
                Try It Now - It's Free
                <Sparkles className="h-5 w-5" />
              </Button>
            </div>

            {/* What You Get */}
            <div className="rounded-2xl border border-cyan-500/30 bg-sidebar/50 p-6 backdrop-blur-sm">
              <div className="mb-4">
                <h3 className="mb-2 text-xl font-bold text-white">
                  What You Get
                </h3>
                <p className="text-sm text-gray-400">
                  Everything included, no hidden fees
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 rounded-lg border border-gray-800 bg-background/50 p-3">
                  <div className="text-2xl">⚡</div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">
                      2-second transformations
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-lg border border-gray-800 bg-background/50 p-3">
                  <div className="text-2xl">🎨</div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">
                      Hundreds of styles & filters
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-lg border border-gray-800 bg-background/50 p-3">
                  <div className="text-2xl">💎</div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">
                      HD quality downloads
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-lg border border-gray-800 bg-background/50 p-3">
                  <div className="text-2xl">🔒</div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">
                      Your privacy protected
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-4 text-center">
                <div className="mb-2 flex items-center justify-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                </div>
                <p className="text-sm font-medium text-gray-300">
                  4.9/5 average rating
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
