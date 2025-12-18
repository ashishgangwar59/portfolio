import Nav from "@/components/nav";
import Hero from "@/components/hero";
import AnimatedTechStack from "@/components/animated-tech-stack";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import About from "@/components/about";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
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
