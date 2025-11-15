import { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

const Footer = () => {
  const [showChancleta, setShowChancleta] = useState(false);

  return (
    <footer className="relative py-20 px-4 bg-muted text-muted-foreground overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-8xl">🌴</div>
        <div className="absolute top-20 right-20 text-8xl">🥥</div>
        <div className="absolute bottom-10 left-1/4 text-8xl">🌺</div>
        <div className="absolute bottom-20 right-1/3 text-8xl">🦜</div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main text */}
        <p className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
          Made with ❤️, sofrito, love, and survival instinct
        </p>

        <p className="text-xl mb-8 text-accent italic">
          "Still alive (happily surrendered)"
        </p>

        {/* Easter egg button */}
        <div className="mb-8">
          <Button
            onClick={() => setShowChancleta(true)}
            variant="outline"
            size="lg"
            className="border-4 border-destructive text-destructive hover:bg-destructive hover:text-white font-bold text-lg px-8 py-6 rounded-full hover-scale"
          >
            🩴 Emergency Chancleta Tracker
          </Button>
        </div>

        {/* Social share buttons */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <Button
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white"
          >
            Share on Twitter
          </Button>
          <Button
            variant="outline"
            className="border-2 border-pr-blue text-pr-blue hover:bg-pr-blue hover:text-white"
          >
            Share on Facebook
          </Button>
          <Button
            variant="outline"
            className="border-2 border-accent text-accent hover:bg-accent hover:text-white"
          >
            Share on WhatsApp
          </Button>
        </div>

        {/* Final disclaimer */}
        <div className="max-w-3xl mx-auto p-6 bg-card/50 border-2 border-border rounded-xl">
          <p className="text-sm text-foreground/70 leading-relaxed">
            <span className="font-bold">Disclaimer:</span> All stereotypes are exaggerated for comedic effect.
            Except the sofrito part. That's 100% real. This guide is a love letter to Puerto Rican women
            and the beautiful, chaotic, passionate culture they share with those lucky enough to be part of their lives.
            Made with love from a French guy who wouldn't change a thing.
            <span className="spanish-text"> ¡Que viva Puerto Rico!</span> 🇵🇷
          </p>
        </div>

        {/* Copyright */}
        <p className="mt-8 text-sm text-foreground/50">
          © 2025 Boricua Survival Guide • Made with love, cafecito, and zero regrets
        </p>
      </div>

      {/* Chancleta tracker modal */}
      <Dialog open={showChancleta} onOpenChange={setShowChancleta}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="font-bebas text-3xl text-destructive text-center">
              🩴 CHANCLETA ALERT SYSTEM
            </DialogTitle>
          </DialogHeader>

          <div className="py-8 text-center">
            <div className="text-6xl mb-6 animate-shake">🩴</div>
            
            <div className="space-y-4">
              <div className="p-4 bg-destructive/10 border-2 border-destructive rounded-lg">
                <p className="font-bold text-destructive text-xl">CURRENT THREAT LEVEL</p>
                <p className="text-4xl font-bebas text-destructive mt-2">MAXIMUM</p>
              </div>

              <div className="p-4 bg-card border-2 border-border rounded-lg">
                <p className="font-bold mb-2">Last Known Location:</p>
                <p className="text-foreground/80">Her hand (ready position)</p>
              </div>

              <div className="p-4 bg-card border-2 border-border rounded-lg">
                <p className="font-bold mb-2">Estimated Range:</p>
                <p className="text-foreground/80">30 feet with pinpoint accuracy</p>
              </div>

              <div className="p-4 bg-yellow-500/10 border-2 border-yellow-500 rounded-lg">
                <p className="font-bold text-yellow-600 mb-2">⚠️ SURVIVAL TIP</p>
                <p className="text-sm text-foreground/80">
                  Duck, apologize, and never make the same mistake twice.
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export default Footer;
