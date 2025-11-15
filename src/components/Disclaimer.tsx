import { AlertTriangle } from "lucide-react";

const Disclaimer = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-destructive/10 border-4 border-destructive rounded-2xl p-8 md:p-12 transform hover:rotate-1 transition-transform duration-300 shadow-2xl">
          <div className="flex items-start gap-4 mb-6">
            <AlertTriangle className="w-12 h-12 text-destructive flex-shrink-0 animate-pulse" />
            <h2 className="font-bebas text-4xl md:text-5xl text-destructive">
              OFFICIAL DISCLAIMER
            </h2>
          </div>

          <div className="space-y-4 text-lg">
            <p className="font-bold text-foreground">
              ⚠️ WARNING: This guide was written by a French guy who clearly did NOT survive
              (but happily surrendered). Proceed with caution, arroz con gandules, and an open heart.
            </p>

            <p className="text-foreground/90">
              <span className="font-bold text-accent">Side effects may include:</span> becoming fluent in Spanglish, 
              permanent plantain addiction, understanding that <span className="spanish-text">"ahorita"</span> means 
              "maybe today, maybe tomorrow, maybe never", and the inability to enjoy bland food ever again.
            </p>

            <p className="text-foreground/90">
              <span className="font-bold text-secondary">Not responsible for:</span> familia drama, 
              chancleta-related injuries, or your sudden need to debate island politics at 2 AM.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
