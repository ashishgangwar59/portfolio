import { motion } from "framer-motion";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import profileImg from "@assets/generated_images/professional_portrait_of_developer.png";
import TypingName from "./typing-name";
import TechIcons from "./tech-icons";
import AnimatedBackground from "./animated-background";
import ThemeToggle from "./theme-toggle";
import AnimatedButton from "./animated-button";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      {isHovering && (
        <motion.div
          className="fixed w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full pointer-events-none mix-blend-screen z-50 shadow-lg"
          animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />
      )}

      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
        <AnimatedBackground />

        {/* Theme Toggle - Top Right */}
        <div className="absolute top-8 right-8 z-40">
          <ThemeToggle />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="space-y-6">
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.p
                      className="text-xl text-primary font-bold tracking-wide mb-4 inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
                      animate={{ 
                        boxShadow: [
                          "0 0 10px rgba(59, 130, 246, 0.3)",
                          "0 0 20px rgba(59, 130, 246, 0.6)",
                          "0 0 10px rgba(59, 130, 246, 0.3)",
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Front End Developer
                    </motion.p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    <motion.h1
                      className="text-6xl md:text-8xl font-bold leading-tight text-foreground"
                      animate={{ 
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                      }}
                      transition={{ duration: 8, repeat: Infinity }}
                    >
                      <TypingName />
                    </motion.h1>
                  </motion.div>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="text-lg text-muted-foreground leading-relaxed max-w-md"
                >
                  Building responsive, high-performance web applications with modern frameworks and best practices.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="pt-4 flex gap-6 flex-wrap"
                >
                  <Link href="#projects">
                    <AnimatedButton variant="primary">
                      View Portfolio →
                    </AnimatedButton>
                  </Link>
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-muted-foreground hover:text-foreground transition-colors px-6 py-3 border border-border rounded-full"
                    data-testid="link-contact-hero"
                  >
                    Contact
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:flex flex-col justify-center items-center gap-8"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Tech Icons Above Image */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="w-full"
              >
                <TechIcons />
              </motion.div>

              {/* Profile Image */}
              <motion.div
                className="w-full max-w-sm rounded-xl overflow-hidden relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-xl"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-xl border-2 border-gradient-to-r from-primary via-purple-400 to-cyan-400"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(59, 130, 246, 0.3)",
                        "0 0 40px rgba(168, 85, 247, 0.5)",
                        "0 0 20px rgba(59, 130, 246, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  />
                  <img
                    src={profileImg}
                    alt="Ashish Kumar"
                    className="w-full h-auto object-cover relative z-10 rounded-xl"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
