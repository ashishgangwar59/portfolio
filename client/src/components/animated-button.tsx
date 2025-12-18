import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  variant?: "primary" | "secondary";
}

export default function AnimatedButton({
  children,
  onClick,
  className = "",
  href,
  variant = "primary",
}: AnimatedButtonProps) {
  const baseClass =
    variant === "primary"
      ? "bg-gradient-to-r from-primary to-purple-500 text-white"
      : "border-2 border-primary text-primary hover:bg-primary/10";

  const Component = href ? "a" : "button";

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <Component
        href={href}
        onClick={onClick}
        className={`relative px-8 py-3 font-bold text-lg rounded-full overflow-hidden transition-all ${baseClass} ${className}`}
      >
        <motion.span
          className="relative z-10 flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {children}
        </motion.span>

        {/* Animated background shine */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />
      </Component>
    </motion.div>
  );
}
