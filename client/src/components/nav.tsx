import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Nav() {
  const links = [
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-sm bg-background/50 border-b border-white/5"
    >
      <Link href="/">
        <a className="text-2xl font-bold tracking-tighter hover:text-primary transition-colors font-display">
          DEV.
        </a>
      </Link>

      <div className="hidden md:flex gap-8">
        {links.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            className="text-sm uppercase tracking-widest hover:text-primary transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>
      
      <a 
        href="#contact"
        className="md:hidden text-sm uppercase tracking-widest hover:text-primary transition-colors"
      >
        Menu
      </a>
    </motion.nav>
  );
}
