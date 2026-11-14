/* One line-drawn illustration per article, in the site's ink and apricot.
   They use CSS variables, so they follow the light and dark themes. */

const A = 'var(--accent)'
const soft = { opacity: 0.35 }

const Lines = ({ x, y, widths, gap = 12 }) =>
  widths.map((w, i) => <path key={i} d={`M${x} ${y + i * gap}h${w}`} />)

const art = {
  // Documents → matching chunks → model → answer
  rag: (
    <>
      <rect x="34" y="62" width="62" height="78" rx="6" style={soft} />
      <rect x="44" y="74" width="62" height="78" rx="6" style={soft} />
      <rect x="54" y="86" width="62" height="78" rx="6" fill="var(--surface)" />
      <Lines x={64} y={102} widths={[42, 34, 42, 26]} />
      <path d="M128 125h26m-7-6 7 6-7 6" />
      <rect x="166" y="78" width="70" height="22" rx="5" style={soft} />
      <rect x="166" y="114" width="70" height="22" rx="5" fill={A} stroke={A} />
      <rect x="166" y="150" width="70" height="22" rx="5" style={soft} />
      <path d="M248 125h26m-7-6 7 6-7 6" />
      <circle cx="312" cy="125" r="27" />
      <path d="M312 110v30M297 125h30M301.5 114.5l21 21M322.5 114.5l-21 21" stroke={A} />
      <path d="M352 112h22M352 125h16M352 138h22" />
    </>
  ),
  // A page cut into overlapping chunks
  chunking: (
    <>
      <rect x="52" y="34" width="120" height="172" rx="8" />
      <Lines x={68} y={54} widths={[88, 72, 88, 60, 88, 80, 52, 88, 70, 88, 64]} gap={13} />
      <path d="M40 98h144M40 150h144" stroke={A} strokeDasharray="5 6" />
      <path d="M196 120h24m-7-6 7 6-7 6" />
      <rect x="236" y="38" width="112" height="52" rx="7" />
      <rect x="250" y="94" width="112" height="52" rx="7" fill="var(--surface)" />
      <rect x="236" y="150" width="112" height="52" rx="7" fill="var(--surface)" />
      <path d="M250 94h98v-4M250 150h98v-4" stroke={A} strokeWidth="3" />
      <Lines x={250} y={54} widths={[84, 62]} gap={13} />
      <Lines x={264} y={112} widths={[84, 70]} gap={13} />
      <Lines x={250} y={168} widths={[84, 54]} gap={13} />
    </>
  ),
  // Points in a vector space, with a query and its nearest neighbours
  embeddings: (
    <>
      <path d="M48 200V40M48 200h312" style={soft} />
      {[[92, 76], [118, 96], [84, 112], [128, 66], [296, 150], [322, 172], [282, 178], [330, 138], [176, 172], [150, 186], [198, 190]].map(
        ([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="5" fill="currentColor" style={{ opacity: 0.55 }} />
        )
      )}
      <circle cx="226" cy="102" r="44" stroke={A} strokeDasharray="4 6" />
      <path d="M226 102l-22-20M226 102l28-14M226 102l10 30" stroke={A} />
      {[[204, 82], [254, 88], [236, 132]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="5.5" fill="currentColor" />
      ))}
      <circle cx="226" cy="102" r="8" fill={A} stroke={A} />
    </>
  ),
  // Two ranked lists fused into one
  hybrid: (
    <>
      {[0, 1, 2, 3].map((i) => (
        <rect key={`l${i}`} x="36" y={48 + i * 38} width="84" height="24" rx="6" style={i === 1 ? undefined : soft} />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <rect key={`r${i}`} x="280" y={48 + i * 38} width="84" height="24" rx="6" style={i === 2 ? undefined : soft} />
      ))}
      <path d="M120 98c26 0 22-38 46-38M280 136c-26 0-22-76-46-76" stroke={A} />
      <path d="M120 60c26 0 22 38 46 38M280 60c-26 0-22 76-46 76M120 136c26 0 22 38 46 38" style={soft} />
      <rect x="166" y="48" width="68" height="24" rx="6" fill={A} stroke={A} />
      <rect x="166" y="86" width="68" height="24" rx="6" />
      <rect x="166" y="124" width="68" height="24" rx="6" />
      <rect x="166" y="162" width="68" height="24" rx="6" style={soft} />
    </>
  ),
  // One question, three routes
  paths: (
    <>
      <circle cx="56" cy="120" r="9" fill="currentColor" />
      <path d="M65 120c70 0 70-66 150-66h52" />
      <path d="M65 120h202" stroke={A} />
      <path d="M65 120c70 0 70 66 150 66h52" />
      <rect x="276" y="30" width="68" height="48" rx="9" />
      <Lines x={290} y={46} widths={[40, 28, 40]} gap={9} />
      <rect x="276" y="96" width="68" height="48" rx="9" stroke={A} />
      <circle cx="304" cy="117" r="10" stroke={A} />
      <path d="M311.5 124.5l10 10" stroke={A} />
      <rect x="276" y="162" width="68" height="48" rx="9" />
      <path d="M290 176h40M290 186h40M290 196h40" style={soft} />
      <circle cx="302" cy="176" r="3.5" fill="currentColor" />
      <circle cx="320" cy="186" r="3.5" fill="currentColor" />
      <circle cx="296" cy="196" r="3.5" fill="currentColor" />
    </>
  ),
  // A test set with passes and one failure
  evals: (
    <>
      <rect x="62" y="30" width="276" height="180" rx="10" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <path d={`M84 ${60 + i * 34}h${[150, 120, 164, 132][i]}`} />
          <rect x="290" y={49 + i * 34} width="24" height="22" rx="5" stroke={i === 2 ? 'currentColor' : A} />
          {i === 2 ? (
            <path d={`M297 ${55 + i * 34}l10 10m0-10-10 10`} />
          ) : (
            <path d={`M296 ${60 + i * 34}l4.5 5 8-9.5`} stroke={A} />
          )}
        </g>
      ))}
      <path d="M84 190h230" style={soft} strokeWidth="5" />
      <path d="M84 190h172" stroke={A} strokeWidth="5" />
    </>
  ),
  // A model looping through tools
  agents: (
    <>
      <path d="M266 78a80 80 0 1 0 12 52" strokeDasharray="5 7" />
      <path d="M284 122l-6 9-9-6" stroke={A} />
      <circle cx="200" cy="120" r="30" />
      <path d="M200 104v32M184 120h32M188.5 108.5l23 23M211.5 108.5l-23 23" stroke={A} />
      <rect x="182" y="20" width="36" height="36" rx="8" fill="var(--surface)" />
      <path d="M192 38h16M200 30v16" />
      <rect x="96" y="150" width="36" height="36" rx="8" fill="var(--surface)" />
      <circle cx="112" cy="166" r="6" />
      <path d="M116.5 170.5l6 6" />
      <rect x="268" y="150" width="36" height="36" rx="8" fill={A} stroke={A} />
      <path d="M278 162h16M278 168h16M278 174h10" stroke="var(--on-accent)" />
    </>
  ),
  // Many apps, one connector, many services
  mcp: (
    <>
      {[60, 120, 180].map((cy, i) => (
        <g key={i}>
          <circle cx="62" cy={cy} r="17" />
          <path d={`M79 ${cy}C120 ${cy} 120 120 158 120`} style={i === 1 ? undefined : soft} />
          <rect x="322" y={cy - 16} width="32" height="32" rx="7" />
          <path d={`M322 ${cy}C282 ${cy} 282 120 242 120`} style={i === 1 ? undefined : soft} />
        </g>
      ))}
      <rect x="158" y="96" width="84" height="48" rx="12" fill={A} stroke={A} />
      <path d="M184 112v16M200 112v16M216 112v16" stroke="var(--on-accent)" strokeWidth="2.5" />
    </>
  ),
  // Text arriving piece by piece in a window
  streaming: (
    <>
      <rect x="150" y="32" width="216" height="176" rx="10" />
      <path d="M150 58h216" />
      <circle cx="166" cy="45" r="3" fill="currentColor" style={soft} />
      <circle cx="178" cy="45" r="3" fill="currentColor" style={soft} />
      <Lines x={170} y={82} widths={[170, 148, 176, 120]} gap={22} />
      <path d="M170 170h64" />
      <rect x="242" y="161" width="9" height="18" rx="2" fill={A} stroke={A} />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x={30 + i * 22}
          y="161"
          width="13"
          height="18"
          rx="3"
          fill="currentColor"
          stroke="none"
          style={{ opacity: 0.15 + i * 0.15 }}
        />
      ))}
      <path d="M30 120h92m-8-7 8 7-8 7" style={soft} />
    </>
  ),
  // An instruction hidden in a document, stopped by a shield
  security: (
    <>
      <rect x="44" y="40" width="124" height="160" rx="9" />
      <Lines x={62} y={64} widths={[88, 70, 88]} gap={14} />
      <rect x="56" y="104" width="100" height="24" rx="5" fill={A} stroke={A} />
      <path d="M66 116h80" stroke="var(--on-accent)" />
      <Lines x={62} y={146} widths={[88, 60, 80]} gap={14} />
      <path d="M176 116h36" stroke={A} strokeDasharray="4 6" />
      <path d="M286 36l64 22v52c0 44-28 76-64 94-36-18-64-50-64-94V58z" />
      <rect x="266" y="112" width="40" height="32" rx="6" />
      <path d="M274 112v-10a12 12 0 0 1 24 0v10" />
      <circle cx="286" cy="128" r="3.5" fill="currentColor" />
    </>
  ),
}

export default function ArticleArt({ name, className = '' }) {
  return (
    <div className={`article-art ${className}`}>
      <svg
        viewBox="0 0 400 240"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
      >
        {art[name] ?? art.rag}
      </svg>
    </div>
  )
}
