import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Mobicip",
      roles: [
        {
          title: "R&D Software Engineer",
          period: "Oct 2024 - Present",
          description: "Leading development of packet filtering solutions and Windows UI components. Implementing advanced features and resolving complex technical challenges.",
          achievements: [
            "Developed packet filtering algorithms for enhanced network security",
            "Built responsive Windows UI components",
            "Collaborated with cross-functional teams on R&D initiatives",
            "Implemented several key features and resolved critical bugs"
          ]
        },
        {
          title: "R&D Software Engineer Intern",
          period: "Jan 2024 - Sep 2024",
          description: "Comprehensive training and hands-on experience across multiple technologies including C, C++, Socket Programming, and Web Development.",
          achievements: [
            "Gained expertise in low-level programming languages",
            "Mastered socket programming for network applications",
            "Developed full-stack web applications",
            "Contributed to research and development projects"
          ]
        }
      ],
      location: "Remote",
      current: true
    },
    {
      company: "1Stop.ai",
      roles: [
        {
          title: "Project Intern",
          period: "Mar 2023 - Jun 2023",
          description: "Focused on machine learning projects and data visualization initiatives, contributing to AI-driven solutions.",
          achievements: [
            "Developed machine learning models for business intelligence",
            "Created interactive data visualizations",
            "Analyzed large datasets to extract actionable insights",
            "Presented findings to stakeholders"
          ]
        }
      ],
      location: "Remote",
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="hero-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey in software engineering and research & development
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px timeline-line hidden md:block" />
          
          <div className="space-y-12">
            {experiences.map((exp, expIndex) => (
              <div key={exp.company} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-sm hidden md:block" />
                
                <div className="md:ml-16">
                  <Card className="card-elegant">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <CardTitle className="text-2xl font-bold text-primary">
                          {exp.company}
                        </CardTitle>
                        {exp.current && (
                          <Badge variant="default" className="w-fit">
                            Current
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-8">
                      {exp.roles.map((role, roleIndex) => (
                        <div key={roleIndex} className="space-y-4">
                          <div className="border-l-4 border-primary/20 pl-4">
                            <h3 className="text-xl font-semibold">{role.title}</h3>
                            <div className="flex items-center gap-2 text-muted-foreground mb-3">
                              <Calendar className="h-4 w-4" />
                              <span>{role.period}</span>
                            </div>
                            <p className="text-muted-foreground mb-4">
                              {role.description}
                            </p>
                          </div>
                          
                          <div className="space-y-2">
                            <h4 className="font-medium">Key Achievements:</h4>
                            <ul className="space-y-2">
                              {role.achievements.map((achievement, achIndex) => (
                                <li key={achIndex} className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                  <span className="text-muted-foreground">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {roleIndex < exp.roles.length - 1 && (
                            <hr className="border-border" />
                          )}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;