
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Heart, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredTemplates = [
  {
    id: "wedding-featured",
    name: "Elegant Wedding Suite",
    category: "wedding",
    previewUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    backgroundColor: "#F9F5FF",
    textColor: "#7E69AB",
  },
  {
    id: "birthday-featured",
    name: "Birthday Celebration",
    category: "birthday",
    previewUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    backgroundColor: "#FEF7CD",
    textColor: "#816B56",
  },
  {
    id: "baby-featured",
    name: "Baby Shower Collection",
    category: "baby",
    previewUrl: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    backgroundColor: "#FFDEE2",
    textColor: "#8E4155",
  }
];

const FeaturedTemplates = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
            Featured Collections
          </h2>
          <Button 
            variant="ghost" 
            className="text-purple-600 hover:text-purple-800 hover:bg-purple-50"
            onClick={() => navigate('/templates')}
          >
            View all <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredTemplates.map((template) => (
            <Card 
              key={template.id}
              className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer perspective"
              onClick={() => navigate(`/templates?category=${template.category}`)}
            >
              <div className="relative h-48 overflow-hidden group">
                <div 
                  className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${template.previewUrl})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-lg font-semibold">{template.name}</p>
                  <p className="text-white/80 text-sm capitalize">{template.category}</p>
                </div>
                <div className="absolute top-3 right-3 bg-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  {template.category === "wedding" ? (
                    <Award className="h-4 w-4 text-purple-500" />
                  ) : (
                    <Heart className="h-4 w-4 text-pink-500" />
                  )}
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">20+ designs</span>
                  <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full">Popular</span>
                </div>
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-sm text-purple-600 mt-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/create`);
                  }}
                >
                  Start designing <ArrowRight className="h-3 w-3 ml-1" />
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
