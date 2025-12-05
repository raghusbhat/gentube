import { SectionContainer } from "@/components/SectionContainer";
import { Users, ImageIcon, Star } from "lucide-react";

const stats = [
  {
    number: "100,000+",
    label: "Creators",
    icon: Users,
    gradient: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-400",
  },
  {
    number: "5M+",
    label: "Transformations",
    icon: ImageIcon,
    gradient: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-400",
  },
  {
    number: "4.9/5",
    label: "Rating",
    icon: Star,
    gradient: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-400",
  },
];

export function SocialProofSection() {
  return (
    <section className="bg-background py-8 md:py-14">
      <SectionContainer>
        <div className="rounded-3xl bg-sidebar px-6 py-12 md:px-12 md:py-16">
          <h2 className="mb-12 text-center text-2xl font-semibold text-sidebar-foreground md:text-3xl">
            Trusted by Creators Worldwide
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`group relative overflow-hidden rounded-2xl border border-dashed border-primary/50 hover:border-primary/70 bg-gradient-to-br ${stat.gradient} p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                  <div className="relative">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-background/50">
                      <Icon
                        className={`h-8 w-8 ${stat.iconColor}`}
                        strokeWidth={2}
                      />
                    </div>

                    <div className="mb-2 text-5xl font-bold text-sidebar-foreground md:text-6xl">
                      {stat.number}
                    </div>

                    <div className="text-lg font-medium text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
