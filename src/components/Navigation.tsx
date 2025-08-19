import { Button } from "@/components/ui/button";
import { Heart, User, Calendar, MessageSquare, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">MediConnect</h1>
              <p className="text-xs text-muted-foreground">Healthcare Platform</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="hidden sm:flex">
                <User className="w-4 h-4 mr-2" />
                Sign In
              </Button>
            </Link>
            <Link to="/product-info">
              <Button variant="hero" className="px-6">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;