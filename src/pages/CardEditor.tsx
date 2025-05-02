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
} from "lucide-react";
import { toast } from "@/components/ui/sonner";
import EditorCanvas from "@/components/editor/EditorCanvas";
import ColorPicker from "@/components/editor/ColorPicker";
import TemplateGallery from "@/components/editor/TemplateGallery";

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
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Design Your Invitation</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Editor Canvas - Preview Area */}
          <div className="lg:col-span-2">
            <Card className="shadow-md">
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
            <div className="flex space-x-2 mt-4">
              <Button onClick={handleSave} className="flex items-center space-x-2">
                <Save className="h-4 w-4" />
                <span>Save</span>
              </Button>
              <Button onClick={handleDownload} variant="outline" className="flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Download</span>
              </Button>
              <Button onClick={handleShare} variant="outline" className="flex items-center space-x-2">
                <Share className="h-4 w-4" />
                <span>Share</span>
              </Button>
            </div>
          </div>
          
          {/* Editor Controls */}
          <div>
            <Card>
              <CardContent className="p-0">
                <Tabs defaultValue="template">
                  <TabsList className="grid grid-cols-3 w-full">
                    <TabsTrigger value="template">Template</TabsTrigger>
                    <TabsTrigger value="text">Text</TabsTrigger>
                    <TabsTrigger value="style">Style</TabsTrigger>
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
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Message</label>
                      <Textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Enter your invitation message"
                        rows={6}
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
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEditor;
