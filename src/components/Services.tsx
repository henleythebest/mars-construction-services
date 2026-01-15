import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Wrench, Ruler, Sofa, Layout, Plug, Paintbrush, Columns2 } from "lucide-react";

const services = [
  {
    icon: Building,
    title: "Structural Works",
    description: "Construction and reinforcement of structural elements such as foundations, columns, beams, and slabs to ensure safety, strength, and durability."
  },
  {
    icon: Ruler,
    title: "Architectural Works",
    description: "Design and execution of architectural features including layouts, facades, partitions, and finishes that combine functionality with aesthetics."
  },
  {
    icon: Wrench,
    title: "Home Repairs",
    description: "General repair and maintenance services addressing wear and damage to keep homes safe, functional, and well-maintained."
  },
  {
    icon: Sofa,
    title: "Interior Renovation",
    description: "Complete interior upgrades and remodeling to enhance comfort, style, and space efficiency for residential and commercial properties."
  },
  {
    icon: Layout,
    title: "Interior Fit-Outs",
    description: "End-to-end fit-out solutions including partitions, ceilings, flooring, and fixtures tailored to office, retail, and commercial spaces."
  },
  {
    icon: Plug,
    title: "Electrical & Plumbing Works",
    description: "Professional installation, repair, and maintenance of electrical and plumbing systems ensuring safety, efficiency, and compliance with standards."
  },
  {
    icon: Paintbrush,
    title: "Painting Works",
    description: "High-quality interior and exterior painting services delivering clean finishes, long-lasting protection, and enhanced visual appeal."
  },
  {
    icon: Columns2,
    title: "Modular Cabinetry",
    description: "Custom-built modular cabinets and storage solutions designed for functionality, durability, and modern aesthetics."
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