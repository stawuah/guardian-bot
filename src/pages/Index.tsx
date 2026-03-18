import Navbar from "@/components/sentinel/Navbar";
import Hero from "@/components/sentinel/Hero";
import TrustBar from "@/components/sentinel/TrustBar";
import Stats from "@/components/sentinel/Stats";
import HowItWorks from "@/components/sentinel/HowItWorks";
import FeatureAlerts from "@/components/sentinel/FeatureAlerts";
import FeatureTrailing from "@/components/sentinel/FeatureTrailing";
import Comparison from "@/components/sentinel/Comparison";
import Pricing from "@/components/sentinel/Pricing";
import Testimonials from "@/components/sentinel/Testimonials";
import CtaBlock from "@/components/sentinel/CtaBlock";
import Footer from "@/components/sentinel/Footer";

const Index = () => (
  <div className="min-h-screen bg-background overflow-x-hidden">
    <Navbar />
    <Hero />
    <TrustBar />
    <Stats />
    <HowItWorks />
    <FeatureAlerts />
    <FeatureTrailing />
    <Comparison />
    <Pricing />
    <Testimonials />
    <CtaBlock />
    <Footer />
  </div>
);

export default Index;
