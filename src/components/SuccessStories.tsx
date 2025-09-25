import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const stories = [
    {
      company: "TechCorp Solutions",
      logo: "💻",
      industry: "Technology",
      challenge: "Needed 15 senior developers within 30 days for a critical product launch",
      solution: "AI-powered screening identified top-tier talent from our global network",
      result: "Hired 15 developers in 8 days, launched on schedule, saved $200K in recruitment costs",
      quote: "Careerfit.AI transformed our hiring process. What usually takes months was completed in just over a week with exceptional quality candidates.",
      author: "Sarah Chen",
      title: "VP of Engineering",
      metrics: {
        timeReduction: "80%",
        costSavings: "$200K",
        satisfaction: "98%"
      }
    },
    {
      company: "FinanceFirst Bank",
      logo: "🏦",
      industry: "Financial Services",
      challenge: "Urgent need for compliance officers with specific regulatory experience",
      solution: "Specialized screening for financial regulations and risk management expertise",
      result: "Filled 8 compliance positions in 12 days with 100% retention rate after 6 months",
      quote: "The depth of their candidate vetting process is unmatched. Every hire has exceeded our expectations.",
      author: "Michael Rodriguez",
      title: "Chief Compliance Officer",
      metrics: {
        timeReduction: "75%",
        costSavings: "$150K",
        satisfaction: "100%"
      }
    },
    {
      company: "HealthPlus Medical",
      logo: "🏥",
      industry: "Healthcare",
      challenge: "Critical shortage of specialized nurses during expansion",
      solution: "Targeted outreach to certified professionals with required specializations",
      result: "Hired 25 nurses in 14 days, all with perfect credentials and cultural fit",
      quote: "Their understanding of healthcare requirements and urgency helped us staff our new facility seamlessly.",
      author: "Dr. Jennifer Park",
      title: "Chief Medical Officer",
      metrics: {
        timeReduction: "70%",
        costSavings: "$120K",
        satisfaction: "95%"
      }
    }
  ];

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0]?.getBoundingClientRect().width || 0;
      scrollRef.current.scrollTo({
        left: index * (cardWidth + 24), // 24px gap
        behavior: 'smooth'
      });
    }
    setCurrentIndex(index);
  };

  const nextStory = () => {
    const nextIndex = (currentIndex + 1) % stories.length;
    scrollToIndex(nextIndex);
  };

  const prevStory = () => {
    const prevIndex = currentIndex === 0 ? stories.length - 1 : currentIndex - 1;
    scrollToIndex(prevIndex);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we've helped companies transform their hiring process and build exceptional teams
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevStory}
              className="rounded-full shadow-medium hover:shadow-strong transition-all"
              aria-label="Previous story"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex space-x-2">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary" : "bg-muted"
                  }`}
                  aria-label={`Go to story ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextStory}
              className="rounded-full shadow-medium hover:shadow-strong transition-all"
              aria-label="Next story"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Stories Carousel */}
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {stories.map((story, index) => (
              <div
                key={story.company}
                className="flex-shrink-0 w-full max-w-4xl bg-card rounded-2xl shadow-strong p-8 border border-border hover:shadow-medium transition-all duration-300"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Company Info */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center text-2xl">
                        {story.logo}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary">
                          {story.company}
                        </h3>
                        <p className="text-muted-foreground">{story.industry}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Challenge</h4>
                        <p className="text-muted-foreground">{story.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Solution</h4>
                        <p className="text-muted-foreground">{story.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Result</h4>
                        <p className="text-muted-foreground">{story.result}</p>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-secondary">
                          {story.metrics.timeReduction}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Time Reduction
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-secondary">
                          {story.metrics.costSavings}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Cost Savings
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-secondary">
                          {story.metrics.satisfaction}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Satisfaction
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="space-y-6">
                    <blockquote className="text-lg leading-relaxed text-foreground">
                      "{story.quote}"
                    </blockquote>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">
                          {story.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-primary">{story.author}</div>
                        <div className="text-muted-foreground">{story.title}</div>
                      </div>
                    </div>

                    <Link to="/success-stories" className="inline-flex items-center space-x-2 text-primary hover:text-secondary transition-colors group">
                      <span className="font-medium">Read Full Case Study</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;