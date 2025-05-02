
import React from "react";
import type { Template } from "@/pages/CardEditor";

interface EditorCanvasProps {
  title: string;
  message: string;
  backgroundColor: string;
  textColor: string;
  template: Template | null;
}

const EditorCanvas: React.FC<EditorCanvasProps> = ({
  title,
  message,
  backgroundColor,
  textColor,
  template
}) => {
  // Default aspect ratio for invitation cards (typically 5x7)
  const aspectRatio = "aspect-[5/7]";

  return (
    <div className="w-full flex justify-center">
      <div 
        className={`${aspectRatio} w-full max-w-md shadow-lg rounded-md overflow-hidden border border-gray-200 flex flex-col`}
        style={{ 
          backgroundColor: backgroundColor,
        }}
      >
        {/* If a template is selected, we could add a background image or pattern here */}
        <div className="flex flex-col items-center justify-center text-center p-8 h-full">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4" 
            style={{ color: textColor }}
          >
            {title || "Your Invitation Title"}
          </h2>
          
          <p 
            className="text-lg whitespace-pre-wrap" 
            style={{ color: textColor }}
          >
            {message || "Enter your invitation details here. Include event information such as date, time, and location."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EditorCanvas;
