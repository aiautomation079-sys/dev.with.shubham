import { motion } from 'framer-motion';
import { ArrowDown, ChevronRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      {/* Decorative measurement lines */}
      <div className="absolute top-20 left-4 sm:left-8 bottom-20 w-px bg-gradient-to-b from-transparent via-schematic-border to-transparent" />
      <div className="absolute top-20 right-4 sm:right-8 bottom-20 w-px bg-gradient-to-b from-transparent via-schematic-border to-transparent" />

      {/* Measurement ticks on left */}
      <div className="absolute left-4 sm:left-8 top-1/4 flex flex-col gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center gap-1">
            <div className="w-3 h-px bg-schematic-border" />
            <span className="font-mono text-[8px] text-schematic-text-muted">{(i * 120).toString().padStart(4, '0')}</span>
          </div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Status bar */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="h-px w-12 bg-schematic-accent/40" />
          <div className="flex items-center gap-2 border border-schematic-border px-3 py-1">
            <div className="w-1.5 h-1.5 rounded-full bg-schematic-green animate-pulse" />
            <span className="font-mono text-[10px] text-schematic-text-dim tracking-widest">SYSTEM INITIALIZED</span>
          </div>
          <div className="h-px w-12 bg-schematic-accent/40" />
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="font-mono text-xs text-schematic-text-muted mb-3 tracking-[0.3em]">
            {'<DESIGNATION>'}
          </div>
          <h1 className="font-mono text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-none">
            <span className="text-schematic-text">FULL STACK</span>
            <br />
            <span className="text-schematic-accent">DEVELOPER</span>
            <span className="text-schematic-amber animate-blink ml-1">_</span>
          </h1>
          <div className="font-mono text-xs text-schematic-text-muted mt-3 tracking-[0.3em]">
            {'</DESIGNATION>'}
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          className="mt-8 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <p className="font-mono text-sm sm:text-base text-schematic-accent-bright inline-flex items-center gap-2">
            <ChevronRight className="w-4 h-4" />
            Algorithmic Thinker & Systems Architect
          </p>
        </motion.div>

        {/* Bio */}
        <motion.div
          className="max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <p className="font-mono text-xs sm:text-sm text-schematic-text-dim leading-relaxed">
            "Bridge between low-level logic and high-level interfaces.
            <br className="hidden sm:block" />
            Obsessed with optimization, algorithm visualization, and scalable systems."
          </p>
        </motion.div>

        {/* Metadata badges (no location) */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <div className="flex items-center gap-2 border border-schematic-border px-3 py-1.5 bg-schematic-surface/50">
            <span className="font-mono text-[10px] text-schematic-text-muted">BRAND:</span>
            <span className="font-mono text-xs text-schematic-accent">dev.with.shubham</span>
          </div>
          <div className="flex items-center gap-2 border border-schematic-border px-3 py-1.5 bg-schematic-surface/50">
            <span className="font-mono text-[10px] text-schematic-text-muted">STACK:</span>
            <span className="font-mono text-xs text-schematic-cyan">React / Node / C / Python</span>
          </div>
          <div className="flex items-center gap-2 border border-schematic-border px-3 py-1.5 bg-schematic-surface/50">
            <span className="font-mono text-[10px] text-schematic-text-muted">STATUS:</span>
            <span className="font-mono text-xs text-schematic-green">Available</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <a
            href="#projects"
            className="group relative border border-schematic-accent bg-schematic-accent/10 px-6 py-3 font-mono text-xs uppercase tracking-widest text-schematic-accent hover:bg-schematic-accent/20 transition-all"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute -top-[3px] -left-[3px] text-[7px] font-mono text-schematic-accent/50">┌</span>
            <span className="absolute -top-[3px] -right-[3px] text-[7px] font-mono text-schematic-accent/50">┐</span>
            <span className="absolute -bottom-[3px] -left-[3px] text-[7px] font-mono text-schematic-accent/50">└</span>
            <span className="absolute -bottom-[3px] -right-[3px] text-[7px] font-mono text-schematic-accent/50">┘</span>
          </a>
          <a
            href="#contact"
            className="border border-schematic-border px-6 py-3 font-mono text-xs uppercase tracking-widest text-schematic-text-dim hover:text-schematic-text hover:border-schematic-text-muted transition-all"
          >
            Init Contact
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-mono text-[9px] text-schematic-text-muted tracking-widest">SCROLL</span>
            <ArrowDown className="w-3 h-3 text-schematic-text-muted" />
          </motion.div>
        </motion.div>
      </div>

      {/* Technical corner details */}
      <div className="absolute top-20 left-4 sm:left-8 font-mono text-[8px] text-schematic-text-muted">
        <div>REV: 2.4.1</div>
        <div>DWG: PORTFOLIO</div>
      </div>
      <div className="absolute top-20 right-4 sm:right-8 font-mono text-[8px] text-schematic-text-muted text-right">
        <div>SCALE: 1:1</div>
        <div>UNIT: PX</div>
      </div>
    </section>
  );
}
