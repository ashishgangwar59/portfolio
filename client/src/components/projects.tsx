import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
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

export default function Projects() {
  const [, setLocation] = useLocation();

  return (
    <section id="projects" className="py-32 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Some of my latest work
          </h2>
          <p className="text-lg text-muted-foreground">
            A selection of projects showcasing my expertise in frontend development and dashboard architecture.
          </p>
        </motion.div>

        <div className="grid gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              data-testid={`card-project-${project.id}`}
            >
              <Card className="border-0 shadow-none bg-transparent cursor-pointer group">
                <CardContent 
                  className="p-0 grid md:grid-cols-2 gap-12 items-center"
                  onClick={() => setLocation(`/project/${project.id}`)}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden rounded-lg"
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>

                  <div className="space-y-6">
                    <div>
                      <span className="text-sm text-primary font-medium uppercase tracking-wider" data-testid={`badge-category-${project.id}`}>
                        {project.category}
                      </span>
                      {project.year && (
                        <span className="text-sm text-muted-foreground ml-4">
                          {project.year}
                        </span>
                      )}
                      <h3 className="text-3xl font-light mt-3 mb-4 group-hover:text-primary transition-colors" data-testid={`heading-project-${project.id}`}>
                        {project.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed" data-testid={`description-project-${project.id}`}>
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <div className="flex gap-3 flex-wrap">
                        {project.tags.map(tag => (
                          <span 
                            key={tag} 
                            className="text-sm text-muted-foreground border border-border rounded-full px-4 py-2"
                            data-testid={`tag-${tag.toLowerCase().replace(/[\s.]/g, '-')}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="text-primary font-medium"
                      >
                        View Details →
                      </motion.div>
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
