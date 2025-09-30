import { Check, X } from "lucide-react";

const ComparisonTable = () => {
  const comparisons = [
    {
      category: "Average Time to Hire",
      traditional: "45+ days",
      "Careerfit.ai": "10 days",
      isAdvantage: true,
    },
    {
      category: "Candidate Quality",
      traditional: "Mixed results",
      "Careerfit.ai": "Pre-screened experts",
      isAdvantage: true,
    },
    {
      category: "Cost Efficiency",
      traditional: "High overhead",
      "Careerfit.ai": "35% cost reduction",
      isAdvantage: true,
    },
    {
      category: "Process Transparency",
      traditional: "Limited updates",
      "Careerfit.ai": "Real-time tracking",
      isAdvantage: true,
    },
    {
      category: "Industry Expertise",
      traditional: "General approach",
      "Careerfit.ai": "Specialized knowledge",
      isAdvantage: true,
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Traditional vs. Careerfit.ai
          </h2>
          <p className="text-lg text-muted-foreground">
            See how we stack up against traditional recruitment methods
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-strong overflow-hidden animate-slide-up">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-6 py-4 text-left font-semibold"></th>
                  <th className="px-6 py-4 text-center font-semibold">
                    Traditional Recruiting
                  </th>
                  <th className="px-6 py-4 text-center font-semibold bg-secondary">
                    Careerfit.ai
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((item, index) => (
                  <tr
                    key={item.category}
                    className={`comparison-row border-b border-border ${
                      index % 2 === 0 ? "bg-white" : "bg-muted/20"
                    }`}
                  >
                    <td className="comparison-cell px-6 py-6 font-semibold text-primary">
                      {item.category}
                    </td>
                    <td className="comparison-cell px-6 py-6 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <X className="w-5 h-5 text-red-500" />
                        <span className="text-muted-foreground">
                          {item.traditional}
                        </span>
                      </div>
                    </td>
                    <td className="comparison-cell px-6 py-6 text-center bg-secondary/5">
                      <div className="flex items-center justify-center space-x-2">
                        <Check className="w-5 h-5 text-green-500" />
                        <span className="font-semibold text-secondary">
                          {item["Careerfit.ai"]}

                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;