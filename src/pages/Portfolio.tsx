import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const projects = [
    {
        id: 1,
        title: "2 Storey Residential House",
        description: "Sample description.",
        images: [
            "https://ernels-construction-services.vercel.app/portfolio/p7.png",
            "https://ernels-construction-services.vercel.app/portfolio/p1.png",
            "https://ernels-construction-services.vercel.app/portfolio/p2.png",
            "https://ernels-construction-services.vercel.app/portfolio/p3.png",
            "https://ernels-construction-services.vercel.app/portfolio/p4.png",
            "https://ernels-construction-services.vercel.app/portfolio/p5.png",
            "https://ernels-construction-services.vercel.app/portfolio/p6.png"
        ]
    },
    {
        id: 2,
        title: "Okinawa Heat",
        description: "Sample description.",
        images: [
            "https://ernels-construction-services.vercel.app/portfolio/p14.png",
            "https://ernels-construction-services.vercel.app/portfolio/p8.png",
            "https://ernels-construction-services.vercel.app/portfolio/p9.png",
            "https://ernels-construction-services.vercel.app/portfolio/p10.png",
            "https://ernels-construction-services.vercel.app/portfolio/p11.png",
            "https://ernels-construction-services.vercel.app/portfolio/p12.png",
            "https://ernels-construction-services.vercel.app/portfolio/p13.png"
        ]
    },
    {
        id: 3,
        title: "Fried Chicken Master",
        description: "Sample description.",
        images: [
            "https://ernels-construction-services.vercel.app/portfolio/p21.png",
            "https://ernels-construction-services.vercel.app/portfolio/p16.png",
            "https://ernels-construction-services.vercel.app/portfolio/p17.png",
            "https://ernels-construction-services.vercel.app/portfolio/p18.png",
            "https://ernels-construction-services.vercel.app/portfolio/p19.png",
            "https://ernels-construction-services.vercel.app/portfolio/p20.png",
            "https://ernels-construction-services.vercel.app/portfolio/p15.png"
        ]
    },
    {
        id: 4,
        title: "Cebu International Academy",
        description: "Sample description.",
        images: [
            "https://ernels-construction-services.vercel.app/portfolio/p28.png",
            "https://ernels-construction-services.vercel.app/portfolio/p23.png",
            "https://ernels-construction-services.vercel.app/portfolio/p24.png",
            "https://ernels-construction-services.vercel.app/portfolio/p25.png",
            "https://ernels-construction-services.vercel.app/portfolio/p26.png",
            "https://ernels-construction-services.vercel.app/portfolio/p27.png",
            "https://ernels-construction-services.vercel.app/portfolio/p22.png"
        ]
    },
    {
        id: 5,
        title: "Tong Yang Restaurant",
        description: "Sample description.",
        images: [
            "https://ernels-construction-services.vercel.app/portfolio/p32.png",
            "https://ernels-construction-services.vercel.app/portfolio/p30.png",
            "https://ernels-construction-services.vercel.app/portfolio/p31.png",
            "https://ernels-construction-services.vercel.app/portfolio/p29.png"
        ]
    },
    {
        id: 6,
        title: "New York Fries and Dips (NYFD)",
        description: "Sample description.",
        images: [
            "https://ernels-construction-services.vercel.app/portfolio/p37.png",
            "https://ernels-construction-services.vercel.app/portfolio/p33.png",
            "https://ernels-construction-services.vercel.app/portfolio/p34.png",
            "https://ernels-construction-services.vercel.app/portfolio/p35.png",
            "https://ernels-construction-services.vercel.app/portfolio/p36.png"
        ]
    }
];

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <div className="min-h-screen bg-background">
            {/* Navigation */}
            <nav className="bg-secondary py-4 px-6 shadow-lg">
                <div className="container mx-auto">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span className="font-semibold">Back to Home</span>
                    </Link>
                </div>
            </nav>

            {/* Header */}
            <header className="bg-gradient-hero py-16 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Work</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Explore our portfolio of completed projects showcasing quality craftsmanship and attention to detail.
                    </p>
                </div>
            </header>

            {/* Projects Grid */}
            <main className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <Card
                            key={project.id}
                            className="overflow-hidden hover:shadow-elegant transition-shadow duration-300 cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={project.images[0]}
                                    alt={project.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="text-xl">{project.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base">{project.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </main>

            {/* Image Popup Dialog */}
            <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
                <DialogContent className="max-w-4xl p-2 max-h-[90vh] overflow-y-auto">
                    <DialogTitle className="sr-only">{selectedProject?.title}</DialogTitle>
                    {selectedProject && (
                        <div className="space-y-3">
                            {selectedProject.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image.replace('w=600&h=400', 'w=1200&h=800')}
                                    alt={`${selectedProject.title} - Image ${index + 1}`}
                                    className="w-full h-auto rounded-lg"
                                />
                            ))}
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Portfolio;
