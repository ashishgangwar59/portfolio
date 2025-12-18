import { motion } from "framer-motion";
import { Mail, Github, Twitter, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-background border-t border-white/5">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
            LET'S WORK <br /> TOGETHER
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have a project in mind? I'm currently available for freelance work and open to new opportunities in frontend development and dashboard architecture.
          </p>
          
          <motion.a
            href="mailto:ashishkumar@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-bold text-lg rounded-full hover:bg-primary/90 transition-colors mb-20"
            data-testid="link-email"
          >
            <Mail className="w-5 h-5" />
            ashishkumar@example.com
          </motion.a>

          <div className="flex justify-center gap-8">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-white transition-colors"
              data-testid="link-github"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-white transition-colors"
              data-testid="link-twitter"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-white transition-colors"
              data-testid="link-linkedin"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          <div className="mt-20 text-sm text-muted-foreground/40">
            © 2024 Ashish Kumar. Crafted with passion for frontend excellence.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
