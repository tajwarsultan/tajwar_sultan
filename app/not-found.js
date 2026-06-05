import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background-50 flex flex-col justify-center items-center text-center px-6">
      <p className="text-8xl font-heading font-extrabold text-primary-500">404</p>
      <p className="mt-4 text-lg text-foreground-600 font-medium">This page could not be found.</p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary-600 transition-colors"
      >
        Back to home
      </Link>
    </div>
  )
}
