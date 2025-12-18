import { motion } from "framer-motion";

export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Shape 1 */}
      <motion.div
        className="absolute w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"
        animate={{
          y: [0, 100, 0],
          x: [0, 50, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "10%", left: "5%" }}
      />

      {/* Shape 2 */}
      <motion.div
        className="absolute w-48 h-48 bg-gradient-to-br from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl"
        animate={{
          y: [0, -80, 0],
          x: [0, -60, 0],
          rotate: [0, -360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{ bottom: "15%", right: "8%" }}
      />

      {/* Shape 3 */}
      <motion.div
        className="absolute w-40 h-40 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full blur-2xl"
        animate={{
          y: [0, 60, 0],
          x: [0, 80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      />

      {/* Gradient orbs */}
      <motion.div
        className="absolute w-72 h-72 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "25%", right: "20%" }}
      />
    </div>
  );
}
