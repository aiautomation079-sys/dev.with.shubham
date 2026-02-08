import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Github, Linkedin, Copy, Check } from 'lucide-react';
import { SchematicCard } from './SchematicCard';
import { SectionHeader } from './SectionHeader';

// Instagram SVG icon component
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const socialLinks = [
  {
    name: 'Instagram',
    icon: InstagramIcon,
    href: 'https://www.instagram.com/dev.with.shubham?utm_source=qr&igsh=MWFhNjBodDQ1dGxhdw==',
    handle: '@dev.with.shubham',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/devwithshubham',
    handle: '/in/devwithshubham',
  },
  {
    name: 'GitHub',
    icon: Github,
    href: '#',
    handle: '@devwithshubham',
  },
];

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleCopy = () => {
    navigator.clipboard.writeText('shubhamvachhani3@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-schematic-border to-transparent" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader number="05" title="CONTACT.INIT" label="transmission.channel — open" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SchematicCard className="p-5">
              <div className="font-mono text-[10px] text-schematic-text-muted tracking-widest mb-4">
                {'> TRANSMISSION DETAILS'}
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 group cursor-pointer" onClick={handleCopy}>
                  <div className="p-2 border border-schematic-border text-schematic-accent group-hover:border-schematic-accent transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-[9px] text-schematic-text-muted">EMAIL</div>
                    <div className="font-mono text-xs text-schematic-text truncate">shubhamvachhani3@gmail.com</div>
                  </div>
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-schematic-green shrink-0" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-schematic-text-muted group-hover:text-schematic-accent transition-colors shrink-0" />
                  )}
                </div>
              </div>
            </SchematicCard>

            <SchematicCard className="p-5">
              <div className="font-mono text-[10px] text-schematic-text-muted tracking-widest mb-4">
                {'> NETWORK LINKS'}
              </div>
              <div className="space-y-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2 border border-transparent hover:border-schematic-border hover:bg-schematic-surface/50 transition-all group"
                  >
                    <link.icon className="w-4 h-4 text-schematic-text-muted group-hover:text-schematic-accent transition-colors" />
                    <div className="flex-1">
                      <div className="font-mono text-xs text-schematic-text">{link.name}</div>
                      <div className="font-mono text-[10px] text-schematic-text-dim">{link.handle}</div>
                    </div>
                    <span className="font-mono text-[9px] text-schematic-text-muted group-hover:text-schematic-accent transition-colors">→</span>
                  </a>
                ))}
              </div>
            </SchematicCard>

            {/* Availability */}
            <SchematicCard className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-schematic-green animate-pulse" />
                <div>
                  <div className="font-mono text-xs text-schematic-text">Open for Opportunities</div>
                  <div className="font-mono text-[10px] text-schematic-text-dim">
                    Freelance, Full-time, Open Source Collabs
                  </div>
                </div>
              </div>
            </SchematicCard>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SchematicCard className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="font-mono text-[10px] text-schematic-text-muted tracking-widest">
                  {'> COMPOSE TRANSMISSION'}
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-schematic-red" />
                  <div className="w-2 h-2 rounded-full bg-schematic-amber" />
                  <div className="w-2 h-2 rounded-full bg-schematic-green" />
                </div>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[10px] text-schematic-text-muted tracking-widest block mb-1.5">
                      SENDER.NAME
                    </label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState(s => ({ ...s, name: e.target.value }))}
                      className="w-full bg-schematic-bg border border-schematic-border px-3 py-2.5 font-mono text-xs text-schematic-text focus:border-schematic-accent focus:outline-none transition-colors placeholder:text-schematic-text-muted"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] text-schematic-text-muted tracking-widest block mb-1.5">
                      SENDER.EMAIL
                    </label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState(s => ({ ...s, email: e.target.value }))}
                      className="w-full bg-schematic-bg border border-schematic-border px-3 py-2.5 font-mono text-xs text-schematic-text focus:border-schematic-accent focus:outline-none transition-colors placeholder:text-schematic-text-muted"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-[10px] text-schematic-text-muted tracking-widest block mb-1.5">
                    MESSAGE.BODY
                  </label>
                  <textarea
                    value={formState.message}
                    onChange={(e) => setFormState(s => ({ ...s, message: e.target.value }))}
                    rows={6}
                    className="w-full bg-schematic-bg border border-schematic-border px-3 py-2.5 font-mono text-xs text-schematic-text focus:border-schematic-accent focus:outline-none transition-colors resize-none placeholder:text-schematic-text-muted"
                    placeholder="Describe your project, idea, or just say hello..."
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="font-mono text-[9px] text-schematic-text-muted">
                    {formState.message.length > 0 ? (
                      <span>CHARS: <span className="text-schematic-accent">{formState.message.length}</span></span>
                    ) : (
                      <span>AWAITING INPUT...</span>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="group relative border border-schematic-accent bg-schematic-accent/10 px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-schematic-accent hover:bg-schematic-accent/20 transition-all flex items-center gap-2"
                  >
                    <Send className="w-3 h-3" />
                    Transmit
                    <span className="absolute -top-[3px] -left-[3px] text-[7px] font-mono text-schematic-accent/50">┌</span>
                    <span className="absolute -top-[3px] -right-[3px] text-[7px] font-mono text-schematic-accent/50">┐</span>
                    <span className="absolute -bottom-[3px] -left-[3px] text-[7px] font-mono text-schematic-accent/50">└</span>
                    <span className="absolute -bottom-[3px] -right-[3px] text-[7px] font-mono text-schematic-accent/50">┘</span>
                  </button>
                </div>
              </form>
            </SchematicCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
