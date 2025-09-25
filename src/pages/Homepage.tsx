import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import Features from "@/components/Features";
import ComparisonTable from "@/components/ComparisonTable";
import SuccessStories from "@/components/SuccessStories";
import ConversionCTA from "@/components/ConversionCTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Homepage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ClientLogos />
        <Features />
        <ComparisonTable />
        <SuccessStories />
        <ConversionCTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;