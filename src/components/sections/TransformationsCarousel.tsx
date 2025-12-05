import { SectionContainer } from "@/components/SectionContainer";
import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const transformations = [
  { id: 1, title: "Flower Field", image: "/1.jpg" },
  { id: 2, title: "Forest Fairy", image: "/2.jpg" },
  { id: 3, title: "Fashion Model", image: "/3.jpg" },
  { id: 4, title: "Oil Portrait", image: "/4.jpg" },
  { id: 5, title: "Polaroid", image: "/5.jpg" },
  { id: 6, title: "Corporate", image: "/6.jpg" },
  { id: 7, title: "Art Nouveau", image: "/7.jpg" },
  { id: 8, title: "Rococo", image: "/8.jpg" },
  { id: 9, title: "Cyberpunk", image: "/9.jpg" },
  { id: 10, title: "Fantasy Mage", image: "/10.jpg" },
  { id: 11, title: "LinkedIn Pro", image: "/11.jpg" },
  { id: 12, title: "Anime Style", image: "/12.jpg" },
  { id: 13, title: "Classic Portrait", image: "/13.jpg" },
  { id: 14, title: "Spring Bloom", image: "/14.jpg" },
  { id: 15, title: "Pirate", image: "/15.jpg" },
  { id: 16, title: "Spider-Man", image: "/16.jpg" },
  { id: 17, title: "Comic Hero", image: "/17.jpg" },
  { id: 18, title: "Pixar", image: "/18.jpg" },
  { id: 19, title: "Elf Princess", image: "/19.jpg" },
];

export function TransformationsCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 280;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollInterval: NodeJS.Timeout;
    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollContainer.scrollBy({ left: 280, behavior: "smooth" });
        }
      }, 3000);
    };

    startAutoScroll();

    const handleMouseEnter = () => clearInterval(scrollInterval);
    const handleMouseLeave = () => startAutoScroll();

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="bg-background py-8 md:py-14">
      <SectionContainer>
        <h2 className="mb-12 text-center text-2xl font-semibold text-foreground md:text-3xl">
          See What's Possible
        </h2>

        <div className="relative">
          {/* Navigation Buttons (Desktop only) */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border-border bg-card/80 backdrop-blur hover:bg-card md:flex"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border-border bg-card/80 backdrop-blur hover:bg-card md:flex"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="scrollbar-hide flex gap-4 overflow-x-auto scroll-smooth px-4 pb-4 md:px-12"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {transformations.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="overflow-hidden rounded-2xl border-2 border-primary bg-sidebar/50 backdrop-blur-sm shadow-lg  transition-all duration-300 hover:border-primary/70 hover:shadow-xl hover:shadow-primary/20">
                  <div className="relative h-80 w-56 md:h-96 md:w-64">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="border-t-2 border-primary bg-sidebar/80 px-4 py-3 text-center backdrop-blur-md">
                    <span className="whitespace-nowrap text-sm font-semibold text-sidebar-foreground">
                      {item.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile swipe hint */}
          <p className="mt-4 text-center text-sm text-muted-foreground md:hidden">
            Swipe to see more
          </p>
        </div>
      </SectionContainer>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
