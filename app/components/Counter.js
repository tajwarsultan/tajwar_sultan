'use client'

import { useState, useEffect, useRef } from 'react'
import { useInView, motion, useSpring, useTransform } from 'framer-motion'

export default function Counter({ target, duration = 2 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 1 })
  
  const count = useSpring(0, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  
  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    if (isInView) {
      count.set(target)
    }
  }, [isInView, target, count])

  return <motion.span ref={ref}>{rounded}</motion.span>
}
