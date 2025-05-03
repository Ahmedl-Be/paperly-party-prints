
import React from "react";
import Header from "@/components/layout/Header";
import PricingHero from "@/components/pricing/PricingHero";
import PricingCards from "@/components/pricing/PricingCards";
import FeatureComparison from "@/components/pricing/FeatureComparison";
import FaqSection from "@/components/pricing/FaqSection";
import CallToAction from "@/components/pricing/CallToAction";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <PricingHero />
      <PricingCards />
      <FeatureComparison />
      <FaqSection />
      <CallToAction />
    </div>
  );
};

export default Pricing;
