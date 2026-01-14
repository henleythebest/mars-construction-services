import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Home, Wrench, Truck } from "lucide-react";

const services = [
  {
    icon: Building,
    title: "Commercial Construction",
    description: "Large-scale commercial projects including office buildings, retail spaces, and industrial facilities."
  },
  {
    icon: Home,
    title: "Residential Construction",
    description: "Custom homes, renovations, and residential additions with attention to every detail."
  },
  {
    icon: Wrench,
    title: "Renovation & Remodeling",
    description: "Transform your existing space with our comprehensive renovation and remodeling services."
  },
  {
    icon: Truck,
    title: "Infrastructure Projects",
    description: "Roads, bridges, and infrastructure development projects built to last generations."
  }
];

export const Services = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Construction Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From ground-breaking to ribbon-cutting, we provide comprehensive construction 
            solutions tailored to your specific needs and budget.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/20"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};