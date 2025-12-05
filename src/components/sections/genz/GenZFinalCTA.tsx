import { SectionContainer } from "@/components/SectionContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, ArrowRight, Check } from "lucide-react";
import { useState } from "react";

export function GenZFinalCTA() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic
    console.log("Email:", email);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-background to-pink-900 py-16 md:py-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(168,85,247,0.2),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(236,72,153,0.2),transparent_50%)]" />

      <SectionContainer className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main Headline */}
          <h2 className="mb-6 text-4xl font-black leading-tight text-white md:text-6xl">
            Ready to Create
            <br />
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Something Insane?
            </span>
          </h2>

          <p className="mb-8 text-xl text-gray-300 md:text-2xl">
            Join 100K+ creators making viral content every single day
          </p>

          {/* Email Capture Form - Micro-commitment */}
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 border-2 border-purple-500/30 bg-sidebar/50 px-6 text-base text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500"
                required
              />
              <Button
                type="submit"
                size="lg"
                className="group h-14 bg-gradient-to-r from-pink-500 to-purple-600 px-8 text-base font-bold text-white shadow-2xl shadow-purple-500/50 transition-all hover:scale-105 hover:from-pink-600 hover:to-purple-700"
              >
                Get Started Free
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </form>

          {/* Trust Signals - Remove Friction */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" strokeWidth={3} />
              <span>No credit card needed</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" strokeWidth={3} />
              <span>Unlimited free creates</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" strokeWidth={3} />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" strokeWidth={3} />
              <span>2-second results</span>
            </div>
          </div>

          {/* FAQ Quick Answers */}
          <div className="mt-12 grid gap-4 text-left md:grid-cols-2">
            <div className="rounded-xl border border-gray-800 bg-sidebar/30 p-6 backdrop-blur-sm">
              <h3 className="mb-2 font-bold text-white">Is it really free?</h3>
              <p className="text-sm text-gray-400">
                Yes! Unlimited transformations, no credit card required. Ever.
              </p>
            </div>
            <div className="rounded-xl border border-gray-800 bg-sidebar/30 p-6 backdrop-blur-sm">
              <h3 className="mb-2 font-bold text-white">How fast is it?</h3>
              <p className="text-sm text-gray-400">
                2 seconds. Seriously. Upload, transform, download. Done.
              </p>
            </div>
            <div className="rounded-xl border border-gray-800 bg-sidebar/30 p-6 backdrop-blur-sm">
              <h3 className="mb-2 font-bold text-white">Can I use it commercially?</h3>
              <p className="text-sm text-gray-400">
                Absolutely! Full commercial rights to all your creations.
              </p>
            </div>
            <div className="rounded-xl border border-gray-800 bg-sidebar/30 p-6 backdrop-blur-sm">
              <h3 className="mb-2 font-bold text-white">Is my data safe?</h3>
              <p className="text-sm text-gray-400">
                100%. We don't sell data or use your pics for anything else.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
