'use client'

import { motion } from 'framer-motion'

export default function SectionHeader({ tag, title, align = 'left', className = '' }) {
  const containerClass = align === 'center' ? 'text-center items-center' : align === 'right' ? 'text-right items-end' : 'text-left items-start'
  
  return (
    <motion.div 
      className={`flex flex-col mb-16 ${containerClass} ${className}`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {tag && (
        <div className="tag mb-4">{tag}</div>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
        {title}
      </h2>
      <div className="w-12 h-[2px] bg-white/10 mt-6 overflow-hidden" style={{ borderRadius: '5px' }}>
         <motion.div 
           className="h-full bg-[var(--color-primary)]"
           initial={{ x: '-100%' }}
           whileInView={{ x: '0%' }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
         />
      </div>
    </motion.div>
  )
}

