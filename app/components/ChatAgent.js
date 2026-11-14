'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Icon from './Icons'
import { site } from '../lib/siteData'

const topics = ['Start a project', 'Hire for a role', 'Ask a question', 'Just saying hi']

const greeting = {
  from: 'agent',
  text: "Hi, I'm Tajwar's assistant. I'll take a couple of details and pass you straight to him on WhatsApp. What brings you here?",
}

// A short scripted conversation: topic → name → details → hand-off to WhatsApp.
const prompts = {
  name: (topic) =>
    topic === 'Just saying hi' ? 'Nice of you. Who should I say is saying hi?' : 'Good — he can help with that. What is your name?',
  details: (name) =>
    `Thanks, ${name}. In a line or two, what should Tajwar know? Scope, timeline, a link — anything useful.`,
  done: () => "That's everything I need. Tap below and WhatsApp will open with your message ready to send.",
}

export default function ChatAgent() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([greeting])
  const [step, setStep] = useState('topic')
  const [answers, setAnswers] = useState({})
  const [typing, setTyping] = useState(false)
  const [draft, setDraft] = useState('')
  const logRef = useRef(null)
  const inputRef = useRef(null)
  const timer = useRef(null)

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

  const agentSay = (text, nextStep) => {
    setTyping(true)
    timer.current = setTimeout(() => {
      setMessages((m) => [...m, { from: 'agent', text }])
      setTyping(false)
      setStep(nextStep)
    }, 650)
  }

  const answer = (value) => {
    const text = value.trim()
    if (!text || typing) return
    setDraft('')
    setMessages((m) => [...m, { from: 'user', text }])

    if (step === 'topic') {
      setAnswers({ topic: text })
      agentSay(prompts.name(text), 'name')
    } else if (step === 'name') {
      setAnswers((a) => ({ ...a, name: text }))
      agentSay(prompts.details(text), 'details')
    } else if (step === 'details') {
      setAnswers((a) => ({ ...a, details: text }))
      agentSay(prompts.done(), 'done')
    }
  }

  const restart = () => {
    clearTimeout(timer.current)
    setTyping(false)
    setMessages([greeting])
    setAnswers({})
    setStep('topic')
    setDraft('')
  }

  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    `Hi Tajwar, I'm ${answers.name}.\nTopic: ${answers.topic}\n\n${answers.details}\n\n— sent from tajwarsultan.dev`
  )}`

  const placeholder =
    step === 'topic' ? 'Or type your own…' : step === 'name' ? 'Your name' : 'Type your message…'

  return (
    <div className="fixed z-40 bottom-4 right-4 md:bottom-6 md:right-6 flex flex-col items-end gap-3">
      {open && (
        <div
          role="dialog"
          aria-label="Chat with Tajwar's assistant"
          className="chat-panel w-[calc(100vw-2rem)] max-w-[23rem] rounded-2xl border border-line-strong bg-bg shadow-[0_24px_60px_-20px_rgba(0,0,0,0.45)] overflow-hidden flex flex-col"
        >
          <div className="flex items-center gap-3 px-4 py-3.5 bg-surface border-b border-line">
            <span className="relative shrink-0">
              <Image
                src="/tajwar-portrait.jpg"
                alt=""
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover object-[50%_30%] border border-line"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#2fa562] border-2 border-surface" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-display font-semibold tracking-tight leading-tight">Tajwar&apos;s assistant</p>
              <p className="label !text-[0.62rem] mt-0.5">Hands you over on WhatsApp</p>
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

          <div
            ref={logRef}
            role="log"
            aria-live="polite"
            className="flex flex-col gap-2.5 px-4 py-4 h-[min(21rem,48vh)] overflow-y-auto overscroll-contain"
          >
            {messages.map((message, i) => (
              <p
                key={i}
                className={`chat-bubble max-w-[85%] px-3.5 py-2.5 text-[0.925rem] leading-snug rounded-2xl whitespace-pre-wrap break-words ${
                  message.from === 'agent'
                    ? 'self-start bg-surface rounded-bl-md'
                    : 'self-end bg-ink text-bg rounded-br-md'
                }`}
              >
                {message.text}
              </p>
            ))}

            {typing && (
              <p className="self-start bg-surface rounded-2xl rounded-bl-md px-4 py-3.5 flex gap-1" aria-label="Assistant is typing">
                <i className="chat-dot" />
                <i className="chat-dot" />
                <i className="chat-dot" />
              </p>
            )}

            {step === 'topic' && !typing && (
              <div className="flex flex-wrap gap-2 pt-1">
                {topics.map((topic) => (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => answer(topic)}
                    className="chat-bubble px-3.5 py-2 text-sm rounded-full border border-line-strong hover:border-accent hover:text-accent-text transition-colors"
                  >
                    {topic}
                  </button>
                ))}
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
                  answer(draft)
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
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? 'Close chat' : 'Chat on WhatsApp'}
        className="chat-launcher group flex items-center gap-2.5 h-14 pl-4 pr-5 rounded-full bg-ink text-bg shadow-[0_12px_30px_-10px_rgba(0,0,0,0.5)] transition-colors hover:bg-accent hover:text-on-accent"
      >
        <span className="relative grid place-items-center">
          <Icon name={open ? 'close' : 'whatsapp'} size={22} />
          {!open && <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-accent border-2 border-ink group-hover:border-accent group-hover:bg-on-accent" />}
        </span>
        <span className="font-medium text-[0.95rem]">{open ? 'Close' : 'Chat with me'}</span>
      </button>
    </div>
  )
}
