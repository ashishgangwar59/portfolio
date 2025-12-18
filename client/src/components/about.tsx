import { motion } from "framer-motion";

const skillCategories = [
  {
    name: "Frontend",
    skills: ["React.js", "Next.js", "React Native", "TypeScript", "JavaScript ES6+"]
  },
  {
    name: "Styling",
    skills: ["Tailwind CSS", "Material UI", "Bootstrap", "Sass/SCSS", "CSS3"]
  },
  {
    name: "State & Data",
    skills: ["Redux", "Context API", "REST APIs", "GraphQL", "MongoDB"]
  },
  {
    name: "DevOps & Tools",
    skills: ["Docker", "Nginx", "AWS", "Microsoft Azure", "CI/CD", "Git"]
  }
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary text-sm uppercase tracking-widest mb-6 block">About Me</span>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-12">
            Front-End Developer with 6 years of experience building responsive, high-performance web applications using React, Vue, and modern JavaScript frameworks.
            <span className="text-muted-foreground"> Passionate about creating intuitive user interfaces, optimizing web performance, and delivering seamless digital experiences.</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 text-muted-foreground leading-relaxed mb-16">
            <div>
              <h3 className="text-white font-bold mb-4 block">Experience</h3>
              <p>
                Currently at E2E Research Pvt Ltd, I've led end-to-end frontend and backend development on multiple projects. Recognized with two awards within 6 months for consistent performance. I specialize in building complex dashboards, real-time data visualization, responsive web applications, and implementing modern development workflows under agile methodology. Proven expertise in translating design prototypes into functional, scalable solutions.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4 block">Approach</h3>
              <p>
                I focus on results and impact, collaborating closely with stakeholders to discover scenarios and deliver expected outcomes. Experienced in mentoring junior developers, providing code reviews, and ensuring code quality through testing. Dedicated to optimizing web performance, improving user experience, and building intuitive interfaces that users love.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skillCategories.map((category) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h4 className="text-white font-bold mb-4 block">{category.name}</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {category.skills.map((skill) => (
                    <li key={skill} data-testid={`skill-${skill.toLowerCase().replace(/[\s+]/g, '-')}`}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
