import { motion } from 'framer-motion';
import { SchematicCard } from './SchematicCard';
import { SectionHeader } from './SectionHeader';

interface SkillBar {
  name: string;
  level: number;
  category: string;
}

const skills: SkillBar[] = [
  { name: 'C / C++', level: 92, category: 'LANG' },
  { name: 'TypeScript', level: 88, category: 'LANG' },
  { name: 'Python', level: 80, category: 'LANG' },
  { name: 'JavaScript', level: 90, category: 'LANG' },
  { name: 'React / Next.js', level: 90, category: 'FRAMEWORK' },
  { name: 'Node.js', level: 85, category: 'FRAMEWORK' },
  { name: 'Framer Motion', level: 78, category: 'FRAMEWORK' },
  { name: 'Electron', level: 70, category: 'FRAMEWORK' },
  { name: 'MongoDB', level: 82, category: 'DATA' },
  { name: 'SQL / PostgreSQL', level: 75, category: 'DATA' },
  { name: 'WebAssembly', level: 72, category: 'PLATFORM' },
  { name: 'Git / CI-CD', level: 85, category: 'TOOLING' },
  { name: 'Shell Scripting', level: 78, category: 'TOOLING' },
  { name: 'Tailwind CSS', level: 92, category: 'STYLING' },
];

const categories = ['LANG', 'FRAMEWORK', 'DATA', 'PLATFORM', 'TOOLING', 'STYLING'];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-schematic-border to-transparent" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader number="03" title="SKILLS.MATRIX" label="capability.scan — complete" />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Skill bars */}
          <div className="lg:col-span-3">
            <SchematicCard className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="font-mono text-[10px] text-schematic-text-muted tracking-widest">
                  {'> CAPABILITY ASSESSMENT'}
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-1 bg-schematic-accent" />
                    <span className="font-mono text-[9px] text-schematic-text-muted">PROFICIENCY</span>
                  </div>
                </div>
              </div>

              <motion.div
                className="space-y-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-50px' }}
              >
                {skills.map((skill) => (
                  <motion.div key={skill.name} variants={itemVariants} className="group">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[9px] text-schematic-text-muted w-20 text-right shrink-0 hidden sm:block">
                        {skill.category}
                      </span>
                      <div className="w-px h-4 bg-schematic-border hidden sm:block" />
                      <span className="font-mono text-[11px] text-schematic-text w-32 shrink-0">
                        {skill.name}
                      </span>
                      <div className="flex-1 h-4 bg-schematic-bg border border-schematic-border relative overflow-hidden">
                        <motion.div
                          className="h-full relative"
                          style={{
                            background: skill.level > 85
                              ? 'linear-gradient(90deg, rgba(59,130,246,0.3), rgba(59,130,246,0.6))'
                              : skill.level > 75
                              ? 'linear-gradient(90deg, rgba(6,182,212,0.3), rgba(6,182,212,0.5))'
                              : 'linear-gradient(90deg, rgba(245,158,11,0.3), rgba(245,158,11,0.5))'
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' as const }}
                        >
                          {/* Scanline effect inside bar */}
                          <div className="absolute inset-0 opacity-20"
                            style={{
                              backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)'
                            }}
                          />
                        </motion.div>
                        {/* Tick marks */}
                        {[25, 50, 75].map((tick) => (
                          <div
                            key={tick}
                            className="absolute top-0 bottom-0 w-px bg-schematic-border/50"
                            style={{ left: `${tick}%` }}
                          />
                        ))}
                      </div>
                      <span className="font-mono text-[10px] text-schematic-text-dim w-8 text-right shrink-0">
                        {skill.level}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </SchematicCard>
          </div>

          {/* Category legend */}
          <div className="lg:col-span-1 space-y-4">
            <SchematicCard className="p-4">
              <div className="font-mono text-[10px] text-schematic-text-muted tracking-widest mb-4">
                {'> CATEGORIES'}
              </div>
              <div className="space-y-2">
                {categories.map((cat) => {
                  const count = skills.filter(s => s.category === cat).length;
                  const avg = Math.round(
                    skills.filter(s => s.category === cat).reduce((a, b) => a + b.level, 0) / count
                  );
                  return (
                    <div key={cat} className="flex items-center justify-between py-1 border-b border-schematic-border/50 last:border-0">
                      <span className="font-mono text-[10px] text-schematic-text">{cat}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[9px] text-schematic-text-muted">{count}x</span>
                        <span className="font-mono text-[10px] text-schematic-accent">{avg}%</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SchematicCard>

            <SchematicCard className="p-4">
              <div className="font-mono text-[10px] text-schematic-text-muted tracking-widest mb-3">
                {'> PROFICIENCY KEY'}
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-2 bg-gradient-to-r from-blue-500/30 to-blue-500/60" />
                  <span className="font-mono text-[10px] text-schematic-text-dim">Expert (&gt;85%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-2 bg-gradient-to-r from-cyan-500/30 to-cyan-500/50" />
                  <span className="font-mono text-[10px] text-schematic-text-dim">Advanced (75-85%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-2 bg-gradient-to-r from-amber-500/30 to-amber-500/50" />
                  <span className="font-mono text-[10px] text-schematic-text-dim">Proficient (&lt;75%)</span>
                </div>
              </div>
            </SchematicCard>

            <SchematicCard className="p-4">
              <div className="font-mono text-[10px] text-schematic-text-muted tracking-widest mb-3">
                {'> SYSTEM STATS'}
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-mono text-[10px] text-schematic-text-dim">Total Skills</span>
                  <span className="font-mono text-[10px] text-schematic-accent">{skills.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono text-[10px] text-schematic-text-dim">Avg. Level</span>
                  <span className="font-mono text-[10px] text-schematic-accent">
                    {Math.round(skills.reduce((a, b) => a + b.level, 0) / skills.length)}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono text-[10px] text-schematic-text-dim">Categories</span>
                  <span className="font-mono text-[10px] text-schematic-accent">{categories.length}</span>
                </div>
              </div>
            </SchematicCard>
          </div>
        </div>
      </div>
    </section>
  );
}
