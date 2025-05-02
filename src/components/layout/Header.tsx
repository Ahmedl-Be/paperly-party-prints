
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-purple-600">
              Paperly
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/templates" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">
              Templates
            </Link>
            <Link to="/create" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">
              Create
            </Link>
            <Link to="/pricing" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">
              Pricing
            </Link>
          </nav>
          
          {/* Search */}
          <div className="hidden md:flex relative w-full max-w-xs mx-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              placeholder="Search templates..." 
              className="pl-10 pr-4 py-2 w-full bg-gray-50 border-gray-200"
            />
          </div>
          
          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Sign In
            </Button>
            <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
              Get Started
            </Button>
            
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-white border-t border-gray-100 shadow-lg">
          <div className="flex items-center mb-4">
            <Search className="text-gray-400 h-4 w-4 mr-3" />
            <Input placeholder="Search templates..." className="w-full" />
          </div>
          <nav className="flex flex-col space-y-3">
            <Link 
              to="/templates" 
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Templates
            </Link>
            <Link 
              to="/create" 
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Create
            </Link>
            <Link 
              to="/pricing" 
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/signin" 
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
