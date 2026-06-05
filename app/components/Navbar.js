'use client'

import { useState } from 'react'
import Link from 'next/link'
import { navLinks } from '../lib/siteData'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-background-50/90 backdrop-blur-md border-b border-background-200/60"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        <Link
          href="#"
          className="font-heading font-bold text-lg text-foreground-950 tracking-tight"
          onClick={() => setMobileOpen(false)}
        >
          Tajwar<span className="text-primary-500">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium whitespace-nowrap text-foreground-600 hover:text-foreground-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-primary-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-600 transition-colors"
        >
          Get In Touch
          <i className="ri-arrow-right-down-line" aria-hidden />
        </a>

        <button
          type="button"
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-foreground-700 hover:bg-background-100 transition-colors"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
        >
          <i className={mobileOpen ? 'ri-close-line text-xl' : 'ri-menu-line text-xl'} aria-hidden />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-background-200/60 bg-background-50 px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground-700 py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-primary-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold mt-2"
            onClick={() => setMobileOpen(false)}
          >
            Get In Touch
          </a>
        </div>
      )}
    </nav>
  )
}
