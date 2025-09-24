import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, ExternalLink, Calendar } from "lucide-react";

const Awards = () => {
  const achievements = [
    {
      title: "Bronze Medal in Academics",
      organization: "SRM University",
      year: "2024",
      description: "Achieved third rank in B.Tech 2020-24 batch with CGPA: 9.45",
      type: "Academic Excellence",
      icon: <Medal className="h-6 w-6" />,
      credential: "https://drive.google.com/file/d/17j-W5a_3ZVGRy_CKGvRdqxb8cwMZNRlM/view?usp=sharing",
      featured: true
    },
    {
      title: "1st Place - Pandoras Predictive Box",
      organization: "ML Hackathon",
      year: "2024",
      description: "2-day ML Hackathon based on LLMs and transformer models. Won first place among competing teams.",
      type: "Hackathon Winner",
      icon: <Trophy className="h-6 w-6" />,
      credential: "https://drive.google.com/file/d/15AcNOOyr0tZ7Q-KwAzrI2ZA8Bq9DQnQo/view?usp=drive_link",
      featured: true
    },
    {
      title: "2nd Place - MythoData",
      organization: "Data Science Hackathon", 
      year: "2024",
      description: "24-hour hackathon based on data science. Secured second position with innovative data analysis solutions.",
      type: "Hackathon Winner",
      icon: <Award className="h-6 w-6" />,
      credential: "https://drive.google.com/file/d/1-guZvrfyIkziJ90YWoLEcK4UwhR8Hx5t/view?usp=sharing",
      featured: false
    },
    {
      title: "2nd Place - Innovate or Iterate",
      organization: "National ML Competition",
      year: "2023", 
      description: "Secured second position among 300 teams from all over India in ML-based hackathon.",
      type: "National Competition",
      icon: <Award className="h-6 w-6" />,
      credential: "https://drive.google.com/file/d/1jZQi5nW6VDKHZcHh8Gk043V6DJqVk1z2/view?usp=sharing",
      featured: false
    }
  ];

  const academics = [
    {
      degree: "B.Tech Computer Science",
      institution: "SRM University",
      period: "2020 - 2024",
      grade: "CGPA: 9.45",
      achievement: "Bronze Medal (3rd Rank)"
    },
    {
      degree: "Intermediate (12th Grade)",
      institution: "FIITJEE Junior College",
      period: "2018 - 2020", 
      grade: "CGPA: 9.79",
      achievement: "JEE Mains: 92.25%"
    }
  ];

  return (
    <section id="awards" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="hero-text">Awards & Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognition for academic excellence and competitive programming achievements
          </p>
        </div>

        {/* Featured Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Featured Achievements</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {achievements.filter(achievement => achievement.featured).map((achievement, index) => (
              <Card key={index} className="card-elegant group overflow-hidden">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      {achievement.icon}
                    </div>
                    <div className="flex-1 space-y-2">
                      <Badge variant="secondary" className="w-fit">
                        {achievement.type}
                      </Badge>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {achievement.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{achievement.organization} • {achievement.year}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {achievement.description}
                  </p>
                  
                  <Button
                    variant="outline"
                    className="w-full group-hover:border-primary group-hover:text-primary transition-colors"
                    asChild
                  >
                    <a href={achievement.credential} target="_blank" rel="noopener noreferrer">
                      View Credential
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Competition Awards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.filter(achievement => !achievement.featured).map((achievement, index) => (
              <Card key={index} className="card-elegant group">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      {achievement.icon}
                    </div>
                    <div className="flex-1 space-y-1">
                      <Badge variant="secondary" className="w-fit text-xs">
                        {achievement.type}
                      </Badge>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {achievement.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {achievement.organization} • {achievement.year}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full group-hover:text-primary transition-colors"
                    asChild
                  >
                    <a href={achievement.credential} target="_blank" rel="noopener noreferrer">
                      View Credential
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {academics.map((edu, index) => (
              <Card key={index} className="card-elegant">
                <CardHeader>
                  <CardTitle className="text-lg">{edu.degree}</CardTitle>
                  <div className="space-y-1">
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Grade:</span>
                      <span className="text-primary font-semibold">{edu.grade}</span>
                    </div>
                    {edu.achievement && (
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Achievement:</span>
                        <Badge variant="default" className="text-xs">
                          {edu.achievement}
                        </Badge>
                      </div>
                    )}
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

export default Awards;
