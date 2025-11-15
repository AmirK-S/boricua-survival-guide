import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import Disclaimer from "@/components/Disclaimer";
import ThreatLevel from "@/components/ThreatLevel";
import Commandments from "@/components/Commandments";
import DosAndDonts from "@/components/DosAndDonts";
import Vocabulary from "@/components/Vocabulary";
import CulturalShock from "@/components/CulturalShock";
import AdvancedTactics from "@/components/AdvancedTactics";
import WarningSigns from "@/components/WarningSigns";
import EmergencyProtocols from "@/components/EmergencyProtocols";
import Reward from "@/components/Reward";
import Footer from "@/components/Footer";
import FloatingChancleta from "@/components/FloatingChancleta";

// Made with love for Shanna ❤️ - Worth every beautiful, chaotic moment

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Survival meter */}
      <div className="fixed top-0 left-0 w-full h-1 bg-border z-50">
        <div
          className="h-full tropical-gradient transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <FloatingChancleta />

      <Hero />
      <Disclaimer />
      <ThreatLevel />
      <Commandments />
      <DosAndDonts />
      <Vocabulary />
      <CulturalShock />
      <AdvancedTactics />
      <WarningSigns />
      <EmergencyProtocols />
      <Reward />
      <Footer />
    </div>
  );
};

export default Index;
