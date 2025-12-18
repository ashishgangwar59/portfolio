import { motion } from "framer-motion";

export default function Experience() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-40 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-primary/10 rounded-full blur-3xl"
        animate={{ x: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-16">
            Work Experience
          </h2>

          <div className="space-y-12">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="border-l-2 border-gradient-to-b from-primary to-transparent pl-8 py-4 hover:pl-12 transition-all duration-300 relative"
            >
              {/* Animated dot */}
              <motion.div
                className="absolute -left-3 top-6 w-4 h-4 bg-primary rounded-full"
                whileHover={{ scale: 1.3 }}
              />

              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <motion.h3 
                    className="text-2xl font-light text-foreground mb-2"
                    whileHover={{ x: 5 }}
                  >
                    Senior Frontend Developer
                  </motion.h3>
                  <motion.p 
                    className="text-lg text-primary font-medium"
                    whileHover={{ color: "#7c3aed" }}
                  >
                    E2E Research Pvt Ltd
                  </motion.p>
                </div>
                <span className="text-muted-foreground mt-2 md:mt-0">Present</span>
              </div>

              <motion.p 
                className="text-muted-foreground leading-relaxed mb-6"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
              >
                Worked on multiple projects developed from scratch with end-to-end responsibility of frontend and backend architecture and development workflows under agile methodology.
              </motion.p>

              <div className="space-y-3 mb-6">
                {[
                  "Led end-to-end frontend and backend development on multiple enterprise projects",
                  "Involved in developing, building logic and training juniors on live projects to accomplish business use cases",
                  "Worked closely with the COO of the company to discover scenarios and deliver expected results",
                  "Received two awards within 6 months for consistent performance and delivery excellence"
                ].map((point, idx) => (
                  <motion.p 
                    key={idx}
                    className="text-muted-foreground flex gap-3 hover:text-foreground transition-colors"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <span className="text-primary mt-1 flex-shrink-0">→</span>
                    {point}
                  </motion.p>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {["ReactJS", "NextJS", "NodeJS", "ExpressJS", "MongoDB", "NestJS", "Docker", "Nginx"].map((skill, idx) => (
                  <motion.span 
                    key={skill}
                    className="text-sm text-muted-foreground border border-border rounded-full px-4 py-1 hover:border-primary hover:text-primary transition-colors"
                    data-testid={`skill-work-${skill.toLowerCase()}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
