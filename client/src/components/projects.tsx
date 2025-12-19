import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import ProjectCard from "./project-card";
import dashboardImg from "@assets/generated_images/dashboard_ui_mockup.png";
import reactImg from "@assets/generated_images/react_application_interface.png";
import probeMe from "@assets/generated_images/react_application_interface_1.png";
import research from "@assets/generated_images/react_application_interface_2.png";
import raven from "@assets/generated_images/react_application_interface_3.png";
import rbi from "@assets/generated_images/react_application_interface_4.png";
import hfs from "@assets/generated_images/react_application_interface_5.png";

const projects = [
  {
    id: "probeme-ai",
    title: "Probeme AI",
    category: "AI Integration",
    description:
      "Professional chatbot platform helping developers optimize resumes and advance their careers with AI-powered technical skills assessment and personalized recommendations.",
    image: probeMe,
    tags: ["React.js", "AI APIs", "TypeScript"],
    year: "2023 - 2024",
    featured: true,
  },
  {
    id: "research-gearbox",
    title: "Research Gearbox - Video Analyzer",
    category: "Data Analysis Tool",
    description:
      "A fully customized video analysis tool featuring complex mathematical computations for data capture and real-time dashboard analytics, secured with role-based admin/user access and JWT authentication.",
    image: research,
    tags: ["React.js", "Video Processing", "Express.js"],
    year: "2022 - 2023",
    featured: true,
  },
  {
    id: "raven-dashboard",
    title: "Raven Dashboard",
    category: "Data Visualization SaaS",
    description:
      "Enterprise data visualization platform processing survey data from Confirmit and Decipher, delivering real-time insights through interactive charts.",
    image: raven,
    tags: ["React.js", "Highcharts", "NestJS"],
    featured: true,
  },
  {
    id: "rbi-dashboard",
    title: "Restaurant Brands International Dashboard",
    category: "Analytics Platform",
    description:
      "Comprehensive analytics tool for managing sales, marketing, and supply chain operations across Burger King, Tim Hortons, and Popeyes.",
    image: rbi,
    tags: ["React.js", "TypeScript", "Real-time Data"],
    year: "Jan 2024 - June 2024",
    featured: true,
  },
  {
    id: "hfs-dashboard",
    title: "HFS Dashboard",
    category: "Performance Analytics",
    description:
      "High-Frequency Statistics dashboard with predictive analytics, live data streams, and advanced performance tracking for enterprise operations.",
    image: hfs,
    tags: ["React.js", "Node.js", "Highcharts"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 px-6 bg-background relative overflow-hidden"
    >
      {/* Animated background shapes */}
      <motion.div
        className="absolute -top-40 right-0 w-80 h-80 bg-gradient-to-br from-primary/15 to-purple-500/15 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-32 left-1/2 w-96 h-96 bg-gradient-to-tr from-cyan-500/10 to-primary/10 rounded-full blur-3xl"
        animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, delay: 2 }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center md:text-left"
        >
          <motion.div
            className="inline-block mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-sm text-primary font-bold uppercase tracking-widest px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              ✨ Featured Work
            </span>
          </motion.div>

          <motion.h2
            className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Some of my
            </span>
            <br />
            <span className="text-foreground">latest work</span>
          </motion.h2>

          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            A selection of projects where I’ve designed and built scalable,
            high-performance web applications with rich, data-driven
            visualizations.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid gap-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <motion.a
            href="#projects"
            className="group relative inline-block px-8 py-4 rounded-full font-bold text-lg bg-gradient-to-r from-primary/20 to-purple-500/20 border-2 border-primary text-primary hover:bg-gradient-to-r hover:from-primary hover:to-purple-500 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-testid="button-view-all-projects"
          >
            <span className="relative z-10">View All Projects</span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
