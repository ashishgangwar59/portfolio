import { motion } from "framer-motion";

const skillCategories = [
  {
    name: "Frontend",
    skills: ["React.js", "Next.js", "React Native", "TypeScript", "Vue.js"]
  },
  {
    name: "Styling",
    skills: ["Tailwind CSS", "Material UI", "Bootstrap", "Sass/SCSS", "CSS3"]
  },
  {
    name: "State & Tools",
    skills: ["Redux", "Context API", "REST APIs", "GraphQL", "Git"]
  },
  {
    name: "Deployment",
    skills: ["Docker", "Nginx", "AWS", "Azure", "CI/CD"]
  }
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-32 px-6 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute -bottom-40 left-0 w-80 h-80 bg-gradient-to-tr from-primary/10 to-cyan-500/10 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-12">
            About me
          </h2>

          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h3 className="text-xl font-light mb-4 text-foreground" variants={itemVariants}>
                Background
              </motion.h3>
              <motion.p className="text-lg text-muted-foreground leading-relaxed" variants={itemVariants}>
                Front-End Developer with 6 years of experience building responsive, high-performance web applications using React, Vue, and modern JavaScript frameworks. Currently at E2E Research Pvt Ltd, I've led end-to-end development on multiple projects, earning two awards within 6 months for consistent performance.
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h3 className="text-xl font-light mb-4 text-foreground" variants={itemVariants}>
                Philosophy
              </motion.h3>
              <motion.p className="text-lg text-muted-foreground leading-relaxed" variants={itemVariants}>
                Passionate about creating intuitive user interfaces, optimizing web performance, and delivering seamless digital experiences. I believe in writing clean, efficient code and collaborating closely with stakeholders to solve real problems.
              </motion.p>
            </motion.div>
          </div>

          <div>
            <h3 className="text-xl font-light mb-8 text-foreground">Skills & Expertise</h3>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skillCategories.map((category, idx) => (
                <motion.div
                  key={category.name}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <h4 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wider">
                    {category.name}
                  </h4>
                  <ul className="space-y-3">
                    {category.skills.map((skill, skillIdx) => (
                      <motion.li 
                        key={skill}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        data-testid={`skill-${skill.toLowerCase().replace(/[\s+.]/g, '-')}`}
                        initial={{ opacity: 0.6 }}
                        whileHover={{ opacity: 1, x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
