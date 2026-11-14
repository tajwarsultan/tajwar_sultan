import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen shell flex flex-col justify-center items-start">
      <p className="label">Error 404</p>
      <h1 className="display mt-4 text-[clamp(3rem,10vw,7rem)]">Off the map.</h1>
      <p className="mt-5 text-lg text-muted max-w-md">
        This page doesn&apos;t exist, or it has moved. The rest of the site is still where you left it.
      </p>
      <Link href="/" className="btn btn-primary mt-9">
        Back to home
      </Link>
    </main>
  )
}
