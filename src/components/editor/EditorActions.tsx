
import React from "react";
import { Button } from "@/components/ui/button";
import { Save, Download, Share } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import html2canvas from "html2canvas";

interface EditorActionsProps {
  onSave: () => void;
  onDownload: () => void;
  onShare: () => void;
}

const EditorActions: React.FC<EditorActionsProps> = ({
  onSave,
  onDownload,
  onShare
}) => {
  const handleSave = () => {
    // Call the parent onSave function
    onSave();
  };

  const handleDownload = () => {
    // Call the parent onDownload function
    onDownload();
  };

  const handleShare = () => {
    // Call the parent onShare function
    onShare();
  };

  return (
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
  );
};

export default EditorActions;
