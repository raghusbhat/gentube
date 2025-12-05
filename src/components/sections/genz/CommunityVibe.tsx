import { SectionContainer } from "@/components/SectionContainer";
import { Users, MessageCircle, Trophy, Rocket } from "lucide-react";

export function CommunityVibe() {
  const communityStats = [
    {
      icon: Users,
      number: "100K+",
      label: "Active Creators",
      description: "Making magic daily",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MessageCircle,
      number: "50K+",
      label: "Discord Members",
      description: "Sharing tips & styles",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Trophy,
      number: "Weekly",
      label: "Creator Contests",
      description: "Win exclusive perks",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Rocket,
      number: "Daily",
      label: "New Styles Added",
      description: "Never run out of ideas",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-purple-950/20 to-background py-12 md:py-16">
      <SectionContainer>
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-black text-white md:text-5xl">
            You're Not Just Using An App
            <br />
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              You're Joining A Movement
            </span>
          </h2>
          <p className="text-lg text-gray-300">
            100K+ creators helping each other go viral every single day
          </p>
        </div>

        {/* Community Stats Grid */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {communityStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border-2 border-gray-800 bg-sidebar p-6 text-center transition-all hover:border-purple-500 hover:scale-105"
              >
                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  <div className={`inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${stat.color} p-3`}>
                    <Icon className="h-8 w-8 text-white" strokeWidth={2} />
                  </div>
                </div>

                {/* Number */}
                <div className={`mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-4xl font-black text-transparent`}>
                  {stat.number}
                </div>

                {/* Label */}
                <div className="mb-1 text-lg font-bold text-white">{stat.label}</div>

                {/* Description */}
                <div className="text-sm text-gray-400">{stat.description}</div>

                {/* Hover Glow */}
                <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${stat.color} opacity-0 blur-xl transition-opacity group-hover:opacity-20`} />
              </div>
            );
          })}
        </div>

        {/* What Makes Us Different */}
        <div className="rounded-3xl border-2 border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-8 md:p-12">
          <div className="mb-8 text-center">
            <h3 className="mb-3 text-2xl font-black text-white md:text-3xl">
              Built Different
            </h3>
            <p className="text-gray-300">What sets GenTube apart from the rest</p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-gray-800 bg-sidebar/50 p-6 backdrop-blur-sm text-center transition-all hover:border-purple-500/50">
              <div className="mb-4 text-4xl">🚀</div>
              <h4 className="mb-2 text-lg font-bold text-white">Actually Fast</h4>
              <p className="text-sm leading-relaxed text-gray-300">
                Most AI tools take minutes. We do it in 2 seconds.
              </p>
            </div>

            <div className="rounded-xl border border-gray-800 bg-sidebar/50 p-6 backdrop-blur-sm text-center transition-all hover:border-purple-500/50">
              <div className="mb-4 text-4xl">💯</div>
              <h4 className="mb-2 text-lg font-bold text-white">Actually Free</h4>
              <p className="text-sm leading-relaxed text-gray-300">
                No hidden costs, no credit card tricks. Just free.
              </p>
            </div>

            <div className="rounded-xl border border-gray-800 bg-sidebar/50 p-6 backdrop-blur-sm text-center transition-all hover:border-purple-500/50">
              <div className="mb-4 text-4xl">🎨</div>
              <h4 className="mb-2 text-lg font-bold text-white">Actually Good</h4>
              <p className="text-sm leading-relaxed text-gray-300">
                HD quality that actually looks professional.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <button className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 font-bold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">
              Try It Now
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border-2 border-dashed border-pink-500/30 bg-pink-500/5 p-6 text-center">
            <div className="mb-3 text-4xl">🏆</div>
            <h4 className="mb-2 font-bold text-white">Weekly Challenges</h4>
            <p className="text-sm text-gray-400">
              Compete for prizes and get featured on our socials
            </p>
          </div>

          <div className="rounded-xl border-2 border-dashed border-purple-500/30 bg-purple-500/5 p-6 text-center">
            <div className="mb-3 text-4xl">🎁</div>
            <h4 className="mb-2 font-bold text-white">Exclusive Drops</h4>
            <p className="text-sm text-gray-400">
              Early access to new styles and features for members
            </p>
          </div>

          <div className="rounded-xl border-2 border-dashed border-cyan-500/30 bg-cyan-500/5 p-6 text-center">
            <div className="mb-3 text-4xl">🤝</div>
            <h4 className="mb-2 font-bold text-white">Collab Opportunities</h4>
            <p className="text-sm text-gray-400">
              Connect with brands and other creators in the community
            </p>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
