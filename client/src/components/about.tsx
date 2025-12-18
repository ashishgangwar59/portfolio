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
  return (
    <section id="about" className="py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-12">
            About me
          </h2>

          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <h3 className="text-xl font-light mb-4 text-foreground">Background</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Front-End Developer with 6 years of experience building responsive, high-performance web applications using React, Vue, and modern JavaScript frameworks. Currently at E2E Research Pvt Ltd, I've led end-to-end development on multiple projects, earning two awards within 6 months for consistent performance.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-light mb-4 text-foreground">Philosophy</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Passionate about creating intuitive user interfaces, optimizing web performance, and delivering seamless digital experiences. I believe in writing clean, efficient code and collaborating closely with stakeholders to solve real problems.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-light mb-8 text-foreground">Skills & Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {skillCategories.map((category) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wider">{category.name}</h4>
                  <ul className="space-y-3">
                    {category.skills.map((skill) => (
                      <li 
                        key={skill} 
                        className="text-muted-foreground"
                        data-testid={`skill-${skill.toLowerCase().replace(/[\s+.]/g, '-')}`}
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
