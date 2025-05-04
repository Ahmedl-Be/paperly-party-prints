
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface WorkInProgressProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  availableIn?: string;
  returnPath?: string;
}

const WorkInProgress: React.FC<WorkInProgressProps> = ({
  title,
  description,
  icon,
  availableIn = "Coming soon",
  returnPath = "/"
}) => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50 to-white p-4">
      <Card className="max-w-md w-full shadow-lg border-purple-100">
        <CardContent className="pt-6 px-6 pb-8 flex flex-col items-center text-center">
          <div className="h-20 w-20 rounded-full bg-purple-100 flex items-center justify-center mb-6 animate-pulse">
            {icon}
          </div>
          
          <h1 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            {title}
          </h1>
          
          <p className="text-gray-600 mb-6">
            {description}
          </p>
          
          <div className="w-full bg-gray-100 h-2.5 rounded-full mb-6">
            <div className="bg-purple-600 h-2.5 rounded-full w-3/12"></div>
          </div>
          
          <div className="text-sm text-purple-700 font-medium mb-8 px-4 py-2 bg-purple-50 rounded-full">
            {availableIn}
          </div>
          
          <Button
            onClick={() => navigate(returnPath)}
            className="w-full"
          >
            Return to {returnPath === "/" ? "Home" : returnPath.replace("/", "")}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkInProgress;
