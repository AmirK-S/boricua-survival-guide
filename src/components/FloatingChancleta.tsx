import { useState, useEffect } from "react";

const FloatingChancleta = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isFlying, setIsFlying] = useState(false);

  useEffect(() => {
    const flyAcrossScreen = () => {
      setIsFlying(true);
      setPosition({ x: -100, y: Math.random() * window.innerHeight });

      setTimeout(() => {
        setPosition({ x: window.innerWidth + 100, y: Math.random() * window.innerHeight });
      }, 100);

      setTimeout(() => {
        setIsFlying(false);
      }, 2000);
    };

    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        flyAcrossScreen();
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed pointer-events-none z-50 text-4xl transition-all duration-2000 ${
        isFlying ? "opacity-100" : "opacity-0"
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "rotate(-45deg)",
      }}
    >
      🩴
    </div>
  );
};

export default FloatingChancleta;
