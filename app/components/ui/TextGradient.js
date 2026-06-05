'use client'

export default function TextGradient({ children, className = '' }) {
  return (
    <span className={`text-gradient ${className}`}>
      {children}
    </span>
  )
}
