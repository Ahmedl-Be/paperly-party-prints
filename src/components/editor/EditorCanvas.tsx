
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

  // Get decorative elements based on template category
  const getDecorativeElements = () => {
    if (!template) return null;
    
    switch(template.category) {
      case "wedding":
        return (
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
            <div className="absolute top-4 left-4 right-4 bottom-4 border border-current rounded-md"></div>
            <div className="absolute top-8 left-8 right-8 bottom-8 border border-current rounded-md"></div>
            <div className="absolute top-6 right-6 text-4xl">💍</div>
            <div className="absolute bottom-6 left-6 text-4xl">💐</div>
          </div>
        );
      case "birthday":
        return (
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-2 right-2 text-4xl opacity-20" style={{ color: textColor }}>🎂</div>
            <div className="absolute bottom-2 left-2 text-4xl opacity-20" style={{ color: textColor }}>🎈</div>
            <div className="absolute top-2 left-2 text-4xl opacity-20" style={{ color: textColor }}>🎉</div>
            <div className="absolute bottom-2 right-2 text-4xl opacity-20" style={{ color: textColor }}>🎁</div>
          </div>
        );
      case "baby":
        return (
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-3 right-6 text-4xl opacity-20" style={{ color: textColor }}>👶</div>
            <div className="absolute bottom-3 left-6 text-4xl opacity-20" style={{ color: textColor }}>🍼</div>
            <div className="absolute top-6 left-3 text-4xl opacity-20" style={{ color: textColor }}>🧸</div>
            <div className="absolute bottom-6 right-3 text-4xl opacity-20" style={{ color: textColor }}>🧦</div>
          </div>
        );
      case "graduation":
        return (
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-3 right-6 text-4xl opacity-20" style={{ color: textColor }}>🎓</div>
            <div className="absolute bottom-3 left-6 text-4xl opacity-20" style={{ color: textColor }}>📚</div>
            <div className="absolute top-6 left-3 text-4xl opacity-20" style={{ color: textColor }}>🎯</div>
            <div className="absolute bottom-6 right-3 text-4xl opacity-20" style={{ color: textColor }}>✨</div>
          </div>
        );
      case "holiday":
        return (
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-3 right-6 text-4xl opacity-20" style={{ color: textColor }}>🎄</div>
            <div className="absolute bottom-3 left-6 text-4xl opacity-20" style={{ color: textColor }}>❄️</div>
            <div className="absolute top-6 left-3 text-4xl opacity-20" style={{ color: textColor }}>🎁</div>
            <div className="absolute bottom-6 right-3 text-4xl opacity-20" style={{ color: textColor }}>✨</div>
          </div>
        );
      case "corporate":
        return (
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
            <div className="absolute top-4 left-4 right-4 bottom-4 border border-current rounded-md"></div>
            <div className="absolute top-2 right-2 text-4xl opacity-20" style={{ color: textColor }}>📊</div>
            <div className="absolute bottom-2 left-2 text-4xl opacity-20" style={{ color: textColor }}>💼</div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div 
        className={`${aspectRatio} w-full max-w-md shadow-lg rounded-md overflow-hidden border border-gray-200 flex flex-col transition-all duration-300`}
        style={{ 
          backgroundColor: backgroundColor,
        }}
      >
        {/* Background patterns and decorative elements */}
        {getDecorativeElements()}
        
        <div className="flex flex-col items-center justify-center text-center p-8 h-full relative">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6 transition-all"
            style={{ color: textColor }}
          >
            {title || "Your Invitation Title"}
          </h2>
          
          <p 
            className="text-lg whitespace-pre-wrap transition-all"
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
