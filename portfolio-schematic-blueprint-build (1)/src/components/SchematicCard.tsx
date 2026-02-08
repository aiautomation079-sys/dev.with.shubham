import { useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface SchematicCardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  id?: string;
}

export function SchematicCard({ children, className, hoverable = false, id }: SchematicCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      id={id}
      className={cn(
        'relative border border-schematic-border bg-schematic-card/60 backdrop-blur-sm',
        hoverable && 'cursor-pointer',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={hoverable ? { scale: 1.01 } : undefined}
      transition={{ duration: 0.2 }}
    >
      {/* Corner markers */}
      <span className="absolute -top-[5px] -left-[5px] font-mono text-[10px] text-schematic-text-muted leading-none select-none">+</span>
      <span className="absolute -top-[5px] -right-[5px] font-mono text-[10px] text-schematic-text-muted leading-none select-none">+</span>
      <span className="absolute -bottom-[5px] -left-[5px] font-mono text-[10px] text-schematic-text-muted leading-none select-none">+</span>
      <span className="absolute -bottom-[5px] -right-[5px] font-mono text-[10px] text-schematic-text-muted leading-none select-none">+</span>

      {/* Scan line effect on hover */}
      {hoverable && isHovered && (
        <div
          className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-schematic-accent-bright to-transparent z-10 animate-scan-line pointer-events-none"
        />
      )}

      {/* Hover border glow */}
      {hoverable && isHovered && (
        <div className="absolute inset-0 border border-schematic-accent/40 pointer-events-none z-10" />
      )}

      {children}
    </motion.div>
  );
}
