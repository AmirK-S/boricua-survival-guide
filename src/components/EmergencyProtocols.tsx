import { AlertTriangle } from "lucide-react";

const protocols = [
  {
    code: "ALPHA",
    title: 'She Said "We Need to Talk"',
    threatLevel: "MAXIMUM",
    response: "Clear schedule, full attention, phone away",
    strategy: "Listen, apologize, agree",
    never: "Try to fix it with logic"
  },
  {
    code: "BRAVO",
    title: "You Forgot Something Important",
    threatLevel: "SEVERE",
    response: "Immediate apology, no excuses",
    strategy: "Make it up times three",
    never: 'Say "it\'s not a big deal"'
  },
  {
    code: "CHARLIE",
    title: "Family Drama Initiated",
    threatLevel: "HIGH",
    response: "Support her side always",
    strategy: "Nod, agree, stay quiet",
    never: "Give your opinion (trap!)"
  },
  {
    code: "DELTA",
    title: "The In-Laws Are Visiting",
    threatLevel: "ELEVATED",
    response: "Clean everything, prepare food, smile",
    strategy: "Be the perfect gentleman",
    never: "Relax or be yourself"
  }
];

const getThreatColor = (level: string) => {
  switch (level) {
    case "MAXIMUM":
      return "text-black bg-black";
    case "SEVERE":
      return "text-destructive bg-destructive";
    case "HIGH":
      return "text-orange bg-orange";
    case "ELEVATED":
      return "text-yellow-500 bg-yellow-500";
    default:
      return "text-green-500 bg-green-500";
  }
};

const EmergencyProtocols = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-16">
          <AlertTriangle className="w-12 h-12 text-destructive animate-pulse" />
          <h2 className="font-bebas text-5xl md:text-7xl text-center text-destructive">
            EMERGENCY PROTOCOLS
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {protocols.map((protocol, index) => (
            <div
              key={index}
              className="bg-card border-4 border-destructive rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="font-bebas text-4xl text-destructive">
                    PROTOCOL {protocol.code}
                  </span>
                </div>
                <h3 className="font-bold text-2xl text-foreground mb-4">
                  {protocol.title}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-foreground/70">Threat Level:</span>
                  <div className={`${getThreatColor(protocol.threatLevel)} px-4 py-1 rounded-full`}>
                    <span className="font-bebas text-white text-lg">
                      {protocol.threatLevel}
                    </span>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-4">
                <div>
                  <span className="font-bold text-primary">Response:</span>
                  <p className="text-foreground/90 ml-4">{protocol.response}</p>
                </div>

                <div>
                  <span className="font-bold text-green-500">Strategy:</span>
                  <p className="text-foreground/90 ml-4">{protocol.strategy}</p>
                </div>

                <div>
                  <span className="font-bold text-destructive">Never:</span>
                  <p className="text-foreground/90 ml-4">{protocol.never}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmergencyProtocols;
