
import React from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Select the perfect plan for your invitation needs, whether you're creating a one-time event or managing multiple occasions
          </p>
        </div>
      </section>
      
      {/* Pricing Table */}
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
      
      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Feature Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-4 px-6 text-left font-medium text-gray-500">Features</th>
                  <th className="py-4 px-6 text-center font-medium text-gray-500">Free</th>
                  <th className="py-4 px-6 text-center font-medium text-purple-700 bg-purple-50">Premium</th>
                  <th className="py-4 px-6 text-center font-medium text-gray-500">Professional</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <FeatureRow 
                  feature="Invitations per month" 
                  free="3" 
                  premium="Unlimited" 
                  professional="Unlimited" 
                />
                <FeatureRow 
                  feature="Templates" 
                  free="Basic only" 
                  premium="All templates" 
                  professional="All templates" 
                />
                <FeatureRow 
                  feature="Customization" 
                  free="Limited" 
                  premium="Full" 
                  professional="Full + Brand colors" 
                />
                <FeatureRow 
                  feature="Print-ready files" 
                  free="No" 
                  premium="Yes" 
                  professional="Yes" 
                />
                <FeatureRow 
                  feature="QR Code generation" 
                  free="No" 
                  premium="Yes" 
                  professional="Yes" 
                />
                <FeatureRow 
                  feature="Analytics" 
                  free="No" 
                  premium="Basic" 
                  professional="Advanced" 
                />
                <FeatureRow 
                  feature="Team access" 
                  free="No" 
                  premium="No" 
                  professional="Up to 5 users" 
                />
                <FeatureRow 
                  feature="Support" 
                  free="Community" 
                  premium="Email" 
                  professional="Priority" 
                />
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
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
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to create beautiful invitations?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Start with our Free plan today. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg" className="animate-pulse-slow">
              <Link to="/create">Get Started Free</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
              <Link to="/templates">Browse Templates</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Pricing Card Component
const PricingCard = ({ 
  title, 
  price, 
  period = "", 
  description, 
  features, 
  buttonText, 
  buttonLink, 
  highlighted = false 
}: { 
  title: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  highlighted?: boolean;
}) => {
  return (
    <div 
      className={`rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg ${
        highlighted 
          ? 'shadow-md border-2 border-purple-500 transform scale-105 -mt-4' 
          : 'shadow border border-gray-200'
      }`}
    >
      {highlighted && (
        <div className="bg-purple-600 text-white text-center py-2 text-sm font-medium">
          MOST POPULAR
        </div>
      )}
      
      <div className="p-6 bg-white">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <div className="mb-6">
          <span className="text-4xl font-bold">{price}</span>
          {period && <span className="text-gray-500 ml-1">{period}</span>}
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <Button 
          asChild
          className={`w-full mb-6 ${
            highlighted 
              ? 'bg-purple-600 hover:bg-purple-700' 
              : 'bg-gray-900 hover:bg-gray-800'
          }`}
        >
          <Link to={buttonLink}>{buttonText}</Link>
        </Button>
        
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Feature Row Component
const FeatureRow = ({ 
  feature, 
  free, 
  premium, 
  professional 
}: { 
  feature: string;
  free: string;
  premium: string;
  professional: string;
}) => {
  return (
    <tr className="hover:bg-gray-50">
      <td className="py-4 px-6 text-sm font-medium text-gray-900">{feature}</td>
      <td className="py-4 px-6 text-sm text-gray-500 text-center">{free}</td>
      <td className="py-4 px-6 text-sm text-purple-700 font-medium text-center bg-purple-50">{premium}</td>
      <td className="py-4 px-6 text-sm text-gray-500 text-center">{professional}</td>
    </tr>
  );
};

// FAQ Item Component
const FaqItem = ({ 
  question, 
  answer 
}: { 
  question: string;
  answer: string;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-medium mb-3">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
};

export default Pricing;
