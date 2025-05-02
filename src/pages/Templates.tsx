
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Search, Filter, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import TemplateGallery from "@/components/editor/TemplateGallery";
import { toast } from "@/components/ui/sonner";
import type { Template } from "@/pages/CardEditor";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

const Templates = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [featuredTemplate, setFeaturedTemplate] = useState<Template | null>(null);
  
  // Sample featured template
  useEffect(() => {
    // In a real app, this would come from an API
    setFeaturedTemplate({
      id: "featured-1",
      name: "Premium Wedding Suite",
      previewUrl: "",
      category: "wedding",
      backgroundColor: "#F9F5FF",
      textColor: "#7E69AB",
      defaultText: {
        title: "Save the Date",
        message: "We're getting married!\n\nJoin us for our special day\nJune 15, 2025\nGarden Venue, New York"
      }
    });
  }, []);

  const handleTemplateSelect = (template: Template) => {
    toast.success(`Selected ${template.name} template`);
    // In production this would navigate to editor with template
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Searching for: ${searchQuery}`);
    // In production this would filter templates
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Find the Perfect <span className="text-purple-600">Template</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Browse hundreds of professionally designed templates for any occasion
            </p>
            
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative max-w-lg mx-auto">
              <div className="flex">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search templates..."
                    className="pl-10 pr-4 py-6 rounded-l-md border-r-0 w-full"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="rounded-l-none bg-purple-600 hover:bg-purple-700"
                >
                  Search
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      {/* Featured Template */}
      {featuredTemplate && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                {/* Preview */}
                <div className="md:w-1/2">
                  <div 
                    className="aspect-[5/7] rounded-lg shadow-lg overflow-hidden border border-purple-200"
                    style={{ 
                      backgroundColor: featuredTemplate.backgroundColor,
                      color: featuredTemplate.textColor
                    }}
                  >
                    <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                      <div className="absolute top-4 left-4 right-4 bottom-4 border border-current rounded-md opacity-10"></div>
                      <h3 className="text-2xl font-bold mb-4">{featuredTemplate.defaultText.title}</h3>
                      <p className="whitespace-pre-wrap">{featuredTemplate.defaultText.message}</p>
                    </div>
                  </div>
                </div>
                
                {/* Description */}
                <div className="md:w-1/2">
                  <div className="inline-block bg-purple-100 px-3 py-1 rounded-full text-purple-800 font-medium text-xs mb-4">
                    FEATURED TEMPLATE
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    {featuredTemplate.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Our most popular wedding template with elegant styling, perfect for formal ceremonies and celebrations.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <Badge label="Premium" />
                    <Badge label="Wedding" />
                    <Badge label="Elegant" />
                  </div>
                  <Button asChild className="bg-purple-600 hover:bg-purple-700">
                    <Link to="/create" className="flex items-center">
                      Customize This Template
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Template Gallery */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Browse Templates</h2>
              
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    <span>Filters</span>
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-4">
                    <h4 className="font-medium">Advanced Filters</h4>
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Style</p>
                      <div className="flex flex-wrap gap-2">
                        <FilterChip label="Modern" />
                        <FilterChip label="Classic" />
                        <FilterChip label="Minimalist" />
                        <FilterChip label="Artistic" />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Color Scheme</p>
                      <div className="flex flex-wrap gap-2">
                        <FilterChip label="Pastels" />
                        <FilterChip label="Bold" />
                        <FilterChip label="Monochrome" />
                        <FilterChip label="Colorful" />
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
            
            <Card className="shadow-sm">
              <CardContent className="p-0">
                {/* Using the existing TemplateGallery component */}
                <TemplateGallery onSelectTemplate={handleTemplateSelect} />
              </CardContent>
            </Card>
            
            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" className="bg-purple-100">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Popular Categories Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Popular Categories</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <CategoryCard 
                title="Wedding" 
                count={42} 
                color="bg-purple-50" 
                icon="💍" 
              />
              <CategoryCard 
                title="Birthday" 
                count={38} 
                color="bg-blue-50" 
                icon="🎂" 
              />
              <CategoryCard 
                title="Baby Shower" 
                count={24} 
                color="bg-pink-50" 
                icon="👶" 
              />
              <CategoryCard 
                title="Corporate" 
                count={36} 
                color="bg-gray-50" 
                icon="💼" 
              />
              <CategoryCard 
                title="Graduation" 
                count={18} 
                color="bg-yellow-50" 
                icon="🎓" 
              />
              <CategoryCard 
                title="Holiday" 
                count={29} 
                color="bg-red-50" 
                icon="🎄" 
              />
              <CategoryCard 
                title="Save the Date" 
                count={21} 
                color="bg-green-50" 
                icon="📅" 
              />
              <CategoryCard 
                title="Thank You" 
                count={15} 
                color="bg-orange-50" 
                icon="🙏" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Don't see what you're looking for?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Create a custom design from scratch with our easy-to-use editor
          </p>
          <Button asChild size="lg" variant="secondary" className="animate-pulse-slow">
            <Link to="/create">Start from Scratch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

// Badge Component
const Badge = ({ label }: { label: string }) => {
  return (
    <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-1 rounded-full">
      {label}
    </span>
  );
};

// Filter Chip Component
const FilterChip = ({ label }: { label: string }) => {
  return (
    <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full transition-colors">
      {label}
    </button>
  );
};

// Category Card Component
const CategoryCard = ({ 
  title, 
  count, 
  color, 
  icon 
}: { 
  title: string; 
  count: number; 
  color: string; 
  icon: string;
}) => {
  return (
    <Link to={`/templates?category=${title.toLowerCase()}`}>
      <div className={`${color} p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105 text-center`}>
        <div className="text-4xl mb-3">{icon}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{count} templates</p>
      </div>
    </Link>
  );
};

export default Templates;
