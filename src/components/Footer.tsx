import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/venkat11thadi",
      icon: <Github className="h-5 w-5" />
    },
    {
      name: "LinkedIn", 
      href: "https://www.linkedin.com/in/venkat-thadi/",
      icon: <Linkedin className="h-5 w-5" />
    },
    {
      name: "Email",
      href: "mailto:venkatthadi11@gmail.com",
      icon: <Mail className="h-5 w-5" />
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Awards", href: "#awards" },
    { name: "Contact", href: "#contact" }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-lg font-semibold hero-text">
              Venkata Satya Murty Thadi
            </h3>
            <p className="text-muted-foreground max-w-md">
              R&D Software Engineer passionate about machine learning, data science, 
              and building innovative solutions. Currently contributing to cutting-edge 
              technology at Mobicip.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  size="sm"
                  className="glow-on-hover"
                  asChild
                >
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-primary">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors link-hover text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-primary">Get In Touch</h4>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">
                Open to new opportunities and collaborations
              </p>
              <a 
                href="mailto:venkat.thadi@example.com"
                className="text-primary hover:underline block"
              >
                venkat.thadi@example.com
              </a>
              <p className="text-muted-foreground">
                Based in India 🇮🇳
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Venkata Satya Murty Thadi. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;