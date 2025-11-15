import { Shield } from "lucide-react";

const tactics = [
  {
    number: 1,
    title: "THE FAMILY GATHERING NAVIGATION",
    content: "Upon arrival: Kiss EVERYONE (two cheeks). Don't know them? Doesn't matter. Everyone gets a kiss. Say \"bendición\" to anyone over 50. Compliment the food immediately. Find the person making cafécito and befriend them. Never be the first to leave. When you do leave, budget 45 minutes for goodbye hugs."
  },
  {
    number: 2,
    title: "THE ARGUMENT DE-ESCALATION PROTOCOL",
    steps: [
      'Step 1: Say "You\'re right, mi amor"',
      "Step 2: There is no step 2, you already won by surrendering",
      "Alternative strategy: Distract with food offers",
      "Last resort: Blame it on being tired/hungry/confused",
      "Never attempt: Logic and reason (will backfire spectacularly)"
    ]
  },
  {
    number: 3,
    title: "THE FOOD SURVIVAL SYSTEM",
    steps: [
      "Always arrive hungry (you'll be fed immediately)",
      "Always accept seconds (refusing is insulting)",
      "Learn to love cilantro and recao (non-negotiable)",
      'Master the phrase "está riquísimo"',
      "Never suggest restaurants over home cooking",
      'Understand that "light snack" means 4-course meal'
    ]
  },
  {
    number: 4,
    title: "THE MUSIC SURVIVAL GUIDE",
    steps: [
      "Know the difference between salsa, bachata, and merengue",
      "Recognize Bad Bunny within 2 seconds",
      "Never skip reggaeton (punishable offense)",
      "Learn at least one Héctor Lavoe song",
      "Accept that music will be playing 24/7",
      "Dancing is mandatory at all social functions"
    ]
  },
  {
    number: 5,
    title: "THE WEATHER ADAPTATION PROTOCOL",
    steps: [
      "Buy a hoodie for when it's 75°F inside (she controls the AC)",
      'Accept that "cold" is subjective and you\'re wrong',
      'Never complain about heat (you\'re weak)',
      "Understand that beach weather is year-round",
      'The sun is not "too hot," you\'re just not adapted'
    ]
  }
];

const AdvancedTactics = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-16">
          <Shield className="w-12 h-12 text-primary" />
          <h2 className="font-bebas text-5xl md:text-7xl text-center text-primary">
            ADVANCED SURVIVAL TACTICS
          </h2>
        </div>
        <h3 className="font-bebas text-3xl md:text-4xl text-center mb-12 text-secondary">
          EXPERT LEVEL
        </h3>

        <div className="space-y-8">
          {tactics.map((tactic, index) => (
            <div
              key={index}
              className="bg-card border-4 border-accent rounded-2xl p-8 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <span className="font-bebas text-5xl text-accent flex-shrink-0">
                  #{tactic.number}
                </span>
                <h3 className="font-bebas text-2xl md:text-3xl text-foreground">
                  TACTIC {tactic.title}
                </h3>
              </div>

              {tactic.content && (
                <p className="text-foreground/90 text-lg leading-relaxed ml-16">
                  {tactic.content}
                </p>
              )}

              {tactic.steps && (
                <ul className="space-y-3 ml-16">
                  {tactic.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start gap-3">
                      <span className="text-accent text-xl flex-shrink-0">→</span>
                      <span className="text-foreground/90 text-lg leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvancedTactics;
