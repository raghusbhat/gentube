import { SectionContainer } from "@/components/SectionContainer";
import { TrendingUp, Heart, Eye, Share2 } from "lucide-react";

export function ViralShowcase() {
  const viralExamples = [
    {
      title: "Barbie Selfie",
      image: "/1.jpg",
      views: "2.4M",
      likes: "847K",
      category: "Trending",
    },
    {
      title: "Anime Me",
      image: "/2.jpg",
      views: "1.8M",
      likes: "623K",
      category: "Hot",
    },
    {
      title: "AI Headshot Pro",
      image: "/3.jpg",
      views: "1.2M",
      likes: "445K",
      category: "Popular",
    },
    {
      title: "Pixar Character",
      image: "/4.jpg",
      views: "3.1M",
      likes: "1.1M",
      category: "Viral",
    },
    {
      title: "Y2K Aesthetic",
      image: "/5.jpg",
      views: "892K",
      likes: "334K",
      category: "Trending",
    },
    {
      title: "Medieval Knight",
      image: "/6.jpg",
      views: "1.5M",
      likes: "567K",
      category: "Hot",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-background to-purple-950/20 py-12 md:py-16">
      <SectionContainer>
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 px-4 py-2 text-pink-400">
            <TrendingUp className="h-4 w-4" />
            <span className="text-sm font-bold">WHAT'S GOING VIRAL</span>
          </div>

          <h2 className="mb-4 text-3xl font-black text-white md:text-5xl">
            People Are Going
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              {" "}Crazy{" "}
            </span>
            For These
          </h2>

          <p className="text-lg text-gray-300">
            These styles are breaking the internet. Join the trend before it's too late.
          </p>
        </div>

        {/* Viral Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {viralExamples.map((example, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl border-2 border-gray-800 bg-sidebar transition-all hover:border-purple-500 hover:scale-105"
            >
              {/* Trending Badge */}
              <div className="absolute left-4 top-4 z-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-3 py-1 text-xs font-bold text-white shadow-lg">
                {example.category}
              </div>

              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={example.image}
                  alt={example.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="mb-3 text-xl font-bold text-white">
                    {example.title}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-gray-300">
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{example.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4 fill-pink-500 text-pink-500" />
                      <span>{example.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Share2 className="h-4 w-4" />
                      <span>Share</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Bar at Bottom */}
              <div className="border-t border-gray-800 bg-sidebar/80 p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 text-gray-400">
                      <Eye className="h-4 w-4" />
                      <span className="font-semibold">{example.views}</span>
                    </div>
                    <div className="flex items-center gap-1 text-pink-400">
                      <Heart className="h-4 w-4 fill-pink-500" />
                      <span className="font-semibold">{example.likes}</span>
                    </div>
                  </div>
                  <button className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-bold text-purple-400 transition-all hover:bg-purple-500/30">
                    Use Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA at Bottom */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-lg font-medium text-gray-300">
            Want to go viral too? 🚀
          </p>
          <button className="rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-purple-500/50 transition-all hover:scale-105 hover:shadow-purple-500/70">
            Start Creating Viral Content
          </button>
        </div>
      </SectionContainer>
    </section>
  );
}
