import { useState } from 'react';
import smartPickingImg   from '../assets/smart_picking.png';
import precisionPackImg  from '../assets/precision_packing.png';
import rapidShippingImg  from '../assets/rapid_shipping.png';
import bestCourierImg    from '../assets/best_courier_rates.png';
import doorstepImg       from '../assets/doorstep_pickup.png';

const tabs = [
  {
    id: 'picking',
    icon: 'precision_manufacturing',
    label: 'Smart Picking',
    tagline: 'Automated Operations',
    heading: 'Scaling made simple with intelligent routing',
    desc: "Don't let fulfillment bottleneck your growth. Our team rapidly traverses the warehouse, selecting items with 99.9% accuracy and zero errors.",
    img: smartPickingImg,
    features: ['AI-optimised pick routes', 'Real-time inventory sync', 'Zero-error guarantee'],
  },
  {
    id: 'packing',
    icon: 'inventory_2',
    label: 'Precision Packing',
    tagline: 'Customisation at Scale',
    heading: 'Delight customers with perfect unboxing every time',
    desc: 'Our packing stations combine speed with meticulous handling. Custom branded inserts, tissue, and tape — all included at no extra cost.',
    img: precisionPackImg,
    features: ['Custom branding & inserts', 'Box-size optimisation', 'Fragile item handling'],
  },
  {
    id: 'shipping',
    icon: 'local_shipping',
    label: 'Rapid Shipping',
    tagline: 'Speed to Doorstep',
    heading: 'Get products to hands faster than ever before',
    desc: 'Once packed, orders are immediately routed to our carrier network — Australia Post, DHL, StarTrack — for same-day or next-day delivery.',
    img: rapidShippingImg,
    features: ['Top-tier carrier partnerships', 'Same-day dispatch', 'Real-time tracking for customers'],
  },
  {
    id: 'courier',
    icon: 'payments',
    label: 'Best Rates',
    tagline: 'Save on Shipping',
    heading: 'Access the best courier rates in Australia',
    desc: 'Our volume-based partnerships with major carriers mean you get rates that would typically only be available to enterprise-level shippers.',
    img: bestCourierImg,
    features: ['Up to 40% cheaper than retail rates', 'Multi-carrier comparison', 'No minimum volumes'],
  },
  {
    id: 'doorstep',
    icon: 'home_pin',
    label: 'Doorstep Pickup',
    tagline: 'We Come to You',
    heading: 'Scheduled pickups from your door or warehouse',
    desc: 'No need to drop off stock. Book a pickup and we\'ll collect your inventory and transport it to our fulfillment centre — hassle-free.',
    img: doorstepImg,
    features: ['Flexible pickup scheduling', 'Across major Australian cities', 'Insured transit'],
  },
];

export default function PickAndPack() {
  const [active, setActive] = useState('picking');
  const current = tabs.find(t => t.id === active);

  return (
    <section id="services" className="py-32 px-6 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-primary font-label text-[10px] tracking-[0.3em] uppercase">Core Capabilities</span>
            <h2 className="font-headline text-5xl font-black tracking-tighter mt-4">EVERYTHING HANDLED.<br/>NOTHING MISSED.</h2>
          </div>
          <p className="text-on-surface-variant max-w-sm mb-2">
            From pick to pack to your customer's door — we manage the entire fulfillment chain so you can focus on growth.
          </p>
        </div>

        {/* Tab nav */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-outline-variant/20 pb-4">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-black uppercase tracking-widest transition-all ${
                active === t.id
                  ? 'bg-primary text-on-primary'
                  : 'text-on-surface-variant hover:text-white border border-outline-variant/30 hover:border-primary/40'
              }`}
            >
              <span className="material-symbols-outlined text-sm">{t.icon}</span>
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-label text-[10px] uppercase tracking-widest font-bold">{current.tagline}</span>
            <h3 className="font-headline text-3xl font-black mt-3 mb-5 uppercase tracking-tight leading-tight">{current.heading}</h3>
            <p className="text-on-surface-variant leading-relaxed mb-8 text-lg">{current.desc}</p>
            <ul className="space-y-4">
              {current.features.map(f => (
                <li key={f} className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span className="font-bold uppercase tracking-tight text-sm text-on-surface">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative border border-outline-variant/20 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img
              key={current.id}
              src={current.img}
              alt={current.label}
              className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-surface-container-lowest to-transparent"></div>
            <div className="absolute bottom-4 left-4 bg-surface-container-lowest/80 backdrop-blur-sm px-3 py-2 border border-primary/30">
              <span className="text-primary text-[10px] uppercase tracking-widest font-bold">{current.tagline}</span>
            </div>
          </div>
        </div>

        {/* Bottom bento strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { icon: 'bolt', label: 'Same-Day Dispatch', desc: 'Orders out the door today' },
            { icon: 'shield_with_heart', label: 'Returns Management', desc: 'Full returns handling included' },
            { icon: 'eco', label: 'Carbon Neutral Shipping', desc: 'Offset on every parcel' },
            { icon: 'support_agent', label: 'Dedicated Support', desc: 'Real humans, not bots' },
          ].map(item => (
            <div key={item.label} className="bg-surface-container border border-outline-variant/10 p-6 group hover:border-primary/40 transition-colors">
              <span className="material-symbols-outlined text-primary text-3xl mb-3 block">{item.icon}</span>
              <h4 className="font-headline font-bold text-sm uppercase tracking-tight text-white mb-1">{item.label}</h4>
              <p className="text-on-surface-variant text-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
