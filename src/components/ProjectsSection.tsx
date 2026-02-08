import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Building2, ShoppingCart, BarChart3, ExternalLink, Zap, DollarSign } from 'lucide-react';
import { SchematicCard } from './SchematicCard';
import { SectionHeader } from './SectionHeader';

const projects = [
  {
    id: 'focusflow',
    name: 'FocusFlow Launch Page',
    tag: 'Starter — $99',
    tier: 'STARTER',
    icon: Rocket,
    shortDescription: 'High-conversion landing page with scroll-triggered animations.',
    fullDescription: 'A productivity app startup needed a high-speed landing page that could capture early adopters before launch. I delivered a polished single-page experience with buttery-smooth scroll animations and a waitlist form that converted at 12% above industry average.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    keyFeature: 'Waitlist email capture with 99/100 Lighthouse Score',
    status: 'DEPLOYED',
    color: 'schematic-green',
    price: '$99',
    features: [
      'Hero Section with App Mockup',
      'Feature Grid (3 key benefits)',
      'Testimonial Slider',
      'Newsletter Signup (ConvertKit)',
      'Mobile Responsive',
      'Fast Loading (99/100 Lighthouse)',
    ],
    metrics: { conversion: '12%+', lighthouse: '99', loadTime: '0.8s' },
  },
  {
    id: 'urbanside',
    name: 'UrbanSide Architecture',
    tag: 'Standard — $250',
    tier: 'STANDARD',
    icon: Building2,
    shortDescription: 'Dynamic multi-page corporate site with a Headless CMS for easy client updates.',
    fullDescription: 'A local architecture firm needed a professional web presence that they could update themselves — without touching code. I built a 5-page Next.js site backed by Sanity CMS, giving them full control over their portfolio, text, and images.',
    tech: ['Next.js', 'Sanity CMS', 'Tailwind CSS', 'Nodemailer'],
    keyFeature: 'Headless CMS for self-service content updates',
    status: 'ACTIVE',
    color: 'schematic-cyan',
    price: '$250',
    features: [
      '5 Custom Designed Pages',
      'Dynamic Projects Gallery (CMS)',
      'Contact Form + Email Forwarding',
      'Basic SEO (Meta, OpenGraph)',
      'Google Maps Integration',
      'Client-Editable Content',
    ],
    metrics: { pages: '5', seoScore: '95+', cmsEntries: '40+' },
  },
  {
    id: 'lumina',
    name: 'Lumina Ceramics Shop',
    tag: 'E-Commerce — $450',
    tier: 'E-COMMERCE',
    icon: ShoppingCart,
    shortDescription: 'Full-stack e-commerce solution with Stripe payments and real-time inventory.',
    fullDescription: 'A boutique ceramics artisan needed to move from Etsy to their own branded store with secure payments, a full cart experience, and an admin panel to track orders. I delivered a complete e-commerce platform with Stripe checkout and authentication.',
    tech: ['Next.js', 'Stripe API', 'Zustand', 'PostgreSQL', 'Prisma'],
    keyFeature: 'Secure Stripe checkout with full cart logic',
    status: 'DEPLOYED',
    color: 'schematic-amber',
    price: '$450',
    features: [
      'Product Listing with Filtering',
      'Dynamic Product Detail Pages',
      'Full Shopping Cart (Add/Remove/Qty)',
      'Secure Stripe Checkout',
      'Order Confirmation Emails (Resend)',
      'User Auth for Order History',
    ],
    metrics: { products: '120+', orders: '850+', uptime: '99.9%' },
  },
  {
    id: 'inventorypilot',
    name: 'InventoryPilot SaaS',
    tag: 'Advanced — $600+',
    tier: 'ADVANCED',
    icon: BarChart3,
    shortDescription: 'Enterprise-grade inventory management system with analytics and RBAC.',
    fullDescription: 'A growing small business needed a custom SaaS dashboard to track inventory, visualize sales analytics, and manage team access with role-based permissions. This is a full software product — not just a website — featuring complex data relationships and interactive charts.',
    tech: ['Next.js 14', 'TypeScript', 'Supabase', 'TanStack Query', 'Recharts'],
    keyFeature: 'Interactive dashboard with charts & RBAC',
    status: 'ACTIVE',
    color: 'schematic-accent',
    price: '$600+',
    features: [
      'Secure Auth (Social + Magic Link)',
      'Interactive Dashboard with Charts',
      'Full CRUD for Inventory',
      'Data Export (CSV/PDF)',
      'Dark/Light Mode Toggle',
      'Subscription Management Logic',
    ],
    metrics: { endpoints: '45+', charts: '8', roles: '4' },
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Section measurement line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-schematic-border to-transparent" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader number="02" title="PROJECTS.MAP" label="build.registry — 4 tiers loaded" />

        {/* Pricing tier legend */}
        <motion.div
          className="mb-8 flex flex-wrap items-center gap-4 justify-center sm:justify-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {[
            { label: 'STARTER', price: '$99', color: 'bg-schematic-green' },
            { label: 'STANDARD', price: '$250', color: 'bg-schematic-cyan' },
            { label: 'E-COMMERCE', price: '$450', color: 'bg-schematic-amber' },
            { label: 'ADVANCED', price: '$600+', color: 'bg-schematic-accent' },
          ].map((tier) => (
            <div key={tier.label} className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${tier.color}`} />
              <span className="font-mono text-[9px] text-schematic-text-muted">{tier.label}</span>
              <span className="font-mono text-[9px] text-schematic-text-dim">({tier.price})</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <SchematicCard
                hoverable
                className="p-0 overflow-hidden group"
              >
                <div
                  className="p-6 relative"
                  onMouseEnter={() => setActiveProject(project.id)}
                  onMouseLeave={() => setActiveProject(null)}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 border border-schematic-border text-${project.color} bg-${project.color}/5`}>
                        <project.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-mono text-base font-bold text-schematic-text flex items-center gap-2">
                          {project.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            project.status === 'DEPLOYED' ? 'bg-schematic-green' :
                            project.status === 'ACTIVE' ? 'bg-schematic-cyan' :
                            'bg-schematic-text-muted'
                          }`} />
                          <span className="font-mono text-[9px] text-schematic-text-muted tracking-wider">
                            {project.status}
                          </span>
                          <span className="font-mono text-[9px] text-schematic-text-muted">|</span>
                          <span className={`font-mono text-[9px] text-${project.color} tracking-wider`}>
                            {project.tier}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`flex items-center gap-1 border border-${project.color}/30 px-2 py-1 bg-${project.color}/5`}>
                        <DollarSign className={`w-3 h-3 text-${project.color}`} />
                        <span className={`font-mono text-xs font-bold text-${project.color}`}>{project.price}</span>
                      </div>
                      <button className="p-2 border border-schematic-border text-schematic-text-muted hover:text-schematic-accent hover:border-schematic-accent transition-colors opacity-0 group-hover:opacity-100">
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Short Description */}
                  <p className="font-mono text-[11px] text-schematic-accent-bright mb-2">
                    {project.shortDescription}
                  </p>

                  {/* Full Description */}
                  <p className="font-mono text-[11px] text-schematic-text-dim leading-relaxed mb-4">
                    {project.fullDescription}
                  </p>

                  {/* Key Feature */}
                  <div className="flex items-start gap-2 mb-4 p-2.5 border border-dashed border-schematic-border bg-schematic-surface/50">
                    <Zap className={`w-3 h-3 mt-0.5 text-${project.color} shrink-0`} />
                    <div>
                      <span className="font-mono text-[9px] text-schematic-text-muted tracking-widest block">KEY FEATURE</span>
                      <span className="font-mono text-[11px] text-schematic-text">{project.keyFeature}</span>
                    </div>
                  </div>

                  {/* Metrics (on hover) */}
                  <AnimatePresence>
                    {activeProject === project.id && (
                      <motion.div
                        className="grid grid-cols-3 gap-2 mb-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {Object.entries(project.metrics).map(([key, val]) => (
                          <div key={key} className="border border-schematic-border p-2 text-center bg-schematic-bg/50">
                            <div className={`font-mono text-sm font-bold text-${project.color}`}>{val}</div>
                            <div className="font-mono text-[8px] text-schematic-text-muted uppercase tracking-wider">{key}</div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Deliverables (expandable) */}
                  <button
                    className="font-mono text-[10px] text-schematic-accent hover:text-schematic-accent-bright transition-colors mb-3 flex items-center gap-1"
                    onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                  >
                    <span className="text-schematic-text-muted">{expandedProject === project.id ? '▼' : '▶'}</span>
                    {expandedProject === project.id ? 'HIDE' : 'VIEW'} DELIVERABLES ({project.features.length})
                  </button>

                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        className="mb-4 pl-3 border-l border-schematic-border space-y-1"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <div className={`w-1 h-1 bg-${project.color} shrink-0`} />
                            <span className="font-mono text-[10px] text-schematic-text-dim">{feature}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Tech Stack */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono text-[9px] text-schematic-text-muted mr-1">STACK:</span>
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 border border-schematic-border font-mono text-[10px] text-schematic-text-dim hover:text-schematic-text hover:border-schematic-text-muted transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Bottom scan line decoration */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-schematic-border to-transparent" />
                </div>
              </SchematicCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects summary bar */}
        <motion.div
          className="mt-8 flex items-center justify-center gap-6 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-px bg-schematic-text-muted" />
            <span className="font-mono text-[10px] text-schematic-text-muted">
              TOTAL PROJECTS: <span className="text-schematic-accent">4</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-px bg-schematic-text-muted" />
            <span className="font-mono text-[10px] text-schematic-text-muted">
              PRICE RANGE: <span className="text-schematic-green">$99</span> — <span className="text-schematic-accent">$600+</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-px bg-schematic-text-muted" />
            <span className="font-mono text-[10px] text-schematic-text-muted">
              ALL: <span className="text-schematic-green">PRODUCTION READY</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
