
import React from "react";
import { Button } from "@/components/ui/button";
import { Save, Download, Share } from "lucide-react";
import { toast } from "@/components/ui/sonner";

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
  return (
    <div className="flex flex-wrap md:flex-nowrap gap-2 mt-4">
      <Button 
        onClick={onSave} 
        className="flex-1 flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 transition-colors"
      >
        <Save className="h-4 w-4" />
        <span>Save</span>
      </Button>
      <Button 
        onClick={onDownload} 
        variant="outline" 
        className="flex-1 flex items-center justify-center space-x-2 border-purple-200 hover:bg-purple-50 transition-colors"
      >
        <Download className="h-4 w-4" />
        <span>Download</span>
      </Button>
      <Button 
        onClick={onShare} 
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
