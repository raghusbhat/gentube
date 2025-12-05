import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { TransformationsCarousel } from "@/components/sections/TransformationsCarousel";

function App() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <TransformationsCarousel />
      </main>
      <Footer />
    </div>
  );
}

export default App;
