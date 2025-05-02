
import React from "react";
import type { Template } from "@/pages/CardEditor";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// Sample template data
const templates: Template[] = [
  {
    id: "wedding-1",
    name: "Elegant Wedding",
    previewUrl: "",
    category: "wedding",
    backgroundColor: "#F9F5FF",
    textColor: "#7E69AB",
    defaultText: {
      title: "We're Getting Married",
      message: "Join us for our special day\n\nDate: June 15, 2025\nTime: 2:00 PM\nLocation: Garden Venue"
    }
  },
  {
    id: "birthday-1",
    name: "Birthday Bash",
    previewUrl: "",
    category: "birthday",
    backgroundColor: "#FEF7CD",
    textColor: "#000000",
    defaultText: {
      title: "Birthday Party!",
      message: "Come celebrate with us!\n\nDate: August 10, 2025\nTime: 6:00 PM\nLocation: Fun House"
    }
  },
  {
    id: "corporate-1",
    name: "Business Event",
    previewUrl: "",
    category: "corporate",
    backgroundColor: "#E5DEFF",
    textColor: "#1A1F2C",
    defaultText: {
      title: "Annual Conference",
      message: "You're invited to our annual conference\n\nDate: September 20, 2025\nTime: 9:00 AM\nLocation: Grand Hotel"
    }
  },
  {
    id: "baby-1",
    name: "Baby Shower",
    previewUrl: "",
    category: "baby",
    backgroundColor: "#D3E4FD",
    textColor: "#333333",
    defaultText: {
      title: "Baby Shower",
      message: "Join us as we celebrate the upcoming arrival of our little one\n\nDate: July 5, 2025\nTime: 11:00 AM\nLocation: Community Center"
    }
  },
  {
    id: "graduation-1",
    name: "Graduation",
    previewUrl: "",
    category: "graduation",
    backgroundColor: "#FDE1D3",
    textColor: "#222222",
    defaultText: {
      title: "Graduation Celebration",
      message: "Please join us to celebrate the graduation of\n\nName: Jane Doe\nDate: May 25, 2025\nTime: 4:00 PM\nLocation: Family Residence"
    }
  },
  {
    id: "holiday-1",
    name: "Holiday Party",
    previewUrl: "",
    category: "holiday",
    backgroundColor: "#FFDEE2",
    textColor: "#333333",
    defaultText: {
      title: "Holiday Party",
      message: "Join us for a festive celebration\n\nDate: December 15, 2025\nTime: 7:00 PM\nLocation: Winter Wonderland"
    }
  }
];

const categories = [
  { id: "all", label: "All" },
  { id: "wedding", label: "Wedding" },
  { id: "birthday", label: "Birthday" },
  { id: "corporate", label: "Corporate" },
  { id: "baby", label: "Baby" },
  { id: "graduation", label: "Graduation" },
  { id: "holiday", label: "Holiday" }
];

interface TemplateGalleryProps {
  onSelectTemplate: (template: Template) => void;
}

const TemplateGallery: React.FC<TemplateGalleryProps> = ({ onSelectTemplate }) => {
  return (
    <div>
      <Tabs defaultValue="all">
        <TabsList className="mb-4 flex overflow-auto">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <ScrollArea className="h-[400px] pr-4">
              <div className="grid grid-cols-2 gap-3">
                {templates
                  .filter(t => category.id === "all" || t.category === category.id)
                  .map((template) => (
                    <div 
                      key={template.id}
                      onClick={() => onSelectTemplate(template)}
                      className="cursor-pointer border rounded-md overflow-hidden transition-all hover:border-purple-500 hover:shadow-md"
                    >
                      {/* Template preview */}
                      <div 
                        className="aspect-[5/7] p-4 flex flex-col items-center justify-center"
                        style={{ 
                          backgroundColor: template.backgroundColor,
                          color: template.textColor
                        }}
                      >
                        <div className="text-center">
                          <h4 className="text-sm font-semibold">{template.defaultText.title}</h4>
                          <p className="text-xs mt-1 line-clamp-3">{template.defaultText.message}</p>
                        </div>
                      </div>
                      
                      {/* Template name */}
                      <div className="bg-white p-2 text-center">
                        <p className="text-xs font-medium">{template.name}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </ScrollArea>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default TemplateGallery;
