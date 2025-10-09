import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null); // for delayed hide
  const location = useLocation();


  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services", hasDropdown: true },
    { name: "Success Stories", path: "/success-stories" },
    { name: "About", path: "/about" },
  ];


  const industries = [
    "Technology & IT",
    "Financial Services & FinTech",
    "Healthcare & Life Sciences",
    "Retail & E-commerce",
    "Manufacturing & Engineering",
    "Education & EdTech",
    "Logistics & Supply Chain",
    "Media & Entertainment",
    "Consumer Goods & FMCG",
    "Hospitality & Travel",
    "Real Estate & Construction",
    "Energy & Utilities",
    "Nonprofit & Social Impact"
  ];


  const coreServices = [
    "Full-time Hiring",
    "Internships & Early Talent",
    "Executive Search",
    "Contract & Temporary Staffing",
    "Bulk Hiring",
    "Project-Based Recruitment"
  ];


  const companySizes = [
    { name: "Startups", desc: "1-50 employees" },
    { name: "SMEs", desc: "51-500 employees" },
    { name: "Large Enterprises", desc: "500+ employees" }
  ];


  const isActive = (path: string) => location.pathname === path;


  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setShowServicesMenu(false);
  };


  // Clear pending timeout on enter (for delayed hide)
  const onServicesMouseEnter = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    setShowServicesMenu(true);
  };


  // Set a delay before hiding to allow mouse to move to dropdown
  const onServicesMouseLeave = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setShowServicesMenu(false);
    }, 200); // 200ms delay, tune as needed
  };


  // Same delay logic for dropdown container
  const onDropdownMouseEnter = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    setShowServicesMenu(true);
  };


  const onDropdownMouseLeave = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setShowServicesMenu(false);
    }, 200);
  };


  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, []);


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-xl font-bold text-primary">Careerfit</span>
          </Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={item.hasDropdown ? onServicesMouseEnter : undefined}
                onMouseLeave={item.hasDropdown ? onServicesMouseLeave : undefined}
              >
                <Link
                  to={item.path}
                  className={`font-medium transition-colors hover:text-primary flex items-center gap-1 ${
                    isActive(item.path) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>


                {/* Services Mega Menu Dropdown */}
                {item.hasDropdown && showServicesMenu && (
                  <div
                    className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-xl shadow-strong border-2 border-primary/10 p-6 z-50 animate-fade-in"
                    onMouseEnter={onDropdownMouseEnter}
                    onMouseLeave={onDropdownMouseLeave}
                    style={{ transformOrigin: "top center" }}
                  >
                    <div className="grid grid-cols-3 gap-6">
                      {/* Industries Column */}
                      <div>
                        <h3 className="text-sm font-bold text-primary mb-3 uppercase tracking-wide">
                          Industries
                        </h3>
                        <ul className="space-y-2 max-h-[320px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/40">
                          {industries.map((industry) => (
                            <li key={industry}>
                              <Link
                                to="/services"
                                onClick={() =>
                                  scrollToSection(
                                    `industry-${industry
                                      .toLowerCase()
                                      .replace(/\s+/g, "-")}`
                                  )
                                }
                                className="text-sm text-foreground/70 hover:text-primary transition-colors block py-1"
                              >
                                {industry}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>


                      {/* Core Services Column */}
                      <div>
                        <h3 className="text-sm font-bold text-primary mb-3 uppercase tracking-wide">
                          Our Core Services
                        </h3>
                        <ul className="space-y-2 max-h-[320px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/40">
                          {coreServices.map((service) => (
                            <li key={service}>
                              <Link
                                to="/services"
                                onClick={() => scrollToSection("core-services")}
                                className="text-sm text-foreground/70 hover:text-primary transition-colors block py-1"
                              >
                                {service}
                              </Link>
                            </li>
                          ))}
                        </ul>


                        {/* Company Sizes in same column */}
                        <h3 className="text-sm font-bold text-primary mb-3 uppercase tracking-wide mt-6">
                          Company Sizes
                        </h3>
                        <ul className="space-y-2 max-h-[140px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/40">
                          {companySizes.map((size) => (
                            <li key={size.name}>
                              <Link
                                to="/services"
                                onClick={() => scrollToSection("company-sizes")}
                                className="text-sm text-foreground/70 hover:text-primary transition-colors block py-1"
                              >
                                <span className="font-semibold">{size.name}</span>
                                <span className="text-xs block text-foreground/50">
                                  {size.desc}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>


                      {/* CTA Column */}
                      <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-4 flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg font-bold text-primary mb-2">
                            Ready to Hire?
                          </h3>
                          <p className="text-sm text-foreground/70 mb-4">
                            Share your hiring requirements and get matched with perfect candidates in 10 days.
                          </p>
                        </div>
                        <Link to="/contact">
                          <Button className="w-full btn-hero">Get Started</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>


          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <Button className="btn-hero">Contact Sales</Button>
            </Link>
          </div>


          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>


      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-border shadow-medium">
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? "text-primary" : "text-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button className="btn-hero w-full">Contact Sales</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};


export default Navbar;