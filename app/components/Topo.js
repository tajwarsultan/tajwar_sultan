import { topoPaths, TOPO_W, TOPO_H } from '../lib/topo'

/* The contour map is generated once and reused everywhere through <use>. */
export function TopoDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: 'absolute' }}>
      <defs>
        <g id="topo">
          <path d={topoPaths.minor} strokeWidth="1" vectorEffect="non-scaling-stroke" />
          <path d={topoPaths.major} strokeWidth="1.8" vectorEffect="non-scaling-stroke" />
        </g>
      </defs>
    </svg>
  )
}

/* A window onto the map. `x`, `y`, `w` pick which part of the terrain is shown. */
export function TopoArt({ x = 0, y = 0, w = TOPO_W, ratio = TOPO_H / TOPO_W, className = '', drift = false }) {
  return (
    <svg
      viewBox={`${x} ${y} ${w} ${w * ratio}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
      className={`topo ${className}`}
    >
      <use href="#topo" className={drift ? 'topo-drift' : undefined} />
    </svg>
  )
}
