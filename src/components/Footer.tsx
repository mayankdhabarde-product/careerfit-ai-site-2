import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Success Stories", path: "/success-stories" },
    { name: "About Us", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Contact Sales", path: "/contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
  ];


  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold">Careerfit</span>
            </Link>
            
            <p className="text-white/80 leading-relaxed">
              Transforming recruitment with AI-powered solutions. Hire top talent 
              for your company within 10 days with 35% cost reduction.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-secondary" />
                <a 
                  href="tel:+918885005749" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  +91 8885005749
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-secondary" />
                <a 
                  href="mailto:team@Careerfit.ai" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  team@Careerfit.ai
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Location */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Office</h3>
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
                  <span className="font-medium">Mumbai</span>
                </div>
                <p className="text-white/80 text-sm ml-6">
                  3rd Floor, Chintamani Plaza, Andheri - Kurla Rd.<br />
                  Rd, Marol Naka, Andheri East, Mumbai, Maharashtra 400059
                </p>
              </div>
            </div>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Connect With Us</h3>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-8">
              <a
                href="https://linkedin.com/company/Careerfit.ai-ai"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/Careerfit.ai_ai"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-medium mb-3">Legal</h4>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-white/80 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-white/10 text-center">
          <p className="text-white/60">
            © {new Date().getFullYear()} Careerfit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;