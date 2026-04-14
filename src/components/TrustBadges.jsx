import { useEffect, useRef, useState } from 'react';

function useCountUp(target, duration = 1800, startOnView = true) {
  const [count, setCount]       = useState(0);
  const [started, setStarted]   = useState(false);
  const ref                     = useRef(null);

  useEffect(() => {
    if (!startOnView) { setStarted(true); return; }
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setStarted(true); obs.disconnect(); }
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [startOnView]);

  useEffect(() => {
    if (!started || typeof target !== 'number') return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const pct = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - pct, 3); // ease-out cubic
      setCount(Math.floor(ease * target));
      if (pct < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return { count, ref };
}

const stats = [
  { num: 10000, suffix: '+',  label: 'Orders Fulfilled',    icon: 'package_2',       display: (n) => n >= 1000 ? `${(n/1000).toFixed(0)}K+` : String(n) },
  { num: 99.7,  suffix: '%',  label: 'On-Time Dispatch',    icon: 'verified',         display: (n) => `${n.toFixed(1)}%`, isFloat: true },
  { num: 48,    suffix: 'hr', label: 'Avg. Delivery',       icon: 'schedule',         display: (n) => `${n}hr` },
  { num: 0,     suffix: '',   label: 'Setup Fee',            icon: 'payments',         display: () => '$0' },
];

function StatCard({ stat }) {
  const isFloat = stat.isFloat;
  const [val, setVal]   = useState(isFloat ? 0 : 0);
  const [vis, setVis]   = useState(false);
  const elRef           = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVis(true); obs.disconnect(); }
    }, { threshold: 0.4 });
    if (elRef.current) obs.observe(elRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!vis || stat.num === 0) return;
    const dur = 1800;
    let start = null;
    const target = stat.num;
    const step = (ts) => {
      if (!start) start = ts;
      const pct  = Math.min((ts - start) / dur, 1);
      const ease = 1 - Math.pow(1 - pct, 3);
      setVal(isFloat ? +(ease * target).toFixed(1) : Math.floor(ease * target));
      if (pct < 1) requestAnimationFrame(step);
      else setVal(target);
    };
    requestAnimationFrame(step);
  }, [vis]);

  return (
    <div ref={elRef} className="flex flex-col items-start group">
      <span className="material-symbols-outlined text-on-primary/50 text-2xl mb-3">{stat.icon}</span>
      <span className="text-5xl md:text-7xl font-black text-on-primary tracking-tighter font-headline leading-none">
        {stat.display(val)}
      </span>
      <span className="text-on-primary/60 font-label text-xs uppercase tracking-widest font-bold mt-2">{stat.label}</span>
    </div>
  );
}

export default function TrustBadges() {
  return (
    <section className="relative overflow-hidden">
      <div className="divider"></div>
      {/* Main orange strip */}
      <div className="bg-primary px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-on-primary/50 mb-10">By the numbers</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map(s => <StatCard key={s.label} stat={s} />)}
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </section>
  );
}
