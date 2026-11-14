'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Icon from './Icons'
import Logo from './Logo'
import { navLinks, site } from '../lib/siteData'

function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement
    const current =
      root.dataset.theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    const next = current === 'dark' ? 'light' : 'dark'
    root.dataset.theme = next
    try {
      localStorage.setItem('theme', next)
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between light and dark theme"
      className="grid place-items-center w-10 h-10 rounded-full text-muted hover:text-ink hover:bg-surface transition-colors"
    >
      <Icon name="sun" size={18} className="theme-sun" />
      <Icon name="moon" size={18} className="theme-moon" />
    </button>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const pathname = usePathname()
  const isCurrent = (href) => active === href || (!href.startsWith('/#') && pathname.startsWith(href))

  // Highlight the nav link for the section currently crossing the middle of the screen.
  useEffect(() => {
    const targets = new Map()
    for (const link of navLinks) {
      // The Blog link has no section of its own on the home page, so it follows the Writing section.
      const selector = link.href.startsWith('/#') ? link.href.slice(1) : link.href === '/blog' ? '#writing' : null
      const el = selector && document.querySelector(selector)
      if (el) targets.set(el, link.href)
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const href = targets.get(entry.target)
          if (entry.isIntersecting) setActive(href)
          else setActive((current) => (current === href ? '' : current))
        }
      },
      { rootMargin: '-45% 0px -55% 0px' }
    )
    targets.forEach((_, el) => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color] duration-300 border-b ${
        scrolled || open ? 'bg-bg/85 backdrop-blur-md border-line' : 'border-transparent'
      }`}
    >
      <nav className="shell flex items-center justify-between h-16" aria-label="Main">
        <Link href="/#top" aria-label="Tajwar Sultan, home" className="flex items-center gap-2 font-display font-semibold text-[1.05rem] tracking-tight">
          <Logo size={28} />
          Tajwar Sultan
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isCurrent(link.href) ? 'true' : undefined}
              className="nav-link text-sm text-muted hover:text-ink transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <a
            href={site.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost max-sm:!hidden !min-h-10 !px-4 text-sm ml-1"
          >
            Résumé
            <Icon name="arrow" size={14} className="arrow" />
          </a>
          <button
            type="button"
            className="lg:hidden grid place-items-center w-10 h-10 rounded-full hover:bg-surface transition-colors"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'close' : 'menu'} size={20} />
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="lg:hidden border-t border-line max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain">
          <div className="shell py-3 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 font-display text-2xl font-medium tracking-tight border-b border-line last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <a href={site.cv} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-4 mb-2">
              Download résumé
              <Icon name="arrow" size={14} className="arrow" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
