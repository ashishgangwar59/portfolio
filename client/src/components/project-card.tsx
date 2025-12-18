import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, Star } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  year?: string;
  featured?: boolean;
}

export default function ProjectCard({
  id,
  title,
  category,
  description,
  image,
  tags,
  year,
  featured = false,
}: ProjectCardProps) {
  const [, setLocation] = useLocation();

  return (
    <motion.div
      onClick={() => setLocation(`/project/${id}`)}
      className="cursor-pointer group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      data-testid={`card-project-${id}`}
    >
      <Card className="border-0 shadow-none bg-transparent hover:bg-gradient-to-br hover:from-secondary/50 hover:to-background transition-all duration-500 rounded-3xl p-8 overflow-hidden relative">
        {/* Animated gradient border */}
        <motion.div
          className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <CardContent className="p-0 grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Image Section */}
          <motion.div
            whileHover={{ scale: 1.06, rotateY: 5 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden rounded-2xl relative h-80"
          >
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-purple-500/20 rounded-2xl"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Featured badge */}
            {featured && (
              <motion.div
                className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-bold"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.5 }}
              >
                <Star className="w-4 h-4" />
                Featured
              </motion.div>
            )}

            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content Section */}
          <div className="space-y-6">
            <div>
              {/* Category & Year */}
              <div className="flex items-center gap-3 mb-4">
                <motion.span
                  className="text-sm text-primary font-bold uppercase tracking-widest inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 border border-primary/40"
                  data-testid={`badge-category-${id}`}
                  whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
                >
                  {category}
                </motion.span>
                {year && (
                  <motion.span 
                    className="text-sm text-muted-foreground font-semibold"
                    whileHover={{ color: "var(--foreground)" }}
                  >
                    {year}
                  </motion.span>
                )}
              </div>

              {/* Title */}
              <motion.h3
                className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:from-primary group-hover:to-purple-400 transition-all duration-300"
                data-testid={`heading-project-${id}`}
                whileHover={{ scale: 1.02 }}
              >
                {title}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300"
                data-testid={`description-project-${id}`}
              >
                {description}
              </motion.p>
            </div>

            {/* Tags & CTA */}
            <div className="flex flex-col gap-4 pt-4">
              <div className="flex gap-2 flex-wrap">
                {tags.map((tag, idx) => (
                  <motion.span
                    key={tag}
                    className="text-sm text-muted-foreground border border-border rounded-full px-4 py-2 bg-background/50 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"
                    data-testid={`tag-${tag.toLowerCase().replace(/[\s.]/g, '-')}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.15, y: -4 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="flex items-center justify-between pt-2">
                <motion.div
                  className="text-primary font-bold uppercase text-sm tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ x: 4 }}
                >
                  View Details
                </motion.div>
                <motion.div
                  whileHover={{ x: 8, y: -8, rotate: 45, scale: 1.2 }}
                  className="text-primary bg-primary/10 rounded-full p-3"
                >
                  <ArrowUpRight className="w-6 h-6" />
                </motion.div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
