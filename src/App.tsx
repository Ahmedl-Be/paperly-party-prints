
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CardEditor from "./pages/CardEditor";
import Templates from "./pages/Templates";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import WorkInProgress from "./components/editor/WorkInProgress";
import { QrCode, Smile, Search as SearchIcon } from "lucide-react";

const App = () => {
  // Initialize QueryClient correctly - create a new instance directly
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 1
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner position="bottom-right" richColors />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/create" element={<CardEditor />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/search" element={<Search />} />
            
            {/* Work in Progress pages */}
            <Route 
              path="/qr-feature" 
              element={
                <WorkInProgress 
                  title="QR Code Generator"
                  description="We're enhancing our QR code feature to make your invitations more interactive. Soon, you'll be able to add custom QR codes for easy RSVPs, directions, and more!"
                  icon={<QrCode className="h-10 w-10 text-purple-500" />}
                  availableIn="Coming in June 2025"
                  returnPath="/create"
                />
              } 
            />
            <Route 
              path="/stickers-feature" 
              element={
                <WorkInProgress 
                  title="Stickers & Emojis"
                  description="Our design team is creating beautiful custom stickers to make your invitations truly unique. You'll soon be able to add fun, themed decorations with just a click!"
                  icon={<Smile className="h-10 w-10 text-purple-500" />}
                  availableIn="Coming in May 2025"
                  returnPath="/create"
                />
              } 
            />
            <Route 
              path="/enhanced-search" 
              element={
                <WorkInProgress 
                  title="AI-Powered Search"
                  description="We're building smarter search capabilities to help you find the perfect template based on your event, style preferences, and more."
                  icon={<SearchIcon className="h-10 w-10 text-purple-500" />}
                  availableIn="Coming in July 2025"
                  returnPath="/search"
                />
              } 
            />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
