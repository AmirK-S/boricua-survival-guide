import { MapPin, Heart } from "lucide-react";

const memories = [
  {
    icon: "🏖️",
    title: "Vieques: Worth the Wait",
    story: "We slept in the car before catching the ferry at dawn. Sounds crazy? Maybe. But then we got to that beach - completely empty, just us and the ocean. We cracked fresh coconuts together under the sun. Those moments? Priceless."
  },
  {
    icon: "🦀",
    title: "Mama Cobito & Her Babies",
    story: "On a secluded beach in Vieques, we found a huge mama cobito with tons of tiny baby cobitos crawling around. Nobody else was there - just us, the hermit crabs, and the sound of waves. It felt like our own private paradise."
  },
  {
    icon: "💦",
    title: "The Apple Watch Waterfall Discovery",
    story: "Driving around the island, exploring waterfalls together. At one of them, I somehow found an Apple Watch in the pool of water. Random? Yes. Unforgettable adventure? Absolutely. Every waterfall was an adventure with you."
  },
  {
    icon: "🥪",
    title: "Walmart Chicken Sandwiches",
    story: "She took Walmart chicken and garlic bread and turned it into the most incredible sandwiches I've ever had. It's not about fancy restaurants - it's about how she puts love into everything she makes. Those simple sandwiches? Still think about them."
  },
  {
    icon: "🥑",
    title: "The Avocado Incident",
    story: "Lesson learned the hard way: NEVER microwave a Puerto Rican avocado. They taste horrible after. But hey, now I know. And the fresh ones? Absolute perfection. The mangos too - completely addicted now."
  },
  {
    icon: "🌯",
    title: "Burritos & Beach Drinks",
    story: "Yes, we ate burritos even though they're Mexican. Yes, we got drunk on the beach together watching the sunset. No, I wouldn't change any of it. Every moment exploring the island with you was perfect."
  },
  {
    icon: "🚗",
    title: "Driving Adventures",
    story: "We drove everywhere together. Waterfalls, beaches, hidden spots, random adventures. The island became our playground. Every drive was a new memory, every turn a new story."
  },
  {
    icon: "✈️",
    title: "Monthly Flights From Paradise",
    story: "Every month, you fly from Puerto Rico to Paris. Through work stress, through exhaustion, through almost missing flights - you still come. That's not just commitment. That's love. And soon, I'm coming to you. 2026, we'll make new memories on your island together."
  }
];

const OurStory = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-secondary/5 to-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-8">
          <MapPin className="w-12 h-12 text-secondary" />
          <h2 className="font-bebas text-5xl md:text-7xl text-center text-secondary">
            OUR ADVENTURES
          </h2>
          <Heart className="w-12 h-12 text-accent" />
        </div>

        <h3 className="font-bebas text-3xl md:text-4xl text-center mb-4 text-primary">
          REAL STORIES FROM THE ISLAND
        </h3>

        <p className="text-center italic text-foreground/70 mb-12 max-w-3xl mx-auto">
          Because this isn't just a survival guide. It's our story. Every adventure, every laugh,
          every moment that made me fall more in love with you and your island.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {memories.map((memory, index) => (
            <div
              key={index}
              className="bg-card border-4 border-border rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl">{memory.icon}</span>
                <h3 className="font-bebas text-2xl text-foreground">
                  {memory.title}
                </h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                {memory.story}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-accent/10 border-4 border-accent rounded-2xl text-center">
          <p className="text-xl font-bold text-accent mb-4">
            For Shanna 💙
          </p>
          <p className="text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            Every adventure we've had, every moment we've shared - they're all here because they matter.
            You matter. This website isn't just funny - it's my way of showing you that I remember everything.
            The big moments and the small ones. The beaches and the waterfalls. The coconuts and the cobitos.
            The stress and the joy. All of it. I see you. I love you. And I can't wait for all the adventures
            still to come.
          </p>
          <p className="mt-6 text-2xl font-bebas text-primary">
            Je t'aime, mi amor ❤️🇫🇷🇵🇷
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
