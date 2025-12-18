import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    id: 1,
    title: "Neon Horizon",
    category: "Web Application",
    description: "A real-time dashboard for futuristic city management using WebGL and React Three Fiber.",
    tags: ["React", "Three.js", "WebGL"],
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    id: 2,
    title: "Void Commerce",
    category: "E-Commerce",
    description: "Minimalist brutalist shopping experience with headless CMS architecture.",
    tags: ["Next.js", "Shopify", "Tailwind"],
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    id: 3,
    title: "Synth UI",
    category: "Design System",
    description: "A comprehensive component library for building high-performance interfaces.",
    tags: ["TypeScript", "Storybook", "CSS"],
    color: "from-orange-500/20 to-red-500/20"
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
            <span className="text-primary text-sm uppercase tracking-widest mb-2 block">Selected Works</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">FEATURED PROJECTS</h2>
          </div>
          <span className="hidden md:block text-muted-foreground">2023 — 2024</span>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden bg-card border-white/5 hover:border-primary/50 transition-colors duration-500">
                <CardContent className="p-0 grid md:grid-cols-2 gap-0">
                  <div className={`h-64 md:h-auto bg-gradient-to-br ${project.color} flex items-center justify-center p-12 group-hover:scale-[1.02] transition-transform duration-500`}>
                    <div className="w-full h-full bg-black/20 backdrop-blur-md rounded border border-white/10 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white/20">0{project.id}</span>
                    </div>
                  </div>
                  
                  <div className="p-8 md:p-12 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-xs font-mono text-primary border border-primary/20 px-2 py-1 rounded">
                          {project.category}
                        </span>
                        <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </div>
                      <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex gap-3 flex-wrap">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-sm text-muted-foreground/60">
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
