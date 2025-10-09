import { Users, Target, Zap, Shield, Award, ArrowRight, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import atulImg from "@/assets/Team/atul_kumar.jpeg";
import reenalImg from "@/assets/Team/reenal_rawal.jpeg";
import sakshiImg from "@/assets/Team/Sakshi.jpeg";
import akshataImg from "@/assets/Team/akshata_pawar.jpeg";
import nishaImg from "@/assets/Team/Nisha.jpeg";
import asmitaImg from "@/assets/Team/asmita_singh.jpeg";
import deveshImg from "@/assets/Team/Devesh_Bhosale.jpeg";
import { Rocket, Star } from "lucide-react";

const About = () => {
  const teamMembers = [
  {
    name: "Atul Kumar",
    role: "Founder",
    description: "Visionary leader driving AI innovation in recruitment",
    image: atulImg,
  },
  {
    name: "Asmita Singh",
    role: "Lead - Talent Acquisition",
    description: "Driving strategies with a focus on quality hires and team leadership",
    image: asmitaImg,
  },
  {
    name: "Devesh Bhosale",
    role: "Lead - Talent Acquisition",
    description: "Builds high-performance teams through leading recruitment",
    image: deveshImg,
  },
    {
      name: "Reenal Rawal",
      role: "Talent Acquisition Specialist",
      description: "Expert in matching top talent with perfect opportunities",
      image: reenalImg,
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
      image: sakshiImg,
    },
    {
      name: "Akshata Pawar",
      role: "Senior Talent Acquisition Specialist",
      description: "Strategic hiring expert with deep industry knowledge",
      image: akshataImg,
    },
    {
      name: "Nisha Shinde",
      role: "Senior Talent Acquisition Specialist",
      description: "Results-driven professional focused on quality placements",
      image: nishaImg,
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
      
      <main className="pt-10">

        {/* Mission */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="animate-slide-in-left">
      <h2 className="text-3xl font-bold mb-6 flex items-center space-x-3 text-orange-600">
        <Rocket 
          className="w-8 h-8 text-orange-600 animate-spin-slow" 
          strokeWidth={1.5} 
        />
        <span>Our Mission</span>
      </h2>

      <p className="text-lg text-black leading-relaxed mb-8">
        We’re on a mission to make hiring smarter, faster, and fairer for every business — no matter the size or location.<br />
        By using AI and data-driven insights, we eliminate inefficiencies and bias from traditional recruitment, connecting companies with the right talent effortlessly.
      </p>

      <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
        <p className="text-foreground font-medium">
          "Every great company is built on great people. Our mission is to help you find yours."
        </p>
      </div>
    </div>
  </div>
</section>


{/* Vision */}
<section className="-py-10 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="animate-slide-in-right">
      <h2 className="text-3xl font-bold mb-6 flex items-center space-x-3 text-blue-600">
        <Star 
          className="w-8 h-8 text-blue-600 animate-pulse" 
          strokeWidth={1.5}
        />
        <span>Our Vision</span>
      </h2>

      <p className="text-lg text-black leading-relaxed mb-8">
        To redefine recruitment through intelligent matching — where every hire fits perfectly, every process is transparent, and every decision drives growth
        We envision a world where finding the right talent isn’t a challenge but a seamless experience powered by AI and human insight </p>
      <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
        <p className="text-foreground font-medium">
          "Building the future of work, one perfect hire at a time."
        </p>
      </div>
    </div>
  </div>
</section>


        {/* Why Choose Us */}
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                Why Choose us?
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
                The talented professionals behind Careerfit's success
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={member.name}
                  className={`bg-white p-6 rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300 text-center animate-scale-in animate-delay-${(index + 1) * 100}`}
                >
                  <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-4">
                    {(member.name === "Taslim Patel" || member.name === "Sana Shaikh") || !member.image ? (
                      <div className="bg-gradient-hero flex items-center justify-center w-full h-full">
                        <span className="text-white font-bold text-lg">{member.initials}</span>
                        </div>
                        ) : (
                        <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                         />
                          )}</div>


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
                Join the companies who trust Careerfit to build their exceptional teams. 
                Let's create your success story together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/contact">
                  <Button className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-10 py-4 shadow-strong hover:shadow-medium transition-all duration-300 hover:scale-105">
                    Get Started
                  </Button>
                </Link>
                <Link to="/success-stories">
                  <Button variant="outline" className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-10 py-4 shadow-strong hover:shadow-medium transition-all duration-300 hover:scale-105"
>
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
                  href="mailto:team@Careerfit.ai"
                  className="flex items-center space-x-2 text-primary hover:text-secondary transition-colors group shadow-strong hover:shadow-medium transition-all duration-300 hover:scale-105"
                >
                  <span className="font-medium">team@Careerfit.ai</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+918885005749"
                  className="flex items-center space-x-2 text-primary hover:text-secondary transition-colors group shadow-strong hover:shadow-medium transition-all duration-300 hover:scale-105"
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