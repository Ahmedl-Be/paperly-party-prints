import React from "react";
import type { Template } from "@/pages/CardEditor";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// Enhanced template data with more colors and emotional elements
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
    id: "wedding-2",
    name: "Rustic Wedding",
    previewUrl: "",
    category: "wedding",
    backgroundColor: "#FEF7CD",
    textColor: "#816B56",
    defaultText: {
      title: "Join Us As We Say I Do",
      message: "Please celebrate with us\n\nDate: July 8, 2025\nTime: 4:00 PM\nLocation: Mountain View Barn"
    }
  },
  {
    id: "wedding-3",
    name: "Love Story",
    previewUrl: "",
    category: "wedding",
    backgroundColor: "#FFDEE2",
    textColor: "#C42847",
    defaultText: {
      title: "Two Hearts, One Love",
      message: "After years of adventure together\nwe're finally tying the knot!\n\nDate: August 12, 2025\nTime: 3:30 PM\nLocation: Sunset Beach Resort"
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
    id: "birthday-2",
    name: "Elegant Birthday",
    previewUrl: "",
    category: "birthday",
    backgroundColor: "#E5DEFF",
    textColor: "#4C3889",
    defaultText: {
      title: "Celebrate Another Year",
      message: "Please join us for a special evening\n\nDate: September 5, 2025\nTime: 7:00 PM\nLocation: Rooftop Lounge"
    }
  },
  {
    id: "birthday-3",
    name: "Party Time",
    previewUrl: "",
    category: "birthday",
    backgroundColor: "#D3E4FD",
    textColor: "#2B5998",
    defaultText: {
      title: "Let's Party! 🎉",
      message: "I'm turning 30 and want you there!\n\nDate: July 22, 2025\nTime: 8:00 PM\nLocation: Downtown Nightclub\n\nBring your dancing shoes!"
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
    id: "corporate-2",
    name: "Product Launch",
    previewUrl: "",
    category: "corporate",
    backgroundColor: "#D3E4FD",
    textColor: "#2C4975",
    defaultText: {
      title: "Introducing Our New Product",
      message: "Join us for the unveiling\n\nDate: October 15, 2025\nTime: 10:00 AM\nLocation: Innovation Center"
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
    id: "baby-2",
    name: "Baby Sprinkle",
    previewUrl: "",
    category: "baby",
    backgroundColor: "#FFDEE2",
    textColor: "#8E4155",
    defaultText: {
      title: "A Little Sprinkle",
      message: "Before the baby comes, let's shower mom with love\n\nDate: June 28, 2025\nTime: 1:00 PM\nLocation: Sunset Cafe"
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
    id: "graduation-2",
    name: "Academic Achievement",
    previewUrl: "",
    category: "graduation",
    backgroundColor: "#F2FCE2",
    textColor: "#445D29",
    defaultText: {
      title: "Celebrating Academic Excellence",
      message: "Honoring the graduation of\n\nName: John Smith\nDate: June 2, 2025\nTime: 2:00 PM\nLocation: University Garden"
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
  },
  {
    id: "holiday-2",
    name: "New Year's Eve",
    previewUrl: "",
    category: "holiday",
    backgroundColor: "#E5DEFF",
    textColor: "#333333",
    defaultText: {
      title: "Ring in the New Year",
      message: "Join us as we welcome 2026!\n\nDate: December 31, 2025\nTime: 9:00 PM\nLocation: Skyline Lounge"
    }
  },
  {
    id: "valentines-1",
    name: "Love Note",
    previewUrl: "",
    category: "holiday",
    backgroundColor: "#FFCCD5",
    textColor: "#D81E5B",
    defaultText: {
      title: "Be My Valentine ❤️",
      message: "You make every day special\nWill you be mine?\n\nDate: February 14, 2025\nTime: 7:00 PM\nLocation: Our favorite restaurant"
    }
  },
  {
    id: "thankful-1",
    name: "Gratitude",
    previewUrl: "",
    category: "holiday",
    backgroundColor: "#FDF0D5",
    textColor: "#663F3F",
    defaultText: {
      title: "Giving Thanks",
      message: "Join our family for a Thanksgiving feast\n\nDate: November 27, 2025\nTime: 4:00 PM\nLocation: Our home\n\nBring your appetite and gratitude!"
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
        <TabsList className="mb-6 flex overflow-auto p-1 bg-gray-100 rounded-lg">
          {categories.map((category) => (
            <TabsTrigger 
              key={category.id} 
              value={category.id}
              className="data-[state=active]:bg-white data-[state=active]:text-purple-700 data-[state=active]:shadow-sm px-4 py-2"
            >
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="animate-fade-in">
            <ScrollArea className="h-[500px] pr-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {templates
                  .filter(t => category.id === "all" || t.category === category.id)
                  .map((template) => (
                    <div 
                      key={template.id}
                      onClick={() => onSelectTemplate(template)}
                      className="cursor-pointer border rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-purple-300 group"
                    >
                      {/* Template preview */}
                      <div 
                        className="aspect-[5/7] p-5 flex flex-col items-center justify-center"
                        style={{ 
                          backgroundColor: template.backgroundColor,
                          color: template.textColor
                        }}
                      >
                        <div className="text-center">
                          <h4 className="text-sm font-semibold mb-2">{template.defaultText.title}</h4>
                          <p className="text-xs mt-1 line-clamp-4 opacity-90">{template.defaultText.message}</p>
                        </div>
                      </div>
                      
                      {/* Template name */}
                      <div className="bg-white p-3 text-center border-t">
                        <p className="text-sm font-medium group-hover:text-purple-700 transition-colors">{template.name}</p>
                        <p className="text-xs text-gray-500 capitalize">{template.category}</p>
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
