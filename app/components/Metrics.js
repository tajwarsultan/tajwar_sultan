'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const metrics = [
  { label: 'Years Experience', value: 4, suffix: '+' },
  { label: 'SaaS Projects', value: 10, suffix: '+' },
  { label: 'AI Integrations', value: 15, suffix: '+' },
  { label: 'Cloud Solutions', value: 8, suffix: '+' },
]

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const duration = 2000
      const increment = value / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (start >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export default function Metrics() {
  return (
    <section className="relative py-24 border-y border-[var(--color-glass-border)] bg-[var(--color-bg-base)]">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="text-center group"
            >
              <div className="text-5xl lg:text-7xl font-display font-black text-white mb-4 tracking-tighter group-hover:text-[var(--color-primary)] transition-colors duration-500">
                <Counter value={metric.value} suffix={metric.suffix} />
              </div>
              <div className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--color-text-dim)] group-hover:text-[var(--color-primary)] transition-colors duration-500">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
