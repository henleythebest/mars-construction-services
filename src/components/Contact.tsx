import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    details: "(555) 123-4567",
    subtitle: "24/7 Emergency Service"
  },
  {
    icon: Mail,
    title: "Email Us",
    details: "info@marsconstruction.com",
    subtitle: "Quick Response Guaranteed"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "123 Construction Ave",
    subtitle: "Mars City, State 12345"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Mon-Fri: 7AM-6PM",
    subtitle: "Sat: 8AM-4PM"
  }
];

export const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary to-secondary/90">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Get in touch with our team today for a free consultation and detailed quote 
            for your construction project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Get Your Free Quote</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="First Name" className="border-border focus:border-primary" />
                <Input placeholder="Last Name" className="border-border focus:border-primary" />
              </div>
              <Input placeholder="Email Address" type="email" className="border-border focus:border-primary" />
              <Input placeholder="Phone Number" type="tel" className="border-border focus:border-primary" />
              <Input placeholder="Project Type" className="border-border focus:border-primary" />
              <Textarea 
                placeholder="Tell us about your project..." 
                rows={4}
                className="border-border focus:border-primary"
              />
              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-construction"
              >
                Send Message
              </Button>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white">
                <CardContent className="flex items-center space-x-4 p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{info.title}</h3>
                    <p className="text-white/90 font-medium">{info.details}</p>
                    <p className="text-white/70 text-sm">{info.subtitle}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};