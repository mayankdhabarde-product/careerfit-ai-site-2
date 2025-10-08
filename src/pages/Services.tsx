import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Briefcase,
  Users,
  Target,
  Clock,
  TrendingUp,
  Building2,
  Cpu,
  DollarSign,
  Heart,
  ShoppingCart,
  Factory,
  GraduationCap,
  Truck,
  Film,
  Package,
  Plane,
  Home,
  Zap,
  Lightbulb,
  Rocket,
  Globe,
  ChevronDown,
  ChevronUp,
  ImageIcon,
} from "lucide-react";

const Services = () => {
  const [openIndustryIndex, setOpenIndustryIndex] = useState<number | null>(null);
  const [modalStyle, setModalStyle] = useState<{ top: number; left: number; width: number } | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!event.target) return;
      if (openIndustryIndex !== null) {
        const modalEl = document.getElementById("industry-popup");
        if (modalEl && !modalEl.contains(event.target as Node)) {
          setOpenIndustryIndex(null);
          setModalStyle(null);
        }
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [openIndustryIndex]);

  const onOpenModal = (index: number) => {
    if (openIndustryIndex === index) {
      setOpenIndustryIndex(null);
      setModalStyle(null);
      return;
    }
    setOpenIndustryIndex(index);
    if (cardRefs.current[index]) {
      const rect = cardRefs.current[index]!.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      setModalStyle({
        top: rect.bottom + scrollTop + 8 - window.scrollY,
        left: rect.left + scrollLeft - window.scrollX,
        width: rect.width,
      });
    }
  };

  const focusAreas = [
    { icon: Briefcase, title: "Full-time Hiring", description: "Permanent roles across all levels - from entry-level to senior positions", color: "text-primary" },
    { icon: Users, title: "Internships & Early Talent", description: "Building your future workforce with fresh graduates and interns", color: "text-secondary" },
    { icon: Target, title: "Executive Search", description: "Leadership and C-suite placements for strategic growth", color: "text-primary" },
    { icon: Clock, title: "Contract & Temporary Staffing", description: "Flexible workforce solutions for project-based needs", color: "text-secondary" },
    { icon: TrendingUp, title: "Bulk Hiring", description: "Large-scale recruitment for rapid team expansion", color: "text-primary" },
    { icon: Building2, title: "Project-Based Recruitment", description: "Dedicated hiring campaigns tailored to your project timeline", color: "text-secondary" },
  ];

  const industries = [
    {
      icon: Building2,
      name: "B2B Service",
      color: "bg-primary/10",
      roles: [
        "Frontend Developer – SDE2",
        "Full Stack Engineer",
        "React Native Developer",
      ],
    },
    {
      icon: Building2,
      name: "Business Consulting and Services",
      color: "bg-secondary/10",
      roles: [
        "AEP Lead",
        "Allianze Lead",
        "Senior Data Engineer (AWS)",
        "Senior Data Engineer (Azure & Databricks)",
        "CJO/AJO Developer",
        "Project Manager",
        "Senior Project Manager",
        "Adobe Solution Architect",
        "BI Lead",
        "Lead Data Engineer/ Architect",
        "Product Architect (Full Stack)",
        "Data Architect",
        "AWS Data Engineer",
        "Azure Data Engineer (Databricks)",
        "Data Engineer (AWS)",
        "ODI Developer",
        "Data Engineer - Databricks & Azure",
        "Sr Data Scientist 2",
        "Data Engineer",
      ],
    },
    {
      icon: GraduationCap,
      name: "Consulting",
      color: "bg-primary/10",
      roles: [
        "Delivery Manager",
        "Solution Architect",
        "Flutter Developer",
        "Implementation Consultant",
        "Sales Officer / Business Development",
        "Senior Web Developer",
        ".NET Developer",
        "HR & Office Administrator",
      ],
    },
    {
      icon: GraduationCap,
      name: "EdTech",
      color: "bg-secondary/10",
      roles: [
        "Assistant Manager - Marketing",
        "Seo Manager",
        "Sales Manager",
      ],
    },
    {
      icon: GraduationCap,
      name: "Education",
      color: "bg-primary/10",
      roles: [
        "Admission Associate",
        "Business Development Executive",
        "University Application Processor",
        "Education Counsellor",
        "Education Counselor",
        "Social Media Strategist",
      ],
    },
    {
      icon: Zap,
      name: "Energy and Power",
      color: "bg-secondary/10",
      roles: [
        "Plant Head",
        "Assistant Manager/Deputy Manage-Accounts and Treasury",
        "Corporate Finance Manager (Treasury)",
        "RTCDP Data Architect",
        "Senior Executive - MIS",
      ],
    },
    {
      icon: Factory,
      name: "Manufacturing",
      color: "bg-primary/10",
      roles: [
        "Plant Head",
        "Engineer/ Sr. Engineer- After Sales",
        "Production Manager",
        "Manager Branding & Business Strategy",
        "Project Manager",
        "Instrumentation Engineer",
        "Senior Firmware Engineer",
        "Application Engineer",
        "Content Manager",
        "Quality Control and Testing Engineer (Mechanical)",
      ],
    },
    {
      icon: Heart,
      name: "Healthcare",
      color: "bg-secondary/10",
      roles: [
        "Executive International Business Development",
        "Production and Supply Chain Lead",
        "Embedded Hardware Engineer",
        "Accounts Controller",
        "Senior Executive, Regulatory Affairs & QA",
        "Logistics Account Executive",
        "Internal Sales Executive",
        "Product Development Engineer",
      ],
    },
    {
      icon: Cpu,
      name: "Technology",
      color: "bg-primary/10",
      roles: [
        "Vice President -- Operations",
        "Technical Solutions Architect - Aruba",
        "Senior Python Developer",
        "Backend Developer- Golang",
        "Android Developer",
        "Assistant Manager - Mergers & Acquisition (Tax)",
        "DevOps Engineer",
        "iOS Engineer",
        "SDE-II -- Python Developer",
        "AI - ML Engineer",
        "Backend Engineer",
        "Sr Data Engineer- Databricks",
        "Fullstack Architect",
        "Databricks Architect",
        "Senior Data Scientist -- Intelligent Offer Management",
      ],
    },
    {
      icon: Globe,
      name: "Urban Transit Services",
      color: "bg-secondary/10",
      roles: [
        "AVP/VP - Investment Banking (Origination)",
        "Vice President- Investment Banking (Equity)",
        "Vice President -- Investment Banking (Debt Syndication)",
        "Senior VP- Investment Banking (Debt Syndication)",
        "Senior VP- Investment Banking",
        "Management Trainee- Investment Banking",
        "Equity Analyst",
        "Project Finance",
        "Agronomist",
        "HR Leader",
        "Ecommerce Key Account Manager",
      ],
    },
  ];

  const companySizes = [
    {
      icon: Rocket,
      title: "Startups",
      description:
        "Fast-paced hiring for early-stage companies building their founding teams",
      stats: "1-50 employees",
    },
    {
      icon: Building2,
      title: "SMEs",
      description: "Scalable recruitment solutions for growing small and medium enterprises",
      stats: "51-500 employees",
    },
    {
      icon: Globe,
      title: "Large Enterprises",
      description:
        "Enterprise-grade hiring for multinational corporations and large organizations",
      stats: "500+ employees",
    },
  ];

  const metrics = [
    { value: "120+", label: "Companies Trust Us" },
    { value: "10 Days", label: "Average Time-to-Hire" },
    { value: "35%", label: "Cost Reduction" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle relative">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl md:text-1xl lg:text-3xl font-bold text-primary mb-6 animate-fade-in">
            Recruitment Solutions for Every Need
          </h1>
          <p className="text-sm text-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in animate-delay-100">
            From startups to enterprises, from tech to healthcare --- we find the perfect talent for companies of any size, in any industry, faster and smarter with AI-powered recruitment.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in animate-delay-200">
            <Link to="/contact">
              <Button size="lg" className="btn-hero">
                Share Your Hiring Requirements
              </Button>
            </Link>
            <Link to="/success-stories">
              <Button size="lg" variant="outline" className="btn-outline-hero">
                View Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-foreground/70 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section id="core-services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Core Services</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Comprehensive recruitment solutions tailored to your unique hiring needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <Card
                key={index}
                className="relative group hover:shadow-strong transition-all duration-300 border-2 border-border hover:border-primary/30 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div
                    className={`w-16 h-16 ${area.color} bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <area.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/70">{area.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section id="industries" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">Industries We Cater To</h2>
            <p className="text-l text-foreground/70 max-w-10xl mx-auto leading-relaxed">
              With deep domain expertise across diverse sectors, we deliver specialized talent acquisition solutions tailored to your industry's unique needs.
            </p>
          </div>

          {/* Industry Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className="relative group hover:shadow-strong transition-all duration-300 border-2 border-border hover:border-primary/30 animate-fade-in"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ImageIcon className="w-16 h-16 text-primary/30" />
                  </div>
                  <industry.icon className="w-20 h-20 text-primary z-10" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary">
                    {industry.roles.length} Roles
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl text-primary group-hover:text-secondary transition-colors">{industry.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenModal(index);
                    }}
                    className="w-full flex items-center justify-between text-sm font-semibold text-secondary hover:text-primary transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      All Jobs
                      {openIndustryIndex === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {/* Modal Popup positioned below clicked card */}
        {openIndustryIndex !== null && modalStyle && (
          <div
            id="industry-popup"
            style={{
              position: "fixed",
              top: modalStyle.top,
              left: modalStyle.left,
              width: modalStyle.width,
              zIndex: 9999,
              background: "#fff",
              borderRadius: 12,
              padding: 20,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h4 className="text-xs font-semibold text-primary/80 mb-3 uppercase tracking-wide">Positions we filled:</h4>
            <ul className="max-h-[400px] overflow-y-auto space-y-2 text-sm text-foreground/80">
              {industries[openIndustryIndex].roles.map((role, idx) => (
                <li key={idx} className="flex items-start gap-2 hover:text-primary">
                  <span className="text-secondary">&#8226;</span>
                  <span>{role}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Link to="/contact">
                <Button className="w-full">Give Your Requirement</Button>
              </Link>
            </div>
          </div>
        )}
      </section>

      {/* Company Sizes Section */}
      <section id="company-sizes" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">We Work With Companies of All Sizes</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Whether you're a lean startup or a global enterprise, our recruitment solutions scale with your needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {companySizes.map((size, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <size.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-primary">{size.title}</CardTitle>
                  <div className="text-sm text-secondary font-semibold mt-2">{size.stats}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/70">{size.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Careerfit.AI?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            We combine cutting-edge AI technology with expert human insight to deliver exceptional recruitment outcomes. Our data-driven approach reduces time-to-hire by 75%, minimizes hiring risks, and ensures you get candidates who are not just qualified---but the perfect cultural and technical fit.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">10x</div>
              <div className="text-white/80">Faster Hiring Process</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">35%</div>
              <div className="text-white/80">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-white/80">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Meet Our Expert Recruiters</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Our team of experienced talent acquisition specialists brings deep industry knowledge and a passion for connecting the right people with the right opportunities.
          </p>
          <Link to="/about#team">
            <Button size="lg" variant="outline" className="btn-outline-hero">Meet the Team</Button>
          </Link>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Ready to Build Your Dream Team?</h2>
          <p className="text-xl text-foreground/70 mb-8">
            Let's discuss your hiring needs and create a customized recruitment strategy that delivers results in just 10 days.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="btn-hero">Contact Sales Team</Button>
            </Link>
            <Link to="/success-stories">
              <Button size="lg" variant="secondary">View Case Studies</Button>
            </Link>
          </div>
          <p className="text-sm text-foreground/60 mt-6">Free consultation • No setup fees • Results guaranteed</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
