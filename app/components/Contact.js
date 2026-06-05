'use client'

import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const subject = form.subject.value
    const message = form.message.value
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    const mailto = `mailto:tajwar.sultan00@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`
    window.location.href = mailto
    setTimeout(() => setStatus('idle'), 800)
  }

  return (
    <section id="contact" className="py-16 md:py-20 bg-background-50" aria-label="Contact form">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold mb-4">
            Get In Touch
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-950">Let&apos;s Work Together</h2>
          <p className="mt-3 text-base text-foreground-500 max-w-md mx-auto">
            Have a project in mind? Drop a message and I&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-background-50 rounded-2xl border border-background-200/60 p-6 md:p-8 space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-foreground-700 mb-1.5">
                Full Name
              </label>
              <input
                id="contact-name"
                name="name"
                required
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl border border-background-200/70 bg-background-50 text-sm text-foreground-900 placeholder:text-foreground-400 focus:outline-none focus:border-primary-300 focus:ring-2 focus:ring-primary-100 transition-all"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-foreground-700 mb-1.5">
                Email Address
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                className="w-full px-4 py-3 rounded-xl border border-background-200/70 bg-background-50 text-sm text-foreground-900 placeholder:text-foreground-400 focus:outline-none focus:border-primary-300 focus:ring-2 focus:ring-primary-100 transition-all"
              />
            </div>
          </div>
          <div>
            <label htmlFor="contact-subject" className="block text-sm font-medium text-foreground-700 mb-1.5">
              Subject
            </label>
            <input
              id="contact-subject"
              name="subject"
              required
              placeholder="Project inquiry, collaboration, etc."
              className="w-full px-4 py-3 rounded-xl border border-background-200/70 bg-background-50 text-sm text-foreground-900 placeholder:text-foreground-400 focus:outline-none focus:border-primary-300 focus:ring-2 focus:ring-primary-100 transition-all"
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium text-foreground-700 mb-1.5">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              maxLength={500}
              placeholder="Tell me about your project, timeline, and budget..."
              className="w-full px-4 py-3 rounded-xl border border-background-200/70 bg-background-50 text-sm text-foreground-900 placeholder:text-foreground-400 focus:outline-none focus:border-primary-300 focus:ring-2 focus:ring-primary-100 transition-all resize-none"
            />
            <p className="text-xs text-foreground-400 mt-1">Max 500 characters</p>
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full inline-flex items-center justify-center gap-2 bg-primary-500 text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-primary-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? 'Opening email…' : 'Send Message'}
            <i className="ri-send-plane-line" aria-hidden />
          </button>
          <p className="text-center text-xs text-foreground-400">
            Prefer email?{' '}
            <a href="mailto:tajwar.sultan00@gmail.com" className="text-primary-600 hover:text-primary-700 font-medium">
              tajwar.sultan00@gmail.com
            </a>
          </p>
        </form>
      </div>
    </section>
  )
}
