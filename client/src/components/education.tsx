import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap } from "lucide-react";

const educationData = [
  {
    icon: GraduationCap,
    degree: "Master of Computer Applications",
    institution: "Rakshpal Bahadur Management Institute",
    university: "Mahatma Jyotiba Phule Rohilkhand University",
    year: "Oct 2016",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: BookOpen,
    degree: "Bachelor of Computer Applications",
    institution: "Rakshpal Bahadur Management Institute",
    university: "Dr. A.P.J. Abdul Kalam Technical University",
    year: "Sep 2014",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Award,
    degree: "12th - Higher Secondary School Certificate",
    institution: "Uttar Pradesh Madhyamik Shiksha Parishad",
    year: "July 2012",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    icon: Award,
    degree: "10th - Higher Secondary School Certificate",
    institution: "Uttar Pradesh Madhyamik Shiksha Parishad",
    year: "July 2009",
    color: "from-green-500/20 to-emerald-500/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, type: "spring" as const },
  },
};

export default function Education() {
  return (
    <section className="py-32 px-6 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-40 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-full blur-3xl"
        animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-16">
            <motion.div
              className="inline-block mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm text-primary font-bold uppercase tracking-widest px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                📚 Education
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-light tracking-tight">
              My Educational Journey
            </h2>
          </div>

          <motion.div
            className="grid gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {educationData.map((edu, idx) => {
              const Icon = edu.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                  className="group"
                >
                  <div className={`bg-gradient-to-br ${edu.color} border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300`}>
                    <div className="flex gap-6">
                      {/* Icon */}
                      <motion.div
                        className="flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                      >
                        <div className="p-4 rounded-lg bg-background/50 border border-white/10">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                      </motion.div>

                      {/* Content */}
                      <div className="flex-1">
                        <motion.h3
                          className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors"
                          whileHover={{ x: 4 }}
                        >
                          {edu.degree}
                        </motion.h3>
                        <p className="text-muted-foreground mb-1">
                          {edu.institution}
                        </p>
                        {edu.university && (
                          <p className="text-sm text-muted-foreground/70 mb-3">
                            {edu.university}
                          </p>
                        )}
                        <motion.span
                          className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-semibold"
                          whileHover={{ scale: 1.05 }}
                        >
                          {edu.year}
                        </motion.span>
                      </div>

                      {/* Arrow */}
                      <motion.div
                        className="flex-shrink-0 text-primary/30 group-hover:text-primary transition-colors"
                        whileHover={{ x: 4, y: -4 }}
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
