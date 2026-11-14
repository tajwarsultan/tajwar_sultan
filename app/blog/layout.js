import ChatAgent from '../components/ChatAgent'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { TopoDefs } from '../components/Topo'

export default function BlogLayout({ children }) {
  return (
    <>
      <a
        href="#blog-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-ink focus:text-bg focus:px-4 focus:py-2 focus:rounded-full"
      >
        Skip to content
      </a>
      <TopoDefs />
      <Navbar />
      <main id="blog-content" className="pt-32 md:pt-40 pb-20 md:pb-28">{children}</main>
      <Footer />
      <ChatAgent />
    </>
  )
}
