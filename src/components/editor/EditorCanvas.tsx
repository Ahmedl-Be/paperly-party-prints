
import React from "react";
import type { Template } from "@/pages/CardEditor";

interface EditorCanvasProps {
  title: string;
  message: string;
  backgroundColor: string;
  textColor: string;
  template: Template | null;
  backgroundImage: string | null;
  overlayOpacity: number;
  qrCode?: {
    data: string;
    type: string;
    position: string;
  };
  stickers?: {
    emoji: string;
    position: {
      x: number;
      y: number;
    };
  }[];
}

const EditorCanvas: React.FC<EditorCanvasProps> = ({
  title,
  message,
  backgroundColor,
  textColor,
  template,
  backgroundImage,
  overlayOpacity,
  qrCode,
  stickers = []
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

  // Determine position class for QR code
  const getQRPositionClass = (position: string) => {
    switch (position) {
      case "top-left": return "top-4 left-4";
      case "top-center": return "top-4 left-1/2 transform -translate-x-1/2";
      case "top-right": return "top-4 right-4";
      case "middle-left": return "top-1/2 left-4 transform -translate-y-1/2";
      case "middle-center": return "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2";
      case "middle-right": return "top-1/2 right-4 transform -translate-y-1/2";
      case "bottom-left": return "bottom-4 left-4";
      case "bottom-center": return "bottom-4 left-1/2 transform -translate-x-1/2";
      case "bottom-right": return "bottom-4 right-4";
      default: return "bottom-4 right-4";
    }
  };

  // Generate a simple QR code placeholder (in a real app, use a proper QR code library)
  const renderQRCode = () => {
    if (!qrCode) return null;
    
    return (
      <div className={`absolute ${getQRPositionClass(qrCode.position)} w-16 h-16 bg-white p-1 rounded shadow-md z-30 border-2 border-gray-200`}>
        <div className="w-full h-full bg-white relative overflow-hidden">
          {/* Simple visual representation of a QR code */}
          <div className="grid grid-cols-4 grid-rows-4 w-full h-full">
            {Array(16).fill(0).map((_, i) => (
              <div 
                key={i} 
                className={`
                  ${Math.random() > 0.6 ? 'bg-black' : 'bg-white'} 
                  ${i === 0 || i === 3 || i === 12 || i === 15 ? 'bg-black' : ''}
                `}
              ></div>
            ))}
          </div>
          {/* QR code type indicator */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            {qrCode.type === "url" && <span>🌐</span>}
            {qrCode.type === "location" && <span>📍</span>}
            {qrCode.type === "event" && <span>📅</span>}
            {qrCode.type === "email" && <span>📧</span>}
          </div>
        </div>
      </div>
    );
  };

  // Render stickers
  const renderStickers = () => {
    if (!stickers.length) return null;
    
    return stickers.map((sticker, index) => (
      <div 
        key={index} 
        className="absolute z-30 text-3xl transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform cursor-move"
        style={{ 
          top: `${sticker.position.y}%`,
          left: `${sticker.position.x}%`,
        }}
      >
        {sticker.emoji}
      </div>
    ));
  };

  // Determine if we need to show the template background image
  const showTemplateBackground = template?.previewUrl && !backgroundImage;

  return (
    <div className="w-full flex justify-center">
      <div 
        className={`${aspectRatio} w-full max-w-md shadow-xl rounded-md overflow-hidden border border-gray-200 flex flex-col transition-all duration-300 relative transform hover:scale-[1.01] hover:shadow-2xl`}
        style={{ 
          backgroundColor: backgroundColor,
        }}
      >
        {/* Template background image if available and no custom background uploaded */}
        {showTemplateBackground && (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{
              backgroundImage: `url(${template.previewUrl})`,
              opacity: 0.15
            }}
          ></div>
        )}
        
        {/* User uploaded background image if available */}
        {backgroundImage && (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          ></div>
        )}
        
        {/* Color overlay for background image */}
        {(backgroundImage || showTemplateBackground) && (
          <div 
            className="absolute inset-0 z-10"
            style={{ 
              backgroundColor: backgroundColor,
              opacity: overlayOpacity
            }}
          ></div>
        )}
        
        {/* Background patterns and decorative elements */}
        <div className={backgroundImage || showTemplateBackground ? "z-20" : ""}>
          {getDecorativeElements()}
        </div>
        
        <div className={`flex flex-col items-center justify-center text-center p-8 h-full relative ${backgroundImage || showTemplateBackground ? "z-20" : ""}`}>
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
        
        {/* QR Code */}
        {renderQRCode()}
        
        {/* Stickers/Emojis */}
        {renderStickers()}
      </div>
    </div>
  );
};

export default EditorCanvas;
