import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, MessageCircle, Code } from "lucide-react";

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
              <a
                href="https://api.whatsapp.com/send/?phone=639274830663&text=Hello+Ernel%27s+Construction%21+I%27m+interested+in+your+services.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-5 h-5 text-white/60 hover:text-primary cursor-pointer transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
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
                <span className="text-white/80">Echivarre Street, Mantuyong<br />Mandaue City, 6014</span>
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
              <a href="https://www.facebook.com/profile.php?id=61570823855652" target="_blank" className="hover:text-primary font-semibold transition-colors">Ernel's Construction Services</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-6 text-center space-y-3">
          <p className="text-white/60 text-sm">
            © 2025 Ernel's Construction Services. All rights reserved. | Licensed & Insured
          </p>

          <div className="flex items-center justify-center gap-2 text-white/50 text-sm">
            <Code className="w-4 h-4" />
            <span>
              Designed & Developed by{" "}
              <a
                href="https://your-site.com"
                className="underline hover:text-white transition-colors text-primary"
              >
                Henley Echivarre
              </a>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};