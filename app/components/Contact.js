'use client'

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Icon from './Icons'
import Reveal from './Reveal'
import { TopoArt } from './Topo'
import { site, socials } from '../lib/siteData'

const emailConfig = {
  service: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  template: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  key: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
}
const emailReady = Object.values(emailConfig).every((v) => v && !v.startsWith('your_'))

function CopyEmail() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

  return (
    <button type="button" onClick={copy} className="btn btn-ghost !min-h-10 !px-4 text-sm">
      <Icon name={copied ? 'check' : 'copy'} size={15} />
      <span aria-live="polite">{copied ? 'Copied' : 'Copy email'}</span>
    </button>
  )
}

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = formRef.current
    const data = new FormData(form)

    // Without EmailJS keys, hand the message to the visitor's own mail app instead of failing.
    if (!emailReady) {
      const body = `${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        data.get('subject')
      )}&body=${encodeURIComponent(body)}`
      return
    }

    setStatus('sending')
    try {
      await emailjs.sendForm(emailConfig.service, emailConfig.template, form, emailConfig.key)
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative border-t border-line overflow-hidden" aria-labelledby="contact-title">
      <div
        className="absolute inset-0 text-ink opacity-[0.1] pointer-events-none"
        style={{ maskImage: 'radial-gradient(90% 80% at 10% 100%, #000 15%, transparent 70%)' }}
      >
        <TopoArt x={500} y={250} w={700} className="w-full h-full" />
      </div>

      <div className="shell relative py-20 md:py-28 grid lg:grid-cols-12 gap-x-10 gap-y-14">
        <Reveal className="lg:col-span-6">
          <p className="label">
            <span className="text-accent-text">07</span> / Contact
          </p>
          <h2 id="contact-title" className="display mt-4 text-[clamp(2.6rem,6.4vw,5rem)] leading-[0.98]">
            Have a product to build? Let&apos;s talk.
          </h2>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-md">
            Tell me what you&apos;re making and where you&apos;re stuck. I usually reply within a day.
          </p>

          <div className="mt-10">
            <a
              href={`mailto:${site.email}`}
              className="link font-display font-semibold tracking-tight text-[clamp(1.2rem,3.1vw,1.9rem)] break-all"
            >
              {site.email}
            </a>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <CopyEmail />
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost !min-h-10 !px-4 text-sm"
              >
                <Icon name="whatsapp" size={15} />
                WhatsApp
              </a>
              <a href={site.phoneHref} className="link text-muted hover:text-ink">
                {site.phone}
              </a>
            </div>
          </div>

          <ul className="mt-12 grid grid-cols-2 gap-x-8 max-w-md border-t border-line">
            {socials.map((social) => (
              <li key={social.label} className="border-b border-line">
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-3.5 hover:text-accent-text transition-colors"
                >
                  <span className="flex items-center gap-2.5 font-medium">
                    <Icon name={social.icon} size={17} />
                    {social.label}
                  </span>
                  <Icon name="arrow" size={15} className="arrow text-muted" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="lg:col-span-6 lg:pl-6 self-start" delay={100}>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="self-start rounded-2xl border border-line bg-surface p-6 md:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="contact-name" className="label block mb-2">
                  Name
                </label>
                <input id="contact-name" name="name" required autoComplete="name" placeholder="Your name" className="field" />
              </div>
              <div>
                <label htmlFor="contact-email" className="label block mb-2">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                  className="field"
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-subject" className="label block mb-2">
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                required
                placeholder="New project, contract role, collaboration…"
                className="field"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="label block mb-2">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={6}
                maxLength={2000}
                placeholder="What are you building, and what do you need help with?"
                className="field resize-y min-h-32"
              />
            </div>

            <button type="submit" disabled={status === 'sending'} className="btn btn-primary w-full disabled:opacity-60">
              {status === 'sending' ? 'Sending…' : 'Send message'}
              <Icon name="arrow" size={15} className="arrow" />
            </button>

            <p role="status" aria-live="polite" className="text-sm min-h-5">
              {status === 'sent' && (
                <span className="flex items-center gap-2">
                  <Icon name="check" size={16} className="text-accent" />
                  Message sent, thank you. I&apos;ll be in touch soon.
                </span>
              )}
              {status === 'error' && (
                <span>
                  That didn&apos;t send. Please email me directly at{' '}
                  <a href={`mailto:${site.email}`} className="underline">
                    {site.email}
                  </a>
                  .
                </span>
              )}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
