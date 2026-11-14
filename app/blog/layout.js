import ChatAgent from '../components/ChatAgent'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function BlogLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-28 md:pt-36 pb-20 md:pb-28">{children}</main>
      <Footer />
      <ChatAgent />
    </>
  )
}
