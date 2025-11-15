import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const commandments = [
  {
    number: 1,
    title: "TIME IS A BEAUTIFUL LIE",
    content: `"Ahorita" means now. It also means in 5 minutes. Or 3 hours. Or tomorrow. You'll never know which. Accept this mystery. Embrace the chaos. If she says she's "ready in 5 minutes," add 45 minutes and you might be close. Puerto Rican Standard Time (PST) operates on a completely different space-time continuum where clocks are suggestions and lateness is a love language.`
  },
  {
    number: 2,
    title: "HER FAMILY IS NOW YOUR FAMILY (NO ESCAPE)",
    content: `You thought you were dating one person? WRONG. You're dating her mom, her abuela, her tías, her primas, her primo's girlfriend's sister, and someone called "Papo" whose actual relation remains unclear. Sunday dinners aren't optional. They're federal law. You WILL attend. You WILL eat. You WILL be interrogated about your intentions. Resistance is futile.`
  },
  {
    number: 3,
    title: "VOLUME = LOVE",
    content: `She's not yelling. That's just talking. When she's actually yelling, you'll know - the neighbors three blocks away will know. Passionate conversations happen at megaphone levels. This is normal. The louder the conversation, the more she loves you. Silence is suspicious. Quiet is concerning. Embrace the beautiful noise.`
  },
  {
    number: 4,
    title: "THE KITCHEN IS SACRED GROUND",
    content: `Never - and I mean NEVER - suggest ordering pizza when she's offering to cook. That's basically filing for divorce. You eat what she makes. You eat ALL of it. You ask for seconds even if you're full. You compliment the sazón. You learn that sofrito is the foundation of civilization. Also, if you ever say "I'm not hungry" before a family gathering, she will look at you like you just spoke in tongues.`
  },
  {
    number: 5,
    title: "RESPECT THE CHANCLETA",
    content: `That flip-flop is not just footwear. It's a weapon of mass correction. It's a symbol of authority. It has sniper-level accuracy. Her mom can hit a fly at 30 feet with it. You've been warned. The chancleta demands respect. It has ended arguments, corrected behavior, and maintained order since time immemorial.`
  },
  {
    number: 6,
    title: "LEARN THE LANGUAGE (BOTH OF THEM)",
    content: `Spanish, English, and Spanglish - sometimes all in the same sentence. "Voy pa'l mall porque I need comprar shoes, you know?" This is perfectly normal. You will say "Bendición" to every elder. You will understand 47 different meanings of "dale." You will know that "ya tu sabes" means everything and nothing. Wepa is mandatory.`
  },
  {
    number: 7,
    title: "YOU'RE ALWAYS WRONG",
    content: `Even when you're right, you're wrong. This is non-negotiable. Apologize first, ask questions later. "You're right, mi amor" should become your default setting. Arguing is cardio, but winning is impossible. Save your energy. She's been training for debates since birth. You're outmatched. (Pro tip from experience: just agree and save yourself the trouble.)`
  },
  {
    number: 8,
    title: "PUERTO RICO IS PARADISE (END OF DISCUSSION)",
    content: `Your hometown? Cute. Your favorite vacation spot? Nice try. But nothing - and I mean NOTHING - compares to La Isla del Encanto. Don't even try. The beaches are better. The food is superior. The people are warmer. The music is superior. This is not up for debate. Accept it. Agree enthusiastically. Your life will be easier.`
  },
  {
    number: 9,
    title: "DANCE OR DIE",
    content: `You can't dance? Learn. Can't salsa? Take classes. Have two left feet? Doesn't matter - you're dancing anyway. At weddings, at random family parties, at the grocery store if Bad Bunny comes on. Reggaeton is not optional. Your hips will learn to lie whether they want to or not. She will drag you to the dance floor. Resistance only makes it worse.`
  },
  {
    number: 10,
    title: "WEATHER IS RELATIVE",
    content: `75°F is winter. She will wear a jacket. You will be confused. 85°F is perfect beach weather. 95°F is "a little warm." Meanwhile, she will NEVER understand why you think 60°F is "nice weather." Your definition of "cold" will be permanently recalibrated. Accept that your thermal perception systems are incompatible.`
  },
  {
    number: 11,
    title: "COFFEE IS SERIOUS BUSINESS",
    content: `That café she makes? It's not coffee. It's liquid determination. It's espresso on steroids. It's the nectar of the gods. It will wake up your ancestors. If you ask for "light coffee," she'll look at you with pity. Real coffee stands the spoon up. Real coffee jumpstarts your heart. There is no decaf in this house.`
  },
  {
    number: 12,
    title: "HURRICANE SEASON HAS NOTHING ON HER EMOTIONS",
    content: `She loves at Category 5 intensity. She fights with the fury of María. She cares with the force of a tropical storm. Everything is passionate. Everything is intense. There is no "medium setting." You wanted calm and collected? Wrong island, buddy. Embrace the beautiful chaos. It's never boring. And honestly? You wouldn't want it any other way.`
  },
  {
    number: 13,
    title: '"BENDICIÓN" IS NON-NEGOTIABLE',
    content: `You say "bendición" to EVERY elder. Her mom, her abuela, her tía, that random older lady at the party. And they respond "Dios te bendiga." This is sacred ritual. Skip it once and you'll hear about it for years. "Remember when you didn't ask for bendición? Que falta de respeto." It will haunt you.`
  },
  {
    number: 14,
    title: "PLANTAINS > YOUR ENTIRE CUISINE",
    content: `Tostones, amarillos, mofongo, pastelón - plantains in every form are superior to anything you've ever eaten. Accept this. She can make 47 different plantain dishes. You will learn to love them all. Your previous relationship with potatoes will seem quaint and inadequate.`
  },
  {
    number: 15,
    title: "SHE'S ALWAYS WATCHING",
    content: `She has the spiritual surveillance system of her abuela, the FBI, and Santa Claus combined. She knows what you're thinking before you think it. She saw that text. She noticed you looked at your phone. She knows you forgot to take the meat out of the freezer. Telepathy or magic? Doesn't matter. You're being monitored.`
  }
];

const Commandments = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-bebas text-5xl md:text-7xl text-center mb-4 text-secondary">
          THE 15 COMMANDMENTS
        </h2>
        <h3 className="font-bebas text-3xl md:text-4xl text-center mb-12 text-accent">
          OF SURVIVAL
        </h3>
        <p className="text-center text-sm italic text-foreground/60 mb-8">
          (Learned the hard way, written with love 💙)
        </p>

        <div className="space-y-4">
          {commandments.map((commandment, index) => (
            <div
              key={index}
              className="bg-card border-4 border-border rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-muted/10 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="font-bebas text-4xl md:text-5xl text-primary">
                    #{commandment.number}
                  </span>
                  <h3 className="font-bebas text-xl md:text-2xl text-foreground">
                    {commandment.title}
                  </h3>
                </div>
                {expandedIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-accent flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-accent flex-shrink-0" />
                )}
              </button>

              {expandedIndex === index && (
                <div className="px-6 pb-6 animate-slideUp">
                  <p className="text-foreground/90 leading-relaxed text-lg">
                    {commandment.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commandments;
