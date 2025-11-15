import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Tropical background */}
      <div className="absolute inset-0 tropical-gradient opacity-10" />
      
      {/* Animated floating elements */}
      <div className="absolute top-20 left-10 text-6xl animate-float opacity-20">🌺</div>
      <div className="absolute top-40 right-20 text-7xl animate-float opacity-20" style={{ animationDelay: "1s" }}>🌴</div>
      <div className="absolute bottom-40 left-20 text-5xl animate-float opacity-20" style={{ animationDelay: "2s" }}>🥥</div>
      <div className="absolute bottom-20 right-40 text-6xl animate-float opacity-20" style={{ animationDelay: "1.5s" }}>🦜</div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Warning badge */}
        <div className="inline-block mb-8 px-6 py-3 bg-destructive/20 border-4 border-destructive rounded-lg transform -rotate-2">
          <p className="text-destructive font-bold text-lg">⚠️ CAUTION ⚠️</p>
        </div>

        {/* Main headline */}
        <h1 className="font-bebas text-6xl md:text-8xl lg:text-9xl mb-6 leading-none">
          <span className="block text-primary">How to Survive</span>
          <span className="block text-secondary">a Puerto Rican</span>
          <span className="block text-accent">Woman</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground/80">
          A French Guy's Unauthorized Survival Manual
        </h2>

        {/* Warning text */}
        <div className="max-w-3xl mx-auto mb-12 p-6 bg-card border-4 border-accent rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <p className="text-lg md:text-xl leading-relaxed">
            <span className="font-bold text-accent">Reading this guide does not guarantee survival.</span>
            <br />
            <span className="text-foreground/90">
              Side effects include: addiction to mofongo, spontaneous salsa dancing,
              saying <span className="spanish-text">"wepa"</span> in inappropriate situations, and falling
              hopelessly in love with the culture.
            </span>
          </p>
        </div>

        {/* CTA Button */}
        <Button
          onClick={scrollToContent}
          size="lg"
          className="bg-secondary hover:bg-secondary/90 text-white font-bold text-xl px-8 py-6 rounded-full shadow-lg hover-scale group"
        >
          Scroll Down If You Dare
          <ChevronDown className="ml-2 h-6 w-6 animate-bounce" />
        </Button>

        {/* Hidden message for Shanna */}
        <p className="mt-8 text-sm italic text-foreground/50">
          (P.S. Shanna, every word here is true... and I wouldn't change a thing 💙)
        </p>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
