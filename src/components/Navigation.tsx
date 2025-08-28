import { Button } from "@/components/ui/button";
import { Heart, User, Calendar, MessageSquare, Phone, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4 sm:gap-6 lg:gap-8">
          {/* Logo */}
          <div className="flex items-center space-x-3 min-w-0 flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">MediConnect</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Healthcare Platform</p>
            </div>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 flex-1 justify-center max-w-md mx-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#features" className="text-foreground hover:text-primary transition-colors font-medium">
              Features
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3 flex-shrink-0">
            <ThemeToggle />
            
            {/* Desktop Sign In - shows on medium screens and up */}
            <Link to="/login" className="hidden md:block">
              <Button variant="ghost" size="sm" className="px-3 sm:px-4">
                <User className="w-4 h-4 mr-2" />
                Sign In
              </Button>
            </Link>
            
            {/* Mobile Sign In - shows only on mobile */}
            <Link to="/login" className="md:hidden">
              <Button variant="ghost" size="sm" className="p-2">
                <User className="w-4 h-4" />
              </Button>
            </Link>
            
            {/* Get Started Button - always visible but responsive padding */}
            <Link to="/product-info">
              <Button className="px-2 sm:px-4 md:px-6 text-xs sm:text-sm md:text-base whitespace-nowrap">
                Get Started
              </Button>
            </Link>
            
            {/* Mobile Menu Button - shows on medium screens and below */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden p-2 border border-border/20 hover:bg-muted/50 flex-shrink-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border bg-background/95 backdrop-blur-md rounded-b-lg">
            <div className="flex flex-col space-y-2 pt-4">
              <a 
                href="#home" 
                className="text-foreground hover:text-primary transition-colors font-medium py-3 px-2 rounded-lg hover:bg-muted/50"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#features" 
                className="text-foreground hover:text-primary transition-colors font-medium py-3 px-2 rounded-lg hover:bg-muted/50"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#about" 
                className="text-foreground hover:text-primary transition-colors font-medium py-3 px-2 rounded-lg hover:bg-muted/50"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-foreground hover:text-primary transition-colors font-medium py-3 px-2 rounded-lg hover:bg-muted/50"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Link to="/login" className="md:hidden pt-2 border-t border-border/20">
                <Button variant="ghost" className="justify-start w-full mt-2">
                  <User className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;