import { Terminal } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative border-t border-schematic-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border border-schematic-border flex items-center justify-center">
              <Terminal className="w-3 h-3 text-schematic-accent" />
            </div>
            <span className="font-mono text-xs text-schematic-text-dim">
              dev<span className="text-schematic-accent">.</span>with<span className="text-schematic-accent">.</span>shubham
            </span>
          </div>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span className="font-mono text-[9px] text-schematic-text-muted">
              BUILT WITH: <span className="text-schematic-text-dim">REACT + TAILWIND + FRAMER MOTION</span>
            </span>
            <div className="w-px h-3 bg-schematic-border hidden sm:block" />
            <span className="font-mono text-[9px] text-schematic-text-muted">
              REV: <span className="text-schematic-accent">2.4.1</span>
            </span>
          </div>

          <div className="font-mono text-[9px] text-schematic-text-muted">
            © {new Date().getFullYear()} dev.with.shubham // ALL RIGHTS RESERVED
          </div>
        </div>

        {/* Bottom measurement ruler */}
        <div className="mt-6 flex items-end h-3 overflow-hidden">
          {Array.from({ length: 80 }).map((_, i) => (
            <div
              key={i}
              className="flex-1 flex flex-col items-center"
            >
              <div
                className={`w-px ${i % 10 === 0 ? 'h-3 bg-schematic-border' : i % 5 === 0 ? 'h-2 bg-schematic-border/60' : 'h-1 bg-schematic-border/30'}`}
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
