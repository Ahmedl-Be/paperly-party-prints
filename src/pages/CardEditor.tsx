
import { useState, useEffect } from "react";
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

// History state for undo/redo functionality
interface HistoryState {
  title: string;
  message: string;
  backgroundColor: string;
  textColor: string;
  backgroundImage: string | null;
  overlayOpacity: number;
}

const CardEditor = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const [overlayOpacity, setOverlayOpacity] = useState(0.3);
  
  // History states for undo/redo functionality
  const [history, setHistory] = useState<HistoryState[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isUndoRedoAction, setIsUndoRedoAction] = useState(false);
  
  // Reference for the canvas to download
  const canvasRef = useState<HTMLDivElement | null>(null);

  // Load saved state from localStorage on initial render
  useEffect(() => {
    try {
      const savedInvitation = localStorage.getItem('saved-invitation');
      if (savedInvitation) {
        const savedState = JSON.parse(savedInvitation);
        if (savedState.title) setTitle(savedState.title);
        if (savedState.message) setMessage(savedState.message);
        if (savedState.backgroundColor) setBackgroundColor(savedState.backgroundColor);
        if (savedState.textColor) setTextColor(savedState.textColor);
        if (savedState.backgroundImage) setBackgroundImage(savedState.backgroundImage);
        if (savedState.overlayOpacity !== undefined) setOverlayOpacity(savedState.overlayOpacity);
        
        toast.info("Your saved design has been loaded!");
      }
    } catch (error) {
      console.error("Error loading saved design:", error);
    }
  }, []);

  // Save to history when any design element changes
  useEffect(() => {
    if (!isUndoRedoAction) {
      const currentState: HistoryState = {
        title,
        message,
        backgroundColor,
        textColor,
        backgroundImage,
        overlayOpacity
      };
      
      // If we're in the middle of the history, truncate it
      if (historyIndex >= 0 && historyIndex < history.length - 1) {
        setHistory(prev => [...prev.slice(0, historyIndex + 1), currentState]);
        setHistoryIndex(historyIndex + 1);
      } else {
        // Add to the end of history
        setHistory(prev => [...prev, currentState]);
        setHistoryIndex(prev => prev + 1);
      }
      
      // Limit history to 50 steps to prevent memory issues
      if (history.length > 50) {
        setHistory(prev => prev.slice(prev.length - 50));
        setHistoryIndex(49);
      }
    } else {
      setIsUndoRedoAction(false);
    }
  }, [title, message, backgroundColor, textColor, backgroundImage, overlayOpacity]);
  
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
      textColor,
      backgroundImage,
      overlayOpacity
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
      html2canvas(cardElement, {
        scale: 2, // Higher quality output
        useCORS: true // Needed for images from other domains
      }).then(canvas => {
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
      // In a real app, this would generate a shareable link first
      // For now we'll just share the current page
      navigator.share({
        title: title || 'My Custom Invitation',
        text: 'Check out this invitation I created!',
        url: window.location.href
      })
        .then(() => toast.success("Shared successfully!"))
        .catch((error) => {
          if (error.name !== 'AbortError') {
            toast.error("Sharing failed");
          }
        });
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(window.location.href)
        .then(() => toast.success("Link copied to clipboard! Now you can share it."))
        .catch(() => toast.error("Could not copy link. Please try again."));
    }
  };
  
  const handleUndo = () => {
    if (historyIndex > 0) {
      setIsUndoRedoAction(true);
      const prevState = history[historyIndex - 1];
      setTitle(prevState.title);
      setMessage(prevState.message);
      setBackgroundColor(prevState.backgroundColor);
      setTextColor(prevState.textColor);
      setBackgroundImage(prevState.backgroundImage);
      setOverlayOpacity(prevState.overlayOpacity);
      setHistoryIndex(historyIndex - 1);
      toast.info("Undo successful");
    } else {
      toast.info("Nothing to undo");
    }
  };
  
  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      setIsUndoRedoAction(true);
      const nextState = history[historyIndex + 1];
      setTitle(nextState.title);
      setMessage(nextState.message);
      setBackgroundColor(nextState.backgroundColor);
      setTextColor(nextState.textColor);
      setBackgroundImage(nextState.backgroundImage);
      setOverlayOpacity(nextState.overlayOpacity);
      setHistoryIndex(historyIndex + 1);
      toast.info("Redo successful");
    } else {
      toast.info("Nothing to redo");
    }
  };

  // Auto-save draft on changes
  useEffect(() => {
    const autosaveTimeout = setTimeout(() => {
      if (title || message) {
        const draftDesign = {
          template: selectedTemplate?.id || null,
          title,
          message,
          backgroundColor,
          textColor,
          backgroundImage,
          overlayOpacity
        };
        localStorage.setItem('draft-invitation', JSON.stringify(draftDesign));
        console.log('Auto-saved draft');
      }
    }, 5000); // Save after 5 seconds of inactivity
    
    return () => clearTimeout(autosaveTimeout);
  }, [title, message, backgroundColor, textColor, backgroundImage, overlayOpacity, selectedTemplate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">Design Your Invitation</h1>
        <p className="text-gray-600 mb-6">Customize your perfect invitation with our easy-to-use editor</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Editor Canvas - Preview Area */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-purple-100">
              <CardContent className="p-6">
                <div className="card-canvas">
                  <EditorCanvas
                    title={title}
                    message={message}
                    backgroundColor={backgroundColor}
                    textColor={textColor}
                    template={selectedTemplate}
                    backgroundImage={backgroundImage}
                    overlayOpacity={overlayOpacity}
                  />
                </div>
              </CardContent>
            </Card>
            
            {/* Action Buttons */}
            <EditorActions 
              onSave={handleSave}
              onDownload={handleDownload}
              onShare={handleShare}
              onUndo={handleUndo}
              onRedo={handleRedo}
              canUndo={historyIndex > 0}
              canRedo={historyIndex < history.length - 1}
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
              backgroundImage={backgroundImage}
              setBackgroundImage={setBackgroundImage}
              overlayOpacity={overlayOpacity}
              setOverlayOpacity={setOverlayOpacity}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEditor;
