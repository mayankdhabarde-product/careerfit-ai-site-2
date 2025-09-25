import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle, Clock, DollarSign, Shield, Building } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  company: z.string().trim().min(2, "Company name is required").max(100, "Company name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(20, "Phone number must be less than 20 characters"),
  hiringRole: z.string().min(1, "Please select a hiring role"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Thank you for your interest!",
        description: "Our sales team will contact you within 24 hours.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const trustSignals = [
    {
      icon: Clock,
      title: "Free Consultation",
      description: "No-obligation discussion about your hiring needs"
    },
    {
      icon: DollarSign,
      title: "No Setup Fees",
      description: "Get started immediately with zero upfront costs"
    },
    {
      icon: Shield,
      title: "Results Guaranteed",
      description: "90-day replacement guarantee on all hires"
    }
  ];

  const quickStories = [
    {
      company: "TechCorp Solutions",
      logo: "💻",
      result: "Hired 15 developers in 8 days",
      savings: "$200K saved"
    },
    {
      company: "FinanceFirst Bank",
      logo: "🏦",
      result: "8 compliance officers in 12 days",
      savings: "$150K saved"
    },
    {
      company: "HealthPlus Medical",
      logo: "🏥",
      result: "25 nurses in 14 days",
      savings: "$120K saved"
    }
  ];

  const hiringRoles = [
    "Executive/C-Level",
    "Engineering/Technology",
    "Sales & Marketing",
    "Finance & Accounting",
    "Operations",
    "Human Resources",
    "Customer Success",
    "Healthcare",
    "Manufacturing",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in">
              Let's Transform Your Hiring Process
            </h1>
            <p className="text-xl text-white/90 animate-slide-up animate-delay-100">
              Get qualified candidates in 10 days with 35% cost reduction
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <div className="bg-white rounded-2xl shadow-strong p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">
                  Contact Our Sales Team
                </h2>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        {...register("name")}
                        className="mt-1"
                        placeholder="John Smith"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="company">Company *</Label>
                      <Input
                        id="company"
                        {...register("company")}
                        className="mt-1"
                        placeholder="Your Company Inc."
                      />
                      {errors.company && (
                        <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        className="mt-1"
                        placeholder="john@company.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        {...register("phone")}
                        className="mt-1"
                        placeholder="+1 (555) 123-4567"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="hiringRole">Primary Hiring Need *</Label>
                    <Select onValueChange={(value) => setValue("hiringRole", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select hiring focus" />
                      </SelectTrigger>
                      <SelectContent>
                        {hiringRoles.map((role) => (
                          <SelectItem key={role} value={role}>
                            {role}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.hiringRole && (
                      <p className="text-red-500 text-sm mt-1">{errors.hiringRole.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message">Tell us about your hiring needs *</Label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      className="mt-1 min-h-32"
                      placeholder="Describe your hiring challenges, timeline, and requirements..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-hero w-full"
                  >
                    {isSubmitting ? "Sending..." : "Get Started Today"}
                  </Button>
                </form>
              </div>
            </div>

            {/* Trust Signals & Stories */}
            <div className="space-y-8 animate-slide-in-right">
              {/* Trust Signals */}
              <div className="bg-white rounded-2xl shadow-strong p-8">
                <h3 className="text-xl font-bold text-primary mb-6">
                  Why Choose Careerfit.AI?
                </h3>
                <div className="space-y-6">
                  {trustSignals.map((signal, index) => (
                    <div key={signal.title} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center flex-shrink-0">
                        <signal.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">
                          {signal.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {signal.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Success Stories */}
              <div className="bg-white rounded-2xl shadow-strong p-8">
                <h3 className="text-xl font-bold text-primary mb-6">
                  Recent Success Stories
                </h3>
                <div className="space-y-6">
                  {quickStories.map((story, index) => (
                    <div key={story.company} className="border border-border rounded-xl p-4 hover:shadow-medium transition-all">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center text-lg">
                          {story.logo}
                        </div>
                        <h4 className="font-semibold text-primary">
                          {story.company}
                        </h4>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-secondary font-medium">
                            {story.result}
                          </div>
                        </div>
                        <div>
                          <div className="text-secondary font-medium">
                            {story.savings}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;