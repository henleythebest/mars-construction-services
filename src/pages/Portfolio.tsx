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
            "http://localhost:8080/portfolio/p7.png",
            "http://localhost:8080/portfolio/p1.png",
            "http://localhost:8080/portfolio/p2.png",
            "http://localhost:8080/portfolio/p3.png",
            "http://localhost:8080/portfolio/p4.png",
            "http://localhost:8080/portfolio/p5.png",
            "http://localhost:8080/portfolio/p6.png"
        ]
    },
    {
        id: 2,
        title: "Okinawa Heat",
        description: "Sample description.",
        images: [
            "http://localhost:8080/portfolio/p14.png",
            "http://localhost:8080/portfolio/p8.png",
            "http://localhost:8080/portfolio/p9.png",
            "http://localhost:8080/portfolio/p10.png",
            "http://localhost:8080/portfolio/p11.png",
            "http://localhost:8080/portfolio/p12.png",
            "http://localhost:8080/portfolio/p13.png"
        ]
    },
    {
        id: 3,
        title: "Fried Chicken Master",
        description: "Sample description.",
        images: [
            "http://localhost:8080/portfolio/p21.png",
            "http://localhost:8080/portfolio/p16.png",
            "http://localhost:8080/portfolio/p17.png",
            "http://localhost:8080/portfolio/p18.png",
            "http://localhost:8080/portfolio/p19.png",
            "http://localhost:8080/portfolio/p20.png",
            "http://localhost:8080/portfolio/p15.png"
        ]
    },
    {
        id: 4,
        title: "Cebu International Academy",
        description: "Sample description.",
        images: [
            "http://localhost:8080/portfolio/p28.png",
            "http://localhost:8080/portfolio/p23.png",
            "http://localhost:8080/portfolio/p24.png",
            "http://localhost:8080/portfolio/p25.png",
            "http://localhost:8080/portfolio/p26.png",
            "http://localhost:8080/portfolio/p27.png",
            "http://localhost:8080/portfolio/p22.png"
        ]
    },
    {
        id: 5,
        title: "Tong Yang Restaurant",
        description: "Sample description.",
        images: [
            "http://localhost:8080/portfolio/p32.png",
            "http://localhost:8080/portfolio/p30.png",
            "http://localhost:8080/portfolio/p31.png",
            "http://localhost:8080/portfolio/p29.png"
        ]
    },
    {
        id: 6,
        title: "New York Fries and Dips (NYFD)",
        description: "Sample description.",
        images: [
            "http://localhost:8080/portfolio/p37.png",
            "http://localhost:8080/portfolio/p33.png",
            "http://localhost:8080/portfolio/p34.png",
            "http://localhost:8080/portfolio/p35.png",
            "http://localhost:8080/portfolio/p36.png"
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
