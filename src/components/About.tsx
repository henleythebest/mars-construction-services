import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Calendar, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "500+",
    label: "Projects Completed"
  },
  {
    icon: Calendar,
    number: "15+",
    label: "Years Experience"
  },
  {
    icon: Award,
    number: "98%",
    label: "Client Satisfaction"
  }
];

const features = [
  "Licensed and fully insured contractors",
  "On-time project delivery guarantee",
  "24/7 customer support throughout projects",
  "Eco-friendly construction practices",
  "Competitive pricing with transparent quotes",
  "Quality materials from trusted suppliers"
];

export const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              Why Choose Mars Construction
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Building Excellence Since 2009
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Mars Construction Services has been transforming the landscape with innovative 
              construction solutions. Our commitment to quality, safety, and customer satisfaction 
              has made us the trusted choice for construction projects across the region.
            </p>
            
            <div className="grid grid-cols-3 gap-8 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground mb-6">What Sets Us Apart</h3>
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};