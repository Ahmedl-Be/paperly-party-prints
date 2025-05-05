
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search as SearchIcon } from "lucide-react";
import { toast } from "@/components/ui/sonner";

// Mock template data for search results
const mockTemplates = [
  { id: "1", name: "Modern Wedding", category: "wedding", tags: ["elegant", "modern", "simple"] },
  { id: "2", name: "Birthday Bash", category: "birthday", tags: ["fun", "celebration", "party"] },
  { id: "3", name: "Baby Shower", category: "baby", tags: ["cute", "gentle", "celebration"] },
  { id: "4", name: "Corporate Gala", category: "corporate", tags: ["professional", "formal", "business"] },
  { id: "5", name: "Holiday Party", category: "holiday", tags: ["festive", "winter", "celebration"] },
  { id: "6", name: "Summer Wedding", category: "wedding", tags: ["outdoor", "bright", "colorful"] },
  { id: "7", name: "Graduation Celebration", category: "graduation", tags: ["achievement", "formal", "academic"] },
  { id: "8", name: "Winter Wedding", category: "wedding", tags: ["elegant", "winter", "romantic"] },
];

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      toast.error("Please enter a search term");
      return;
    }

    setIsSearching(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      const lowerQuery = searchQuery.toLowerCase();
      const searchResults = mockTemplates.filter(template => 
        template.name.toLowerCase().includes(lowerQuery) ||
        template.category.toLowerCase().includes(lowerQuery) ||
        template.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
      );
      
      setResults(searchResults);
      setIsSearching(false);
      
      if (searchResults.length === 0) {
        toast.info("No results found. Try different keywords.");
      } else {
        toast.success(`Found ${searchResults.length} templates`);
      }
    }, 800);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleTemplateClick = (templateId: string) => {
    // In a real app, this would navigate to the template or open it in the editor
    toast.info(`Opening template ${templateId}`);
    navigate(`/create?template=${templateId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50/70 to-white">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-heading font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          Search Templates
        </h1>
        <p className="text-gray-600 mb-8 font-medium">
          Find the perfect template for your invitation
        </p>
        
        {/* Fixed search bar container with improved styling */}
        <div className="relative max-w-2xl mx-auto mb-8">
          <div className="flex w-full items-center">
            <div className="relative flex-grow">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search by name, category, or style..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="pl-10 py-6 text-lg shadow-sm focus-visible:ring-purple-400 w-full border-gray-200"
              />
            </div>
            <Button 
              onClick={handleSearch}
              disabled={isSearching}
              className="ml-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 h-12 px-6 font-medium"
            >
              {isSearching ? "Searching..." : "Search"}
            </Button>
          </div>
        </div>
        
        {results.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((template) => (
              <Card 
                key={template.id} 
                className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border-purple-100"
                onClick={() => handleTemplateClick(template.id)}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-semibold mb-2">{template.name}</h3>
                  <p className="text-sm text-gray-500 capitalize mb-3">Category: {template.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {template.tags.map((tag: string) => (
                      <span 
                        key={tag} 
                        className="inline-block bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 text-xs px-2 py-1 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        
        {searchQuery && !isSearching && results.length === 0 && (
          <div className="text-center py-12">
            <SearchIcon className="h-16 w-16 mx-auto text-gray-300 mb-4" />
            <h2 className="text-xl font-heading font-medium mb-2">No results found</h2>
            <p className="text-gray-500">Try different keywords or browse our templates</p>
            <Button 
              onClick={() => navigate("/templates")} 
              variant="outline" 
              className="mt-4 border-purple-200 hover:border-purple-300 hover:bg-purple-50 font-medium"
            >
              Browse All Templates
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
