import Image from 'next/image'
import { heroStats } from '../lib/siteData'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 pb-16 md:pb-20 overflow-hidden bg-background-50"
      aria-label="Hero introduction"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-accent-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
          <div className="flex-1 w-full pt-4 lg:pt-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold mb-6 stagger-item">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              Available for new opportunities
            </div>

            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-foreground-950 leading-[1.08] tracking-tight stagger-item">
              Tajwar Sultan
            </h1>
            <p className="mt-4 text-lg md:text-xl text-foreground-600 font-medium max-w-lg stagger-item">
              Senior Full Stack Developer &amp; AI Engineer
            </p>
            <p className="mt-1 text-sm text-foreground-500 flex items-center gap-1.5 stagger-item">
              <i className="ri-map-pin-line" aria-hidden />
              Gilgit-Baltistan, Pakistan
            </p>
            <p className="mt-6 text-base text-foreground-600 leading-relaxed max-w-xl stagger-item">
              A highly skilled Full Stack Developer with 6+ years of experience building scalable SaaS
              platforms, AI-powered applications, enterprise dashboards, HR systems, field-service software,
              and cloud-native products. Specialized in React, Next.js, Vue.js, SvelteKit, TypeScript,
              Node.js, PostgreSQL, AWS, Firebase, and AI integrations. Proven track record of delivering
              high-performance applications for international clients across North America, Europe, and Asia.
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-8 stagger-item">
              <a
                href="mailto:tajwar.sultan00@gmail.com"
                className="inline-flex items-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary-600 transition-colors"
              >
                Hire Me
                <i className="ri-arrow-right-up-line" aria-hidden />
              </a>
              <a
                href="/Tajwar_Sultan_CV_(fullstack).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-background-100 text-foreground-700 px-6 py-3 rounded-full text-sm font-semibold hover:bg-background-200 transition-colors"
              >
                <i className="ri-download-line" aria-hidden />
                Download CV
              </a>
              <a
                href="https://github.com/tajwarsultan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-background-100 text-foreground-700 px-6 py-3 rounded-full text-sm font-semibold hover:bg-background-200 transition-colors"
              >
                <i className="ri-github-fill" aria-hidden />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/tajwar-sultan/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-background-100 text-foreground-700 px-6 py-3 rounded-full text-sm font-semibold hover:bg-background-200 transition-colors"
              >
                <i className="ri-linkedin-fill" aria-hidden />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex-shrink-0 w-full lg:w-[340px] flex flex-col gap-6 stagger-item">
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-background-100">
              <Image
                src="/tajwar-sultan.png"
                alt="Tajwar Sultan - Senior Full Stack Developer"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 340px"
                priority
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-background-50 border border-background-200/60 rounded-xl p-4 text-center"
                >
                  <div className="font-heading font-bold text-2xl md:text-3xl text-primary-500">{stat.value}</div>
                  <div className="text-xs text-foreground-500 mt-1 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
