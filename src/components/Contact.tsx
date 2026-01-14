import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast, Toaster } from "sonner";

const contactInfo = [
  { icon: Phone, title: "Call Us", details: "+63 927 4830663", subtitle: "24/7 Emergency Service" },
  { icon: Mail, title: "Email Us", details: "ernelsconstructions@icloud.com", subtitle: "Quick Response Guaranteed" },
  { icon: MapPin, title: "Visit Us", details: "Tayud Consolacion", subtitle: "Cebu City, 6000" },
  { icon: Clock, title: "Business Hours", details: "Sat-Sun: 7AM-6PM", subtitle: "Online Everyday" },
];

export const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formsubmit.co/ajax/hechivarre123@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      
      if (response.ok) {
        toast.success("Your message has been sent successfully!");
        e.currentTarget.reset();
      } else {
        toast.error("Oops! Something went wrong. Please try again.");
      }
    }
    // catch (error) {
    //   toast.error("Failed to send message. Please check your network.");
    // }
    finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-secondary to-secondary/90">
      {/* <Toaster position="top-right" richColors /> */}
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
          <form onSubmit={handleSubmit}>
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                  Get Your Free Quote
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input name="firstName" placeholder="First Name" required />
                  <Input name="lastName" placeholder="Last Name" required />
                </div>
                <Input name="email" type="email" placeholder="Email Address" required />
                <Input name="phone" type="tel" placeholder="Phone Number" />
                <Input name="projectType" placeholder="Project Type" />
                <Textarea name="message" placeholder="Tell us about your project..." rows={4} required />

                {/* Hidden fields */}
                <input type="hidden" name="_subject" value="New Construction Quote Request" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" style={{ display: "none" }} />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-construction"
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : "Send Message"}
                </Button>
              </CardContent>
            </Card>
          </form>

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
