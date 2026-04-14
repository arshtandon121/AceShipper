const cities = [
  { name: 'Sydney',    state: 'NSW', top: '62%', left: '80%',  delay: 0,    orders: '3,200+ orders/mo' },
  { name: 'Melbourne', state: 'VIC', top: '74%', left: '74%',  delay: 200,  orders: '2,800+ orders/mo' },
  { name: 'Brisbane',  state: 'QLD', top: '46%', left: '79%',  delay: 400,  orders: '1,400+ orders/mo' },
  { name: 'Perth',     state: 'WA',  top: '62%', left: '18%',  delay: 600,  orders: '900+ orders/mo' },
  { name: 'Adelaide',  state: 'SA',  top: '68%', left: '57%',  delay: 800,  orders: '600+ orders/mo' },
];

/* Simplified Australia SVG path */
const AUS_PATH = `
  M 340,30 L 360,35 L 400,40 L 430,52 L 455,60 L 470,75 L 480,95
  L 490,110 L 500,130 L 510,150 L 515,170 L 512,190 L 505,205
  L 500,220 L 490,235 L 480,248 L 462,260 L 440,268 L 430,255
  L 418,245 L 405,250 L 390,258 L 375,265 L 360,270 L 345,265
  L 330,258 L 315,250 L 298,248 L 280,252 L 262,258 L 248,252
  L 235,240 L 225,225 L 220,208 L 218,192 L 222,174 L 228,158
  L 234,142 L 238,126 L 240,108 L 242,90 L 248,74 L 258,60
  L 270,48 L 285,40 L 300,34 L 318,30 L 340,30 Z
`;

export default function CoverageMap() {
  return (
    <section className="py-24 px-6 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <div className="rv-l">
            <span className="text-primary font-label text-[10px] tracking-[0.3em] uppercase font-black">Delivery Coverage</span>
            <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tighter mt-3 mb-6 uppercase leading-[0.9]">
              We Ship<br/>Everywhere<br/><span className="text-primary">In Australia.</span>
            </h2>
            <p className="text-on-surface-variant text-base leading-relaxed mb-8">
              Warehouses in Sydney and Melbourne mean we've got the entire eastern seaboard covered. Our carrier partnerships get your orders to Perth, Brisbane, and Adelaide just as fast.
            </p>
            {/* City list */}
            <div className="space-y-3">
              {cities.map(c => (
                <div key={c.name} className="flex items-center justify-between py-3 border-b border-outline-variant/15 group">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary group-hover:shadow-[0_0_8px_rgba(255,144,100,0.8)] transition-all"></div>
                    <span className="font-headline font-bold text-white uppercase text-sm">{c.name}</span>
                    <span className="text-zinc-600 text-xs">{c.state}</span>
                  </div>
                  <span className="text-primary text-[11px] font-black uppercase tracking-widest">{c.orders}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — map */}
          <div className="rv-r relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Glow */}
              <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full"></div>

              {/* SVG map */}
              <svg viewBox="0 0 540 310" className="w-full h-full" style={{ filter: 'drop-shadow(0 0 20px rgba(255,144,100,0.08))' }}>
                {/* Australia outline */}
                <path
                  d={AUS_PATH}
                  fill="rgba(255,144,100,0.05)"
                  stroke="rgba(255,144,100,0.25)"
                  strokeWidth="1.5"
                />
                {/* Grid lines */}
                {[1,2,3,4,5].map(i => (
                  <line key={`h${i}`} x1="200" y1={i*50} x2="520" y2={i*50} stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
                ))}
                {[3,4,5,6,7,8,9].map(i => (
                  <line key={`v${i}`} x1={i*55} y1="20" x2={i*55} y2="290" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
                ))}

                {/* City dots */}
                {cities.map((c) => {
                  // Convert % to SVG coords (viewBox 540×310)
                  const cx = parseFloat(c.left) / 100 * 540;
                  const cy = parseFloat(c.top)  / 100 * 310;
                  return (
                    <g key={c.name}>
                      {/* Pulse rings */}
                      <circle cx={cx} cy={cy} r="20" fill="rgba(255,144,100,0.06)" className="animate-ping" style={{ animationDelay: `${c.delay}ms`, animationDuration: '2.5s' }}/>
                      <circle cx={cx} cy={cy} r="12" fill="rgba(255,144,100,0.1)" className="animate-ping" style={{ animationDelay: `${c.delay + 200}ms`, animationDuration: '2.5s' }}/>
                      {/* Dot */}
                      <circle cx={cx} cy={cy} r="5" fill="#ff9064" filter="url(#glow)"/>
                      {/* Label */}
                      <text x={cx + 9} y={cy + 4} fill="rgba(255,144,100,0.8)" fontSize="9" fontFamily="Space Grotesk" fontWeight="700">
                        {c.name.toUpperCase()}
                      </text>
                    </g>
                  );
                })}
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                </defs>
              </svg>

              {/* Legend */}
              <div className="absolute bottom-4 left-4 glass-pill px-3 py-2 border border-primary/20 text-[9px] uppercase tracking-widest text-zinc-500 flex items-center gap-2 font-black">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse inline-block"></span>
                Active Delivery Zone
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
