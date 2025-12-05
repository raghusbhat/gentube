import { SectionContainer } from "@/components/SectionContainer";
import { Zap, Infinity, Palette, Shield, Download, Sparkles } from "lucide-react";

export function BenefitsGrid() {
  const benefits = [
    {
      icon: Zap,
      emoji: "⚡",
      title: "Instant Results",
      description: "Literally 2 seconds. Faster than making ramen.",
      gradient: "from-yellow-500/20 to-orange-500/20",
      iconColor: "text-yellow-400",
    },
    {
      icon: Infinity,
      emoji: "♾️",
      title: "Unlimited Everything",
      description: "Create as much as you want. We mean it. Go wild.",
      gradient: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400",
    },
    {
      icon: Palette,
      emoji: "🎨",
      title: "Endless Styles",
      description: "Anime, professional, meme, fantasy... whatever you vibe with.",
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-cyan-400",
    },
    {
      icon: Shield,
      emoji: "🔒",
      title: "Your Privacy Matters",
      description: "Your pics stay yours. We don't sell data or do shady stuff.",
      gradient: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-400",
    },
    {
      icon: Download,
      emoji: "💎",
      title: "HD Quality",
      description: "Crystal clear. Instagram-ready. No pixelated garbage.",
      gradient: "from-pink-500/20 to-rose-500/20",
      iconColor: "text-pink-400",
    },
    {
      icon: Sparkles,
      emoji: "✨",
      title: "Zero Learning Curve",
      description: "If you can take a selfie, you can use this. That's it.",
      gradient: "from-indigo-500/20 to-purple-500/20",
      iconColor: "text-indigo-400",
    },
  ];

  return (
    <section className="bg-background py-12 md:py-16">
      <SectionContainer>
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-black text-white md:text-5xl">
            Why Everyone's
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              {" "}Obsessed{" "}
            </span>
          </h2>
          <p className="text-lg text-gray-300">
            No cap, this is actually different from the rest
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className={`group relative overflow-hidden rounded-2xl border-2 border-gray-800 bg-gradient-to-br ${benefit.gradient} p-6 backdrop-blur-sm transition-all hover:border-purple-500 hover:scale-105`}
              >
                {/* Emoji Badge */}
                <div className="absolute -right-4 -top-4 text-6xl opacity-20 transition-all group-hover:rotate-12 group-hover:scale-125">
                  {benefit.emoji}
                </div>

                {/* Icon */}
                <div className="relative mb-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-sidebar/80 backdrop-blur-sm">
                    <Icon className={`h-7 w-7 ${benefit.iconColor}`} strokeWidth={2} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="relative mb-2 text-xl font-bold text-white">
                  {benefit.title}
                </h3>
                <p className="relative text-sm leading-relaxed text-gray-300">
                  {benefit.description}
                </p>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/0 to-pink-500/0 opacity-0 transition-opacity group-hover:opacity-20" />
              </div>
            );
          })}
        </div>

        {/* Testimonial Section */}
        <div className="mt-16 rounded-3xl border-2 border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-8 md:p-12">
          <div className="text-center">
            <div className="mb-6 flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-3xl">⭐</span>
              ))}
            </div>

            <blockquote className="mb-6 text-2xl font-bold text-white md:text-3xl">
              "I made my entire Instagram feed with this in like 20 minutes.
              My engagement went through the roof 📈"
            </blockquote>

            <div className="flex items-center justify-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600" />
              <div className="text-left">
                <p className="font-bold text-white">@creativemaya</p>
                <p className="text-sm text-gray-400">Content Creator • 47K followers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof Numbers */}
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          <div>
            <div className="mb-2 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-4xl font-black text-transparent md:text-5xl">
              100K+
            </div>
            <div className="text-sm text-gray-400">Happy Creators</div>
          </div>
          <div>
            <div className="mb-2 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-4xl font-black text-transparent md:text-5xl">
              5M+
            </div>
            <div className="text-sm text-gray-400">Transformations</div>
          </div>
          <div>
            <div className="mb-2 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-4xl font-black text-transparent md:text-5xl">
              4.9★
            </div>
            <div className="text-sm text-gray-400">Average Rating</div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
