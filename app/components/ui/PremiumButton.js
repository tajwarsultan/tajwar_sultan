'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PremiumButton({ 
  children, 
  href, 
  variant = 'primary', 
  className = '', 
  onClick,
  type = 'button'
}) {
  const baseClasses = "monolith-button transition-all duration-300 inline-flex items-center justify-center font-bold"
  
  const variants = {
    primary: "btn-primary",
    ghost: "btn-outline border-white/10 text-white hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]",
    premium: "bg-white/5 border border-white/5 text-white hover:bg-[var(--color-primary)] hover:text-white"
  }

  const content = (
    <motion.span 
      whileTap={{ scale: 0.98 }}
      className="z-10"
    >
      {children}
    </motion.span>
  )

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    )
  }

  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {content}
    </button>
  )
}

