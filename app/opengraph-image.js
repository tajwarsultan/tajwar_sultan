import { ImageResponse } from 'next/og'

export const alt = 'Tajwar Sultan — Senior Full Stack Developer & AI Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background: 'linear-gradient(135deg, #004f2b 0%, #00753e 45%, #2da873 100%)',
          color: '#ffffff',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.9, marginBottom: 16 }}>Portfolio</div>
        <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
          Tajwar Sultan
        </div>
        <div style={{ fontSize: 32, marginTop: 24, opacity: 0.95, maxWidth: 900 }}>
          Senior Full Stack Developer & AI Engineer
        </div>
        <div style={{ fontSize: 22, marginTop: 20, opacity: 0.85 }}>
          React · Next.js · Vue · TypeScript · Node.js · AI
        </div>
      </div>
    ),
    { ...size }
  )
}
