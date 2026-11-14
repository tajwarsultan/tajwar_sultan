'use client'

import { useEffect, useRef } from 'react'

export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -48px 0px' }
    )
    observer.observe(el)
    // Hide only after observation is established, and only if the element is still
    // below the fold, so nothing already on screen flickers.
    if (el.getBoundingClientRect().top > window.innerHeight) el.classList.add('is-ready')
    return () => observer.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`reveal ${className}`} style={delay ? { '--delay': `${delay}ms` } : undefined} {...rest}>
      {children}
    </Tag>
  )
}
