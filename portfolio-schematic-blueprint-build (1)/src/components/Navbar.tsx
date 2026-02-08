import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'ABOUT', href: '#about' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'CONTACT', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-schematic-bg/80 backdrop-blur-md border-b border-schematic-border'
            : 'bg-transparent'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="relative w-8 h-8 border border-schematic-accent/60 flex items-center justify-center group-hover:border-schematic-accent transition-colors">
                <Terminal className="w-4 h-4 text-schematic-accent" />
                <span className="absolute -top-[3px] -left-[3px] text-[7px] font-mono text-schematic-text-muted">+</span>
                <span className="absolute -bottom-[3px] -right-[3px] text-[7px] font-mono text-schematic-text-muted">+</span>
              </div>
              <span className="font-mono text-sm font-bold text-schematic-text tracking-tight hidden sm:block">
                dev<span className="text-schematic-accent">.</span>with<span className="text-schematic-accent">.</span>shubham
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative px-3 py-2 font-mono text-xs text-schematic-text-dim hover:text-schematic-accent transition-colors group"
                >
                  <span className="text-schematic-text-muted mr-1">0{i + 1}.</span>
                  {link.label}
                  <span className="absolute bottom-0 left-3 right-3 h-px bg-schematic-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
              ))}
            </div>

            {/* Status indicator */}
            <div className="hidden md:flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-schematic-green animate-pulse-glow" />
              <span className="font-mono text-[10px] text-schematic-text-muted">SYS:ONLINE</span>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-schematic-text-dim hover:text-schematic-accent transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-schematic-bg/95 backdrop-blur-md pt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col items-center gap-6 p-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="font-mono text-lg text-schematic-text-dim hover:text-schematic-accent transition-colors"
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="text-schematic-accent mr-2">0{i + 1}.</span>
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
