import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import profilePicture from "@/assets/profile-picture.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-primary/20 animate-float">
            <img 
              src={profilePicture} 
              alt="Venkata Satya Murty Thadi"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="hero-text">Venkata Satya</span>
            <br />
            <span className="hero-text">Murty Thadi</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            R&D Software Engineer specializing in{" "}
            <span className="text-primary font-semibold">Machine Learning</span>,{" "}
            <span className="text-primary font-semibold">Data Science</span>, and{" "}
            <span className="text-primary font-semibold">Full-Stack Development</span>
          </p>
          
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Currently building innovative solutions at Mobicip, focusing on packet filtering 
            and Windows UI development. Passionate about leveraging AI and data to solve real-world problems.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 animate-scale-in">
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="lg"
              className="glow-on-hover"
              asChild
            >
              <a href="https://github.com/venkat11thadi" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="glow-on-hover"
              asChild
            >
              <a href="https://www.linkedin.com/in/venkat-thadi/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            
            <Button
              size="lg"
              className="glow-on-hover"
              asChild
            >
              <a href="mailto:your-email@example.com">
                <Mail className="mr-2 h-5 w-5" />
                Contact
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-12 animate-fade-in">
          <div className="flex justify-center">
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
                <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-2">Scroll to explore</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;