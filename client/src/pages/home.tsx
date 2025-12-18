import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import About from "@/components/about";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Nav />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
