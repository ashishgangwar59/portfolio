import { motion } from "framer-motion";
import { Link } from "wouter";
import profileImg from "@assets/generated_images/professional_portrait_of_developer.png";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <div>
                <motion.h2 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl font-light tracking-wide text-muted-foreground mb-2"
                >
                  designer
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg text-foreground/70"
                >
                  UI/UX designer specializing in responsive interfaces and design systems.
                </motion.p>
              </div>

              <div>
                <motion.h2 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl font-light tracking-wide text-muted-foreground mb-2"
                >
                  coder
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg text-foreground/70"
                >
                  Frontend developer who writes clean, efficient React and TypeScript code.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="pt-4 flex gap-6"
              >
                <Link href="#projects">
                  <a className="text-primary hover:text-primary/70 font-medium transition-colors" data-testid="link-portfolio">
                    View Portfolio →
                  </a>
                </Link>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-contact-hero">
                  Contact
                </a>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex justify-center"
          >
            <div className="w-full max-w-sm rounded-lg overflow-hidden">
              <img 
                src={profileImg} 
                alt="Ashish Kumar" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
