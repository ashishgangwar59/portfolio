import Nav from "@/components/nav";
import Hero from "@/components/hero";
import ScrollProgress from "@/components/scroll-progress";
import FloatingShapes from "@/components/floating-shapes";
import AnimatedTechStack from "@/components/animated-tech-stack";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import About from "@/components/about";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      <ScrollProgress />
      <FloatingShapes />
      <Nav />
      <Hero />
      <AnimatedTechStack />
      <Projects />
      <Experience />
      <About />
      <Contact />
    </main>
  );
}
