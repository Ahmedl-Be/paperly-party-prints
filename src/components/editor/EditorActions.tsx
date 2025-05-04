
import React from "react";
import { Button } from "@/components/ui/button";
import { Save, Download, Share, Undo2, Redo2 } from "lucide-react";
import { toast } from "@/components/ui/sonner";

interface EditorActionsProps {
  onSave: () => void;
  onDownload: () => void;
  onShare: () => void;
  onUndo?: () => void;
  onRedo?: () => void;
  canUndo?: boolean;
  canRedo?: boolean;
}

const EditorActions: React.FC<EditorActionsProps> = ({
  onSave,
  onDownload,
  onShare,
  onUndo,
  onRedo,
  canUndo = false,
  canRedo = false
}) => {
  return (
    <div className="mt-4">
      {/* Undo/Redo row */}
      {onUndo && onRedo && (
        <div className="flex justify-end mb-2">
          <div className="flex space-x-2">
            <Button 
              onClick={onUndo} 
              variant="ghost" 
              size="sm"
              disabled={!canUndo}
              className={`text-gray-600 hover:text-purple-600 hover:bg-purple-50 ${!canUndo ? 'opacity-50' : 'hover:scale-105 transition-transform'}`}
              title="Undo"
            >
              <Undo2 className="h-4 w-4 mr-1" />
              <span>Undo</span>
            </Button>
            <Button 
              onClick={onRedo} 
              variant="ghost" 
              size="sm"
              disabled={!canRedo}
              className={`text-gray-600 hover:text-purple-600 hover:bg-purple-50 ${!canRedo ? 'opacity-50' : 'hover:scale-105 transition-transform'}`}
              title="Redo"
            >
              <Redo2 className="h-4 w-4 mr-1" />
              <span>Redo</span>
            </Button>
          </div>
        </div>
      )}

      {/* Main action buttons */}
      <div className="flex flex-wrap md:flex-nowrap gap-2">
        <Button 
          onClick={onSave} 
          className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 transition-colors shadow-md hover:shadow-lg"
        >
          <Save className="h-4 w-4" />
          <span>Save</span>
        </Button>
        <Button 
          onClick={onDownload} 
          variant="outline" 
          className="flex-1 flex items-center justify-center space-x-2 border-purple-200 hover:bg-purple-50 transition-all hover:scale-[1.02]"
        >
          <Download className="h-4 w-4" />
          <span>Download</span>
        </Button>
        <Button 
          onClick={onShare} 
          variant="outline" 
          className="flex-1 flex items-center justify-center space-x-2 border-purple-200 hover:bg-purple-50 transition-all hover:scale-[1.02]"
        >
          <Share className="h-4 w-4" />
          <span>Share</span>
        </Button>
      </div>
      
      {/* Progress indicator */}
      <div className="mt-3 bg-gray-100 h-1.5 rounded-full overflow-hidden">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-full w-1/2" title="Design progress"></div>
      </div>
      <p className="text-xs text-center mt-1 text-gray-500">Design progress: 50% complete</p>
    </div>
  );
};

export default EditorActions;
