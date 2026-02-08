import { motion } from 'framer-motion';

interface SectionHeaderProps {
  label: string;
  title: string;
  number: string;
}

export function SectionHeader({ label, title, number }: SectionHeaderProps) {
  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-4 mb-2">
        <span className="font-mono text-xs text-schematic-accent tracking-widest uppercase">
          [{number}]
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-schematic-border to-transparent" />
      </div>
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-xs text-schematic-text-muted">{'///'}</span>
        <h2 className="font-mono text-2xl md:text-3xl font-bold text-schematic-text tracking-tight">
          {title}
        </h2>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <div className="w-2 h-2 bg-schematic-accent/60 rotate-45" />
        <span className="font-mono text-xs text-schematic-text-dim">{label}</span>
        <div className="h-px w-16 bg-schematic-border" />
      </div>
    </motion.div>
  );
}
