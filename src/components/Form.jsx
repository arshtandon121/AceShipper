import { useState } from 'react';

const perks = [
  { icon: 'payments',       text: '$0 setup fee — forever' },
  { icon: 'inventory_2',    text: 'No minimum order volumes' },
  { icon: 'calendar_month', text: 'Month-to-month, cancel any time' },
  { icon: 'schedule',       text: 'Same-day dispatch from Day 1' },
  { icon: 'verified',       text: '99.7% on-time dispatch rate' },
  { icon: 'support_agent',  text: 'Dedicated account manager' },
];

const Form = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (!/\S+@\S+\.\S+/.test(email)) { alert('Please enter a valid email.'); return; }

    setStatus('submitting');
    const userIp = sessionStorage.getItem('aceshipper_user_ip') || 'Unknown';
    const userLocation = sessionStorage.getItem('aceshipper_user_location') || 'Unknown';

    const formData = {
      event_type: 'Form Submit',
      name:    e.target.name.value,
      email,
      city:    e.target.city.value,
      phone:   e.target.phone.value,
      comment: e.target.comment?.value || '',
      ip:      userIp,
      location: userLocation,
      date:    new Date().toISOString(),
    };

    try {
      const res = await fetch('https://script.google.com/macros/s/AKfycbxHSBbhTqugvSH18RMV7Oq2y7UWAsXtzJiRu1wQR7pcqvX-wuZv-sEGh5q4gGSgjjTA/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(formData),
      });
      if (res.ok) { setStatus('success'); e.target.reset(); }
      else throw new Error();
    } catch {
      alert('Submission failed. Please try again.');
      setStatus('idle');
    }
  };

  return (
    <section id="waitlist" className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/5 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto relative grid md:grid-cols-2 gap-16 items-center">

        {/* Left — pitch */}
        <div className="rv-l">
          <span className="text-primary font-label text-[10px] tracking-[0.3em] uppercase font-black">Join the Waitlist</span>
          <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tighter mt-4 mb-6 leading-[0.9] uppercase">
            Reserve Your Spot.<br/>
            <span className="text-primary">Start Fulfilling</span><br/>
            Smarter.
          </h2>
          <p className="text-on-surface-variant text-base leading-relaxed mb-10">
            Join Australia's most ambitious fulfillment platform. Lock in founding member pricing before we open to the public — limited spots this quarter.
          </p>
          {/* Perks */}
          <ul className="space-y-3">
            {perks.map(p => (
              <li key={p.text} className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg flex-shrink-0">{p.icon}</span>
                <span className="text-sm text-on-surface-variant font-medium">{p.text}</span>
              </li>
            ))}
          </ul>
          {/* Trust strip */}
          <div className="mt-10 flex flex-wrap gap-4">
            {['🇦🇺 Australian-Owned', '🔒 Data Stays Local', '⭐ 5-Star Support'].map(t => (
              <span key={t} className="border border-outline-variant/30 px-3 py-1.5 text-[10px] uppercase tracking-widest font-bold text-zinc-500">{t}</span>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="rv-r">
          {status === 'success' ? (
            <div className="bg-surface-container border border-outline-variant/20 p-10 text-center shadow-2xl">
              <span className="material-symbols-outlined text-primary text-6xl mb-4 block">check_circle</span>
              <h3 className="font-headline text-2xl font-black text-white mb-2 uppercase">You're In!</h3>
              <p className="text-on-surface-variant text-sm mb-6">We'll reach out shortly with your onboarding details.</p>
              <button onClick={() => setStatus('idle')} className="px-6 py-3 border border-primary/40 text-primary font-black uppercase text-xs tracking-widest hover:bg-primary/10 transition-colors">
                Register Another →
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-surface-container border border-outline-variant/20 p-8 shadow-2xl space-y-5">
              <div className="border-b border-outline-variant/20 pb-5 mb-1">
                <h3 className="font-headline font-black text-xl uppercase tracking-tight">Apply for Early Access</h3>
                <p className="text-on-surface-variant text-xs mt-1">Takes less than 60 seconds</p>
              </div>

              {[
                { label: 'Full Name',       name: 'name',  type: 'text',  ph: 'Jane Smith' },
                { label: 'Business Email',  name: 'email', type: 'email', ph: 'jane@yourbrand.com.au' },
                { label: 'Phone Number',    name: 'phone', type: 'tel',   ph: '+61 400 000 000' },
                { label: 'City / Location', name: 'city',  type: 'text',  ph: 'Sydney, NSW' },
              ].map(f => (
                <div key={f.name}>
                  <label className="block font-label text-[10px] uppercase tracking-widest text-primary mb-1.5 font-black">{f.label}</label>
                  <input
                    type={f.type} name={f.name} placeholder={f.ph} required
                    className="w-full bg-surface-container-high border-x-0 border-t-0 border-b border-outline-variant focus:border-primary focus:ring-0 text-white px-0 py-3 text-sm transition-colors placeholder:text-zinc-700"
                  />
                </div>
              ))}

              <div>
                <label className="block font-label text-[10px] uppercase tracking-widest text-primary mb-1.5 font-black">
                  Comment <span className="normal-case font-normal text-zinc-600">(optional)</span>
                </label>
                <textarea
                  name="comment" rows="2" placeholder="Tell us about your store..."
                  className="w-full bg-surface-container-high border-x-0 border-t-0 border-b border-outline-variant focus:border-primary focus:ring-0 text-white px-0 py-3 text-sm transition-colors placeholder:text-zinc-700 resize-none"
                />
              </div>

              <button
                type="submit" disabled={status === 'submitting'}
                className="btn-sh w-full bg-primary text-on-primary py-5 font-black uppercase tracking-widest text-sm hover:brightness-110 active:scale-[.98] transition-all disabled:opacity-60 shadow-[0_0_24px_rgba(255,92,0,0.3)] hover:shadow-[0_0_40px_rgba(255,92,0,0.5)] mt-2"
              >
                {status === 'submitting' ? 'Submitting…' : 'Secure My Spot →'}
              </button>
              <p className="text-center text-[10px] text-zinc-600 uppercase tracking-widest">🔒 No spam. No credit card. Cancel anytime.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Form;
