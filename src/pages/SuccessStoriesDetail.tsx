import { Link } from "react-router-dom";
import { ArrowRight, Clock, DollarSign, Users, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const SuccessStoriesDetail = () => {
  const detailedStories = [
    {
      id: 1,
      company: "TechCorp Solutions",
      logo: "💻",
      industry: "Technology",
      size: "500-1000 employees",
      contactName: "Sarah Chen",
      contactTitle: "VP of Engineering",
      contactEmail: "s.chen@techcorp.com",
      rolesFilledCount: 15,
      rolesFilled: [
        "Senior Full Stack Developers (8)",
        "DevOps Engineers (3)",
        "Product Managers (2)",
        "UI/UX Designers (2)"
      ],
      challenge: {
        title: "Critical Product Launch Under Threat",
        description: "TechCorp Solutions had a major product launch scheduled in 6 weeks but was short 15 critical technical positions. Previous recruitment efforts over 3 months had only filled 2 positions, and the launch was at risk of being delayed, potentially costing millions in revenue and market positioning.",
        pain_points: [
          "Traditional recruitment taking 45+ days per hire",
          "High candidate rejection rates (70%)",
          "Lack of qualified candidates in their network",
          "Urgency causing rushed hiring decisions",
          "Budget constraints limiting recruitment options"
        ]
      },
      solution: {
        title: "AI-Powered Rapid Deployment Strategy",
        description: "We deployed our specialized tech recruitment team with AI-enhanced candidate matching. Our approach included accessing our pre-vetted developer network, implementing parallel interview processes, and providing dedicated project management.",
        process: [
          "Day 1: Requirements analysis and role specification",
          "Day 2-3: AI-powered candidate identification from our network",
          "Day 4-6: Initial screening and technical assessments",
          "Day 7-8: Client interviews conducted in parallel batches",
          "Day 8-10: Final selections and offer negotiations"
        ],
        tools_used: [
          "AI-powered skill matching algorithms",
          "Pre-vetted global talent network",
          "Automated technical screening platform",
          "Parallel interview scheduling system",
          "Real-time candidate tracking dashboard"
        ]
      },
      results: {
        title: "Exceptional Results Delivered",
        timeframe: "8 days",
        metrics: {
          time_reduction: "85%",
          cost_savings: "$200,000",
          candidate_acceptance_rate: "95%",
          client_satisfaction: "98%",
          retention_after_6_months: "100%"
        },
        outcomes: [
          "Product launched on schedule with full team",
          "No compromise on candidate quality or cultural fit",
          "Significant cost savings vs traditional recruitment",
          "Established ongoing partnership for future hiring needs",
          "Team performance exceeded initial expectations"
        ]
      },
      testimonial: {
        quote: "Careerfit.ai transformed our hiring process completely. What usually takes months was completed in just over a week with exceptional quality candidates. Every hire has not only met but exceeded our expectations, and our product launch was a huge success thanks to having the right team in place.",
        author: "Sarah Chen",
        title: "VP of Engineering",
        company: "TechCorp Solutions"
      }
    },
    {
      id: 2,
      company: "FinanceFirst Bank",
      logo: "🏦",
      industry: "Financial Services",
      size: "1000+ employees",
      contactName: "Michael Rodriguez",
      contactTitle: "Chief Compliance Officer",
      contactEmail: "m.rodriguez@financefirst.com",
      rolesFilledCount: 8,
      rolesFilled: [
        "Senior Compliance Officers (4)",
        "Risk Management Specialists (2)",
        "Regulatory Affairs Managers (2)"
      ],
      challenge: {
        title: "Regulatory Compliance Crisis",
        description: "Following new regulatory changes, FinanceFirst Bank needed to rapidly expand their compliance team to meet strict deadlines. The specialized nature of financial compliance roles made finding qualified candidates extremely challenging.",
        pain_points: [
          "Highly specialized skill requirements",
          "Limited pool of qualified candidates",
          "Strict regulatory deadlines to meet",
          "Need for specific industry certifications",
          "Competition with other financial institutions"
        ]
      },
      solution: {
        title: "Specialized Financial Services Recruitment",
        description: "Our financial services recruitment specialists leveraged deep industry connections and targeted certified professionals. We implemented a rigorous vetting process focusing on regulatory knowledge and compliance experience.",
        process: [
          "Regulatory requirement analysis with legal team",
          "Targeted outreach to certified compliance professionals",
          "Specialized assessment of regulatory knowledge",
          "Background verification and certification validation",
          "Cultural fit assessment for banking environment"
        ],
        tools_used: [
          "Financial services talent database",
          "Regulatory knowledge assessment platform",
          "Certification verification system",
          "Industry network of compliance professionals",
          "Specialized interview frameworks"
        ]
      },
      results: {
        title: "Perfect Compliance Team Built",
        timeframe: "12 days",
        metrics: {
          time_reduction: "75%",
          cost_savings: "$150,000",
          candidate_acceptance_rate: "90%",
          client_satisfaction: "100%",
          retention_after_6_months: "100%"
        },
        outcomes: [
          "All regulatory deadlines met successfully",
          "Zero compliance violations post-hiring",
          "Strengthened regulatory relationship",
          "Enhanced risk management capabilities",
          "Improved audit readiness"
        ]
      },
      testimonial: {
        quote: "The depth of their candidate vetting process is unmatched. Every hire has exceeded our expectations, and we successfully met all regulatory requirements ahead of schedule. Their understanding of our industry is exceptional.",
        author: "Michael Rodriguez",
        title: "Chief Compliance Officer",
        company: "FinanceFirst Bank"
      }
    },
    {
      id: 3,
      company: "HealthPlus Medical",
      logo: "🏥",
      industry: "Healthcare",
      size: "2000+ employees",
      contactName: "Dr. Jennifer Park",
      contactTitle: "Chief Medical Officer",
      contactEmail: "j.park@healthplus.com",
      rolesFilledCount: 25,
      rolesFilled: [
        "ICU Nurses (10)",
        "Emergency Department Nurses (8)",
        "Surgical Nurses (4)",
        "Nurse Practitioners (3)"
      ],
      challenge: {
        title: "Critical Staffing Shortage During Expansion",
        description: "HealthPlus Medical was opening a new facility but faced a severe nursing shortage. The critical nature of healthcare roles and specific certification requirements made recruitment extremely challenging.",
        pain_points: [
          "National nursing shortage affecting recruitment",
          "Specific certification and license requirements",
          "Need for immediate availability",
          "High-stress role requiring cultural fit",
          "Competition with other healthcare facilities"
        ]
      },
      solution: {
        title: "Healthcare-Focused Rapid Deployment",
        description: "Our healthcare recruitment team activated relationships with nursing professionals nationwide. We implemented expedited licensing verification and cultural fit assessments specific to healthcare environments.",
        process: [
          "Nationwide outreach to certified nursing professionals",
          "Expedited license and certification verification",
          "Healthcare-specific competency assessments",
          "Cultural fit evaluation for medical environment",
          "Streamlined onboarding coordination"
        ],
        tools_used: [
          "Healthcare professional network",
          "License verification platform",
          "Medical competency assessment tools",
          "Healthcare-specific interview protocols",
          "Rapid onboarding systems"
        ]
      },
      results: {
        title: "Complete Staffing Solution Delivered",
        timeframe: "14 days",
        metrics: {
          time_reduction: "70%",
          cost_savings: "$120,000",
          candidate_acceptance_rate: "88%",
          client_satisfaction: "95%",
          retention_after_6_months: "96%"
        },
        outcomes: [
          "New facility opened on schedule",
          "Full staffing with experienced professionals",
          "Excellent patient care standards maintained",
          "Strong team cohesion and morale",
          "Established foundation for future expansion"
        ]
      },
      testimonial: {
        quote: "Their understanding of healthcare requirements and urgency helped us staff our new facility seamlessly. Every nurse they placed has been exceptional, and we're already working with them for our next expansion.",
        author: "Dr. Jennifer Park",
        title: "Chief Medical Officer",
        company: "HealthPlus Medical"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in">
              Success Stories
            </h1>
            <p className="text-xl text-white/90 animate-slide-up animate-delay-100">
              Real results from companies that transformed their hiring with Careerfit.ai
            </p>
          </div>
        </section>

        {/* Detailed Case Studies */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {detailedStories.map((story, index) => (
                <article 
                  key={story.id}
                  className={`bg-white rounded-2xl shadow-strong p-8 lg:p-12 animate-fade-in animate-delay-${(index + 1) * 100}`}
                >
                  {/* Header */}
                  <header className="text-center mb-12">
                    <div className="flex items-center justify-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center text-2xl">
                        {story.logo}
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-primary">{story.company}</h2>
                        <p className="text-muted-foreground">{story.industry} • {story.size}</p>
                      </div>
                    </div>
                    
                    {/* Key Metrics */}
                    <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-secondary mb-2">
                          {story.results.timeframe}
                        </div>
                        <div className="text-sm text-muted-foreground">Time to Hire</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-secondary mb-2">
                          {story.rolesFilledCount}
                        </div>
                        <div className="text-sm text-muted-foreground">Positions Filled</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-secondary mb-2">
                          {story.results.metrics.cost_savings}
                        </div>
                        <div className="text-sm text-muted-foreground">Cost Savings</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-secondary mb-2">
                          {story.results.metrics.retention_after_6_months}
                        </div>
                        <div className="text-sm text-muted-foreground">6-Month Retention</div>
                      </div>
                    </div>
                  </header>

                  <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div className="space-y-8">
                      {/* Contact Information */}
                      <div className="bg-muted/30 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-primary mb-4">Client Contact</h3>
                        <div className="space-y-2">
                          <p><strong>{story.contactName}</strong></p>
                          <p className="text-muted-foreground">{story.contactTitle}</p>
                          <p className="text-muted-foreground">{story.contactEmail}</p>
                        </div>
                      </div>

                      {/* Challenge */}
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-4">
                          The Challenge
                        </h3>
                        <h4 className="text-lg font-semibold mb-3">{story.challenge.title}</h4>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {story.challenge.description}
                        </p>
                        <div>
                          <h5 className="font-semibold mb-2">Key Pain Points:</h5>
                          <ul className="space-y-2">
                            {story.challenge.pain_points.map((point, i) => (
                              <li key={i} className="flex items-start space-x-2">
                                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-muted-foreground">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Roles Filled */}
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-4">
                          Positions Successfully Filled
                        </h3>
                        <div className="space-y-2">
                          {story.rolesFilled.map((role, i) => (
                            <div key={i} className="flex items-center space-x-3 p-3 bg-muted/20 rounded-lg">
                              <Users className="w-4 h-4 text-secondary" />
                              <span>{role}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                      {/* Solution */}
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-4">
                          Our Solution
                        </h3>
                        <h4 className="text-lg font-semibold mb-3">{story.solution.title}</h4>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {story.solution.description}
                        </p>
                        
                        <div className="mb-6">
                          <h5 className="font-semibold mb-3">Implementation Process:</h5>
                          <div className="space-y-3">
                            {story.solution.process.map((step, i) => (
                              <div key={i} className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-gradient-hero rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                                  {i + 1}
                                </div>
                                <span className="text-muted-foreground">{step}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h5 className="font-semibold mb-2">Tools & Technologies Used:</h5>
                          <div className="flex flex-wrap gap-2">
                            {story.solution.tools_used.map((tool, i) => (
                              <span key={i} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Results */}
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-4">
                          Measurable Results
                        </h3>
                        <h4 className="text-lg font-semibold mb-4">{story.results.title}</h4>
                        
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="bg-muted/20 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-secondary mb-1">
                              {story.results.metrics.time_reduction}
                            </div>
                            <div className="text-sm text-muted-foreground">Time Reduction</div>
                          </div>
                          <div className="bg-muted/20 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-secondary mb-1">
                              {story.results.metrics.candidate_acceptance_rate}
                            </div>
                            <div className="text-sm text-muted-foreground">Acceptance Rate</div>
                          </div>
                          <div className="bg-muted/20 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-secondary mb-1">
                              {story.results.metrics.client_satisfaction}
                            </div>
                            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                          </div>
                          <div className="bg-muted/20 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-secondary mb-1">
                              {story.results.metrics.retention_after_6_months}
                            </div>
                            <div className="text-sm text-muted-foreground">6-Month Retention</div>
                          </div>
                        </div>

                        <div>
                          <h5 className="font-semibold mb-2">Key Outcomes:</h5>
                          <ul className="space-y-2">
                            {story.results.outcomes.map((outcome, i) => (
                              <li key={i} className="flex items-start space-x-2">
                                <TrendingUp className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                <span className="text-muted-foreground">{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="mt-12 bg-gradient-subtle rounded-xl p-8">
                    <blockquote className="text-lg text-center leading-relaxed text-foreground mb-6">
                      "{story.testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">
                          {story.testimonial.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-primary">{story.testimonial.author}</div>
                        <div className="text-muted-foreground">{story.testimonial.title}</div>
                        <div className="text-muted-foreground">{story.testimonial.company}</div>
                      </div>
                    </div>
                  </div>

                  {/* Separator line between stories */}
                  {index < detailedStories.length - 1 && (
                    <hr className="mt-16 border-t border-border/30" />
                  )}
                </article>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-20 text-center">
              <div className="bg-gradient-hero rounded-2xl p-12 text-white">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Write Your Success Story?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Join these companies and transform your hiring process today
                </p>
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-10 py-4"
                  >
                    Contact Our Sales Team
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SuccessStoriesDetail;