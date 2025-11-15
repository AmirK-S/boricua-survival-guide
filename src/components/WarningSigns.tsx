import { XCircle, CheckCircle2 } from "lucide-react";

const redFlags = [
  "You still flinch at normal conversation volume",
  'You suggested Olive Garden for "Italian night"',
  "You think Taco Bell is Hispanic food",
  'You asked "why so much rice?"',
  "You don't know what a piragua is",
  "You called her dramatic (RIP)",
  "You forgot her mom's birthday",
  'You can\'t pronounce "mofongo" correctly',
  'You said "calm down" during an argument',
  "You think 70°F is warm"
];

const greenFlags = [
  'You automatically say "provecho" to strangers eating',
  "You know the entire family tree",
  "Your spice tolerance has tripled",
  "You can make rice and beans without instructions",
  'You understand that "ahorita" is relative',
  "You dance salsa without counting steps",
  "You know which abuela makes the best pasteles",
  "You defend Puerto Rico in any argument",
  'You say "wepa" unironically',
  "You prefer her cooking to any restaurant"
];

const WarningSigns = () => {
  return (
    <section className="py-20 px-4 bg-destructive/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-bebas text-5xl md:text-7xl text-center mb-16 text-destructive">
          WARNING SIGNS YOU'RE NOT SURVIVING
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Red Flags */}
          <div className="bg-card border-4 border-destructive rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-8">
              <XCircle className="w-10 h-10 text-destructive" />
              <h3 className="font-bebas text-3xl text-destructive">RED FLAGS CHECKLIST</h3>
            </div>

            <ul className="space-y-4">
              {redFlags.map((flag, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1 group-hover:animate-shake" />
                  <span className="text-foreground/90">{flag}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Green Flags */}
          <div className="bg-card border-4 border-green-500 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-8">
              <CheckCircle2 className="w-10 h-10 text-green-500" />
              <h3 className="font-bebas text-3xl text-green-500">
                GREEN FLAGS (YOU'RE SURVIVING!)
              </h3>
            </div>

            <ul className="space-y-4">
              {greenFlags.map((flag, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <span className="text-foreground/90">{flag}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarningSigns;
