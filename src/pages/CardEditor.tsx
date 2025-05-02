
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Image,
  Text,
  Palette,
  Save,
  Download,
  Share,
  QrCode,
  Smile,
} from "lucide-react";
import { toast } from "@/components/ui/sonner";
import EditorCanvas from "@/components/editor/EditorCanvas";
import ColorPicker from "@/components/editor/ColorPicker";
import TemplateGallery from "@/components/editor/TemplateGallery";
import Header from "@/components/layout/Header";

// Simple template data structure
export interface Template {
  id: string;
  name: string;
  previewUrl: string;
  category: string;
  backgroundColor: string;
  textColor: string;
  defaultText: {
    title: string;
    message: string;
  };
}

const CardEditor = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");
  
  const handleTemplateSelect = (template: Template) => {
    setSelectedTemplate(template);
    setTitle(template.defaultText.title);
    setMessage(template.defaultText.message);
    setBackgroundColor(template.backgroundColor);
    setTextColor(template.textColor);
    toast.success("Template selected!");
  };

  const handleSave = () => {
    // Would connect to backend in future iterations
    toast.success("Design saved successfully!");
  };

  const handleDownload = () => {
    // Would implement actual download functionality in future iterations
    toast.success("Download started!");
  };

  const handleShare = () => {
    // Would implement sharing functionality in future iterations
    toast.success("Sharing options opened!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-2">Design Your Invitation</h1>
        <p className="text-gray-600 mb-6">Customize your perfect invitation with our easy-to-use editor</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Editor Canvas - Preview Area */}
          <div className="lg:col-span-2">
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <EditorCanvas
                  title={title}
                  message={message}
                  backgroundColor={backgroundColor}
                  textColor={textColor}
                  template={selectedTemplate}
                />
              </CardContent>
            </Card>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap md:flex-nowrap gap-2 mt-4">
              <Button 
                onClick={handleSave} 
                className="flex-1 flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 transition-colors"
              >
                <Save className="h-4 w-4" />
                <span>Save</span>
              </Button>
              <Button 
                onClick={handleDownload} 
                variant="outline" 
                className="flex-1 flex items-center justify-center space-x-2 border-purple-200 hover:bg-purple-50 transition-colors"
              >
                <Download className="h-4 w-4" />
                <span>Download</span>
              </Button>
              <Button 
                onClick={handleShare} 
                variant="outline" 
                className="flex-1 flex items-center justify-center space-x-2 border-purple-200 hover:bg-purple-50 transition-colors"
              >
                <Share className="h-4 w-4" />
                <span>Share</span>
              </Button>
            </div>
          </div>
          
          {/* Editor Controls */}
          <div>
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <Tabs defaultValue="template" className="w-full">
                  <TabsList className="grid grid-cols-4 w-full">
                    <TabsTrigger value="template">Templates</TabsTrigger>
                    <TabsTrigger value="text">Text</TabsTrigger>
                    <TabsTrigger value="style">Style</TabsTrigger>
                    <TabsTrigger value="extras">Extras</TabsTrigger>
                  </TabsList>
                  
                  {/* Template Selection Tab */}
                  <TabsContent value="template" className="p-4">
                    <TemplateGallery onSelectTemplate={handleTemplateSelect} />
                  </TabsContent>
                  
                  {/* Text Editing Tab */}
                  <TabsContent value="text" className="p-4 space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Title</label>
                      <Input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter invitation title"
                        className="transition-all focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Message</label>
                      <Textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Enter your invitation message"
                        rows={6}
                        className="transition-all focus:ring-purple-500"
                      />
                    </div>
                  </TabsContent>
                  
                  {/* Style Editing Tab */}
                  <TabsContent value="style" className="p-4 space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Background Color</label>
                      <ColorPicker
                        color={backgroundColor}
                        onChange={setBackgroundColor}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Text Color</label>
                      <ColorPicker
                        color={textColor}
                        onChange={setTextColor}
                      />
                    </div>
                  </TabsContent>
                  
                  {/* Extras Tab - New Feature */}
                  <TabsContent value="extras" className="p-4 space-y-4">
                    <div className="bg-purple-50 rounded-md p-4 space-y-3">
                      <div className="flex items-center">
                        <QrCode className="h-5 w-5 text-purple-600 mr-2" />
                        <h3 className="font-medium">Add QR Code</h3>
                      </div>
                      <p className="text-sm text-gray-600">Add a QR code for RSVP links, maps, or your website.</p>
                      <Button variant="outline" size="sm" className="w-full border-purple-200 text-purple-600">
                        Coming Soon
                      </Button>
                    </div>
                    
                    <div className="bg-purple-50 rounded-md p-4 space-y-3">
                      <div className="flex items-center">
                        <Smile className="h-5 w-5 text-purple-600 mr-2" />
                        <h3 className="font-medium">Stickers & Emojis</h3>
                      </div>
                      <p className="text-sm text-gray-600">Add fun stickers and emojis to your invitation.</p>
                      <Button variant="outline" size="sm" className="w-full border-purple-200 text-purple-600">
                        Coming Soon
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            
            {/* Pro Tips - New Feature */}
            <Card className="mt-4 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardContent className="p-4">
                <h3 className="font-medium text-purple-800 mb-2">Pro Tips</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block bg-purple-200 text-purple-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2">✓</span>
                    Try pastel backgrounds for a softer feel
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-purple-200 text-purple-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2">✓</span>
                    Keep your message concise for readability
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEditor;
