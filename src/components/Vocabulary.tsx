import { Book, AlertTriangle } from "lucide-react";

const essentialPhrases = [
  { phrase: "Wepa!", meaning: "Universal expression of joy, surprise, excitement, or just existing" },
  { phrase: "Dale", meaning: 'Yes, okay, let\'s go, hurry up, I agree, and about 50 other meanings' },
  { phrase: "Bendición", meaning: "Blessing request for elders (MANDATORY)" },
  { phrase: "Dios te bendiga", meaning: "God bless you (the proper response)" },
  { phrase: "Nena/Papi", meaning: 'Terms of endearment (you are now "papi" whether you like it or not)' },
  { phrase: "Cabrón", meaning: "Can mean friend, idiot, dude, depending on tone (context is everything)" },
  { phrase: "Ay Dios mío", meaning: "Oh my God (said 400 times per day minimum)" },
  { phrase: "Puñeta", meaning: "Expletive (learn it, you'll need it)" },
  { phrase: "Ahorita", meaning: "Right now/later/tomorrow/never (Schrödinger's timeline)" },
  { phrase: "Ya tu sabes", meaning: "You already know (even when you don't)" },
  { phrase: "Que lo que", meaning: "What's up (don't think too hard about it)" },
  { phrase: "Brutal", meaning: "Amazing, awesome, incredible" },
  { phrase: "Chavos", meaning: "Money" },
  { phrase: "Tíguere/Tíguera", meaning: "Tough person, street smart" },
  { phrase: "Bochinche", meaning: "Gossip (will be about you if you mess up)" }
];

const dangerPhrases = [
  { phrase: 'Está bien (with that tone)', meaning: "It's NOT okay" },
  { phrase: "Haz lo que te dé la gana", meaning: "Do whatever you want (DO NOT DO WHATEVER YOU WANT)" },
  { phrase: '"Nada" when you ask what\'s wrong', meaning: "Everything is wrong" },
  { phrase: "Sigue, sigue", meaning: "Stop immediately" },
  { phrase: '"Ay sí?" with raised eyebrow', meaning: "You're about to be destroyed" },
  { phrase: "Dale, pues", meaning: "You've been warned" },
  { phrase: '"Qué cute" (sarcastically)', meaning: "You messed up badly" }
];

const Vocabulary = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-bebas text-5xl md:text-7xl text-center mb-16 text-accent">
          SURVIVAL VOCABULARY KIT
        </h2>

        {/* Essential Phrases */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <Book className="w-10 h-10 text-primary" />
            <h3 className="font-bebas text-3xl md:text-4xl text-primary">
              ESSENTIAL PHRASES
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {essentialPhrases.map((item, index) => (
              <div
                key={index}
                className="bg-card border-2 border-border rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300 hover-scale"
              >
                <p className="spanish-text font-bold text-xl mb-2">{item.phrase}</p>
                <p className="text-foreground/80">{item.meaning}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Danger Zone Phrases */}
        <div className="bg-destructive/10 border-4 border-destructive rounded-2xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <AlertTriangle className="w-10 h-10 text-destructive animate-pulse" />
            <h3 className="font-bebas text-3xl md:text-4xl text-destructive">
              DANGER ZONE PHRASES (She Said These - RUN)
            </h3>
          </div>

          <div className="space-y-6">
            {dangerPhrases.map((item, index) => (
              <div
                key={index}
                className="bg-card border-2 border-destructive rounded-xl p-6 hover:animate-shake"
              >
                <p className="font-bold text-xl mb-2 text-destructive">{item.phrase}</p>
                <p className="text-foreground/80 text-lg">{item.meaning}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vocabulary;
