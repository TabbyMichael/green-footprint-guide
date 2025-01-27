import { Leaf } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-6 w-6" />
              <span className="text-xl font-bold">EcoTrack</span>
            </div>
            <p className="text-primary-100">
              Making sustainability accessible and actionable for everyone.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-primary-100 hover:text-white">About Us</a></li>
              <li><a href="#features" className="text-primary-100 hover:text-white">Features</a></li>
              <li><a href="#contact" className="text-primary-100 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#blog" className="text-primary-100 hover:text-white">Blog</a></li>
              <li><a href="#calculator" className="text-primary-100 hover:text-white">Carbon Calculator</a></li>
              <li><a href="#offset" className="text-primary-100 hover:text-white">Offset Programs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#twitter" className="text-primary-100 hover:text-white">Twitter</a></li>
              <li><a href="#linkedin" className="text-primary-100 hover:text-white">LinkedIn</a></li>
              <li><a href="#instagram" className="text-primary-100 hover:text-white">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-700 text-center text-primary-100">
          <p>&copy; {new Date().getFullYear()} EcoTrack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};