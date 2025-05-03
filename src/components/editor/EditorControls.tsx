
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { QrCode, Smile, ImagePlus, Upload } from "lucide-react";
import ColorPicker from "@/components/editor/ColorPicker";
import TemplateGallery from "@/components/editor/TemplateGallery";
import type { Template } from "@/pages/CardEditor";
import { toast } from "@/components/ui/sonner";

interface EditorControlsProps {
  title: string;
  setTitle: (title: string) => void;
  message: string;
  setMessage: (message: string) => void;
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
  textColor: string;
  setTextColor: (color: string) => void;
  onSelectTemplate: (template: Template) => void;
  backgroundImage: string | null;
  setBackgroundImage: (url: string | null) => void;
  overlayOpacity: number;
  setOverlayOpacity: (opacity: number) => void;
}

const EditorControls: React.FC<EditorControlsProps> = ({
  title,
  setTitle,
  message,
  setMessage,
  backgroundColor,
  setBackgroundColor,
  textColor,
  setTextColor,
  onSelectTemplate,
  backgroundImage,
  setBackgroundImage,
  overlayOpacity,
  setOverlayOpacity
}) => {
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image size should be less than 5MB");
      return;
    }

    // Check file type
    if (!file.type.startsWith("image/")) {
      toast.error("Please upload an image file");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setBackgroundImage(event.target.result as string);
        toast.success("Image uploaded successfully!");
      }
    };
    reader.readAsDataURL(file);
  };

  const removeBackgroundImage = () => {
    setBackgroundImage(null);
    toast.success("Background image removed");
  };

  return (
    <div>
      <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-0">
          <Tabs defaultValue="template" className="w-full">
            <TabsList className="grid grid-cols-5 w-full">
              <TabsTrigger value="template">Templates</TabsTrigger>
              <TabsTrigger value="text">Text</TabsTrigger>
              <TabsTrigger value="style">Style</TabsTrigger>
              <TabsTrigger value="image">Image</TabsTrigger>
              <TabsTrigger value="extras">Extras</TabsTrigger>
            </TabsList>
            
            {/* Template Selection Tab */}
            <TabsContent value="template" className="p-4">
              <TemplateGallery onSelectTemplate={onSelectTemplate} />
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
              {backgroundImage && (
                <div>
                  <label className="block text-sm font-medium mb-1">Background Opacity</label>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={overlayOpacity}
                    onChange={(e) => setOverlayOpacity(parseFloat(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Transparent</span>
                    <span>Solid</span>
                  </div>
                </div>
              )}
            </TabsContent>
            
            {/* New Image Tab */}
            <TabsContent value="image" className="p-4 space-y-4">
              <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <ImagePlus className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                <h3 className="font-medium mb-2">Add Background Image</h3>
                <p className="text-sm text-gray-500 mb-4">Upload an image to use as background for your invitation</p>
                
                <div className="flex flex-col items-center gap-3">
                  <label className="cursor-pointer bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition-colors flex items-center">
                    <Upload className="h-4 w-4 mr-2" />
                    Choose Image
                    <input 
                      type="file" 
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                  </label>
                  
                  {backgroundImage && (
                    <Button 
                      variant="outline" 
                      onClick={removeBackgroundImage}
                      className="border-red-200 text-red-500 hover:bg-red-50"
                    >
                      Remove Image
                    </Button>
                  )}
                </div>
              </div>
              
              {backgroundImage && (
                <div className="mt-4">
                  <p className="text-sm font-medium mb-2">Preview:</p>
                  <div className="aspect-[5/7] w-full bg-contain bg-center bg-no-repeat rounded-md border border-gray-200 shadow-sm" style={{
                    backgroundImage: `url(${backgroundImage})`,
                    maxHeight: '200px'
                  }}></div>
                </div>
              )}
            </TabsContent>
            
            {/* Extras Tab */}
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
      
      {/* Pro Tips */}
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
            <li className="flex items-start">
              <span className="inline-block bg-purple-200 text-purple-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2">✓</span>
              Add images that match your theme
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditorControls;
