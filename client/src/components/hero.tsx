import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_dark_3d_geometric_shapes_with_neon_blue_rim_lighting.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background Element */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-10" />
        <img 
          src={heroBg} 
          alt="Abstract 3D Shape" 
          className="w-full h-full object-cover opacity-40 mix-blend-screen"
        />
      </div>

      <div className="container mx-auto z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary tracking-widest uppercase text-sm font-medium mb-4 block"
          >
            Frontend Developer
          </motion.span>
          <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] mb-6 tracking-tighter">
            ASHISH <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
              KUMAR
            </span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-md mb-8 leading-relaxed">
            Crafting high-performance web applications with React, TypeScript, and modern frontend architecture. Specialized in building scalable dashboards and data visualization solutions.
          </p>
          <div className="flex gap-4">
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
              data-testid="button-view-work"
            >
              View Work
            </motion.a>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/20 text-foreground px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-white/5 transition-colors"
              data-testid="button-contact"
            >
              Contact
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
