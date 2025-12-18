import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import dashboardImg from "@assets/generated_images/dashboard_ui_mockup.png";
import reactImg from "@assets/generated_images/react_application_interface.png";

const projects = [
  {
    id: "rbi-dashboard",
    title: "Restaurant Brands International Dashboard",
    category: "Analytics Platform",
    description: "Comprehensive analytics tool for managing sales, marketing, and supply chain operations across Burger King, Tim Hortons, and Popeyes.",
    image: dashboardImg,
    tags: ["React.js", "TypeScript", "Real-time Data"],
    year: "Jan 2024 - June 2024"
  },
  {
    id: "raven-dashboard",
    title: "Raven Dashboard",
    category: "Data Visualization SaaS",
    description: "Enterprise data visualization platform processing survey data from Confirmit and Decipher, delivering real-time insights through interactive charts.",
    image: reactImg,
    tags: ["React.js", "Highcharts", "NestJS"]
  },
  {
    id: "hfs-dashboard",
    title: "HFS Dashboard",
    category: "Performance Analytics",
    description: "High-Frequency Statistics dashboard with predictive analytics, live data streams, and advanced performance tracking for enterprise operations.",
    image: dashboardImg,
    tags: ["React.js", "Node.js", "Highcharts"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index?: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
      delay: (index || 0) * 0.2,
    },
  }),
};

export default function Projects() {
  const [, setLocation] = useLocation();

  return (
    <section id="projects" className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute -top-40 right-0 w-80 h-80 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-light tracking-tight mb-4 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Some of my latest work
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            A selection of projects showcasing my expertise in frontend development and dashboard architecture.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              data-testid={`card-project-${project.id}`}
              onClick={() => setLocation(`/project/${project.id}`)}
              className="cursor-pointer"
            >
              <Card className="border-0 shadow-none bg-transparent group">
                <CardContent className="p-0 grid md:grid-cols-2 gap-12 items-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden rounded-2xl relative"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>

                  <div className="space-y-6">
                    <div>
                      <motion.span 
                        className="text-sm text-primary font-medium uppercase tracking-widest"
                        data-testid={`badge-category-${project.id}`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {project.category}
                      </motion.span>
                      {project.year && (
                        <span className="text-sm text-muted-foreground ml-4">
                          {project.year}
                        </span>
                      )}
                      <motion.h3 
                        className="text-3xl font-light mt-3 mb-4 group-hover:text-primary transition-colors"
                        data-testid={`heading-project-${project.id}`}
                        whileHover={{ x: 10 }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p 
                        className="text-lg text-muted-foreground leading-relaxed"
                        data-testid={`description-project-${project.id}`}
                        initial={{ opacity: 0.7 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {project.description}
                      </motion.p>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <div className="flex gap-3 flex-wrap">
                        {project.tags.map((tag, idx) => (
                          <motion.span 
                            key={tag}
                            className="text-sm text-muted-foreground border border-border rounded-full px-4 py-2 hover:border-primary hover:text-primary transition-colors"
                            data-testid={`tag-${tag.toLowerCase().replace(/[\s.]/g, '-')}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                      <motion.div
                        whileHover={{ x: 8, y: -8 }}
                        className="text-primary"
                      >
                        <ArrowUpRight className="w-6 h-6" />
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
