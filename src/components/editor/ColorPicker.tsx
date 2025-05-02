
import React from "react";
import { Input } from "@/components/ui/input";

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
}

// More professional color palette options
const colorPresets = [
  '#FFFFFF', // White
  '#F9F5FF', // Lavender Mist
  '#D6BCFA', // Lavender
  '#E5DEFF', // Periwinkle
  '#FEF7CD', // Cream
  '#FEC6A1', // Peach
  '#FFDEE2', // Soft Pink
  '#D3E4FD', // Powder Blue
  '#F2FCE2', // Mint
  '#FDE1D3'  // Apricot
];

const ColorPicker: React.FC<ColorPickerProps> = ({ color, onChange }) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <div 
          className="h-10 w-10 rounded-md border border-gray-300 cursor-pointer shadow-sm transition-transform hover:scale-105"
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
          className="w-32 transition-all focus:ring-purple-500"
          spellCheck={false}
        />
      </div>
      
      {/* Preset colors with improved UI */}
      <div>
        <p className="text-xs text-gray-500 mb-2">Suggested colors:</p>
        <div className="grid grid-cols-5 gap-2">
          {colorPresets.map((presetColor) => (
            <div
              key={presetColor}
              className="aspect-square rounded-md border cursor-pointer hover:scale-110 transition-transform shadow-sm"
              style={{ backgroundColor: presetColor }}
              onClick={() => onChange(presetColor)}
              title={presetColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
