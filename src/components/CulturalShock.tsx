const categories = [
  {
    title: "FOOD",
    icon: "🍽️",
    items: [
      "Normal meal portions: What you think is dinner for 4 is actually lunch for 2",
      'Spice level: "Not spicy" still has more flavor than your entire cuisine',
      "Breakfast: Forget cereal, it's mallorca bread and café",
      "Dinner time: Sometime between 7 PM and midnight",
      "Saying you're full: Offensive and suspicious"
    ]
  },
  {
    title: "FAMILY",
    icon: "👨‍👩‍👧‍👦",
    items: [
      "Personal space: What's that?",
      "Family size: Extended family has 400+ people",
      "Family gatherings: 6 hours minimum, 12 hours average",
      "Privacy: Doesn't exist, everyone knows everything",
      "Leaving early: Impossible, you'll offend 73 people"
    ]
  },
  {
    title: "COMMUNICATION",
    icon: "💬",
    items: [
      'Normal volume: Your "yelling" is her "whispering"',
      "Argument duration: 4 hours is just getting started",
      "Hand gestures: Required for every sentence",
      "Eye contact: Intense and unwavering",
      "Directness level: Brutally honest, feelings optional"
    ]
  },
  {
    title: "TIME",
    icon: "⏰",
    items: [
      '"On time": 45 minutes late is actually early',
      '"5 minutes": Could be 2 hours',
      '"Later": Undefined temporal dimension',
      '"Tomorrow": Maybe this week',
      "Planning ahead: Why plan when you can improvise?"
    ]
  }
];

const CulturalShock = () => {
  return (
    <section className="py-20 px-4 bg-muted/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bebas text-5xl md:text-7xl text-center mb-4 text-secondary">
          THE CULTURAL SHOCK
        </h2>
        <h3 className="font-bebas text-3xl md:text-4xl text-center mb-16 text-primary">
          SURVIVAL MATRIX
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-card border-4 border-border rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl">{category.icon}</span>
                <h3 className="font-bebas text-3xl text-accent">
                  CATEGORY: {category.title}
                </h3>
              </div>

              <ul className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <span className="text-primary text-xl flex-shrink-0">•</span>
                    <span className="text-foreground/90 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CulturalShock;
