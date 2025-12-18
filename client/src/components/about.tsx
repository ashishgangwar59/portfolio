import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary text-sm uppercase tracking-widest mb-6 block">About Me</span>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-12">
            I'm a multidisciplinary developer focused on creating emotional connections through code. 
            <span className="text-muted-foreground"> I believe that the best digital experiences are those that feel effortless, yet leave a lasting impression.</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 text-muted-foreground leading-relaxed">
            <p>
              With over 5 years of experience in frontend architecture and creative coding, I bridge the gap between design and engineering. My approach is rooted in the belief that performance and aesthetics are not mutually exclusive.
            </p>
            <p>
              When I'm not coding, I'm likely exploring generative art, studying typographic history, or experimenting with new interaction models in WebGL.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white font-bold mb-4 block">Frontend</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>React / Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 block">Creative</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Three.js / R3F</li>
                <li>WebGL</li>
                <li>GLSL Shaders</li>
                <li>Canvas</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 block">Design</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Figma</li>
                <li>UI / UX</li>
                <li>Motion Design</li>
                <li>Typography</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
