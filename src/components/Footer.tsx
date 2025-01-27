import { Leaf, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Leaf className="h-6 w-6" />
              <span className="text-xl font-bold">EcoTrack</span>
            </div>
            <p className="text-primary-100">
              Empowering individuals and businesses to measure, reduce, and offset
              their carbon footprint for a sustainable future.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-300" />
                <span className="text-primary-100">123 Green Street, Eco City</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-300" />
                <span className="text-primary-100">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-300" />
                <span className="text-primary-100">contact@ecotrack.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="/about-us" className="text-primary-100 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/features" className="text-primary-100 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="/contact" className="text-primary-100 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li>
                <a href="/blog" className="text-primary-100 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/carbon-calculator" className="text-primary-100 hover:text-white transition-colors">
                  Carbon Calculator
                </a>
              </li>
              <li>
                <a href="/offset-programs" className="text-primary-100 hover:text-white transition-colors">
                  Offset Programs
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-primary-100 mb-4">
              Subscribe to our newsletter for the latest updates on sustainability
              and carbon reduction strategies.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-primary-800 border border-primary-700 text-white placeholder-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <Button className="w-full bg-primary-600 hover:bg-primary-500 text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-100 text-sm">
              © {new Date().getFullYear()} EcoTrack. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-primary-100 hover:text-white text-sm">
                Privacy Policy
              </a>
              <a href="/terms" className="text-primary-100 hover:text-white text-sm">
                Terms of Service
              </a>
              <a href="/cookies" className="text-primary-100 hover:text-white text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};