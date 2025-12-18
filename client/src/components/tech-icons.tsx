import { motion } from "framer-motion";
import { 
  Database, 
  Code2, 
  Zap, 
  Layers, 
  Cloud, 
  Package 
} from "lucide-react";

const techs = [
  { name: "React.js", icon: Code2, color: "text-blue-400" },
  { name: "Next.js", icon: Zap, color: "text-gray-400" },
  { name: "Tailwind CSS", icon: Layers, color: "text-cyan-400" },
  { name: "Material UI", icon: Package, color: "text-purple-400" },
  { name: "AWS", icon: Cloud, color: "text-orange-400" },
  { name: "Docker", icon: Database, color: "text-blue-500" },
];

export default function TechIcons() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {techs.map((tech, index) => {
        const Icon = tech.icon;
        return (
          <motion.div
            key={tech.name}
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.div
              className={`p-3 rounded-lg bg-background/40 backdrop-blur-sm border border-white/10 ${tech.color}`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.15,
                ease: "easeInOut",
              }}
            >
              <Icon className="w-6 h-6" />
            </motion.div>
            <span className="text-xs text-muted-foreground text-center font-medium">
              {tech.name.split(" ")[0]}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
