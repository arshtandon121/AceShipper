import { useState, useEffect } from 'react';

const links = [
  { label: 'Home',        href: '#' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Services',    href: '#services' },
  { label: 'Features',    href: '#features' },
  { label: 'FAQ',         href: '#faq' },
];

export default function Navbar() {
  const [open,       setOpen]       = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const [active,     setActive]     = useState('#');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setActive(href);
    setOpen(false);
    if (href !== '#') {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 flex justify-center z-50 transition-all duration-300 ${scrolled ? 'pt-2' : 'pt-4'}`}>
        <nav className={`w-full max-w-6xl mx-4 px-5 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? 'bg-zinc-950/90 backdrop-blur-2xl shadow-[0_4px_32px_rgba(0,0,0,0.6)] border border-outline-variant/30 py-2.5'
            : 'bg-zinc-900/70 backdrop-blur-xl border border-outline-variant/20 py-3'
        }`}>

          {/* Logo + Wordmark */}
          <a onClick={() => handleNav('#')} href="#" className="flex items-center gap-3 group flex-shrink-0">
            <img
              src="/logo_ace_shipper.png"
              alt="Ace Shipper"
              className="w-14 h-14 object-contain group-hover:drop-shadow-[0_0_12px_rgba(255,144,100,0.8)] transition-all duration-300"
            />
            <div className="leading-tight">
              <div className="text-lg font-black tracking-tighter text-white uppercase group-hover:text-primary transition-colors">ACE SHIPPER</div>
              <div className="text-[9px] font-bold tracking-[0.2em] uppercase text-primary/70">Pick & Pack Services</div>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={e => { e.preventDefault(); handleNav(l.href); }}
                className={`px-3 py-2 font-label text-[11px] tracking-widest uppercase font-bold transition-all duration-200 relative ${
                  active === l.href
                    ? 'text-primary'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {l.label}
                {active === l.href && (
                  <span className="absolute bottom-0 left-3 right-3 h-px bg-primary"></span>
                )}
              </a>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#waitlist"
              onClick={e => { e.preventDefault(); handleNav('#waitlist'); }}
              className="btn-sh hidden md:inline-flex bg-primary text-on-primary px-5 py-2.5 font-black text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-[0_0_16px_rgba(255,92,0,0.25)] hover:shadow-[0_0_28px_rgba(255,92,0,0.45)]"
            >
              Get Early Access
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(o => !o)}
              className="md:hidden flex flex-col gap-1.5 p-2 group"
              aria-label="Toggle menu"
            >
              <span className={`block h-0.5 bg-white transition-all duration-300 ${open ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
              <span className={`block h-0.5 bg-white transition-all duration-300 ${open ? 'w-0 opacity-0' : 'w-4'}`}></span>
              <span className={`block h-0.5 bg-white transition-all duration-300 ${open ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`}></span>
            </button>
          </div>
        </nav>

        {/* Mobile drawer */}
        <div className={`absolute top-full left-4 right-4 mt-2 bg-zinc-950/95 backdrop-blur-2xl border border-outline-variant/30 shadow-2xl transition-all duration-300 md:hidden overflow-hidden ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-6 py-4 space-y-1">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={e => { e.preventDefault(); handleNav(l.href); }}
                className={`flex items-center gap-3 py-3 border-b border-outline-variant/15 font-label text-xs tracking-widest uppercase font-bold transition-colors ${active === l.href ? 'text-primary' : 'text-zinc-400'}`}
              >
                {active === l.href && <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>}
                {l.label}
              </a>
            ))}
            <a
              href="#waitlist"
              onClick={e => { e.preventDefault(); handleNav('#waitlist'); }}
              className="block mt-4 w-full text-center bg-primary text-on-primary py-4 font-black text-sm uppercase tracking-widest"
            >
              Get Early Access
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
