import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Experience from './components/Experience'
import About from './components/About'
import Stack from './components/Stack'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ChatAgent from './components/ChatAgent'
import { TopoDefs } from './components/Topo'
import { homeJsonLd, toJsonLd } from './lib/structuredData'

export default function Home() {
  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-ink focus:text-bg focus:px-4 focus:py-2 focus:rounded-full"
      >
        Skip to content
      </a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(homeJsonLd) }} />
      <TopoDefs />
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Experience />
        <About />
        <Stack />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <ChatAgent />
    </>
  )
}
