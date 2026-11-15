'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Icon from './Icons'
import LocalTime from './LocalTime'
import { experiences, projects, site, stack } from '../lib/siteData'

const current = experiences[0]
const newest = projects.find((p) => p.isNew) ?? projects[0]
const otherWork = projects
  .filter((p) => p.featured && p !== newest)
  .slice(0, 3)
  .map((p) => p.title)
  .join(', ')

const greeting = {
  from: 'me',
  text: "Hi, I'm Tajwar. Ask me anything, or tell me what you're building.",
}

// Quick answers, written in the first person and drawn from the same data as the rest of the site.
const quickAnswers = [
  {
    id: 'do',
    label: 'What do you do?',
    reply: `I build SaaS platforms, dashboards and AI features end to end: React, Next.js and Vue on the front, Node.js and databases behind them. I've been building for the web since 2020, and I'm currently a senior full-stack developer at ${current.company}.`,
  },
  {
    id: 'available',
    label: 'Are you available?',
    reply: "Yes. I'm open to remote roles and freelance projects. I'm on Pakistan time (UTC+5) and work remotely with teams abroad.",
  },
  {
    id: 'stack',
    label: "What's your stack?",
    reply: `Day to day: ${stack[0].items.slice(0, 4).join(', ')} and TypeScript on the front end; ${stack[1].items
      .slice(0, 3)
      .join(', ')} with PostgreSQL or MongoDB behind it; and OpenAI APIs and RAG pipelines for AI features. The full list is in the Stack section.`,
  },
  {
    id: 'recent',
    label: 'Recent work?',
    reply: `My newest project is ${newest.title} (${newest.host}). Before that: ${otherWork}. They're all linked in the Work section.`,
  },
]

const facts = ['Open to work', 'Replies in a day']

