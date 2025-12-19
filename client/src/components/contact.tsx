import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="contact"
      className="py-32 px-6 bg-background border-t border-border relative overflow-hidden"
    >
      {/* Background decoration */}
      <motion.div
        className="absolute -top-40 left-1/2 w-96 h-96 bg-gradient-to-br from-cyan-500/10 via-primary/10 to-transparent rounded-full blur-3xl -translate-x-1/2"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-light tracking-tight mb-12"
            variants={itemVariants}
          >
            Let's work together
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <motion.div variants={itemVariants}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I’m available for freelance work and open to new opportunities.
                If you need a frontend developer to build scalable, high-quality
                experiences—or want to collaborate on something impactful—I’d
                love to talk.
              </p>
            </motion.div>

            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.a
                href="mailto:ashishkumar@example.com"
                variants={itemVariants}
                whileHover={{ x: 12 }}
                className="flex items-center gap-4 group"
                data-testid="link-email-contact"
              >
                <motion.div
                  className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <Mail className="w-6 h-6 text-primary" />
                </motion.div>
                <span className="text-lg text-foreground group-hover:text-primary transition-colors">
                  ak915066@gmail.com
                </span>
              </motion.a>

              <motion.a
                href="#"
                variants={itemVariants}
                whileHover={{ x: 12 }}
                className="flex items-center gap-4 group"
                data-testid="link-github-contact"
              >
                <motion.div
                  className="p-3 rounded-lg bg-muted/20 group-hover:bg-muted/40 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.div>
                <span className="text-lg text-foreground group-hover:text-primary transition-colors">
                  GitHub
                </span>
              </motion.a>

              <motion.a
                href="#"
                variants={itemVariants}
                whileHover={{ x: 12 }}
                className="flex items-center gap-4 group"
                data-testid="link-linkedin-contact"
              >
                <motion.div
                  className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <Linkedin className="w-6 h-6 text-blue-500 group-hover:text-primary transition-colors" />
                </motion.div>
                <span className="text-lg text-foreground group-hover:text-primary transition-colors">
                  LinkedIn
                </span>
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="border-t border-border pt-8 text-center text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © 2026 Ashish Kumar. Designed and developed with care.
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
