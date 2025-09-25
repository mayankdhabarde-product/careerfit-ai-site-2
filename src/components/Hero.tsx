import { Clock, TrendingDown, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const metrics = [
    {
      icon: Clock,
      value: "10",
      unit: "Days",
      label: "Average Time-to-Hire",
    },
    {
      icon: TrendingDown,
      value: "35%",
      unit: "",
      label: "Hiring Cost Reduction",
    },
    {
      icon: Users,
      value: "120+",
      unit: "",
      label: "Companies Trust Us",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Hire Top Talent for your company{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                within 10 Days
              </span>
            </h1>

            {/* Metrics */}
            <div className="flex flex-wrap gap-6 lg:gap-8">
              {metrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className={`flex items-center space-x-3 animate-slide-up animate-delay-${(index + 1) * 100}`}
                >
                  <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                    <metric.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="flex items-baseline space-x-1">
                      <span className="text-2xl font-bold text-primary">
                        {metric.value}
                      </span>
                      {metric.unit && (
                        <span className="text-lg font-semibold text-secondary">
                          {metric.unit}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">
                      {metric.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="animate-slide-up animate-delay-400">
              <Link to="/contact">
                <Button size="lg" className="btn-hero text-lg px-8 py-4">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="animate-slide-in-right">
            <div className="hero-image-container">
              <img
                src={heroImage}
                alt="Professional recruitment team helping companies hire top talent"
                className="w-full h-auto transition-all duration-500 ease-out shadow-strong"
              />
              <div className="hero-image-overlay">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Hired in 8 days</h3>
                  <p className="text-white/90 font-medium">Real results from our clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;