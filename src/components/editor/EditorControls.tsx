
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { QrCode, Smile } from "lucide-react";
import ColorPicker from "@/components/editor/ColorPicker";
import TemplateGallery from "@/components/editor/TemplateGallery";
import type { Template } from "@/pages/CardEditor";

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
  onSelectTemplate
}) => {
  return (
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
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditorControls;
