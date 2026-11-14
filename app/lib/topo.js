// Procedural topographic map: a height field of a few peaks, traced into
// contour lines with marching squares. Deterministic, so it renders at build time.

export const TOPO_W = 1200
export const TOPO_H = 800

const PEAKS = [
  [300, 250, 1.0, 190],
  [820, 520, 0.9, 230],
  [1010, 150, 0.6, 150],
  [520, 690, 0.55, 170],
  [120, 640, 0.4, 130],
  [640, 90, 0.35, 120],
]

function height(x, y) {
  let h = 0
  for (const [px, py, amp, r] of PEAKS) {
    const dx = x - px
    const dy = y - py
    h += amp * Math.exp(-(dx * dx + dy * dy) / (2 * r * r))
  }
  h += 0.06 * Math.sin(x / 61 + y / 97) + 0.05 * Math.cos(x / 43 - y / 71) + 0.03 * Math.sin(y / 29)
  return h
}

function build() {
  const step = 20
  const cols = Math.ceil(TOPO_W / step)
  const rows = Math.ceil(TOPO_H / step)
  const grid = []
  for (let j = 0; j <= rows; j++) {
    const row = []
    for (let i = 0; i <= cols; i++) row.push(height(i * step, j * step))
    grid.push(row)
  }

  const levels = []
  for (let l = 0.08; l < 1.15; l += 0.07) levels.push(l)

  const r = (n) => Math.round(n)
  let minor = ''
  let major = ''

  levels.forEach((level, index) => {
    let d = ''
    for (let j = 0; j < rows; j++) {
      for (let i = 0; i < cols; i++) {
        const a = grid[j][i]
        const b = grid[j][i + 1]
        const c = grid[j + 1][i + 1]
        const e = grid[j + 1][i]
        const x = i * step
        const y = j * step
        const pts = []
        if (a > level !== b > level) pts.push([x + (step * (level - a)) / (b - a), y])
        if (b > level !== c > level) pts.push([x + step, y + (step * (level - b)) / (c - b)])
        if (e > level !== c > level) pts.push([x + (step * (level - e)) / (c - e), y + step])
        if (a > level !== e > level) pts.push([x, y + (step * (level - a)) / (e - a)])
        for (let k = 0; k + 1 < pts.length; k += 2) {
          const [x1, y1] = pts[k]
          const [x2, y2] = pts[k + 1]
          d += `M${r(x1)} ${r(y1)}l${r(x2) - r(x1)} ${r(y2) - r(y1)}`
        }
      }
    }
    if (index % 4 === 1) major += d
    else minor += d
  })

  return { minor, major }
}

export const topoPaths = build()
