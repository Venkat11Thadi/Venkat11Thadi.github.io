import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FileText } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Wine Quality Prediction Research",
      type: "Research Paper",
      description: "Performance evaluation of machine learning and neural network algorithms for predicting wine quality. Published research comparing various ML approaches.",
      technologies: ["Python", "Machine Learning", "Neural Networks", "Data Analysis"],
      link: "https://ieeexplore.ieee.org/abstract/document/10307596",
      linkText: "Read Paper",
      icon: <FileText className="h-5 w-5" />,
      featured: true
    },
    {
      title: "Packet Filtering System",
      type: "Professional Project",
      description: "Advanced packet filtering solution for network security at Mobicip. Implemented efficient filtering algorithms and Windows UI components.",
      technologies: ["C++", "Windows API", "Network Programming", "UI Development"],
      link: "#",
      linkText: "Private Repository",
      icon: <ExternalLink className="h-5 w-5" />,
      featured: true
    },
    {
      title: "Data Visualization Dashboard",
      type: "Internship Project",
      description: "Interactive dashboard for business intelligence at 1Stop.ai. Created comprehensive data visualizations and ML-powered insights.",
      technologies: ["Python", "Data Visualization", "Machine Learning", "Business Intelligence"],
      link: "#",
      linkText: "View Project",
      icon: <ExternalLink className="h-5 w-5" />,
      featured: false
    }
  ];

  const researchAreas = [
    "Machine Learning Algorithms",
    "Neural Network Optimization", 
    "Data Science Methodologies",
    "Network Security Solutions",
    "Software Performance Analysis"
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="hero-text">Projects & Research</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects, research work, and contributions to the field
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Featured Work</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <Card key={index} className="card-elegant group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <Badge variant="secondary" className="w-fit">
                        {project.type}
                      </Badge>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                    </div>
                    {project.icon}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="pt-4">
                    <Button
                      variant="outline"
                      className="w-full group-hover:border-primary group-hover:text-primary transition-colors"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        {project.linkText}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Additional Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <Card key={index} className="card-elegant group">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {project.type}
                  </Badge>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full group-hover:text-primary transition-colors"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      {project.linkText}
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Research Areas */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">Research Interests</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {researchAreas.map((area, index) => (
              <Badge key={index} variant="default" className="px-4 py-2 text-sm">
                {area}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
