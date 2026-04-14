import { useState, useRef } from 'react';

export default function Hero() {
  const videoRef  = useRef(null);
  const [muted,  setMuted]  = useState(true);
  const [started, setStarted] = useState(false);

  const scrollToForm = (e) => {
    e.preventDefault();
    document.querySelector('#waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  const enableAudio = () => {
    if (!videoRef.current) return;
    videoRef.current.muted  = false;
    videoRef.current.volume = 0.7;
    videoRef.current.play().catch(() => {
      // Browser still blocked — keep muted
      videoRef.current.muted = true;
      setMuted(true);
    });
    setMuted(false);
    setStarted(true);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const next = !muted;
    videoRef.current.muted = next;
    if (!next) videoRef.current.volume = 0.7;
    setMuted(next);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Video background */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none">
        <source src="/images/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Orange radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,92,0,0.1),transparent_70%)] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>

      {/* Text */}
      <div className="relative z-10 text-center max-w-5xl mx-auto mb-16">
        <span className="inline-block border border-primary/30 bg-primary/10 px-4 py-1 text-primary font-label text-[10px] tracking-[0.2em] uppercase mb-6">
          Logistics Reimagined
        </span>
        <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
          YOUR ORDERS.<br />
          <span className="text-primary italic">PACKED. SHIPPED.</span><br />
          DONE.
        </h1>
        <p className="text-on-surface-variant max-w-xl mx-auto text-lg leading-relaxed mb-10">
          Australia's first tech-first fulfillment platform. Connect your store, send us your stock, and we handle everything from warehouse to doorstep — starting from Day 1.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={scrollToForm}
            className="bg-primary text-on-primary px-10 py-5 text-lg font-black uppercase tracking-tight shadow-[0_0_20px_rgba(255,92,0,0.4)] hover:shadow-[0_0_40px_rgba(255,92,0,0.6)] transition-all"
          >
            Get Early Access
          </button>
          <button className="bg-surface-bright/50 backdrop-blur-md text-white border border-outline-variant px-10 py-5 text-lg font-black uppercase tracking-tight hover:bg-surface-bright transition-all">
            See How It Works
          </button>
        </div>
      </div>

      {/* 3D Ace Video Centrepiece */}
      <div className="relative w-full max-w-6xl mt-4 perspective-1000 group">
        <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full pointer-events-none"></div>
        <div className="relative tilt-card overflow-hidden border border-outline-variant/20 shadow-2xl bg-surface-container">
          {/* Main video */}
          <video
            ref={videoRef}
            autoPlay loop muted playsInline
            className="w-full aspect-[21/9] object-cover"
          >
            <source src="/images/ace_video.mp4" type="video/mp4" />
          </video>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none"></div>

          {/* ── CLICK-TO-UNMUTE PROMPT (first-time only) ── */}
          {!started && (
            <button
              onClick={enableAudio}
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 group/unmute cursor-pointer"
              aria-label="Click to play with sound"
            >
              {/* Pulsing ring */}
              <span className="relative flex items-center justify-center">
                <span className="absolute w-20 h-20 rounded-full bg-primary/20 animate-ping"></span>
                <span className="relative w-16 h-16 rounded-full bg-black/60 backdrop-blur-md border-2 border-primary flex items-center justify-center shadow-[0_0_24px_rgba(255,144,100,0.5)] group-hover/unmute:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-primary text-3xl">volume_up</span>
                </span>
              </span>
              <span className="bg-black/60 backdrop-blur-md px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] font-black text-white border border-primary/30">
                Click to play with sound
              </span>
            </button>
          )}

          {/* ── MUTE TOGGLE (after first click) ── */}
          {started && (
            <button
              onClick={toggleMute}
              className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-md border border-primary/30 px-3 py-2 text-[10px] uppercase tracking-widest font-black text-primary hover:bg-primary/20 hover:border-primary transition-all duration-200"
              aria-label={muted ? 'Unmute' : 'Mute'}
            >
              <span className="material-symbols-outlined text-sm">
                {muted ? 'volume_off' : 'volume_up'}
              </span>
              {muted ? 'Unmute' : 'Mute'}
            </button>
          )}

          {/* Floating Metric Cards */}
          <div className="absolute top-6 left-6 p-4 glass-pill border border-primary/20 flex flex-col gap-0.5">
            <span className="text-primary font-label text-[9px] uppercase tracking-widest">Orders Today</span>
            <span className="text-2xl font-black">1,284</span>
          </div>
          <div className="absolute bottom-6 right-32 p-4 glass-pill border border-primary/20 flex flex-col gap-0.5">
            <span className="text-primary font-label text-[9px] uppercase tracking-widest">Fulfillment Rate</span>
            <span className="text-2xl font-black">99.7%</span>
          </div>
          <div className="absolute bottom-6 left-6 p-3 glass-pill border border-primary/20 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-xl">local_shipping</span>
            <div>
              <div className="text-[9px] uppercase tracking-widest text-primary font-bold">Same-Day Dispatch</div>
              <div className="text-sm font-black">Active ✓</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
