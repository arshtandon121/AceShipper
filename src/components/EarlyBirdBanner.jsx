import { useEffect, useState } from 'react';

function useCountdown() {
  const [target] = useState(() => new Date(Date.now() + 14*24*60*60*1000 + 8*60*60*1000 + 42*60*1000));
  const calc = () => {
    const diff = target - new Date();
    if (diff <= 0) return { d:0, h:0, m:0, s:0 };
    return {
      d: Math.floor(diff / 86400000),
      h: Math.floor((diff % 86400000) / 3600000),
      m: Math.floor((diff % 3600000) / 60000),
      s: Math.floor((diff % 60000) / 1000),
    };
  };
  const [t, setT] = useState(calc);
  useEffect(() => { const id = setInterval(() => setT(calc()), 1000); return () => clearInterval(id); }, []);
  return t;
}

const p = n => String(n).padStart(2, '0');

export default function EarlyBirdBanner() {
  const { d, h, m, s } = useCountdown();

  return (
    <section id="early-access" className="px-4 md:px-6 mb-0">
      <div className="max-w-7xl mx-auto relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #ff7941 0%, #ff9064 50%, #ff5e07 100%)'
      }}>
        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-on-primary/20"></div>
        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-on-primary/20"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-on-primary/20"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-on-primary/20"></div>
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}></div>
        {/* Radial highlight */}
        <div className="absolute top-0 right-0 w-3/4 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_60%)] pointer-events-none"></div>

        <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Text */}
          <div className="text-center md:text-left max-w-lg">
            <span className="inline-block border border-on-primary/30 bg-black/10 px-3 py-1 text-on-primary text-[10px] tracking-[0.25em] uppercase font-black mb-5">
              🚀 Limited Beta — Founding Member Pricing
            </span>
            <h2 className="font-headline text-4xl md:text-6xl font-black text-on-primary tracking-tighter leading-[0.9] mb-4 uppercase">
              Lock In<br/>Early Bird<br/>Rates.
            </h2>
            <p className="text-on-primary/75 text-base md:text-lg font-medium leading-relaxed">
              Only <strong className="text-on-primary">50 founding merchant spots</strong> available this quarter. Secure your place — next pricing tier activates when the timer hits zero.
            </p>
          </div>

          {/* Countdown */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-3">
              {[{ v: p(d), l: 'Days' }, { v: p(h), l: 'Hours' }, { v: p(m), l: 'Mins' }, { v: p(s), l: 'Secs' }].map(({ v, l }) => (
                <div key={l} className="bg-on-primary text-primary flex flex-col items-center px-4 md:px-6 py-5 md:py-7 min-w-[72px] md:min-w-[90px] shadow-lg">
                  <span className="text-3xl md:text-4xl font-black font-headline tabular-nums">{v}</span>
                  <span className="text-[9px] uppercase tracking-widest font-black mt-1 opacity-60">{l}</span>
                </div>
              ))}
            </div>
            <a
              href="#waitlist"
              onClick={e => { e.preventDefault(); document.querySelector('#waitlist')?.scrollIntoView({behavior:'smooth'}); }}
              className="btn-sh w-full text-center bg-on-primary text-primary font-black uppercase tracking-widest py-4 px-8 text-sm hover:opacity-90 active:scale-[.98] transition-all shadow-lg"
            >
              Claim My Spot →
            </a>
            <p className="text-on-primary/50 text-[10px] uppercase tracking-widest font-bold">No credit card • No lock-in</p>
          </div>
        </div>
      </div>
    </section>
  );
}
