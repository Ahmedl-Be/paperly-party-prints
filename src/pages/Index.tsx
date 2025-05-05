
import React from "react";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/home/HeroSection";
import FeaturedTemplates from "@/components/home/FeaturedTemplates";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/pricing/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <FeaturedTemplates />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Index;
