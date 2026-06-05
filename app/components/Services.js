'use client'

import { motion } from 'framer-motion'
import { Rocket, Brain, Layout, Zap, Database } from 'lucide-react'

const services = [
  {
    title: 'SaaS Platform Development',
    description: 'Specializing in building scalable, secure, and multi-tenant SaaS applications from scratch using Next.js and high-performance backends.',
    icon: <Rocket className="w-8 h-8 text-[var(--color-primary)]" />,
    gradient: 'from-[#66D2CE]/20 to-transparent'
  },
  {
    title: 'AI Integration & Automation',
    description: 'Leveraging LLMs and custom AI agents to automate workflows, build intelligent chatbots, and create data-driven user experiences.',
    icon: <Brain className="w-8 h-8 text-[var(--color-primary)]" />,
    gradient: 'from-[#2DAA9E]/20 to-transparent'
  },
  {
    title: 'Dashboard Engineering',
    description: 'Transforming complex datasets into intuitive, visually stunning real-time dashboards with sophisticated data visualization.',
    icon: <Layout className="w-8 h-8 text-[#E3D2C3]/20' to-transparent" />,
    gradient: 'from-[#E3D2C3]/20 to-transparent'
  },
  {
    title: 'Performance Optimization',
    description: 'A performance obsession that ensures smooth 60fps animations, optimized bundle sizes, and lightning-fast Core Web Vitals.',
    icon: <Zap className="w-8 h-8 text-[var(--color-primary)]" />,
    gradient: 'from-[#66D2CE]/20 to-transparent'
  },
  {
    title: 'Scalable Architecture Design',
    description: 'Designing clean, modular frontend and backend architectures that scale with growing businesses and technical demands.',
    icon: <Database className="w-8 h-8 text-[var(--color-primary)]" />,
    gradient: 'from-[#2DAA9E]/20 to-transparent'
  }
]

export default function Services() {
  return (
    <section className="py-24 relative overflow-hidden bg-[var(--color-bg-base)]">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-primary)]/5 rounded-full blur-[150px] -mr-64 -mt-64" />
      
      <div className="section-container">
        <div className="mb-20 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[var(--color-primary)] font-mono text-sm tracking-[0.5em] uppercase mb-4 block"
          >
            Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 tracking-tighter"
          >
            Ways I Can Help You Build.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-[var(--color-text-base)] text-lg"
          >
            Bridging the gap between ambitious product vision and elite-level technical execution with a focus on AI and high-performance systems.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="premium-card group hover:border-[var(--color-primary)]/30"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="mb-8 p-4 w-fit glass-panel bg-white/5 border-white/10 rounded-2xl group-hover:scale-110 group-hover:bg-[var(--color-primary)]/10 transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-display mb-4 tracking-tight group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[var(--color-text-base)] leading-relaxed group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
