import { motion } from 'framer-motion';
import { Cpu, Code2, Brain, Layers } from 'lucide-react';
import { SchematicCard } from './SchematicCard';
import { SectionHeader } from './SectionHeader';

const coreModules = [
  {
    icon: Cpu,
    title: 'Systems Programming',
    desc: 'C/C++ at the metal level. Memory management, data structures, and kernel-adjacent logic.',
    status: 'ACTIVE',
    color: 'text-schematic-amber',
  },
  {
    icon: Brain,
    title: 'Algorithmic Thinking',
    desc: 'JEE Advanced Mathematics background. Complex problem decomposition and optimization.',
    status: 'ACTIVE',
    color: 'text-schematic-cyan',
  },
  {
    icon: Code2,
    title: 'Full Stack Development',
    desc: 'React ecosystems, Node.js backends, database architecture. End-to-end product delivery.',
    status: 'ACTIVE',
    color: 'text-schematic-accent',
  },
  {
    icon: Layers,
    title: 'Architecture & Design',
    desc: 'Scalable system design, API-first approach, clean code practices, and CI/CD pipelines.',
    status: 'STANDBY',
    color: 'text-schematic-green',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader number="01" title="ABOUT.SYS" label="system.profile — loaded" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left info panel */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <SchematicCard className="p-6">
              <div className="font-mono text-[10px] text-schematic-text-muted mb-4 tracking-widest">
                {'> OPERATOR PROFILE'}
              </div>
              <div className="space-y-4">
                <div>
                  <div className="font-mono text-[10px] text-schematic-text-muted">BRAND</div>
                  <div className="font-mono text-sm text-schematic-accent">dev.with.shubham</div>
                </div>
                <div className="h-px bg-schematic-border" />
                <div>
                  <div className="font-mono text-[10px] text-schematic-text-muted">DESIGNATION</div>
                  <div className="font-mono text-sm text-schematic-text">Full Stack Developer</div>
                </div>
                <div className="h-px bg-schematic-border" />
                <div>
                  <div className="font-mono text-[10px] text-schematic-text-muted">SPECIALIZATION</div>
                  <div className="font-mono text-sm text-schematic-accent">Algorithmic Thinker</div>
                </div>
                <div className="h-px bg-schematic-border" />
                <div>
                  <div className="font-mono text-[10px] text-schematic-text-muted">CONTACT</div>
                  <div className="font-mono text-xs text-schematic-text">shubhamvachhani3@gmail.com</div>
                </div>
                <div className="h-px bg-schematic-border" />
                <div>
                  <div className="font-mono text-[10px] text-schematic-text-muted">ANALYTICAL BASE</div>
                  <div className="font-mono text-xs text-schematic-amber">JEE Advanced Mathematics</div>
                  <div className="font-mono text-[10px] text-schematic-text-dim mt-1">
                    Strong foundation in calculus, linear algebra, probability & combinatorics — applied to algorithmic design and optimization.
                  </div>
                </div>
                <div className="h-px bg-schematic-border" />
                <div>
                  <div className="font-mono text-[10px] text-schematic-text-muted">CORE LANG</div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {['C', 'C++', 'TypeScript', 'Python', 'JavaScript'].map((lang) => (
                      <span
                        key={lang}
                        className="px-2 py-0.5 border border-schematic-border font-mono text-[10px] text-schematic-text-dim"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SchematicCard>
          </motion.div>

          {/* Right core modules grid */}
          <motion.div
            className="lg:col-span-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coreModules.map((mod) => (
                <motion.div key={mod.title} variants={itemVariants}>
                  <SchematicCard hoverable className="p-5 h-full">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`p-2 border border-schematic-border ${mod.color}`}>
                        <mod.icon className="w-5 h-5" />
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          mod.status === 'ACTIVE' ? 'bg-schematic-green' : 'bg-schematic-amber'
                        }`} />
                        <span className="font-mono text-[9px] text-schematic-text-muted">
                          {mod.status}
                        </span>
                      </div>
                    </div>
                    <h3 className="font-mono text-sm font-bold text-schematic-text mb-2">
                      {mod.title}
                    </h3>
                    <p className="font-mono text-[11px] text-schematic-text-dim leading-relaxed">
                      {mod.desc}
                    </p>
                  </SchematicCard>
                </motion.div>
              ))}
            </div>

            {/* Terminal-like output */}
            <motion.div variants={itemVariants}>
              <SchematicCard className="p-4 mt-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-schematic-red" />
                  <div className="w-2 h-2 rounded-full bg-schematic-amber" />
                  <div className="w-2 h-2 rounded-full bg-schematic-green" />
                  <span className="font-mono text-[10px] text-schematic-text-muted ml-2">terminal — profile.log</span>
                </div>
                <div className="font-mono text-[11px] text-schematic-text-dim space-y-1">
                  <div><span className="text-schematic-green">$</span> cat philosophy.txt</div>
                  <div className="text-schematic-text-dim pl-4">
                    &gt; "I believe in building software that solves real problems —
                  </div>
                  <div className="text-schematic-text-dim pl-4">
                    &gt; from low-level memory optimization in C to reactive UIs in React.
                  </div>
                  <div className="text-schematic-text-dim pl-4">
                    &gt; Every layer of the stack is a puzzle worth mastering."
                  </div>
                  <div><span className="text-schematic-green">$</span> <span className="animate-blink">▊</span></div>
                </div>
              </SchematicCard>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
