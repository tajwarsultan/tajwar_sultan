'use client'

import { motion } from 'framer-motion'

export default function GlassCard({ children, className = '', hover = true, delay = 0, y = 20 }) {
  return (
    <motion.div 
      className={`monolith-card transition-all duration-500 overflow-hidden ${
        hover ? 'hover:border-[var(--color-primary)]/20 hover:bg-[var(--color-bg-base)]' : ''
      } ${className}`}
      initial={{ opacity: 0, y: y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

