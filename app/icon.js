import { ImageResponse } from 'next/og'
import { logoRidge, logoSummit } from './components/Logo'

export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

export default function Icon() {
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
          borderRadius: 14,
        }}
      >
        <svg width="46" height="46" viewBox="0 0 24 24" fill="none" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
          <path d={logoRidge} stroke="#f4f1ea" />
          <path d={logoSummit} stroke="#ff8a3d" />
        </svg>
      </div>
    ),
    { ...size }
  )
}
