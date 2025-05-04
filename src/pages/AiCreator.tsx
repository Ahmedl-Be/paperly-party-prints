
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/sonner";
import Header from "@/components/layout/Header";
import { ArrowRight, Wand, WandSparkles, Search } from "lucide-react";
import type { Template } from "@/pages/CardEditor";

const AiCreator = () => {
  const [prompt, setPrompt] = useState("");
  const [occasion, setOccasion] = useState("");
  const [style, setStyle] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedTemplates, setGeneratedTemplates] = useState<Template[]>([]);
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);
  const [aiConversation, setAiConversation] = useState<{role: string; content: string}[]>([
    { 
      role: "assistant", 
      content: "Hello! I'm your AI design assistant. I can help you create beautiful invitation templates based on your preferences. What kind of invitation are you looking to design today?" 
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!prompt || !occasion) {
      toast.error("Please provide a description and select an occasion");
      return;
    }
    
    setIsGenerating(true);
    
    // Add user message to conversation
    const userMessage = `I need a ${style ? style + " style " : ""}${occasion} invitation for: ${prompt}`;
    const newConversation = [
      ...aiConversation,
      { role: "user", content: userMessage }
    ];
    
    setAiConversation(newConversation);
    
    // Simulate AI thinking with a timeout
    setTimeout(() => {
      // Generate AI response based on user input
      const aiResponse = generateAiResponse(occasion, style, prompt);
      
      setAiConversation([
        ...newConversation,
        { role: "assistant", content: aiResponse }
      ]);
      
      // Generate templates based on user input
      const aiTemplates = generateTemplates(occasion, style, prompt);
      setGeneratedTemplates(aiTemplates);
      
      // Generate helpful suggestions for the user
      const suggestions = generateSuggestions(occasion, style);
      setAiSuggestions(suggestions);
      
      setIsGenerating(false);
      toast.success("AI has created template ideas for you!");
    }, 2500);
  };
  
  const generateAiResponse = (occasion: string, style: string, prompt: string): string => {
    const responses = [
      `I've created some ${occasion} invitation templates based on your description. I focused on ${style || "versatile"} designs that capture the essence of your event. Take a look at the options below and let me know if any of them match what you're looking for!`,
      `Here are some ${style || "beautiful"} ${occasion} templates I've designed based on your requirements. I've incorporated elements from your description to make them unique. Feel free to customize any of them further!`,
      `Based on your ${occasion} event description, I've generated these template options with a ${style || "modern"} aesthetic. Each one can be fully customized to match your vision perfectly.`
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };
  
  const generateSuggestions = (occasion: string, style: string): string[] => {
    const suggestions = [
      `Try adding more specific color preferences to your description`,
      `Consider mentioning the tone you want (formal, casual, playful)`,
      `Describe any theme elements you'd like included`,
      `Mention if there are any cultural elements you want represented`
    ];
    
    if (occasion === "Wedding") {
      suggestions.push(`Include details about your wedding venue for better context`);
      suggestions.push(`Mention if you have specific wedding colors or flowers`);
    } else if (occasion === "Birthday") {
      suggestions.push(`Specify the age of the birthday person for age-appropriate designs`);
      suggestions.push(`Mention any theme like superhero, princess, or vintage`);
    }
    
    return suggestions;
  };
  
  const generateTemplates = (occasion: string, style: string, prompt: string): Template[] => {
    // Generate more personalized templates based on user input
    const colors = {
      Wedding: ["#F9F5FF", "#FEF7CD", "#FFDEE2"],
      Birthday: ["#E5DEFF", "#D3E4FD", "#FDE1D3"],
      "Baby Shower": ["#E6FFFA", "#FFF5F5", "#FFEEF2"],
      Graduation: ["#F2FCE2", "#EDF7FF", "#FFF4E5"],
      Corporate: ["#F6F8FD", "#ECF5FF", "#F9FAFB"],
      Holiday: ["#FFDEE2", "#E5DEFF", "#FDF0D5"],
      Other: ["#F4F0FF", "#E6FFFA", "#FFF5F5"]
    };
    
    const textColors = {
      Wedding: ["#7E69AB", "#816B56", "#C42847"],
      Birthday: ["#4C3889", "#2B5998", "#B44D12"],
      "Baby Shower": ["#2C7A7B", "#C53030", "#DD6B8F"],
      Graduation: ["#445D29", "#2A4365", "#8D5012"],
      Corporate: ["#1A1F2C", "#2C4975", "#3D3D3D"],
      Holiday: ["#D81E5B", "#663F3F", "#9F580A"],
      Other: ["#6B46C1", "#2C7A7B", "#C53030"]
    };
    
    // Use the selected occasion or default to "Other"
    const selectedOccasion = occasion as keyof typeof colors || "Other";
    const colorOptions = colors[selectedOccasion];
    const textColorOptions = textColors[selectedOccasion];
    
    // Create templates with variations based on user input
    return [
      {
        id: `ai-generated-1-${Date.now()}`,
        name: `AI Generated: ${style || "Modern"} ${occasion} Template`,
        previewUrl: "",
        category: occasion.toLowerCase(),
        backgroundColor: colorOptions[0],
        textColor: textColorOptions[0],
        defaultText: {
          title: `Your ${occasion} Invitation`,
          message: `${prompt}\n\nDate: June 15, 2025\nTime: 2:00 PM\nLocation: To be announced`
        }
      },
      {
        id: `ai-generated-2-${Date.now()}`,
        name: `AI Generated: ${style || "Elegant"} ${occasion}`,
        previewUrl: "",
        category: occasion.toLowerCase(),
        backgroundColor: colorOptions[1],
        textColor: textColorOptions[1],
        defaultText: {
          title: `Join Our ${occasion}`,
          message: `${prompt}\n\nWe hope to see you there!\nDate: July 20, 2025\nTime: 3:00 PM`
        }
      },
      {
        id: `ai-generated-3-${Date.now()}`,
        name: `AI Generated: ${style || "Creative"} ${occasion}`,
        previewUrl: "",
        category: occasion.toLowerCase(),
        backgroundColor: colorOptions[2],
        textColor: textColorOptions[2],
        defaultText: {
          title: `${occasion} Celebration`,
          message: `${prompt}\n\nSave the date!\nAugust 10, 2025\n4:00 PM`
        }
      }
    ];
  };
  
  const handleTemplateSelect = (template: Template) => {
    // Add a message to the conversation
    setAiConversation([
      ...aiConversation,
      { role: "user", content: `I like the "${template.name}" template.` },
      { 
        role: "assistant", 
        content: `Great choice! I've selected the "${template.name}" template for you. You can now customize it in the editor or continue refining it here with more specific requests.` 
      }
    ]);
    
    toast.success(`Selected ${template.name}`);
    // This would normally redirect to editor with the template
  };
  
  const handleSuggestionClick = (suggestion: string) => {
    // Add the suggestion to the prompt
    setPrompt(prompt ? `${prompt}\n${suggestion}` : suggestion);
    toast.info("Suggestion added to your description!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="bg-gradient-to-b from-purple-50 to-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Create with <span className="text-purple-600">AI</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Tell our AI what you need, and we'll create the perfect template just for you
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {/* AI Input Form with Conversation */}
              <div className="md:col-span-2 space-y-6">
                {/* AI Conversation */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <WandSparkles className="h-5 w-5 text-purple-500" /> 
                      AI Assistant
                    </CardTitle>
                    <CardDescription>
                      Chat with our AI to create your perfect invitation
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-48 pr-4 mb-4">
                      <div className="space-y-4">
                        {aiConversation.map((message, index) => (
                          <div 
                            key={index}
                            className={`flex ${message.role === "assistant" ? "justify-start" : "justify-end"}`}
                          >
                            <div 
                              className={`max-w-[80%] rounded-lg p-3 ${
                                message.role === "assistant" 
                                  ? "bg-purple-100 text-purple-900" 
                                  : "bg-blue-100 text-blue-900"
                              }`}
                            >
                              <p className="text-sm">{message.content}</p>
                            </div>
                          </div>
                        ))}
                        {isGenerating && (
                          <div className="flex justify-start">
                            <div className="max-w-[80%] rounded-lg p-3 bg-purple-100 text-purple-900">
                              <div className="flex space-x-2">
                                <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
                                <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse delay-150"></div>
                                <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse delay-300"></div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              
                {/* AI Input Form */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Wand className="h-5 w-5 text-purple-500" /> 
                      Template Creator
                    </CardTitle>
                    <CardDescription>
                      Describe what you need for your invitation
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="occasion">Occasion</Label>
                        <Select 
                          value={occasion} 
                          onValueChange={setOccasion}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select occasion" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Wedding">Wedding</SelectItem>
                            <SelectItem value="Birthday">Birthday</SelectItem>
                            <SelectItem value="Baby Shower">Baby Shower</SelectItem>
                            <SelectItem value="Graduation">Graduation</SelectItem>
                            <SelectItem value="Corporate">Corporate</SelectItem>
                            <SelectItem value="Holiday">Holiday</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="style">Style Preference</Label>
                        <Select 
                          value={style} 
                          onValueChange={setStyle}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select style (optional)" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Modern">Modern</SelectItem>
                            <SelectItem value="Classic">Classic</SelectItem>
                            <SelectItem value="Minimalist">Minimalist</SelectItem>
                            <SelectItem value="Vintage">Vintage</SelectItem>
                            <SelectItem value="Elegant">Elegant</SelectItem>
                            <SelectItem value="Playful">Playful</SelectItem>
                            <SelectItem value="Rustic">Rustic</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="prompt">Describe your event</Label>
                        <Textarea
                          id="prompt"
                          placeholder="E.g., I need a wedding invitation for a summer garden wedding with floral themes and pastel colors..."
                          className="min-h-32"
                          value={prompt}
                          onChange={(e) => setPrompt(e.target.value)}
                          required
                        />
                      </div>
                      
                      {aiSuggestions.length > 0 && (
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-gray-500">AI Suggestions:</p>
                          <div className="flex flex-wrap gap-2">
                            {aiSuggestions.map((suggestion, index) => (
                              <Button 
                                key={index} 
                                type="button" 
                                variant="outline" 
                                size="sm" 
                                onClick={() => handleSuggestionClick(suggestion)}
                                className="text-xs bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100"
                              >
                                {suggestion}
                              </Button>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-purple-600 hover:bg-purple-700"
                        disabled={isGenerating}
                      >
                        {isGenerating ? (
                          <>Generating Templates...</>
                        ) : (
                          <>
                            <Wand className="mr-2 h-4 w-4" />
                            Generate Templates
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                  <CardFooter className="flex justify-center border-t pt-4 text-sm text-gray-500">
                    <p>Our AI learns from your preferences to create better templates</p>
                  </CardFooter>
                </Card>
              </div>
              
              {/* AI Generated Templates */}
              <div className="md:col-span-3">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>AI Generated Templates</CardTitle>
                    <CardDescription>
                      Select a template to customize it further
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isGenerating ? (
                      <div className="h-80 flex flex-col items-center justify-center">
                        <div className="w-16 h-16 border-4 border-t-purple-600 border-purple-200 rounded-full animate-spin mb-4"></div>
                        <p className="text-gray-500">Our AI is creating templates just for you...</p>
                      </div>
                    ) : generatedTemplates.length > 0 ? (
                      <ScrollArea className="h-[500px] pr-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {generatedTemplates.map((template) => (
                            <div 
                              key={template.id}
                              onClick={() => handleTemplateSelect(template)}
                              className="cursor-pointer border rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-purple-300 group perspective"
                            >
                              <div className="transform transition-transform duration-500 hover:rotate-y-2 hover:rotate-x-2">
                                <div 
                                  className="aspect-[5/7] p-5 flex flex-col items-center justify-center relative overflow-hidden"
                                  style={{ 
                                    backgroundColor: template.backgroundColor,
                                    color: template.textColor
                                  }}
                                >
                                  <div className="text-center relative z-10">
                                    <h4 className="text-sm font-semibold mb-2">{template.defaultText.title}</h4>
                                    <p className="text-xs mt-1 line-clamp-4 opacity-90">{template.defaultText.message}</p>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-white p-3 text-center border-t">
                                <p className="text-sm font-medium">{template.name}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    ) : (
                      <div className="h-80 flex flex-col items-center justify-center text-center">
                        <WandSparkles className="h-12 w-12 text-purple-200 mb-4" />
                        <p className="text-lg font-medium mb-2">No templates generated yet</p>
                        <p className="text-gray-500 mb-6">
                          Fill in the form and click "Generate Templates" to see AI-created designs
                        </p>
                        {prompt && occasion && (
                          <Button 
                            onClick={handleSubmit}
                            className="bg-purple-600 hover:bg-purple-700"
                          >
                            <Wand className="mr-2 h-4 w-4" />
                            Generate Now
                          </Button>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tips Section */}
      <section className="py-12 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8">Tips for Better AI Results</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TipCard 
                title="Be Specific" 
                description="Include details about colors, themes, and the mood you want to create."
                number="1"
              />
              <TipCard 
                title="Mention Style" 
                description="Let the AI know if you prefer modern, vintage, minimal, or other styles."
                number="2"
              />
              <TipCard 
                title="Add Context" 
                description="Share details about the event location, time of year, or special elements."
                number="3"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Tip Card Component 
const TipCard = ({ title, description, number }: { title: string; description: string; number: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold mb-4 mx-auto">
        {number}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default AiCreator;
