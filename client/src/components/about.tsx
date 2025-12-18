import { motion } from "framer-motion";
import { Code2, Zap, Brain, Target } from "lucide-react";

const skillCategories = [
  {
    name: "Frontend",
    icon: Code2,
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    skills: ["React.js", "Next.js", "React Native", "TypeScript", "Vue.js"]
  },
  {
    name: "Styling",
    icon: Zap,
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
    skills: ["Tailwind CSS", "Material UI", "Bootstrap", "Sass/SCSS", "CSS3"]
  },
  {
    name: "State & Tools",
    icon: Brain,
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/30",
    skills: ["Redux", "Context API", "REST APIs", "GraphQL", "Git"]
  },
  {
    name: "Deployment",
    icon: Target,
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
    skills: ["Docker", "Nginx", "AWS", "Azure", "CI/CD"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, type: "spring" as const, stiffness: 100 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, type: "spring" as const },
  },
};

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        className="absolute -top-40 right-0 w-80 h-80 bg-gradient-to-bl from-primary/15 to-purple-500/15 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0], x: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-40 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/10 to-primary/10 rounded-full blur-3xl"
        animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, delay: 2 }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-20 text-center md:text-left">
            <motion.div
              className="inline-block mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm text-primary font-bold uppercase tracking-widest px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                👋 About Me
              </span>
            </motion.div>
            <motion.h2
              className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                Who I Am
              </span>
            </motion.h2>
          </div>

          {/* Background & Philosophy Cards */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-24"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Background Card */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative h-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-300">
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 transition-opacity duration-300"
                />
                
                <div className="relative z-10">
                  <motion.div
                    className="inline-block p-4 rounded-lg bg-background/50 border border-blue-500/20 mb-6"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <Code2 className="w-8 h-8 text-blue-400" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    Background
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Front-End Developer with 6 years of experience building responsive, high-performance web applications using React, Vue, and modern JavaScript frameworks. Currently at E2E Research Pvt Ltd, I've led end-to-end development on multiple projects, earning two awards within 6 months for consistent performance.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Philosophy Card */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative h-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-purple-500/5 to-pink-500/5 transition-opacity duration-300"
                />
                
                <div className="relative z-10">
                  <motion.div
                    className="inline-block p-4 rounded-lg bg-background/50 border border-purple-500/20 mb-6"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <Brain className="w-8 h-8 text-purple-400" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    Philosophy
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Passionate about creating intuitive user interfaces, optimizing web performance, and delivering seamless digital experiences. I believe in writing clean, efficient code and collaborating closely with stakeholders to solve real problems.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Skills Section */}
          <div className="mb-8">
            <motion.h3
              className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Technical Skills
            </motion.h3>
            <motion.div
              className="h-1 w-20 bg-gradient-to-r from-primary to-purple-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </div>

          {/* Skills Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.name}
                  variants={cardVariants}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="group cursor-pointer"
                >
                  <div className={`relative h-full bg-gradient-to-br ${category.color} border ${category.borderColor} rounded-2xl p-6 hover:border-primary/60 transition-all duration-300`}>
                    {/* Animated background glow */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/10 via-transparent to-transparent transition-opacity duration-300"
                    />

                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        className="inline-block p-3 rounded-lg bg-background/50 border border-white/10 mb-4"
                        whileHover={{ scale: 1.15, rotate: 10 }}
                      >
                        <Icon className="w-6 h-6 text-primary" />
                      </motion.div>

                      {/* Category Title */}
                      <h4 className="text-lg font-bold text-foreground mb-5 group-hover:text-primary transition-colors">
                        {category.name}
                      </h4>

                      {/* Skills List */}
                      <ul className="space-y-2">
                        {category.skills.map((skill, skillIdx) => (
                          <motion.li
                            key={skill}
                            className="text-muted-foreground group-hover:text-foreground transition-colors flex items-center gap-2"
                            data-testid={`skill-${skill.toLowerCase().replace(/[\s+.]/g, '-')}`}
                            initial={{ opacity: 0.6, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: skillIdx * 0.05 }}
                            whileHover={{ x: 4, color: "var(--primary)" }}
                          >
                            <motion.span
                              className="w-1.5 h-1.5 rounded-full bg-primary"
                              whileHover={{ scale: 1.5 }}
                            />
                            {skill}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-24"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { label: "Years Experience", value: "6+" },
              { label: "Projects Completed", value: "5+" },
              { label: "Technologies Used", value: "5+" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20 rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300"
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-primary mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-muted-foreground font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
