/* Brand mark: a Karakoram ridge line whose summit catches the light. */
export const logoRidge = 'M2 19.5 9.5 6 14 14 16.6 10.2 22 19.5'
export const logoSummit = 'M7 10.5 9.5 6 12.03 10.5'

export default function Logo({ size = 28, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d={logoRidge} stroke="currentColor" />
      <path d={logoSummit} stroke="var(--accent)" />
    </svg>
  )
}
