import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    id: 1,
    title: "Restaurant Brands International (RBI) Dashboard",
    category: "Analytics Platform",
    description: "Comprehensive analytics and management tool for one of the world's largest quick-service restaurant companies. Provides centralized control over sales, marketing, supply chain management, and customer satisfaction monitoring.",
    tags: ["React.js", "TypeScript", "MongoDB", "Real-time Data"],
    color: "from-blue-500/20 to-purple-500/20",
    date: "Jan 2024 - June 2024"
  },
  {
    id: 2,
    title: "Raven Dashboard",
    category: "Data Visualization SaaS",
    description: "Powerful data visualization and survey analysis tool supporting live data updates, custom alerts, dynamic charts, and API connectivity. Processes survey data from Confirmit, Decipher and other platforms.",
    tags: ["React.js", "Highcharts", "NestJS", "JWT Security"],
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    id: 3,
    title: "Research Gearbox - Video Analyzer",
    category: "Data Analysis Tool",
    description: "Fully customized video analysis tool with complex mathematical computations for data capture and real-time dashboard analytics. Admin and user login with secured API endpoints using access and refresh tokens.",
    tags: ["React.js", "Video Processing", "Express.js", "Real-time Analytics"],
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    id: 4,
    title: "HFS Dashboard",
    category: "Performance Analytics",
    description: "High-Frequency Statistics Dashboard for advanced data visualization and performance tracking. Features live data streams, interactive charts, predictive analytics, and sales/marketing performance monitoring.",
    tags: ["React.js", "Node.js", "Highcharts", "Predictive Analytics"],
    color: "from-pink-500/20 to-rose-500/20"
  },
  {
    id: 5,
    title: "CCAdmin Dashboard",
    category: "Survey Management",
    description: "User-centric survey admin dashboard with detailed reporting on cloud resource usage, performance, and costs. Implemented UX and business requirements into production solutions.",
    tags: ["React.js", "Cloud Analytics", "Reporting"],
    color: "from-violet-500/20 to-indigo-500/20"
  },
  {
    id: 6,
    title: "Probeme AI",
    category: "AI Integration",
    description: "Professional chatbot integration for resume optimization and career development. Provides actionable, result-focused suggestions for technical skills and professional growth.",
    tags: ["React.js", "AI API Integration", "NLP"],
    color: "from-cyan-500/20 to-blue-500/20"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-background relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 border-b border-white/10 pb-8 flex justify-between items-end"
        >
          <div>
            <span className="text-primary text-sm uppercase tracking-widest mb-2 block">Professional Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">FEATURED PROJECTS</h2>
          </div>
          <span className="hidden md:block text-muted-foreground">2020 — 2024</span>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              data-testid={`card-project-${project.id}`}
            >
              <Card className="group relative overflow-hidden bg-card border-white/5 hover:border-primary/50 transition-colors duration-500">
                <CardContent className="p-0 grid md:grid-cols-2 gap-0">
                  <div className={`h-64 md:h-auto bg-gradient-to-br ${project.color} flex items-center justify-center p-12 group-hover:scale-[1.02] transition-transform duration-500`}>
                    <div className="w-full h-full bg-black/20 backdrop-blur-md rounded border border-white/10 flex flex-col items-center justify-center">
                      <span className="text-4xl font-bold text-white/20">0{project.id}</span>
                      {project.date && <span className="text-xs text-white/30 mt-2">{project.date}</span>}
                    </div>
                  </div>
                  
                  <div className="p-8 md:p-12 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-xs font-mono text-primary border border-primary/20 px-2 py-1 rounded" data-testid={`badge-category-${project.id}`}>
                          {project.category}
                        </span>
                        <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors" data-testid={`heading-project-${project.id}`}>
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed text-sm md:text-base" data-testid={`description-project-${project.id}`}>
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex gap-3 flex-wrap">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs text-muted-foreground/60" data-testid={`tag-${tag.toLowerCase().replace(/[\s.]/g, '-')}`}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
