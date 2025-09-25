import { useEffect, useRef } from "react";

const ClientLogos = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Company logos with proper alt text for accessibility
  const logos = [
    { name: "Google", logo: "🔍", bgColor: "bg-blue-50" },
    { name: "Amazon", logo: "📦", bgColor: "bg-orange-50" },
    { name: "Microsoft", logo: "⊞", bgColor: "bg-blue-50" },
    { name: "Apple", logo: "🍎", bgColor: "bg-gray-50" },
    { name: "Meta", logo: "👥", bgColor: "bg-blue-50" },
    { name: "Netflix", logo: "🎬", bgColor: "bg-red-50" },
    { name: "Tesla", logo: "⚡", bgColor: "bg-red-50" },
    { name: "Spotify", logo: "🎵", bgColor: "bg-green-50" },
    { name: "Uber", logo: "🚗", bgColor: "bg-black-50" },
    { name: "Airbnb", logo: "🏠", bgColor: "bg-pink-50" },
    { name: "Slack", logo: "💬", bgColor: "bg-purple-50" },
    { name: "Zoom", logo: "📹", bgColor: "bg-blue-50" },
  ];

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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold text-muted-foreground mb-12">
          Trusted by leading companies worldwide
        </h2>

        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex space-x-8 overflow-x-hidden"
            style={{ width: "200%" }}
          >
            {/* First set of logos */}
            <div className="flex space-x-8 min-w-full">
              {logos.map((company, index) => (
                <div
                  key={`first-${company.name}`}
                  className={`flex items-center justify-center w-32 h-20 ${company.bgColor} rounded-xl shadow-soft flex-shrink-0 hover:shadow-medium transition-shadow duration-300`}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-1">{company.logo}</div>
                    <span className="text-sm font-semibold text-gray-700">
                      {company.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex space-x-8 min-w-full">
              {logos.map((company, index) => (
                <div
                  key={`second-${company.name}`}
                  className={`flex items-center justify-center w-32 h-20 ${company.bgColor} rounded-xl shadow-soft flex-shrink-0 hover:shadow-medium transition-shadow duration-300`}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-1">{company.logo}</div>
                    <span className="text-sm font-semibold text-gray-700">
                      {company.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;