import { Heart } from "lucide-react";

const Reward = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-primary/10 via-accent/10 to-secondary/10">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-12">
          <Heart className="w-16 h-16 text-accent animate-pulse" />
          <h2 className="font-bebas text-5xl md:text-7xl text-center text-accent">
            THE REWARD
          </h2>
          <Heart className="w-16 h-16 text-accent animate-pulse" />
        </div>

        <h3 className="font-bebas text-3xl md:text-4xl text-center mb-12 text-primary">
          WHY IT'S ALL WORTH IT
        </h3>

        <div className="bg-card border-4 border-accent rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
            <p className="font-bold text-xl text-center text-accent mb-8">
              Because when the smoke clears and the chancleta lowers...
            </p>

            <p>
              You get the <span className="font-bold text-accent">most loyal, passionate, fierce, loving partner</span> on the planet. 
              You get family who treats you like blood from day one. You get food that makes your soul sing. 
              You get taught how to love loudly, unapologetically, and with your whole chest. 
              You get Sunday dinners full of laughter, music that makes you move, and a culture so rich it changes you forever.
            </p>

            <p>
              You get someone who will <span className="font-bold text-secondary">fight the world for you</span> (and occasionally fight you, but that's just cardio). 
              Someone who cooks with love in every grain of rice. Someone whose family becomes yours, whose language becomes yours, 
              whose island becomes your second home.
            </p>

            <p>
              Sure, you'll never win an argument. Yes, you'll eat enough to feed a small army. 
              The music is always loud, the family is always around, and peace and quiet are myths.
            </p>

            <p className="font-bold text-xl text-primary">
              But you'll never be alone. You'll never go hungry. You'll never lack for passion, laughter, or love.
            </p>

            <p className="text-center text-2xl font-bold mt-8">
              The truth? <span className="text-accent">You don't survive a Puerto Rican woman.</span>
            </p>

            <p className="text-center text-2xl font-bold mb-8">
              <span className="text-secondary">She transforms you.</span> And you wouldn't have it any other way.
            </p>

            <p className="text-center italic text-lg text-foreground/70 mt-8">
              From France with love, this guide is my love letter to the beautiful chaos,
              the endless laughter, and the incredible woman who changed everything. Worth every second.
            </p>

            <p className="text-center text-5xl font-bebas text-primary mt-12 mb-8">
              ¡WEPA!
            </p>
          </div>
        </div>

        {/* Decorative hearts */}
        <div className="flex justify-center gap-4 mt-12 text-4xl">
          <span className="animate-float">❤️</span>
          <span className="animate-float" style={{ animationDelay: "0.5s" }}>💚</span>
          <span className="animate-float" style={{ animationDelay: "1s" }}>💙</span>
          <span className="animate-float" style={{ animationDelay: "1.5s" }}>💛</span>
          <span className="animate-float" style={{ animationDelay: "2s" }}>🧡</span>
        </div>
      </div>
    </section>
  );
};

export default Reward;
