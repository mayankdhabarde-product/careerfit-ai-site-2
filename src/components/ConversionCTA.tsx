import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, DollarSign, Shield } from "lucide-react";

const ConversionCTA = () => {
  const benefits = [
    {
      icon: Clock,
      text: "10-day average hiring time"
    },
    {
      icon: DollarSign,
      text: "35% cost reduction guaranteed"
    },
    {
      icon: Shield,
      text: "100% satisfaction guarantee"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your 
            <br />
            Hiring Process?
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join 120+ companies that have revolutionized their recruitment with Careerfit
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.text}
                className={`flex items-center space-x-3 text-white/90 animate-slide-up animate-delay-${(index + 1) * 100}`}
              >
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <benefit.icon className="w-4 h-4" />
                </div>
                <span className="font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="animate-slide-up animate-delay-400">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-10 py-4 shadow-strong hover:shadow-medium transition-all duration-300 hover:scale-105"
              >
                Contact Sales Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          <p className="text-white/80 text-sm mt-6">
            Free consultation • No setup fees • Results guaranteed
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConversionCTA;