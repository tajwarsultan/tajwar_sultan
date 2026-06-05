'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import SectionHeader from './ui/SectionHeader'
import GlassCard from './ui/GlassCard'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(TextPlugin)
}

export default function Terminal() {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([
    { type: 'msg', content: 'Welcome, visitor. Connection established via 127.0.0.1' },
    { type: 'dim', content: "Type 'help', 'bio', 'projects', or 'contact' to interact." }
  ])
  const terminalBodyRef = useRef(null)
  const typingRef = useRef(null)

  const commands = {
    help: "Available: bio, projects, career, contact, skills, clear",
    bio: "Tajwar Sultan: Full Stack Architect from Gilgit. 5+ years experience in Node.js, Next.js & AI.",
    projects: "Featured: CARLA, GreatCoops AI, Eldrin AI, ArcadianAI, Gilgit App, Quohr.",
    career: "IMS Rhombus (Full Stack), ArcadianAI (OpenAI), Xensam (SaaS), uConnect (Front-End).",
    skills: "React, Next.js, Node.js, PostgreSQL, OpenAI, TypeScript, Tailwind, Docker, AWS.",
    contact: "Email: tajwar.sultan00@gmail.com | Phone: +92 343 6140308",
    clear: ""
  }

  useEffect(() => {
    if (typingRef.current) {
        gsap.to(typingRef.current, {
            duration: 2.5,
            text: "connecting to tajwar@portfolio...",
            ease: "none",
            onComplete: () => {
              setHistory(prev => [...prev, { type: 'msg', content: 'Connection active. Type "help" for a list of commands.' }])
            }
        })
    }
  }, [])

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight
    }
  }, [history])

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const val = input.toLowerCase().trim()
      const newHistory = [...history, { type: 'prompt', content: val }]

      if (val === 'clear') {
        setHistory([])
      } else if (commands[val]) {
        newHistory.push({ type: 'msg', content: commands[val] })
        setHistory(newHistory)
      } else if (val !== '') {
        newHistory.push({ type: 'error', content: `Command not found: ${val}. Type 'help'.` })
        setHistory(newHistory)
      } else {
        setHistory(newHistory)
      }

      setInput('')
    }
  }

  return (
    <section id="terminal" className="py-24 md:py-36">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeader tag="Interact" title="Developer Console" align="center" />

        <GlassCard 
         className="max-w-[1000px] mx-auto overflow-hidden [box-shadow:0_100px_200px_rgba(0,0,0,0.8)] border-white/5"
         y={60}
         hover={false}
        >
          {/* Header */}
          <div className="bg-[#111218] px-8 py-6 flex items-center justify-between border-b border-white/5">
            <div className="flex gap-2.5">
              <span className="w-4 h-4 bg-[#FF5F56] rounded-full shadow-inner animate-[pulse_3s_infinite]"></span>
              <span className="w-4 h-4 bg-[#FFBD2E] rounded-full shadow-inner"></span>
              <span className="w-4 h-4 bg-[#27C93F] rounded-full shadow-inner"></span>
            </div>
            <div className="text-white/40 text-[0.8rem] font-mono tracking-widest font-black uppercase">tajwar@sultan: ~ (zsh)</div>
          </div>

          {/* Body */}
          <div 
            ref={terminalBodyRef}
            className="h-[480px] p-12 bg-[#0b0c11]/80 backdrop-blur-md overflow-y-auto font-mono scroll-smooth text-[1.1rem] leading-relaxed"
          >
            <AnimatePresence initial={false}>
              {history.map((line, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-3"
                >
                  {line.type === 'msg' && <p className="text-[#a9b1d6] font-medium leading-relaxed">{line.content}</p>}
                  {line.type === 'dim' && <p className="text-[var(--color-text-muted)] italic">{line.content}</p>}
                  {line.type === 'prompt' && (
                    <p className="text-white">
                      <span className="text-[var(--color-primary)] font-black mr-4">tajwar@portfolio:~$</span> {line.content}
                    </p>
                  )}
                  {line.type === 'error' && <p className="text-[#ff5f56] font-bold">{line.content}</p>}
                </motion.div>
              ))}
            </AnimatePresence>
            <div className="flex gap-4">
              <span className="text-[var(--color-primary)] font-black">tajwar@portfolio:~$</span>
              <span ref={typingRef} className="text-[#a9b1d6]"></span>
            </div>
          </div>

          {/* Input Area */}
          <div className="px-12 pb-12 bg-[#0b0c11]/80 backdrop-blur-md flex gap-4">
            <span className="text-[var(--color-primary)] font-black">tajwar@portfolio:~$</span>
            <input 
              type="text" 
              className="bg-transparent border-none text-white w-full outline-none font-mono text-[1.1rem] placeholder-white/5"
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              autoComplete="off"
              spellCheck="false"
            />
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
