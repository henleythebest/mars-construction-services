import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Mars <span className="text-primary">Construction</span>
            </h3>
            <p className="text-white/80 mb-6">
              Building excellence since 2009. Your trusted partner for all construction needs.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-white/60 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-white/60 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-white/60 hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-white/60 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-primary transition-colors">Commercial Construction</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Residential Construction</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Renovation & Remodeling</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Infrastructure Projects</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-white/80">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-white/80">info@marsconstruction.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-white/80">123 Construction Ave<br />Mars City, State 12345</span>
              </div>
            </div>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-white/80 mb-4">Subscribe to our newsletter for construction tips and project updates.</p>
            <div className="space-y-3">
              <Input 
                placeholder="Your email address" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">
            © 2024 Mars Construction Services. All rights reserved. | Licensed & Insured
          </p>
        </div>
      </div>
    </footer>
  );
};