const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Founder',
    brand: 'Velvet & Thread',
    city: 'Sydney, NSW',
    avatar: 'PS',
    stars: 5,
    quote: "We went from packing orders in our garage to shipping 300+ orders a day — without hiring a single warehouse person. Ace Shipper made scaling feel effortless.",
    tag: 'Fashion & Apparel',
  },
  {
    name: 'James Okoro',
    role: 'CEO',
    brand: 'NutriForge',
    city: 'Melbourne, VIC',
    avatar: 'JO',
    stars: 5,
    quote: "The same-day dispatch is real. I watched an order placed at 1:30 PM get a shipping label at 2:45 PM. That kind of speed is what keeps our customers coming back.",
    tag: 'Health & Wellness',
  },
  {
    name: 'Sophie Nguyen',
    role: 'Operations Lead',
    brand: 'Luminary Skincare',
    city: 'Brisbane, QLD',
    avatar: 'SN',
    stars: 5,
    quote: "We switched from a competitor after weeks of stuffed orders and zero communication. Ace Shipper's transparency and accuracy is on another level. 99.7% isn't marketing fluff — it's real.",
    tag: 'Beauty & Skincare',
  },
  {
    name: 'Marcus Bell',
    role: 'Co-Founder',
    brand: 'Apex Gear Co.',
    city: 'Perth, WA',
    avatar: 'MB',
    stars: 5,
    quote: "Setting up took literally one afternoon. They handled our custom inserts and branded tissue perfectly from Day 1. Customers keep commenting on how premium the unboxing feels.",
    tag: 'Sports & Outdoors',
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="material-symbols-outlined text-primary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 rv">
          <div>
            <span className="text-primary font-label text-[10px] tracking-[0.3em] uppercase font-black">Social Proof</span>
            <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tighter mt-3 uppercase leading-[0.9]">
              Brands That<br/><span className="text-primary">Ship With Us.</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 bg-surface-container border border-outline-variant/20 px-5 py-4 max-w-xs">
            <div className="text-center">
              <div className="text-3xl font-black text-white font-headline">5.0</div>
              <Stars count={5} />
              <div className="text-[9px] uppercase tracking-widest text-zinc-500 mt-1">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-outline-variant/30 mx-2"></div>
            <div className="text-center">
              <div className="text-3xl font-black text-white font-headline">120+</div>
              <div className="text-[9px] uppercase tracking-widest text-zinc-500 mt-1">Happy Merchants</div>
            </div>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <div key={t.name} className={`bg-surface-container border border-outline-variant/15 p-7 group hover:border-primary/40 transition-all duration-300 rv`} style={{ transitionDelay: `${i * 80}ms` }}>
              {/* Top row */}
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="w-11 h-11 bg-primary text-on-primary rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-headline font-bold text-white text-sm">{t.name}</div>
                    <div className="text-[10px] text-on-surface-variant">{t.role} · {t.brand}</div>
                  </div>
                </div>
                <span className="text-[9px] border border-primary/30 text-primary px-2 py-1 uppercase tracking-widest font-bold flex-shrink-0">{t.tag}</span>
              </div>

              {/* Stars */}
              <Stars count={t.stars} />

              {/* Quote */}
              <p className="text-on-surface-variant leading-relaxed mt-4 text-sm">" {t.quote} "</p>

              {/* Footer */}
              <div className="mt-5 pt-4 border-t border-outline-variant/15 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">location_on</span>
                <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">{t.city}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
