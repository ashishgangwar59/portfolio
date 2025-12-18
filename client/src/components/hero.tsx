import { motion } from "framer-motion";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import profileImg from "@assets/generated_images/professional_portrait_of_developer.png";
import TypingName from "./typing-name";

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
          className="fixed w-8 h-8 bg-primary rounded-full pointer-events-none mix-blend-screen z-50"
          animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />
      )}

      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="container mx-auto max-w-6xl">
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
                    className="text-6xl md:text-7xl font-bold leading-tight mb-4"
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
              className="hidden md:flex justify-center"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
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
    </>
  );
}
