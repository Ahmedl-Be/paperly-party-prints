
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Template } from "@/pages/CardEditor";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Flame, Star } from "lucide-react";

interface TrendingTemplateProps {
  title: string;
  icon: "trending" | "staff";
  templates: Template[];
}

const TrendingTemplates: React.FC<TrendingTemplateProps> = ({ 
  title, 
  icon, 
  templates 
}) => {
  const navigate = useNavigate();

  const handleSelectTemplate = (template: Template) => {
    // In a real app, we would store the selected template in state or context
    // then redirect to the editor page
    localStorage.setItem('selected-template', JSON.stringify(template));
    navigate('/create');
  };

  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {icon === 'trending' ? (
              <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
                <Flame className="h-4 w-4 text-white" />
              </div>
            ) : (
              <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center">
                <Star className="h-4 w-4 text-white" />
              </div>
            )}
            <h3 className="font-bold text-lg">
              {title}
            </h3>
          </div>
          <button 
            className="text-sm text-purple-600 hover:text-purple-800 flex items-center transition-colors"
            onClick={() => navigate('/templates')}
          >
            View all <ArrowRight className="h-3 w-3 ml-1" />
          </button>
        </div>
      </div>
      <CardContent className="p-0">
        <ScrollArea className="h-[220px]">
          <div className="flex overflow-x-auto p-4 space-x-4">
            {templates.map((template) => (
              <div 
                key={template.id}
                className="w-40 flex-shrink-0 cursor-pointer hover:scale-105 transition-transform"
                onClick={() => handleSelectTemplate(template)}
              >
                {/* 3D card effect with transform */}
                <div className="perspective">
                  <div className="transform transition-transform duration-500 hover:rotate-y-2">
                    <div 
                      className="aspect-[5/7] rounded-md shadow-md mb-2 flex items-center justify-center overflow-hidden"
                      style={{ backgroundColor: template.backgroundColor, color: template.textColor }}
                    >
                      {template.previewUrl && (
                        <div
                          className="absolute inset-0 bg-cover bg-center opacity-15"
                          style={{ backgroundImage: `url(${template.previewUrl})` }}
                        ></div>
                      )}
                      <div className="p-2 text-center z-10">
                        <h4 className="text-xs font-medium mb-1">{template.defaultText.title}</h4>
                        <p className="text-[10px] line-clamp-3">{template.defaultText.message}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xs font-medium text-center truncate">{template.name}</p>
                <p className="text-[10px] text-gray-500 text-center capitalize">{template.category}</p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default TrendingTemplates;
