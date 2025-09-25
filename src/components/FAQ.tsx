import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How can you guarantee hiring within 10 days?",
      answer: "Our AI-powered screening process and pre-vetted talent network allows us to quickly identify and present qualified candidates. We maintain relationships with top talent across industries and use advanced matching algorithms to connect the right people with the right opportunities faster than traditional methods."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We serve companies across all industries including Technology, Finance, Healthcare, Manufacturing, Retail, and more. Our team includes specialized recruiters with deep expertise in each sector, ensuring we understand the unique requirements and challenges of your industry."
    },
    {
      question: "How do you ensure candidate quality?",
      answer: "Every candidate goes through our rigorous multi-step screening process including skills assessment, background verification, cultural fit analysis, and reference checks. Our AI algorithms also analyze candidate profiles against successful hires to predict performance and retention."
    },
    {
      question: "What are your fees and payment terms?",
      answer: "Our fees are transparent and competitive, typically 35% lower than traditional recruitment agencies. We offer flexible payment terms and only charge when you successfully hire a candidate. Contact our sales team for detailed pricing based on your specific needs."
    },
    {
      question: "Do you provide any guarantees?",
      answer: "Yes, we offer a 90-day replacement guarantee. If a hired candidate doesn't work out within the first 90 days, we'll replace them at no additional cost. We also guarantee candidate delivery within our promised timeframes or provide additional services at no charge."
    },
    {
      question: "How do you handle confidential or sensitive hiring needs?",
      answer: "We maintain strict confidentiality protocols and can handle sensitive searches discreetly. All our recruiters sign comprehensive NDAs, and we have secure systems for managing confidential information. We can also conduct anonymous initial screenings when required."
    },
    {
      question: "Can you handle high-volume hiring?",
      answer: "Absolutely. Our scalable process and extensive talent network allow us to handle everything from single executive searches to hiring hundreds of employees. We've successfully managed large-scale hiring projects for companies during rapid expansion phases."
    },
    {
      question: "What happens if I'm not satisfied with the candidates?",
      answer: "If you're not satisfied with the initial candidate pool, we'll continue searching at no additional cost until we find the right fit. Our process includes regular feedback loops to refine our search criteria and ensure we're meeting your expectations."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our recruitment process
          </p>
        </div>

        <div className="animate-slide-up">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl shadow-soft border border-border px-6 py-2 hover:shadow-medium transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-primary hover:text-secondary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;