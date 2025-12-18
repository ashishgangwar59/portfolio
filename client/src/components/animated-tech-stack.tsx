import { motion } from "framer-motion";

const technologies = ["React.js", "Next.js", "Tailwind CSS", "Material UI", "AWS", "Docker"];

export default function AnimatedTechStack() {
  return (
    <div className="py-8 overflow-hidden bg-gradient-to-r from-background via-secondary/30 to-background">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...technologies, ...technologies, ...technologies].map((tech, index) => (
          <motion.span
            key={`${tech}-${index}`}
            className="text-lg font-medium text-primary"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
