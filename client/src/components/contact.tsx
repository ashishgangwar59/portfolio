import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-background border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-12">
            Let's work together
          </h2>

          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm currently available for freelance work and open to new opportunities. Whether you need a frontend developer for your next project or want to collaborate on something creative, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <motion.a
                href="mailto:ashishkumar@example.com"
                whileHover={{ x: 8 }}
                className="flex items-center gap-4 group"
                data-testid="link-email-contact"
              >
                <Mail className="w-6 h-6 text-primary" />
                <span className="text-lg text-foreground group-hover:text-primary transition-colors">
                  ashishkumar@example.com
                </span>
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ x: 8 }}
                className="flex items-center gap-4 group"
                data-testid="link-github-contact"
              >
                <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-lg text-foreground group-hover:text-primary transition-colors">
                  GitHub
                </span>
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ x: 8 }}
                className="flex items-center gap-4 group"
                data-testid="link-linkedin-contact"
              >
                <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-lg text-foreground group-hover:text-primary transition-colors">
                  LinkedIn
                </span>
              </motion.a>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            © 2024 Ashish Kumar. Designed and developed with care.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
