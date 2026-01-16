import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const projects = [
    {
        id: 1,
        title: "Modern Office Complex",
        description: "A state-of-the-art commercial building featuring sustainable design and smart technology integration.",
        images: [
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop"
        ]
    },
    {
        id: 2,
        title: "Luxury Residential Villa",
        description: "Custom-built family home with premium finishes and panoramic views.",
        images: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop"
        ]
    },
    {
        id: 3,
        title: "Industrial Warehouse",
        description: "Large-scale storage facility with modern logistics infrastructure.",
        images: [
            "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=600&h=400&fit=crop"
        ]
    },
    {
        id: 4,
        title: "Shopping Mall Renovation",
        description: "Complete interior redesign of a retail space with contemporary aesthetics.",
        images: [
            "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=600&h=400&fit=crop"
        ]
    },
    {
        id: 5,
        title: "Hospital Wing Extension",
        description: "Healthcare facility expansion with specialized medical infrastructure.",
        images: [
            "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop"
        ]
    },
    {
        id: 6,
        title: "Boutique Hotel",
        description: "Elegant hospitality project blending modern comfort with classic architecture.",
        images: [
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=400&fit=crop"
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
