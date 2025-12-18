import { useRoute, useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Nav from "@/components/nav";

const projectsData: Record<string, any> = {
  "probeme-ai": {
    title: "Probeme AI",
    category: "AI Integration",
    year: "2023 - 2024",
    description: "Professional chatbot integration for resume optimization and career development. Provides actionable, result-focused suggestions for technical skills and professional growth.",
    overview: "A sophisticated AI-powered platform designed to help professionals optimize their resumes and career trajectories. Probeme AI leverages advanced NLP and machine learning to provide personalized recommendations for technical skills enhancement and professional development.",
    keyFeatures: [
      "AI-powered resume analysis and optimization suggestions",
      "Real-time technical skills assessment",
      "Personalized career development roadmap",
      "Integration with multiple data sources",
      "Interactive chatbot interface"
    ],
    technologies: ["React.js", "AI API Integration", "TypeScript", "Node.js", "NLP"],
    highlights: [
      "Developed responsive interface for AI chatbot interaction",
      "Integrated multiple AI APIs for intelligent recommendations",
      "Optimized performance for real-time data processing",
      "Implemented user-friendly dashboard for career tracking"
    ]
  },
  "research-gearbox": {
    title: "Research Gearbox - Video Analyzer",
    category: "Data Analysis Tool",
    year: "2022 - 2023",
    description: "Fully customized video analysis tool with complex mathematical computations for data capture and real-time dashboard analytics. Admin and user login with secured API endpoints.",
    overview: "A comprehensive video analysis platform designed for research institutions and survey companies. The tool captures video data from multiple survey platforms, performs complex mathematical computations, and displays real-time analytics through an advanced dashboard.",
    keyFeatures: [
      "Multi-platform video data capture",
      "Complex mathematical computations and analysis",
      "Real-time dashboard analytics",
      "Admin and user role-based access",
      "Secured API endpoints with token authentication",
      "Multiple survey platform integration"
    ],
    technologies: ["React.js", "Video Processing", "Express.js", "MongoDB", "JWT Security", "WebSockets"],
    highlights: [
      "Complete management and development of the dashboard",
      "Implemented secure authentication with access and refresh tokens",
      "Built real-time data visualization features",
      "Trained junior developers on live project implementation",
      "Deployed to production with full DevOps support"
    ]
  },
  "raven-dashboard": {
    title: "Raven Dashboard",
    category: "Data Visualization SaaS",
    year: "2021 - 2023",
    description: "Enterprise data visualization platform processing survey data from Confirmit and Decipher, delivering real-time insights through interactive charts, PPT, and Excel exports.",
    overview: "Raven is a powerful SaaS platform designed for enterprises seeking advanced data monitoring and analysis capabilities. It integrates with popular survey tools to provide real-time insights, customizable reports, and robust data integration for informed decision-making.",
    keyFeatures: [
      "Live Data Updates: Continuously updated data feeds",
      "Custom Alerts: Event-based notifications and thresholds",
      "Dynamic Charts and Graphs: Multiple visualization options",
      "Customizable Dashboards: Personalized user experiences",
      "API Connectivity: Seamless data source integration",
      "Multi-format Exports: Charts, PPT, and Excel sheets"
    ],
    technologies: ["React.js", "Highcharts", "NestJS", "Express.js", "MongoDB", "JWT Security", "PPT.js", "Excel.js"],
    highlights: [
      "Developed interactive data visualization components",
      "Optimized performance for handling large datasets",
      "Implemented customizable dashboard builder",
      "Created multi-format export functionality",
      "Integrated with Confirmit, Decipher, and other survey platforms",
      "Achieved 99.9% uptime in production"
    ]
  },
  "hfs-dashboard": {
    title: "HFS Dashboard",
    category: "Performance Analytics",
    year: "2022 - 2024",
    description: "High-Frequency Statistics Dashboard for advanced data visualization and performance tracking. Features live data streams, interactive charts, and predictive analytics.",
    overview: "HFS Dashboard is a sophisticated analytics tool designed for organizations requiring real-time performance monitoring and predictive insights. It provides comprehensive views of key metrics enabling users to monitor, analyze, and optimize their operations.",
    keyFeatures: [
      "Live Data Streams: Real-time updates for accuracy",
      "Interactive Charts: Line charts, bar graphs, scatter plots, heatmaps",
      "Predictive Analytics: Historical data forecasting",
      "Data Aggregation: Multi-source data consolidation",
      "Sales Performance: Campaign effectiveness analysis",
      "Customer Metrics: Acquisition and retention monitoring"
    ],
    technologies: ["React.js", "Node.js", "Highcharts", "MongoDB", "SSL/TLS", "Encryption"],
    highlights: [
      "Built responsive interface for multi-device access",
      "Implemented predictive analytics engine",
      "Optimized performance using lazy loading and code splitting",
      "Created comprehensive data aggregation system",
      "Implemented encryption for sensitive data",
      "Designed intuitive dashboard for executive insights"
    ]
  },
  "rbi-dashboard": {
    title: "Restaurant Brands International Dashboard",
    category: "Analytics Platform",
    year: "Jan 2024 - June 2024",
    description: "Comprehensive analytics and management tool for one of the world's largest quick-service restaurant companies. Centralized control for Burger King, Tim Hortons, and Popeyes operations.",
    overview: "A comprehensive enterprise analytics platform designed for Restaurant Brands International, overseeing operations for major QSR brands including Burger King, Tim Hortons, and Popeyes. The dashboard provides centralized control and real-time insights across all operational aspects.",
    keyFeatures: [
      "Sales and Marketing Analytics: Performance tracking across brands",
      "Real-time Monitoring: Live operational metrics",
      "Supply Chain Management: Inventory and logistics tracking",
      "Customer Satisfaction: Feedback and satisfaction metrics",
      "Financial Reporting: Revenue and cost analysis",
      "Multi-brand Support: Unified interface for multiple brands"
    ],
    technologies: ["React.js", "TypeScript", "MongoDB", "Real-time Data", "Express.js", "WebSockets"],
    highlights: [
      "Designed multi-brand dashboard architecture",
      "Implemented real-time data synchronization",
      "Created comprehensive reporting system",
      "Optimized performance for handling global operations",
      "Delivered on-time with zero production issues",
      "Received positive feedback from executive stakeholders"
    ]
  },
  "ccadmin-dashboard": {
    title: "CCAdmin Dashboard",
    category: "Survey Management",
    year: "April 2020 - Nov 2021",
    description: "User-centric survey admin dashboard with detailed reporting on cloud resource usage, performance, and costs. Implemented UX and business requirements into production solutions.",
    overview: "CCAdmin Dashboard is a comprehensive survey administration platform that combines user-centric design with powerful analytics capabilities. It provides detailed insights into cloud resource usage, performance metrics, and cost management.",
    keyFeatures: [
      "Survey Management: Creation and distribution tools",
      "Admin Dashboard: Comprehensive control panel",
      "Resource Usage Reporting: Cloud cost analysis",
      "Performance Metrics: Real-time performance tracking",
      "User Management: Role-based access control",
      "Detailed Analytics: In-depth survey data analysis"
    ],
    technologies: ["React.js", "Cloud APIs", "Express.js", "Reporting", "Analytics"],
    highlights: [
      "Led UX and business requirements translation to code",
      "Designed user-centric survey management interface",
      "Implemented comprehensive reporting system",
      "Optimized cloud resource utilization",
      "Collaborated with stakeholders on feature prioritization",
      "Delivered project on schedule with high user satisfaction"
    ]
  }
};

export default function ProjectDetails() {
  const [match, params] = useRoute("/project/:id");
  const [, setLocation] = useLocation();

  if (!match) {
    return null;
  }

  const projectId = params?.id;
  const project = projectsData[projectId];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project not found</h1>
          <button 
            onClick={() => setLocation("/")}
            className="text-primary hover:text-primary/70"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-background text-foreground">
      <Nav />
      
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.button
            onClick={() => setLocation("/")}
            whileHover={{ x: -4 }}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
            data-testid="button-back"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-12">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                {project.category}
              </span>
              <h1 className="text-5xl md:text-6xl font-light tracking-tight mt-4 mb-4">
                {project.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {project.year}
              </p>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                {project.overview}
              </p>

              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h2 className="text-2xl font-light mb-6">Key Features</h2>
                  <ul className="space-y-3">
                    {project.keyFeatures.map((feature: string) => (
                      <li key={feature} className="flex gap-3 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-light mb-6">Highlights</h2>
                  <ul className="space-y-3">
                    {project.highlights.map((highlight: string) => (
                      <li key={highlight} className="flex gap-3 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-border pt-12">
                <h2 className="text-2xl font-light mb-6">Technologies Used</h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech: string) => (
                    <span 
                      key={tech}
                      className="px-4 py-2 bg-secondary/50 rounded-full text-sm text-foreground border border-border"
                      data-testid={`tech-${tech.toLowerCase().replace(/[\s.]/g, '-')}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
