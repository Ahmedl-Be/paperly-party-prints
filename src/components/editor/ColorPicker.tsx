
import React from "react";
import { Input } from "@/components/ui/input";

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ color, onChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <div 
        className="h-10 w-10 rounded-md border border-gray-300 cursor-pointer"
        style={{ backgroundColor: color }}
        onClick={() => {
          // This creates a click on the hidden color input
          document.getElementById('color-picker')?.click();
        }}
      />
      <Input
        id="color-picker"
        type="color"
        value={color}
        onChange={(e) => onChange(e.target.value)}
        className="w-0 h-0 opacity-0 absolute"
      />
      <Input
        type="text"
        value={color}
        onChange={(e) => onChange(e.target.value)}
        className="w-32"
      />
      
      {/* Preset colors */}
      <div className="flex space-x-1">
        {['#FFFFFF', '#F8E9DD', '#D6BCFA', '#FEC6A1', '#E5DEFF', '#FFDEE2'].map((presetColor) => (
          <div
            key={presetColor}
            className="h-6 w-6 rounded-full border cursor-pointer hover:scale-110 transition-transform"
            style={{ backgroundColor: presetColor }}
            onClick={() => onChange(presetColor)}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
