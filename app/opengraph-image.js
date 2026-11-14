import { ImageResponse } from 'next/og'
import { topoPaths, TOPO_W, TOPO_H } from './lib/topo'

export const alt = 'Tajwar Sultan — Senior Full-Stack Developer'
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
          position: 'relative',
          background: '#0f100e',
          color: '#ece8dd',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <svg
          width="1200"
          height="800"
          viewBox={`0 0 ${TOPO_W} ${TOPO_H}`}
          style={{ position: 'absolute', top: -60, left: 0, opacity: 0.28 }}
        >
          <path d={topoPaths.minor} stroke="#ff8a3d" strokeWidth="1.2" fill="none" />
          <path d={topoPaths.major} stroke="#ff8a3d" strokeWidth="2.2" fill="none" />
        </svg>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 72, width: '100%' }}>
          <div style={{ display: 'flex', fontSize: 24, letterSpacing: 3, textTransform: 'uppercase', color: '#a09c8f' }}>
            Tajwar Sultan · Gilgit, Pakistan
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', fontSize: 84, fontWeight: 700, lineHeight: 1.02, letterSpacing: -3, maxWidth: 980 }}>
              Full-stack developer building SaaS products and AI features.
            </div>
            <div style={{ display: 'flex', fontSize: 28, marginTop: 28, color: '#ff8a3d' }}>
              React · Next.js · Vue · Node.js · TypeScript
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
