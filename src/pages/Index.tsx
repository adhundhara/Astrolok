import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AppPreview from "@/components/AppPreview";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AppPreview />
      <HowItWorks />
      <Features />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
