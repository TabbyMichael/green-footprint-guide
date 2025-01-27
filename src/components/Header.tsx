import { Leaf } from "lucide-react";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-primary-500" />
            <span className="text-xl font-bold text-primary-700">EcoTrack</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-primary-600">About</a>
            <a href="#features" className="text-gray-600 hover:text-primary-600">Features</a>
            <a href="#contact" className="text-gray-600 hover:text-primary-600">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden md:inline-flex">Sign In</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
};