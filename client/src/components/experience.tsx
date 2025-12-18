import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-16">
            Work Experience
          </h2>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border-l-2 border-primary pl-8 py-4"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-light text-foreground mb-2">
                    Senior Frontend Developer
                  </h3>
                  <p className="text-lg text-primary font-medium">E2E Research Pvt Ltd</p>
                </div>
                <span className="text-muted-foreground mt-2 md:mt-0">Present</span>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Worked on multiple projects developed from scratch with end-to-end responsibility of frontend and backend architecture and development workflows under agile methodology.
              </p>

              <div className="space-y-3 mb-6">
                <p className="text-muted-foreground flex gap-3">
                  <span className="text-primary">•</span>
                  Led end-to-end frontend and backend development on multiple enterprise projects
                </p>
                <p className="text-muted-foreground flex gap-3">
                  <span className="text-primary">•</span>
                  Involved in developing, building logic and training juniors on live projects to accomplish business use cases
                </p>
                <p className="text-muted-foreground flex gap-3">
                  <span className="text-primary">•</span>
                  Worked closely with the COO of the company to discover scenarios and deliver expected results
                </p>
                <p className="text-muted-foreground flex gap-3">
                  <span className="text-primary">•</span>
                  Received two awards within 6 months for consistent performance and delivery excellence
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {["ReactJS", "NextJS", "NodeJS", "ExpressJS", "MongoDB", "NestJS", "Docker", "Nginx"].map((skill) => (
                  <span 
                    key={skill}
                    className="text-sm text-muted-foreground border border-border rounded-full px-4 py-1"
                    data-testid={`skill-work-${skill.toLowerCase()}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
