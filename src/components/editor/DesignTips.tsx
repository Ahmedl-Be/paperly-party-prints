
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, HelpCircle, Lightbulb } from "lucide-react";

interface DesignTipsProps {
  designProgress: number;
}

const DesignTips: React.FC<DesignTipsProps> = ({ designProgress }) => {
  // Tips change based on design progress
  const getTips = () => {
    if (designProgress < 30) {
      return [
        "Start with a template that matches your event theme",
        "Choose colors that complement your event's mood",
        "Keep your title short and memorable"
      ];
    } else if (designProgress < 60) {
      return [
        "Add a background image to make your invitation pop",
        "Ensure text is readable against your background",
        "Consider using contrasting colors for emphasis"
      ];
    } else {
      return [
        "Preview your invitation on both mobile and desktop",
        "Ask a friend for feedback before finalizing",
        "Remember to include all important event details"
      ];
    }
  };

  const tips = getTips();
  const tipIcon = designProgress < 30 ? HelpCircle : 
                  designProgress < 60 ? Lightbulb : 
                  AlertTriangle;

  return (
    <Card className="mt-4 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <h3 className="font-medium text-purple-800 mb-2 flex items-center">
          <span className="mr-2">
            {React.createElement(tipIcon, { className: "h-4 w-4 text-purple-600" })}
          </span>
          Design Tips
        </h3>
        <ul className="text-sm text-gray-700 space-y-2">
          {tips.map((tip, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-block bg-purple-200 text-purple-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 flex-shrink-0">
                ✓
              </span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default DesignTips;
