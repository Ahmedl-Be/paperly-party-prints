
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/sonner";
import EditorCanvas from "@/components/editor/EditorCanvas";
import Header from "@/components/layout/Header";
import EditorActions from "@/components/editor/EditorActions";
import EditorControls from "@/components/editor/EditorControls";
import html2canvas from "html2canvas";

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
  
  // Reference for the canvas to download
  const canvasRef = useState<HTMLDivElement | null>(null);
  
  const handleTemplateSelect = (template: Template) => {
    setSelectedTemplate(template);
    setTitle(template.defaultText.title);
    setMessage(template.defaultText.message);
    setBackgroundColor(template.backgroundColor);
    setTextColor(template.textColor);
    toast.success("Template selected!");
  };

  const handleSave = () => {
    // In a real app, this would save to the user's account
    const savedDesign = {
      template: selectedTemplate?.id || null,
      title,
      message,
      backgroundColor,
      textColor
    };
    
    // In a production environment, this would connect to a backend
    localStorage.setItem('saved-invitation', JSON.stringify(savedDesign));
    toast.success("Design saved successfully!");
  };

  const handleDownload = () => {
    const cardElement = document.querySelector('.card-canvas') as HTMLElement;
    
    if (!cardElement) {
      toast.error("Could not find card to download");
      return;
    }
    
    toast.promise(
      html2canvas(cardElement).then(canvas => {
        // Create download link
        const link = document.createElement('a');
        link.download = `${title || 'invitation'}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
      }),
      {
        loading: 'Preparing your download...',
        success: 'Download started!',
        error: 'Could not generate image. Please try again.'
      }
    );
  };

  const handleShare = () => {
    // Check if Web Share API is supported
    if (navigator.share) {
      navigator.share({
        title: title || 'My Custom Invitation',
        text: 'Check out this invitation I created!',
        // In a real app, this would be a link to a shared version of the card
        url: window.location.href
      })
        .then(() => toast.success("Shared successfully!"))
        .catch(() => toast.error("Sharing canceled"));
    } else {
      // Fallback for browsers that don't support the Web Share API
      // Create a shareable link (in a real app, this would generate a unique URL)
      navigator.clipboard.writeText(window.location.href)
        .then(() => toast.success("Link copied to clipboard! Now you can share it."))
        .catch(() => toast.error("Could not copy link. Please try again."));
    }
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
                <div className="card-canvas">
                  <EditorCanvas
                    title={title}
                    message={message}
                    backgroundColor={backgroundColor}
                    textColor={textColor}
                    template={selectedTemplate}
                  />
                </div>
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
