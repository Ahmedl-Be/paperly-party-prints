
import React from "react";
import PricingCard from "./PricingCard";

const PricingCards = () => {
  return (
    <section className="py-12 mb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <PricingCard
            title="Free"
            price="$0"
            description="Perfect for trying out Paperly"
            features={[
              "3 invitations per month",
              "Basic templates",
              "Standard customization",
              "Digital sharing"
            ]}
            buttonText="Get Started"
            buttonLink="/create"
            highlighted={false}
          />
          
          {/* Premium Plan */}
          <PricingCard
            title="Premium"
            price="$9.99"
            period="per month"
            description="Ideal for special occasions"
            features={[
              "Unlimited invitations",
              "Premium templates",
              "Advanced customization",
              "Digital sharing",
              "Print-ready files",
              "QR code generation"
            ]}
            buttonText="Try Premium"
            buttonLink="/create"
            highlighted={true}
          />
          
          {/* Professional Plan */}
          <PricingCard
            title="Professional"
            price="$24.99"
            period="per month"
            description="Best for event planners & businesses"
            features={[
              "Unlimited invitations",
              "All premium templates",
              "Advanced customization",
              "Digital sharing",
              "Print-ready files",
              "QR code generation",
              "Priority support",
              "Team collaboration",
              "Brand customization"
            ]}
            buttonText="Contact Sales"
            buttonLink="/contact"
            highlighted={false}
          />
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
