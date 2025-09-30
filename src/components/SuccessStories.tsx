import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Clock, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

interface SuccessStoriesProps {
  compact?: boolean;
}

const SuccessStories: React.FC<SuccessStoriesProps> = ({ compact = false }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const stories = [
    {
      id: "pharmeasy",
      company: "TechCorp Solutions",
      industry: "Technology",
      logo: "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      challenge: "Needed to scale dev team rapidly for product launch",
      solution: "AI-powered matching found 15 senior developers in 3 weeks",
      result: "Reduced hiring time by 60% and accelerated product launch",
      quote: "Careerfit.ai transformed our hiring process. We found exceptional talent faster than ever before.",
      author: "Sarah Chen",
      title: "CTO, TechCorp Solutions",
      metrics: [
        { label: "Time to Hire", value: "8 days", icon: Clock },
        { label: "Developers Hired", value: "15", icon: Users },
        { label: "Time Reduction", value: "60%", icon: TrendingUp },
      ],
    },
    {
      id: "zomato",
      company: "FinanceFlow Inc",
      industry: "Financial Services",
      logo: "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      challenge: "Required specialized fintech talent with regulatory knowledge",
      solution: "Targeted search within fintech ecosystem with compliance expertise",
      result: "Built complete fintech team with 40% cost reduction",
      quote: "The quality of candidates and speed of delivery exceeded all our expectations. Game-changing partnership.",
      author: "Michael Rodriguez",
      title: "Head of Talent, FinanceFlow Inc",
      metrics: [
        { label: "Cost Reduction", value: "40%", icon: TrendingUp },
        { label: "Roles Filled", value: "12", icon: Users },
        { label: "Success Rate", value: "100%", icon: Clock },
      ],
    },
    {
      id: "swiggy",
      company: "HealthTech Innovations",
      industry: "Healthcare Technology",
      logo: "https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      challenge: "Building healthcare AI team with medical domain expertise",
      solution: "Specialized healthcare tech recruitment with AI/ML focus",
      result: "Assembled world-class team with 98% retention rate",
      quote: "Careerfit.ai understood our unique needs and delivered exceptional healthcare tech talent.",
      author: "Dr. Emily Watson",
      title: "Founder, HealthTech Innovations",
      metrics: [
        { label: "Retention Rate", value: "98%", icon: TrendingUp },
        { label: "Team Members", value: "8", icon: Users },
        { label: "Time to Build", value: "4 weeks", icon: Clock },
      ],
    },
    {
      id: "byju",
      company: "EduLearn Platform",
      industry: "Education Technology",
      logo: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      challenge: "Needed senior product manager with EdTech and AI experience",
      solution: "Deep EdTech network search with personalized learning expertise",
      result: "Found perfect candidate in 6 days, 25% user engagement boost",
      quote: "The cultural fit and technical expertise of our new hire has been phenomenal. Exactly what we needed.",
      author: "David Kim",
      title: "CEO, EduLearn Platform",
      metrics: [
        { label: "Time to Hire", value: "6 days", icon: Clock },
        { label: "Engagement Boost", value: "+25%", icon: TrendingUp },
        { label: "Cultural Fit", value: "100%", icon: Users },
      ],
    },
    {
      id: "paytm",
      company: "RetailTech Solutions",
      industry: "Retail Technology",
      logo: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      challenge: "Executive search for VP Engineering with retail tech experience",
      solution: "Executive search with leadership assessment and cultural alignment",
      result: "Perfect leadership hire who scaled engineering team 3x",
      quote: "Our VP Engineering hire has been transformational. Perfect blend of technical expertise and leadership.",
      author: "Lisa Thompson",
      title: "CEO, RetailTech Solutions",
      metrics: [
        { label: "Team Growth", value: "3x", icon: TrendingUp },
        { label: "Leadership Score", value: "10/10", icon: Users },
        { label: "Cultural Fit", value: "Perfect", icon: Clock },
      ],
    },
  ];

  const displayStories = compact ? stories.slice(0, 3) : stories;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % displayStories.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [displayStories.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % displayStories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + displayStories.length) % displayStories.length);
  };



  return (
    <section className={`${compact ? 'py-12' : 'py-20'} bg-gradient-to-br from-blue-50 to-teal-50`} id="success-stories" aria-label="Client Success Stories">
      <div className="container mx-auto px-4">
        {!compact && (
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" id="success-stories-heading">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-5xl mx-auto">
              See how we’ve accelerated recruitment timelines and cut costs for companies across industries
            </p>
          </div>
        )}
        
        {compact && (
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2" id="compact-success-stories">
              Client Success Stories
            </h3>
          </div>
        )}

        <div className="relative max-w-6xl mx-auto" role="region" aria-labelledby={compact ? "compact-success-stories" : "success-stories-heading"}>
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {displayStories.map((story, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                  role="article"
                  aria-label={`AI recruitment success story for ${story.company}`}
                >
                  <div className="bg-white rounded-xl shadow-xl p-6 lg:p-8 h-full">
                    <div className="flex flex-col gap-8">
                      {/* Company Logo */}
                      <div className="flex items-center gap-4">
                        <img 
                          src={story.logo} 
                          alt={`${story.company} logo - AI recruitment success story client`}
                          className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                          loading="lazy"
                        />
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{story.company}</h3>
                          <p className="text-gray-600">{story.industry}</p>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        {/* Challenge, Solution, Result */}
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1 text-sm">Challenge:</h4>
                            <p className="text-gray-600 text-sm">{story.challenge}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1 text-sm">Solution:</h4>
                            <p className="text-gray-600 text-sm">{story.solution}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1 text-sm">Result:</h4>
                            <p className="text-gray-600 text-sm">{story.result}</p>
                          </div>
                        </div>
                        
                        {/* Quote */}
                        <blockquote className="text-base text-gray-700 leading-relaxed italic border-l-4 border-blue-900 pl-4">
                          "{story.quote}"
                        </blockquote>
                        
                        {/* Author */}
                        <div className="text-center">
                          <p className="font-semibold text-gray-900 text-sm">{story.author}</p>
                          <p className="text-gray-600 text-xs">{story.title}</p>
                        </div>
                        
                        {/* Metrics */}
                        <div className="grid grid-cols-3 gap-4">
                          {story.metrics.map((metric, metricIndex) => (
                            <div key={metricIndex} className="text-center p-2 bg-gray-50 rounded-lg">
                              <div className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full mb-2">
                                <metric.icon className="w-4 h-4 text-blue-900" />
                              </div>
                              <div className="text-base font-bold text-blue-900">{metric.value}</div>
                              <div className="text-xs text-gray-600">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                        
                        {/* CTA Button */}
                        <div className="text-center">
                          <Link
                            to="/success-stories"
                            className="inline-flex items-center text-blue-900 hover:text-teal-600 font-semibold underline decoration-2 underline-offset-2 transition-colors text-sm"
                            aria-label={`Read full case study for ${story.company}`}
                          >
                            Read Full Case Study →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute -left-10 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow z-10"
            aria-label="Previous success story"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute -right-10 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow z-10"
            aria-label="Next success story"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2" role="tablist" aria-label="Success story navigation">
            {displayStories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-blue-900' : 'bg-gray-300'
                }`}
                role="tab"
                aria-selected={currentSlide === index}
                aria-label={`Go to AI recruitment success story ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
