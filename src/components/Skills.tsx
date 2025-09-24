import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "C/C++", level: 80 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      category: "Machine Learning & Data Science",
      skills: [
        { name: "Scikit-learn", level: 90 },
        { name: "Pandas & NumPy", level: 95 },
        { name: "Data Analysis", level: 90 },
        { name: "Neural Networks", level: 85 }
      ]
    },
    {
      category: "Web Development",
      skills: [
        { name: "React", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Socket Programming", level: 75 },
        { name: "Git", level: 90 }
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Data Visualization", level: 85 },
        { name: "Windows UI", level: 80 },
        { name: "Packet Filtering", level: 75 },
        { name: "Research & Development", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="hero-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={category.category} className="card-elegant">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="skill-bar h-2 rounded-full"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(index * 4 + skillIndex) * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;