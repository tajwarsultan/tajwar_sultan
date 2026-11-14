import { ImageResponse } from 'next/og'
import { logoRidge, logoSummit } from './components/Logo'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#171612',
          borderRadius: 0,
        }}
      >
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d={logoRidge} stroke="#f4f1ea" />
          <path d={logoSummit} stroke="#ff8a3d" />
        </svg>
      </div>
    ),
    { ...size }
  )
}
