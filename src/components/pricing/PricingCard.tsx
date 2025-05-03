
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  highlighted?: boolean;
}

const PricingCard = ({
  title,
  price,
  period = "",
  description,
  features,
  buttonText,
  buttonLink,
  highlighted = false
}: PricingCardProps) => {
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

export default PricingCard;
