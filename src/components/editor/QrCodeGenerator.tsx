
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
  const [qrData, setQrData] = useState<string>("https://cardcrafter.com");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Helper function to validate URL
  const isValidUrl = (urlString: string): boolean => {
    try {
      new URL(urlString);
      return true;
    } catch (e) {
      return false;
    }
  };

  const handleGenerateQR = () => {
    if (!qrData) {
      toast.error("Please enter data for the QR code");
      return;
    }

    // Validate URL format for URL type QR codes
    if (qrType === "url" && !isValidUrl(qrData)) {
      toast.error("Please enter a valid URL (e.g., https://example.com)");
      return;
    }
    
    // Format data based on type to ensure it's scannable
    let formattedData = qrData;
    
    switch (qrType) {
      case "url":
        // URL format is already validated above
        break;
      case "location":
        // Format for geo: URI or Google Maps
        formattedData = `https://maps.google.com/?q=${encodeURIComponent(qrData)}`;
        break;
      case "event":
        // Simple format that most QR readers can understand
        formattedData = `EVENT:${encodeURIComponent(qrData)}`;
        break;
      case "email":
        // Format as mailto: link
        formattedData = `mailto:${encodeURIComponent(qrData)}`;
        break;
    }
    
    setIsLoading(true);
    
    setTimeout(() => {
      onGenerate(formattedData, qrType, qrPosition);
      setIsLoading(false);
      toast.success("Scannable QR code added to your invitation!");
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
        <p className="text-xs text-gray-500 mt-1">
          {qrType === 'url' && 'Enter a valid URL that starts with http:// or https://'}
          {qrType === 'location' && 'Enter an address to open in maps app'}
          {qrType === 'email' && 'Enter an email address for RSVP'}
        </p>
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
        {isLoading ? "Generating..." : "Add Scannable QR Code to Invitation"}
      </Button>
    </div>
  );
};

export default QrCodeGenerator;
