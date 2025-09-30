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
import SuccessStories from "@/components/SuccessStories";
import ClientLogos from "@/components/ClientLogos";
import FAQ from "@/components/FAQ";

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
      title: "Dedicated Support",
      description: "Assistance from dedicated industry expert Recruiter"
    },
    {
      icon: Shield,
      title: "Guaranteed results",
      description: "90-day replacement guarantee on all hires"
    },
    {
      icon: DollarSign,
      title: "No Setup Fees",
      description: "Get started immediately with zero upfront costs"
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
        <section className="py-10 bg-gradient-hero text-white">
          <div className="max-w-1xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-1xl sm:text-3xl font-bold mb-3 animate-fade-in">
              Let's Transform Your Hiring Process
            </h1>
            <p className="text-lg text-white/90 animate-slide-up animate-delay-100">
              Hire qualified candidates in just 10 days while reducing your hiring costs by 35%
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <div className="bg-white rounded-2xl shadow-strong p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">
                  Get in Touch with Our Sales Team
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

            {/* Trust Signals & Your AI Recruitment Journey Sections */}
            <div className="animate-slide-in-right flex flex-col w-full max-w-lg space-y-8">
              {/* Why Choose Careerfit.ai? */}
              <section className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300 w-full">
                <h3 className="text-xl font-bold text-primary mb-6">
                  Why Choose Careerfit.ai?
                </h3>
                <div className="space-y-6">
                  {trustSignals.map((signal) => (
                    <div key={signal.title} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center flex-shrink-0">
                        <signal.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">
                          {signal.title}
                        </h4>
                        <p className="text-muted-foreground">{signal.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Your AI Recruitment Journey */}
              <section
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 w-full cursor-pointer transform hover:-translate-y-1"
                role="region"
                aria-label="Your AI Recruitment Journey"
              >
                <h3 className="text-lg font-bold text-primary mb-4">Your AI Recruitment Journey</h3>
                <ul className="text-muted-foreground list-disc list-inside space-y-1 text-base">
                  <li>✓ We'll contact you within 24 hours</li>
                  <li>✓ A quick discovery call about your hiring needs</li>
                  <li>✓ Tailored strategy combining technology and human expertise</li>
                  <li>✓ Start receiving pre-screened candidates within 5 days</li>
                </ul>
              </section>
            </div>
          </div>
           <ClientLogos />
           <SuccessStories />
           <FAQ />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
