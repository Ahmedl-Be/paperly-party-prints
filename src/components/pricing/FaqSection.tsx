
import React from "react";
import FaqItem from "./FaqItem";

const FaqSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <FaqItem 
            question="Can I upgrade or downgrade my plan?"
            answer="Yes, you can upgrade or downgrade your subscription at any time. Changes will take effect on your next billing cycle."
          />
          <FaqItem 
            question="Is there a long-term commitment?"
            answer="No, all our plans are month-to-month. You can cancel anytime with no cancellation fees."
          />
          <FaqItem 
            question="What payment methods do you accept?"
            answer="We accept all major credit cards, PayPal, and Apple Pay."
          />
          <FaqItem 
            question="Do you offer refunds?"
            answer="We offer a 7-day money-back guarantee for all paid plans if you're not satisfied with our service."
          />
          <FaqItem 
            question="Can I try before I buy?"
            answer="Absolutely! Our Free plan lets you experience core features, and you can upgrade anytime."
          />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
