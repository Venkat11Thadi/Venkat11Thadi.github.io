import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "venkat.thadi@example.com",
      href: "mailto:venkat.thadi@example.com"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/venkat-thadi",
      href: "https://www.linkedin.com/in/venkat-thadi/"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub", 
      value: "github.com/venkat11thadi",
      href: "https://github.com/venkat11thadi"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "India",
      href: null
    }
  ];

  const interests = [
    "Machine Learning Research",
    "Full-Stack Development", 
    "Data Science Projects",
    "Open Source Contribution",
    "Technical Writing",
    "Mentoring & Teaching"
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="hero-text">Let's Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, collaborations, 
            or just connecting with fellow tech enthusiasts
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8">
                Whether you have a project in mind, want to discuss research opportunities, 
                or just want to say hello, I'd love to hear from you. Feel free to reach out 
                through any of the channels below.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="card-elegant">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div>
              <h4 className="font-semibold mb-4">Areas of Interest</h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      className="focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      className="focus:ring-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="What's this about?" 
                    className="focus:ring-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me more about your project or idea..." 
                    rows={5}
                    className="focus:ring-primary"
                  />
                </div>
                
                <Button className="w-full glow-on-hover" size="lg">
                  Send Message
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  Or reach out directly via email or LinkedIn for faster response
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="card-elegant max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Ready to Collaborate?</h3>
              <p className="text-muted-foreground mb-6">
                I'm currently open to new opportunities in R&D, machine learning projects, 
                and full-stack development roles. Let's build something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="glow-on-hover" asChild>
                  <a href="mailto:venkat.thadi@example.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Me
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="glow-on-hover" asChild>
                  <a href="https://www.linkedin.com/in/venkat-thadi/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;