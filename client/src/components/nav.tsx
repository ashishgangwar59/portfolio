import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Nav() {
  const links = [
    { name: "Portfolio", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const [activeLink, setActiveLink] = useState<string | null>(null);

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 bg-background/80 backdrop-blur-md border-b border-border/30"
    >
      <Link to="/">
        <motion.div 
          className="text-lg font-bold tracking-wider bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity cursor-pointer"
          data-testid="link-home"
          whileHover={{ scale: 1.05 }}
        >
          AK
        </motion.div>
      </Link>

      <div className="hidden md:flex gap-8">
        {links.map((link) => (
          <motion.a 
            key={link.name} 
            href={link.href}
            className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"
            data-testid={`link-nav-${link.name.toLowerCase()}`}
            onMouseEnter={() => setActiveLink(link.name)}
            onMouseLeave={() => setActiveLink(null)}
          >
            {link.name}
            <motion.span
              className="absolute bottom-0 left-0 h-0.5 bg-primary"
              initial={{ width: 0 }}
              animate={{ width: activeLink === link.name ? "100%" : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
}
