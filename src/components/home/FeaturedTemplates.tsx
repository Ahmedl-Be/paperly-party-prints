
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Heart, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredTemplates = [
  {
    id: "wedding-featured",
    name: "Elegant Wedding Suite",
    category: "wedding",
    previewUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    backgroundColor: "#F9F5FF",
    textColor: "#7E69AB",
    isNew: false,
    isPremium: true,
  },
  {
    id: "birthday-featured",
    name: "Birthday Celebration",
    category: "birthday",
    previewUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    backgroundColor: "#FEF7CD",
    textColor: "#816B56",
    isNew: true,
    isPremium: false,
  },
  {
    id: "baby-featured",
    name: "Baby Shower Collection",
    category: "baby",
    previewUrl: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    backgroundColor: "#FFDEE2",
    textColor: "#8E4155",
    isNew: true,
    isPremium: true,
  }
];

const FeaturedTemplates = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-heading font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text mb-4 md:mb-0">
            Featured Collections
          </h2>
          <Button 
            variant="ghost" 
            className="text-purple-600 hover:text-purple-800 hover:bg-purple-50 font-medium group"
            onClick={() => navigate('/templates')}
          >
            View all templates <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredTemplates.map((template) => (
            <Card 
              key={template.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer perspective border-purple-100"
              onClick={() => navigate(`/templates?category=${template.category}`)}
            >
              <div className="relative h-56 overflow-hidden group">
                <div 
                  className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${template.previewUrl})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                
                {/* Status badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {template.isNew && (
                    <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs py-1 px-2 rounded-full font-medium flex items-center gap-1">
                      <Sparkles className="h-3 w-3" /> New
                    </span>
                  )}
                  {template.isPremium && (
                    <span className="bg-gradient-to-r from-amber-400 to-yellow-500 text-white text-xs py-1 px-2 rounded-full font-medium flex items-center gap-1">
                      <Award className="h-3 w-3" /> Premium
                    </span>
                  )}
                </div>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-lg font-heading font-semibold">{template.name}</p>
                  <p className="text-white/80 text-sm capitalize">{template.category}</p>
                </div>
                <div className="absolute top-3 right-3 bg-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="h-4 w-4 text-pink-500" />
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">20+ designs</span>
                  <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full">Popular</span>
                </div>
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-sm text-purple-600 mt-2 font-medium group"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/create?category=${template.category}`);
                  }}
                >
                  Start designing <ArrowRight className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTemplates;
