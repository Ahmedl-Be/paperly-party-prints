
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/sonner";
import { Smile, Search } from "lucide-react";

interface StickerSelectorProps {
  onSelect: (sticker: string, position: { x: number, y: number }) => void;
}

const StickerSelector: React.FC<StickerSelectorProps> = ({ onSelect }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedSticker, setSelectedSticker] = useState<string | null>(null);
  
  const emojis = {
    celebration: ["🎉", "🎊", "🎈", "🎂", "🎁", "🥂", "🍾", "✨", "🎆", "🎇", "🌟", "🌈"],
    wedding: ["💍", "💒", "👰", "🤵", "💐", "🔔", "💝", "❤️", "💕", "💞", "🌹", "✨"],
    baby: ["👶", "🍼", "🧸", "🎀", "🎠", "🌈", "🧩", "🎁", "🎊", "🎉", "💕", "✨"],
    birthday: ["🎂", "🎁", "🎈", "🎊", "🎉", "🎆", "🎇", "🎠", "🎨", "🍰", "🍭", "🎪"],
    graduation: ["🎓", "📚", "🔍", "🖋️", "📝", "🎊", "🎉", "🎆", "🎇", "⭐", "🏆", "✨"],
    decorative: ["💫", "✨", "⭐", "🔸", "🔹", "🔶", "🔷", "⚜️", "🔱", "📐", "🎨", "🖌️"]
  };

  const handleStickerSelect = (sticker: string) => {
    setSelectedSticker(sticker);
    toast.success("Sticker selected! Add it to your invitation.");
  };

  const handleAddSticker = () => {
    if (selectedSticker) {
      // Random position, in a real app this would be draggable by user
      onSelect(selectedSticker, { x: Math.random() * 80 + 10, y: Math.random() * 80 + 10 });
      toast.success("Sticker added to your invitation!");
    }
  };

  const filteredEmojis = (category: keyof typeof emojis) => {
    if (!searchQuery) return emojis[category];
    return emojis[category].filter(emoji => emoji.includes(searchQuery));
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search stickers and emojis..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-8"
        />
      </div>

      <Tabs defaultValue="celebration" className="w-full">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="celebration">Celebration</TabsTrigger>
          <TabsTrigger value="wedding">Wedding</TabsTrigger>
          <TabsTrigger value="baby">Baby</TabsTrigger>
        </TabsList>
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="birthday">Birthday</TabsTrigger>
          <TabsTrigger value="graduation">Graduation</TabsTrigger>
          <TabsTrigger value="decorative">Decorative</TabsTrigger>
        </TabsList>

        {Object.keys(emojis).map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid grid-cols-4 gap-2 p-2 bg-gray-50 rounded-md min-h-[150px] max-h-[150px] overflow-y-auto">
              {filteredEmojis(category as keyof typeof emojis).map((emoji, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className={`text-2xl h-12 hover:bg-purple-50 transition-all ${
                    selectedSticker === emoji ? "bg-purple-100 ring-2 ring-purple-300" : ""
                  }`}
                  onClick={() => handleStickerSelect(emoji)}
                >
                  {emoji}
                </Button>
              ))}
              {filteredEmojis(category as keyof typeof emojis).length === 0 && (
                <div className="col-span-4 flex flex-col items-center justify-center text-gray-400 py-4">
                  <Smile className="h-8 w-8 mb-2" />
                  <p>No stickers match your search</p>
                </div>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {selectedSticker && (
        <div className="flex items-center justify-between bg-purple-50 p-3 rounded-md">
          <div className="flex items-center">
            <span className="text-3xl mr-2">{selectedSticker}</span>
            <span className="text-sm text-gray-600">Selected</span>
          </div>
          <Button 
            onClick={handleAddSticker}
            className="bg-purple-600 hover:bg-purple-700"
          >
            Add to Card
          </Button>
        </div>
      )}
    </div>
  );
};

export default StickerSelector;
