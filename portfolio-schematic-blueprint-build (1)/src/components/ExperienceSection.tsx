import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Binary } from 'lucide-react';
import { SchematicCard } from './SchematicCard';
import { SectionHeader } from './SectionHeader';

const timeline = [
  {
    year: '2024',
    title: 'Full Stack Development & Client Projects',
    subtitle: 'Freelance & Product-Based',
    icon: Binary,
    description: 'Building production-grade applications for real clients. Delivering end-to-end solutions from landing pages to SaaS dashboards — spanning all tiers of complexity.',
    highlights: ['FocusFlow ($99 Tier)', 'UrbanSide Architecture ($250)', 'Lumina E-Commerce ($450)', 'InventoryPilot SaaS ($600+)'],
    type: 'EXPERIENCE',
  },
  {
    year: '2023',
    title: 'Systems Programming & C Mastery',
    subtitle: 'Core CS Fundamentals',
    icon: BookOpen,
    description: 'Intensive study in data structures, algorithms, operating systems, and computer architecture through C/C++.',
    highlights: ['WebAssembly Porting', 'Memory Management', 'OS Concepts'],
    type: 'STUDY',
  },
  {
    year: '2022-23',
    title: 'JEE Advanced Preparation',
    subtitle: 'Mathematics & Analytical Training',
    icon: Award,
    description: 'Rigorous mathematical training: Calculus, Linear Algebra, Probability, Combinatorics. Developed strong analytical problem-solving methodology.',
    highlights: ['Advanced Calculus', 'Discrete Mathematics', 'Algorithmic Thinking'],
    type: 'EDUCATION',
  },
  {
    year: '2022',
    title: 'Foundation in Computer Science',
    subtitle: 'First Code to First Project',
    icon: GraduationCap,
    description: 'Started programming journey. Built first programs in Python and C. Discovered passion for building developer tools and algorithm visualization.',
    highlights: ['Python Basics', 'C Fundamentals', 'Web Basics'],
    type: 'FOUNDATION',
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-schematic-border to-transparent" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader number="04" title="TIMELINE.LOG" label="experience.trace — chronological" />

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-schematic-accent/50 via-schematic-border to-transparent" />

          <div className="space-y-8 ml-4 sm:ml-8">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                className="relative pl-10 sm:pl-14"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                {/* Timeline node */}
                <div className="absolute left-0 top-6 -translate-x-1/2 flex items-center justify-center">
                  <div className="w-3 h-3 rotate-45 border border-schematic-accent bg-schematic-bg" />
                  <div className="absolute w-1.5 h-1.5 rotate-45 bg-schematic-accent" />
                </div>

                {/* Horizontal connector */}
                <div className="absolute left-[6px] top-[30px] w-8 sm:w-12 h-px bg-schematic-border" />

                <SchematicCard hoverable className="p-5">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 border border-schematic-border text-schematic-accent">
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-mono text-sm font-bold text-schematic-text">{item.title}</h3>
                        <p className="font-mono text-[10px] text-schematic-text-dim">{item.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-mono text-xs text-schematic-amber border border-schematic-amber/30 px-2 py-0.5 bg-schematic-amber/5">
                        {item.year}
                      </span>
                      <span className="font-mono text-[9px] text-schematic-text-muted border border-schematic-border px-1.5 py-0.5">
                        {item.type}
                      </span>
                    </div>
                  </div>

                  <p className="font-mono text-[11px] text-schematic-text-dim leading-relaxed mb-3">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {item.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-2 py-0.5 border border-schematic-border font-mono text-[10px] text-schematic-text-dim bg-schematic-surface/50"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </SchematicCard>
              </motion.div>
            ))}
          </div>

          {/* Timeline end marker */}
          <div className="ml-4 sm:ml-8 mt-4 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-schematic-text-muted" />
            <span className="font-mono text-[9px] text-schematic-text-muted tracking-widest">END OF LOG</span>
          </div>
        </div>
      </div>
    </section>
  );
}
