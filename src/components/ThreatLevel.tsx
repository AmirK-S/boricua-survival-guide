const ThreatLevel = () => {
  const levels = [
    { color: "bg-green-500", level: "SAFE ZONE", description: "You agreed with everything she said" },
    { color: "bg-yellow-500", level: "ELEVATED", description: "You forgot to say hi to her mom" },
    { color: "bg-orange", level: "HIGH", description: 'You said you\'re "not that hungry"' },
    { color: "bg-destructive", level: "SEVERE", description: "You compared Puerto Rico to another island" },
    { color: "bg-black", level: "CRITICAL", description: "You criticized her cooking" },
  ];

  return (
    <section className="py-20 px-4 bg-muted/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-bebas text-5xl md:text-7xl text-center mb-12 text-primary">
          THREAT LEVEL ASSESSMENT
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {levels.map((level, index) => (
            <div
              key={index}
              className="bg-card border-4 border-border rounded-xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-16 h-16 ${level.color} rounded-full animate-pulse`} />
                <h3 className="font-bebas text-2xl text-foreground">{level.level}</h3>
              </div>
              <p className="text-foreground/80">{level.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreatLevel;
