import { useEffect, useRef } from "react";

// Import all logos here (adjust filenames if needed)
import adverbLogo from "@/assets/Logos/adverb.jpeg";
import bankkeepingLogo from "@/assets/Logos/Bankkeeping.jpeg";
import clamaLogo from "@/assets/Logos/Clama.jpeg";
import dharakshaLogo from "@/assets/Logos/Dharaksha Ecosolutions.jpeg";
import elementsFinancialLogo from "@/assets/Logos/Elements_Financial_solutions.jpeg";
import endureairLogo from "@/assets/Logos/endureair.jpeg";
import homevilleLogo from "@/assets/Logos/Homeville.jpeg";
import johnEnergyLogo from "@/assets/Logos/john_energy.jpeg";
import lenekLogo from "@/assets/Logos/lenek.jpeg";
import niyantransLogo from "@/assets/Logos/niyantrans.jpeg";
import perceptyneLogo from "@/assets/Logos/Perceptyne.jpeg";
import rapidLogo from "@/assets/Logos/rapid.jpeg";
import secureinteliLogo from "@/assets/Logos/Secureinteli Technologies.jpeg";
import shrimaLogo from "@/assets/Logos/Shrima.jpeg";
import skimaLogo from "@/assets/Logos/Skima.jpeg";
import swanLogo from "@/assets/Logos/swan.jpeg";
import strideLogo from "@/assets/Logos/Stride.jpeg";
import tcgLogo from "@/assets/Logos/TCG.jpeg";
import tintCosmeticsLogo from "@/assets/Logos/Tint Cosmetics.jpeg";
import transvoltLogo from "@/assets/Logos/Transvolt.jpeg";
import turnoLogo from "@/assets/Logos/turno.jpeg";

const logos = [
  adverbLogo, bankkeepingLogo, clamaLogo, dharakshaLogo, elementsFinancialLogo, endureairLogo,
  homevilleLogo, johnEnergyLogo, lenekLogo, niyantransLogo, perceptyneLogo, rapidLogo,
  secureinteliLogo, shrimaLogo, skimaLogo, swanLogo, strideLogo, tcgLogo, tintCosmeticsLogo,
  transvoltLogo, turnoLogo
];

const ClientLogos = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollStep = 1;
    const scrollDelay = 30;

    const autoScroll = () => {
      scrollAmount += scrollStep;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const interval = setInterval(autoScroll, scrollDelay);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-semibold text-muted-foreground mb-3">
          Trusted by leading companies worldwide
        </h2>

        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex space-x-14 overflow-x-hidden select-none"
            style={{ width: "200%" }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-48 h-28 flex-shrink-0"
              >
                <img
                  src={logo}
                  alt="Client logo"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;