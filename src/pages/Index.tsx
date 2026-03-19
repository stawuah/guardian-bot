import { motion } from "framer-motion";
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

const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

const Section = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    variants={{ ...reveal, visible: { ...reveal.visible, transition: { ...reveal.visible.transition, delay } } }}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
  >
    {children}
  </motion.div>
);

const Index = () => (
  <div className="min-h-screen bg-background overflow-x-hidden">
    <Navbar />
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}>
      <Hero />
    </motion.div>
    <Section><TrustBar /></Section>
    <Section><Stats /></Section>
    <Section><HowItWorks /></Section>
    <Section><FeatureAlerts /></Section>
    <Section><FeatureTrailing /></Section>
    <Section><Comparison /></Section>
    <Section><Pricing /></Section>
    <Section><Testimonials /></Section>
    <Section><CtaBlock /></Section>
    <Section><Footer /></Section>
  </div>
);

export default Index;
