import { Zap, Target, Eye, Award } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Average 10-day hiring process compared to industry standard 45+ days. Get qualified candidates faster than ever.",
    },
    {
      icon: Target,
      title: "Perfect Fit",
      description: "AI-powered matching ensures every candidate is pre-screened and perfectly aligned with your company culture and requirements.",
    },
    {
      icon: Eye,
      title: "Full Transparency",
      description: "Real-time tracking and updates throughout the entire hiring process. Always know exactly where you stand.",
    },
    {
      icon: Award,
      title: "Industry Expertise",
      description: "Specialized knowledge across all industries with dedicated recruiters who understand your specific sector needs.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Why Choose Careerfit.AI?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We revolutionize recruitment with cutting-edge AI technology and proven expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`text-center group animate-slide-up animate-delay-${(index + 1) * 100}`}
            >
              <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-medium group-hover:shadow-strong transition-all duration-300 group-hover:scale-110">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;