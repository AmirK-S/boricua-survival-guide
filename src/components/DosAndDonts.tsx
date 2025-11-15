import { CheckCircle2, XCircle } from "lucide-react";

const dos = [
  'Learn to say "que rico!" after every meal',
  "Attend EVERY family function (even the cousin's boyfriend's sister's baby shower)",
  "Learn at least basic salsa steps before someone's wedding",
  "Compliment abuela's cooking (ALWAYS)",
  "Keep the house at arctic temperature (she likes the AC at 65°F)",
  'Say "provecho" when anyone is eating',
  "Learn the difference between recao and cilantro (your life depends on it)",
  "Accept that rice and beans are a food group",
  "Dance bachata even if you have no rhythm",
  "Learn to make café con leche the right way",
  'Understand that "we\'re leaving in 5 minutes" means start getting ready in 45 minutes',
  "Agree when she says Bad Bunny is the greatest artist of all time",
  "Memorize her entire family tree (quiz incoming)",
  'Learn that "casual party" means dress nice',
  "Accept that her mom's opinion matters more than yours"
];

const donts = [
  'Ever say "it\'s just Puerto Rico" (grounds for immediate breakup)',
  "Compare her cooking to your mom's (unless you want war)",
  'Say you\'re "not that hungry" at family gatherings (cardinal sin)',
  'Suggest Taco Bell for "Latin food" (deportation-level offense)',
  'Call it "Mexican music" when it\'s clearly reggaeton',
  "Skip calling her mom on Mother's Day (you'll never recover)",
  'Say "Puerto Rico is basically Hawaii" (no, just... no)',
  "Criticize the cleaning style (she learned from her mom who learned from HER mom)",
  "Touch the thermostat without permission (serious violation)",
  'Suggest she "needs to relax" (death wish)',
  "Forget important dates (her memory is PERFECT)",
  'Call plantains "bananas" (educational emergency)',
  "Rush her when she's getting ready (impossible anyway)",
  "Talk politics unless you're 1000% sure of your facts",
  "Suggest cutting out her family (are you insane?)"
];

const DosAndDonts = () => {
  return (
    <section className="py-20 px-4 bg-muted/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bebas text-5xl md:text-7xl text-center mb-16 text-primary">
          CRITICAL DOS AND DON'TS
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* DOS */}
          <div className="bg-green-500/10 border-4 border-green-500 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-8">
              <CheckCircle2 className="w-12 h-12 text-green-500" />
              <h3 className="font-bebas text-4xl text-green-500">
                THE ULTIMATE DO LIST ✅
              </h3>
            </div>

            <ul className="space-y-4">
              {dos.map((item, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <span className="text-foreground/90 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* DON'TS */}
          <div className="bg-destructive/10 border-4 border-destructive rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-8">
              <XCircle className="w-12 h-12 text-destructive" />
              <h3 className="font-bebas text-4xl text-destructive">
                THE FORBIDDEN DON'TS ❌
              </h3>
            </div>

            <ul className="space-y-4">
              {donts.map((item, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1 group-hover:animate-shake" />
                  <span className="text-foreground/90 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DosAndDonts;
