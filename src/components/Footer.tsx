import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Ernel's <span className="text-primary">Construction Services</span>
            </h3>
            <p className="text-white/80 mb-6">
              Building excellence since 2019. Your trusted partner for all construction needs.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61570823855652" target="_blank" className="hover:text-primary transition-colors"><Facebook className="w-5 h-5 text-white/60 hover:text-primary cursor-pointer transition-colors" /></a>
              {/* <Twitter className="w-5 h-5 text-white/60 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-white/60 hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-white/60 hover:text-primary cursor-pointer transition-colors" /> */}
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-primary transition-colors">Structural</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Architectural Works</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Home Repairs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Interior Renovation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Interior Fit Outs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Electrical & Plumbing Works</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Painting Works</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Modular Cabinetry</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-white/80">+63 927 4830663</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-4 h-4 text-primary" />
                <span className="text-white/80"><a href="https://www.facebook.com/marsechivarre" target="_blank" className="hover:text-primary transition-colors">Mars Echivarre</a></span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-white/80">Tayud Consolacion<br />Cebu City, 6000</span>
              </div>
            </div>
          </div>
          
          {/* Newsletter */}
          {/* <div>
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
          </div> */}

          {/* Facebook Page */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-white/80 mb-4">Vist our facebook page for construction tips and project updates.</p>
            <div className="space-y-3">
              <a href="https://www.facebook.com/profile.php?id=61570823855652" target="_blank" className="hover:text-primary transition-colors">Ernel's Construction Services</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">
            © 2024 Ernel's Construction Services. All rights reserved. | Licensed & Insured
          </p>
        </div>
      </div>
    </footer>
  );
};