
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Search, Sparkles } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Templates", path: "/templates" },
    { name: "Create", path: "/create" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" }
  ];

  const handleMenuOpen = (open: boolean) => {
    setIsMenuOpen(open);
  };

  return (
    <header className="border-b bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-heading font-bold bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              CardCrafter
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(item.path)
                    ? "bg-purple-100 text-purple-700"
                    : "text-gray-700 hover:bg-gray-50 hover:text-purple-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/ai-creator"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${
                isActive("/ai-creator")
                  ? "bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700"
                  : "text-gray-700 hover:bg-gray-50 hover:text-purple-600"
              }`}
            >
              AI Creator <Sparkles className="h-3 w-3 text-yellow-500" />
            </Link>
            <Link
              to="/search"
              className={`p-2 text-sm font-medium rounded-full transition-colors ${
                isActive("/search")
                  ? "bg-purple-100 text-purple-700"
                  : "text-gray-700 hover:bg-gray-50 hover:text-purple-600"
              }`}
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </Link>
          </nav>

          {/* Auth Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/auth">
              <Button variant="outline" size="sm" className="font-medium border-purple-200 hover:border-purple-300 hover:bg-purple-50">
                Log In
              </Button>
            </Link>
            <Link to="/auth?tab=signup">
              <Button size="sm" className="font-medium bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-sm">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={handleMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="px-2">
                  {isMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px] pt-12 border-l-purple-100">
                <nav className="flex flex-col space-y-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`px-4 py-2 text-base rounded-md font-medium ${
                        isActive(item.path)
                          ? "bg-purple-100 text-purple-700"
                          : "hover:bg-gray-50 hover:text-purple-600"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    to="/ai-creator"
                    className={`px-4 py-2 text-base rounded-md font-medium flex items-center gap-1 ${
                      isActive("/ai-creator")
                        ? "bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700"
                        : "hover:bg-gray-50 hover:text-purple-600"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    AI Creator <Sparkles className="h-3 w-3 text-yellow-500" />
                  </Link>
                  <Link
                    to="/search"
                    className={`px-4 py-2 text-base rounded-md flex items-center gap-2 font-medium ${
                      isActive("/search")
                        ? "bg-purple-100 text-purple-700"
                        : "hover:bg-gray-50 hover:text-purple-600"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Search className="h-4 w-4" /> Search
                  </Link>
                  <div className="pt-4 border-t border-gray-100">
                    <Link
                      to="/auth"
                      className="block px-4 py-2 mb-2 text-center border rounded-md hover:bg-gray-50 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Log In
                    </Link>
                    <Link
                      to="/auth?tab=signup"
                      className="block px-4 py-2 text-center bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-md hover:from-purple-700 hover:to-purple-800 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
