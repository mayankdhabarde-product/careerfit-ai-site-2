import { Users, Target, Zap, Shield, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const About = () => {
  const teamMembers = [
    {
      name: "Atul Kumar",
      role: "Founder",
      description: "Visionary leader driving AI innovation in recruitment",
      initials: "AK"
    },
    {
      name: "Reenal Rawal",
      role: "Talent Acquisition Specialist",
      description: "Expert in matching top talent with perfect opportunities",
      initials: "RR"
    },
    {
      name: "Taslim Patel",
      role: "Talent Acquisition Associate",
      description: "Passionate about connecting professionals with their dream roles",
      initials: "TP"
    },
    {
      name: "Sakshi Rajapurkar",
      role: "Talent Acquisition Executive",
      description: "Dedicated to delivering exceptional hiring experiences",
      initials: "SR"
    },
    {
      name: "Akshata Pawar",
      role: "Senior Talent Acquisition Specialist",
      description: "Strategic hiring expert with deep industry knowledge",
      initials: "AP"
    },
    {
      name: "Nisha Shinde",
      role: "Senior Talent Acquisition Specialist",
      description: "Results-driven professional focused on quality placements",
      initials: "NS"
    },
    {
      name: "Sana Shaikh",
      role: "Human Resources Senior Recruiter",
      description: "HR specialist ensuring cultural fit and candidate success",
      initials: "SS"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Fairness",
      description: "We believe in transparent, unbiased hiring processes that give every candidate an equal opportunity to showcase their potential."
    },
    {
      icon: Target,
      title: "Expertise",
      description: "Our deep industry knowledge and AI-powered insights ensure we find the right talent for the right roles every time."
    },
    {
      icon: Zap,
      title: "Transparency",
      description: "Real-time updates and clear communication throughout the hiring process, keeping all stakeholders informed."
    },
    {
      icon: Users,
      title: "Client-First Mindset",
      description: "Your success is our success. We're committed to understanding your unique needs and delivering exceptional results."
    }
  ];

  const milestones = [
    { metric: "500+", label: "Successful Placements" },
    { metric: "120+", label: "Companies Trust Us" },
    { metric: "10", label: "Average Days to Hire" },
    { metric: "98%", label: "Client Satisfaction Rate" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in">
              AI-Powered Hiring, Human-Centric Approach
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto animate-fade-in animate-delay-200">
              We combine cutting-edge artificial intelligence with deep human expertise to revolutionize 
              how companies find and hire exceptional talent.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-slide-in-left">
                <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  To transform the hiring landscape by making exceptional talent accessible to every company, 
                  regardless of size or industry. We exist to eliminate the inefficiencies, biases, and 
                  frustrations that plague traditional recruitment.
                </p>
                <div className="bg-gradient-subtle p-6 rounded-lg">
                  <p className="text-foreground font-medium">
                    "Every great company is built on great people. Our mission is to help you find yours."
                  </p>
                </div>
              </div>
              
              <div className="animate-slide-in-right">
                <h2 className="text-3xl font-bold text-primary mb-6">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  To become the global standard for intelligent recruitment, where every hire is a perfect 
                  match, every process is transparent, and every outcome exceeds expectations. We envision 
                  a world where finding the right talent is no longer a challenge.
                </p>
                <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
                  <p className="text-foreground font-medium">
                    "Building the future of work, one perfect hire at a time."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                Why Choose Careerfit.AI?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our unique blend of AI technology and human expertise sets us apart in the recruitment industry
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Zap,
                  title: "AI-Driven Efficiency",
                  description: "Advanced algorithms identify the best candidates 10x faster than traditional methods"
                },
                {
                  icon: Users,
                  title: "Human Expertise",
                  description: "Experienced recruiters provide the personal touch that technology alone cannot"
                },
                {
                  icon: Shield,
                  title: "Unbiased Process",
                  description: "Our AI eliminates unconscious bias, ensuring fair and equitable hiring decisions"
                },
                {
                  icon: Target,
                  title: "Perfect Matches",
                  description: "Comprehensive screening ensures cultural fit and long-term success"
                }
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  className={`bg-white p-6 rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300 animate-scale-in animate-delay-${(index + 1) * 100}`}
                >
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact & Milestones */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                Our Impact
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Numbers that showcase our commitment to excellence and client success
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.label}
                  className={`text-center p-8 bg-gradient-subtle rounded-2xl animate-scale-in animate-delay-${(index + 1) * 100}`}
                >
                  <div className="text-4xl font-bold text-secondary mb-2">
                    {milestone.metric}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {milestone.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The talented professionals behind Careerfit.AI's success
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={member.name}
                  className={`bg-white p-6 rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300 text-center animate-scale-in animate-delay-${(index + 1) * 100}`}
                >
                  <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{member.initials}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{member.name}</h3>
                  <p className="text-secondary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values & Culture */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The core principles that guide everything we do
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`flex items-start space-x-6 p-8 bg-gradient-subtle rounded-2xl animate-slide-in-${index % 2 === 0 ? 'left' : 'right'}`}
                >
                  <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-primary mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Transform Your Hiring?
              </h2>
              <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                Join the companies who trust Careerfit.AI to build their exceptional teams. 
                Let's create your success story together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/contact">
                  <Button className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold">
                    Get Started
                  </Button>
                </Link>
                <Link to="/success-stories">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold">
                    View Success Stories
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in">
              <h2 className="text-3xl font-bold text-primary mb-6">Let's Connect</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Have questions about our services? Want to discuss your hiring needs? 
                We'd love to hear from you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="mailto:team@careerfit.ai"
                  className="flex items-center space-x-2 text-primary hover:text-secondary transition-colors group"
                >
                  <span className="font-medium">team@careerfit.ai</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+918885005749"
                  className="flex items-center space-x-2 text-primary hover:text-secondary transition-colors group"
                >
                  <span className="font-medium">+91 8885005749</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;