export default function ChatAgent() {
  const [open, setOpen] = useState(false)
  const [teaser, setTeaser] = useState(false)
  const [messages, setMessages] = useState([greeting])
  const [step, setStep] = useState('chat') // chat → name → details → done
  const [asked, setAsked] = useState([])
  const [answers, setAnswers] = useState({})
  const [typing, setTyping] = useState(false)
  const [draft, setDraft] = useState('')
  const logRef = useRef(null)
  const inputRef = useRef(null)
  const timer = useRef(null)

  // Introduce the chat once per visit, a few seconds after the page loads.
  useEffect(() => {
    let seen = false
    try {
      seen = sessionStorage.getItem('chat-teaser') === 'seen'
    } catch {}
    // On phones the card would cover the hero buttons, so it only auto-shows on wider screens.
    if (seen || !window.matchMedia('(min-width: 768px)').matches) return
    const id = setTimeout(() => setTeaser(true), 3500)
    return () => clearTimeout(id)
  }, [])

  const dismissTeaser = () => {
    setTeaser(false)
    try {
      sessionStorage.setItem('chat-teaser', 'seen')
    } catch {}
  }

  useEffect(() => {
    const el = logRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages, typing, open])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    if (open && !typing && step !== 'done') inputRef.current?.focus({ preventScroll: true })
  }, [open, typing, step])

  useEffect(() => () => clearTimeout(timer.current), [])

  const say = (text) => setMessages((m) => [...m, { from: 'visitor', text }])

  const reply = (text, nextStep) => {
    setTyping(true)
    timer.current = setTimeout(() => {
      setMessages((m) => [...m, { from: 'me', text }])
      setTyping(false)
      if (nextStep) setStep(nextStep)
    }, 700)
  }

  const askQuick = (item) => {
    if (typing) return
    say(item.label)
    setAsked((a) => [...a, item.id])
    reply(item.reply)
  }

  const startHandoff = () => {
    if (typing) return
    say('Message you on WhatsApp')
    reply("Happy to. What's your name?", 'name')
  }

  const submit = (value) => {
    const text = value.trim()
    if (!text || typing) return
    setDraft('')
    say(text)

    if (step === 'chat') {
      // A typed question is one I should answer myself, so carry it over to WhatsApp.
      setAnswers({ details: text })
      reply("That deserves a proper answer from me rather than a canned one. What's your name?", 'name')
    } else if (step === 'name') {
      setAnswers((a) => ({ ...a, name: text }))
      if (answers.details) {
        reply(`Thanks, ${text}. Tap below to send me that on WhatsApp and I'll reply personally.`, 'done')
      } else {
        reply(`Good to meet you, ${text}. What should I know? Scope, timeline, a link.`, 'details')
      }
    } else if (step === 'details') {
      setAnswers((a) => ({ ...a, details: text }))
      reply("Got it. Tap below to send me that on WhatsApp and I'll reply personally.", 'done')
    }
  }

  const restart = () => {
    clearTimeout(timer.current)
    setTyping(false)
    setMessages([greeting])
    setAnswers({})
    setAsked([])
    setStep('chat')
    setDraft('')
  }

  const toggle = () => {
    setOpen((v) => !v)
    dismissTeaser()
  }

  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    `Hi Tajwar, I'm ${answers.name}.\n\n${answers.details}\n\n(sent from ${site.host})`
  )}`

  const placeholder =
    step === 'chat' ? 'Ask me something…' : step === 'name' ? 'Your name' : 'Type your message…'
  const remaining = quickAnswers.filter((q) => !asked.includes(q.id))

  return (
    <div className="fixed z-40 bottom-4 right-4 md:bottom-6 md:right-6 flex flex-col items-end gap-3">
      {open && (
        <div
          role="dialog"
          aria-label="Chat with Tajwar"
          className="chat-panel w-[calc(100vw-2rem)] max-w-[23rem] rounded-2xl border border-line-strong bg-bg shadow-[0_24px_60px_-20px_rgba(0,0,0,0.45)] overflow-hidden flex flex-col"
        >
          <div className="bg-surface border-b border-line">
            <div className="flex items-center gap-3 px-4 pt-3.5 pb-3">
              <span className="relative shrink-0">
                <Image
                  src="/tajwar-portrait.jpg"
                  alt=""
                  width={44}
                  height={44}
                  className="w-11 h-11 rounded-full object-cover object-[50%_30%] border border-line"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#2fa562] border-2 border-surface" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-display font-semibold tracking-tight leading-tight">{site.name}</p>
                <p className="text-[0.8rem] text-muted mt-0.5 truncate">{site.role}</p>
              </div>
              <button
                type="button"
                onClick={restart}
                aria-label="Start over"
                className="grid place-items-center w-8 h-8 rounded-full text-muted hover:text-ink hover:bg-bg transition-colors"
              >
                <Icon name="refresh" size={15} />
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="grid place-items-center w-8 h-8 rounded-full text-muted hover:text-ink hover:bg-bg transition-colors"
              >
                <Icon name="close" size={16} />
              </button>
            </div>
            <ul className="flex flex-nowrap gap-x-2.5 px-4 pb-3 label !text-[0.6rem] !tracking-[0.04em] whitespace-nowrap overflow-hidden">
              <li className="flex items-center gap-1">
                <Icon name="pin" size={11} />
                Gilgit · <LocalTime timeZone={site.timeZone} /> PKT
              </li>
              {facts.map((fact, i) => (
                <li key={fact} className={`flex items-center gap-1.5 ${i > 0 ? 'max-[400px]:hidden' : ''}`}>
                  <span className="w-1 h-1 rounded-full bg-accent" />
                  {fact}
                </li>
              ))}
            </ul>
          </div>

          <div
            ref={logRef}
            role="log"
            aria-live="polite"
            className="flex flex-col gap-2.5 px-4 py-4 h-[min(21rem,46vh)] overflow-y-auto overscroll-contain"
          >
            {messages.map((message, i) => (
              <p
                key={i}
                className={`chat-bubble max-w-[86%] px-3.5 py-2.5 text-[0.925rem] leading-snug rounded-2xl whitespace-pre-wrap break-words ${
                  message.from === 'me' ? 'self-start bg-surface rounded-bl-md' : 'self-end bg-ink text-bg rounded-br-md'
                }`}
              >
                {message.text}
              </p>
            ))}

            {typing && (
              <p className="self-start bg-surface rounded-2xl rounded-bl-md px-4 py-3.5 flex gap-1" aria-label="Tajwar is typing">
                <i className="chat-dot" />
                <i className="chat-dot" />
                <i className="chat-dot" />
              </p>
            )}

            {step === 'chat' && !typing && (
              <div className="flex flex-wrap gap-2 pt-1">
                {remaining.map((item) => (
                  <button key={item.id} type="button" onClick={() => askQuick(item)} className="chat-chip chat-bubble">
                    {item.label}
                  </button>
                ))}
                <button type="button" onClick={startHandoff} className="chat-chip chat-chip-strong chat-bubble">
                  <Icon name="whatsapp" size={14} />
                  Message me on WhatsApp
                </button>
              </div>
            )}
          </div>

          <div className="p-3 border-t border-line">
            {step === 'done' ? (
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-accent w-full">
                <Icon name="whatsapp" size={17} />
                Continue on WhatsApp
                <Icon name="arrow" size={15} className="arrow" />
              </a>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  submit(draft)
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder={placeholder}
                  aria-label={placeholder}
                  maxLength={600}
                  autoComplete={step === 'name' ? 'name' : 'off'}
                  className="field !rounded-full !py-2.5 !px-4"
                />
                <button
                  type="submit"
                  disabled={!draft.trim() || typing}
                  aria-label="Send"
                  className="grid place-items-center shrink-0 w-11 h-11 rounded-full bg-ink text-bg transition-colors hover:bg-accent hover:text-on-accent disabled:opacity-35 disabled:hover:bg-ink disabled:hover:text-bg"
                >
                  <Icon name="send" size={17} />
                </button>
              </form>
            )}
            <p className="mt-2 text-center text-[0.7rem] text-muted whitespace-nowrap overflow-hidden text-ellipsis">
              Automated answers. I reply myself on WhatsApp.
            </p>
          </div>
        </div>
      )}

      <div className="chat-launch relative flex flex-col items-end">
        {!open && (
          <div className={`chat-teaser ${teaser ? 'is-shown' : ''}`}>
            <div className="flex items-start gap-3">
              <Image
                src="/tajwar-portrait.jpg"
                alt=""
                width={36}
                height={36}
                className="w-9 h-9 rounded-full object-cover object-[50%_30%] border border-line shrink-0"
              />
              <div className="min-w-0">
                <p className="font-display font-semibold tracking-tight leading-tight">Hi, I&apos;m Tajwar</p>
                <p className="mt-1 text-[0.85rem] leading-snug text-muted">
                  Got a project or a role in mind? Ask me here.
                </p>
              </div>
              {teaser && (
                <button
                  type="button"
                  onClick={dismissTeaser}
                  aria-label="Dismiss"
                  className="grid place-items-center w-6 h-6 -mt-1 -mr-1 rounded-full text-muted hover:text-ink hover:bg-surface shrink-0"
                >
                  <Icon name="close" size={13} />
                </button>
              )}
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={toggle}
          aria-expanded={open}
          aria-label={open ? 'Close chat' : 'Chat with Tajwar on WhatsApp'}
          className="chat-launcher"
        >
          <span className="relative grid place-items-center">
            <Icon name={open ? 'close' : 'whatsapp'} size={22} className="chat-launcher-icon" />
            {!open && <span className="chat-launcher-dot" />}
          </span>
          <span className="font-medium text-[0.95rem]">{open ? 'Close' : 'Chat with me'}</span>
        </button>
      </div>
    </div>
  )
}
