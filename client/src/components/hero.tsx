import { motion } from "framer-motion";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import profileImg from "@assets/generated_images/professional_portrait_of_developer.png";
import TypingName from "./typing-name";
import TechIcons from "./tech-icons";
import AnimatedBackground from "./animated-background";

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
                  <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-6xl md:text-7xl font-bold leading-tight mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                  >
                    <TypingName />
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-xl text-primary font-medium tracking-wide"
                  >
                    Front End Developer
                  </motion.p>
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-lg text-muted-foreground leading-relaxed max-w-md"
                >
                  Building responsive, high-performance web applications with modern frameworks and best practices.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="pt-4 flex gap-6"
                >
                  <Link href="#projects">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-primary hover:text-primary/70 font-medium transition-colors px-6 py-3 border border-primary rounded-lg"
                      data-testid="link-portfolio"
                    >
                      View Portfolio →
                    </motion.a>
                  </Link>
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-muted-foreground hover:text-foreground transition-colors px-6 py-3 border border-border rounded-lg"
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
                className="w-full max-w-sm rounded-lg overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <img
                    src={profileImg}
                    alt="Ashish Kumar"
                    className="w-full h-auto object-cover relative z-10"
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
