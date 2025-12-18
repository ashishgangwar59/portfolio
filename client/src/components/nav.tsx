import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Nav() {
  const links = [
    { name: "Portfolio", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 bg-background/80 backdrop-blur-md border-b border-border/30"
    >
      <Link href="/">
        <a className="text-lg font-light tracking-wide hover:text-primary transition-colors" data-testid="link-home">
          Ashish Kumar
        </a>
      </Link>

      <div className="hidden md:flex gap-8">
        {links.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            data-testid={`link-nav-${link.name.toLowerCase()}`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
