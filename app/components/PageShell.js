import ChatAgent from './ChatAgent'
import Footer from './Footer'
import Navbar from './Navbar'
import { TopoDefs } from './Topo'

/* Shared frame for every page except the home page: header, footer, chat and a skip link. */
export default function PageShell({ children }) {
  return (
    <>
      <a
        href="#page-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-ink focus:text-bg focus:px-4 focus:py-2 focus:rounded-full"
      >
        Skip to content
      </a>
      <TopoDefs />
      <Navbar />
      <main id="page-content" className="pt-32 md:pt-40 pb-20 md:pb-28">
        {children}
      </main>
      <Footer />
      <ChatAgent />
    </>
  )
}
