import { useState, useEffect } from 'react';

const notifications = [
  { name: 'Sarah K.',    city: 'Sydney',    action: 'just joined the waitlist',      icon: 'person_add' },
  { name: 'Marcus T.',   city: 'Melbourne', action: 'started their free onboarding', icon: 'rocket_launch' },
  { name: 'Priya M.',    city: 'Brisbane',  action: 'just joined the waitlist',      icon: 'person_add' },
  { name: 'Jake L.',     city: 'Perth',     action: 'requested a pricing quote',     icon: 'payments' },
  { name: 'Aisha R.',    city: 'Adelaide',  action: 'started their free onboarding', icon: 'rocket_launch' },
  { name: 'Tom W.',      city: 'Gold Coast','action': 'just joined the waitlist',    icon: 'person_add' },
  { name: 'Mei C.',      city: 'Canberra',  action: 'requested a pricing quote',     icon: 'payments' },
  { name: 'Daniel F.',   city: 'Sydney',    action: 'just joined the waitlist',      icon: 'person_add' },
];

export default function SocialProofToast() {
  const [visible,  setVisible]  = useState(false);
  const [current, setCurrent]   = useState(0);
  const [exiting, setExiting]   = useState(false);

  useEffect(() => {
    // First toast after 5 seconds
    const firstTimer = setTimeout(() => showToast(), 5000);
    return () => clearTimeout(firstTimer);
  }, []);

  const showToast = (idx = 0) => {
    setCurrent(idx);
    setExiting(false);
    setVisible(true);

    // Hide after 4.5 seconds
    setTimeout(() => {
      setExiting(true);
      setTimeout(() => {
        setVisible(false);
        // Show next after 8 seconds
        const nextIdx = (idx + 1) % notifications.length;
        setTimeout(() => showToast(nextIdx), 8000);
      }, 400);
    }, 4500);
  };

  if (!visible) return null;
  const n = notifications[current];

  return (
    <div
      className={`fixed bottom-24 left-4 z-[9000] transition-all duration-400 ${
        exiting ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
      }`}
      style={{ maxWidth: 300 }}
    >
      <div className="bg-zinc-950 border border-outline-variant/40 shadow-2xl p-4 flex items-start gap-3">
        {/* Icon */}
        <div className="w-9 h-9 bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0">
          <span className="material-symbols-outlined text-primary text-base">{n.icon}</span>
        </div>
        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="text-white text-xs font-bold leading-snug">
            <span className="text-primary">{n.name}</span> from {n.city}
          </p>
          <p className="text-zinc-500 text-[11px] mt-0.5">{n.action}</p>
          <p className="text-zinc-700 text-[10px] mt-1 uppercase tracking-widest font-bold">Just now · Ace Shipper</p>
        </div>
        {/* Close */}
        <button
          onClick={() => { setExiting(true); setTimeout(() => setVisible(false), 400); }}
          className="text-zinc-700 hover:text-zinc-400 transition-colors flex-shrink-0 text-xs"
        >
          ✕
        </button>
      </div>
      {/* Orange accent bar at bottom */}
      <div className="h-0.5 bg-gradient-to-r from-primary to-primary-fixed-dim"></div>
    </div>
  );
}
