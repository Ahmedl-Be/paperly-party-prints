
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/sonner";
import EditorCanvas from "@/components/editor/EditorCanvas";
import Header from "@/components/layout/Header";
import EditorActions from "@/components/editor/EditorActions";
import EditorControls from "@/components/editor/EditorControls";

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
            <EditorActions 
              onSave={handleSave}
              onDownload={handleDownload}
              onShare={handleShare}
            />
          </div>
          
          {/* Editor Controls */}
          <div>
            <EditorControls
              title={title}
              setTitle={setTitle}
              message={message}
              setMessage={setMessage}
              backgroundColor={backgroundColor}
              setBackgroundColor={setBackgroundColor}
              textColor={textColor}
              setTextColor={setTextColor}
              onSelectTemplate={handleTemplateSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEditor;
