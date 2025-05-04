
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { QrCode, ExternalLink, MapPin, Calendar, Mail } from "lucide-react";
import { toast } from "@/components/ui/sonner";

interface QrCodeGeneratorProps {
  onGenerate: (qrData: string, qrType: string, qrPosition: string) => void;
}

const QrCodeGenerator: React.FC<QrCodeGeneratorProps> = ({ onGenerate }) => {
  const [qrType, setQrType] = useState<string>("url");
  const [qrPosition, setQrPosition] = useState<string>("bottom-right");
  const [qrData, setQrData] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGenerateQR = () => {
    if (!qrData) {
      toast.error("Please enter data for the QR code");
      return;
    }
    
    setIsLoading(true);
    
    // In a real app, we might have more validation here
    setTimeout(() => {
      onGenerate(qrData, qrType, qrPosition);
      setIsLoading(false);
      toast.success("QR code added to your invitation!");
    }, 800);
  };
  
  const getPlaceholder = () => {
    switch (qrType) {
      case "url":
        return "https://your-website.com";
      case "location":
        return "123 Wedding Venue St, City";
      case "event":
        return "Event title, date, time";
      case "email":
        return "rsvp@example.com";
      default:
        return "Enter data for QR code";
    }
  };
  
  const getIcon = () => {
    switch (qrType) {
      case "url":
        return <ExternalLink className="h-4 w-4" />;
      case "location":
        return <MapPin className="h-4 w-4" />;
      case "event":
        return <Calendar className="h-4 w-4" />;
      case "email":
        return <Mail className="h-4 w-4" />;
      default:
        return <QrCode className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <Label className="mb-2 block">QR Code Type</Label>
        <RadioGroup 
          value={qrType} 
          onValueChange={setQrType}
          className="grid grid-cols-2 gap-2"
        >
          <div className="flex items-center space-x-2 border rounded-md p-2 hover:bg-purple-50 transition-colors">
            <RadioGroupItem value="url" id="url" />
            <Label htmlFor="url" className="cursor-pointer">Website URL</Label>
          </div>
          <div className="flex items-center space-x-2 border rounded-md p-2 hover:bg-purple-50 transition-colors">
            <RadioGroupItem value="location" id="location" />
            <Label htmlFor="location" className="cursor-pointer">Location</Label>
          </div>
          <div className="flex items-center space-x-2 border rounded-md p-2 hover:bg-purple-50 transition-colors">
            <RadioGroupItem value="event" id="event" />
            <Label htmlFor="event" className="cursor-pointer">Event Details</Label>
          </div>
          <div className="flex items-center space-x-2 border rounded-md p-2 hover:bg-purple-50 transition-colors">
            <RadioGroupItem value="email" id="email" />
            <Label htmlFor="email" className="cursor-pointer">Email (RSVP)</Label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <Label htmlFor="qrData">QR Code Data</Label>
        <div className="flex mt-1">
          <div className="bg-gray-100 p-2 flex items-center border-l border-y rounded-l-md">
            {getIcon()}
          </div>
          <Input
            id="qrData"
            value={qrData}
            onChange={(e) => setQrData(e.target.value)}
            placeholder={getPlaceholder()}
            className="rounded-l-none focus-visible:ring-purple-500"
          />
        </div>
      </div>
      
      <div>
        <Label className="mb-2 block">Position on Card</Label>
        <RadioGroup 
          value={qrPosition} 
          onValueChange={setQrPosition}
          className="grid grid-cols-3 gap-2"
        >
          <div className="flex items-center justify-center border rounded-md p-2 hover:bg-purple-50 transition-colors">
            <RadioGroupItem value="top-left" id="top-left" />
          </div>
          <div className="flex items-center justify-center border rounded-md p-2 hover:bg-purple-50 transition-colors">
            <RadioGroupItem value="top-center" id="top-center" />
          </div>
          <div className="flex items-center justify-center border rounded-md p-2 hover:bg-purple-50 transition-colors">
            <RadioGroupItem value="top-right" id="top-right" />
          </div>
          <div className="flex items-center justify-center border rounded-md p-2 hover:bg-purple-50 transition-colors">
            <RadioGroupItem value="middle-left" id="middle-left" />
          </div>
          <div className="flex items-center justify-center border rounded-md p-2 hover:bg-purple-50 transition-colors">
            <RadioGroupItem value="middle-center" id="middle-center" />
          </div>
          <div className="flex items-center justify-center border rounded-md p-2 hover:bg-purple-50 transition-colors">
            <RadioGroupItem value="middle-right" id="middle-right" />
          </div>
          <div className="flex items-center justify-center border rounded-md p-2 hover:bg-purple-50 transition-colors">
            <RadioGroupItem value="bottom-left" id="bottom-left" />
          </div>
          <div className="flex items-center justify-center border rounded-md p-2 hover:bg-purple-50 transition-colors">
            <RadioGroupItem value="bottom-center" id="bottom-center" />
          </div>
          <div className="flex items-center justify-center border rounded-md p-2 hover:bg-purple-50 transition-colors">
            <RadioGroupItem value="bottom-right" id="bottom-right" />
          </div>
        </RadioGroup>
      </div>

      <Button 
        onClick={handleGenerateQR} 
        className="w-full bg-purple-600 hover:bg-purple-700"
        disabled={isLoading}
      >
        {isLoading ? "Generating..." : "Add QR Code to Invitation"}
      </Button>
    </div>
  );
};

export default QrCodeGenerator;
