export default function Features() {
  return (
    <section id="features" className="py-32 px-6 space-y-32">

      {/* Row 1 — Tech-First Platform */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div>
          <span className="text-primary font-label text-[10px] tracking-[0.3em] uppercase">Tech-First Platform</span>
          <h2 className="font-headline text-5xl font-black tracking-tighter mt-4 mb-6 leading-[0.9]">
            TOTAL COMMAND<br/>OF YOUR ORDERS.
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
            Live dashboard to track every order, shipment, and SKU in real time. No spreadsheets, no guessing, no nasty surprises. Full visibility from the moment an order is placed to when it lands at your customer's door.
          </p>
          <ul className="space-y-4">
            {[
              'Real-time order & inventory telemetry',
              'Predictive delay alerts before they happen',
              'SKU-level tracking across all your products',
              'One-click integration with Shopify & WooCommerce',
            ].map(item => (
              <li key={item} className="flex items-center gap-4 text-on-surface">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span className="font-bold uppercase tracking-tight text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative bg-surface-container border border-outline-variant/10 p-8 perspective-1000 overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img
            alt="Ace Shipper 3D Dashboard"
            className="w-full object-cover tilt-card"
            src="/images/features-3d.png"
          />
          {/* Floating badge */}
          <div className="absolute top-4 right-4 glass-pill px-3 py-2 border border-primary/30 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Live Dashboard</span>
          </div>
        </div>
      </div>

      {/* Row 2 — No Minimums */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div className="order-2 md:order-1 relative bg-surface-container border border-outline-variant/10 p-8 perspective-1000 overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img
            alt="Ace Shipper Hero"
            className="w-full object-cover tilt-card"
            src="/images/hero-3d.png"
          />
          {/* Stats overlay */}
          <div className="absolute bottom-4 left-4 right-4 flex gap-3">
            <div className="glass-pill px-3 py-2 border border-primary/30 flex-1 text-center">
              <div className="text-xl font-black text-primary">$0</div>
              <div className="text-[10px] uppercase tracking-widest text-on-surface-variant">Setup Fee</div>
            </div>
            <div className="glass-pill px-3 py-2 border border-primary/30 flex-1 text-center">
              <div className="text-xl font-black text-primary">0</div>
              <div className="text-[10px] uppercase tracking-widest text-on-surface-variant">Minimums</div>
            </div>
            <div className="glass-pill px-3 py-2 border border-primary/30 flex-1 text-center">
              <div className="text-xl font-black text-primary">M-M</div>
              <div className="text-[10px] uppercase tracking-widest text-on-surface-variant">Contract</div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <span className="text-primary font-label text-[10px] tracking-[0.3em] uppercase">No Lock-ins</span>
          <h2 className="font-headline text-5xl font-black tracking-tighter mt-4 mb-6 leading-[0.9]">
            NO MINIMUMS.<br/>NO LOCK-INS.
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
            Start with 1 order or 10,000. We scale with you, not against you. Month-to-month contracts, $0 setup fees, and full pricing transparency from Day 1. No nasty surprises on your invoice.
          </p>
          <ul className="space-y-4">
            {[
              'Pay per pick, pack & ship — nothing else',
              'No setup fees, ever',
              'Month-to-month — cancel any time',
              'Volume discounts as you grow',
            ].map(item => (
              <li key={item} className="flex items-center gap-4 text-on-surface">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span className="font-bold uppercase tracking-tight text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex gap-4">
            <button className="bg-primary text-on-primary px-8 py-4 font-black uppercase tracking-tight hover:brightness-110 transition-all">
              Get Early Access
            </button>
            <button className="border border-outline-variant px-8 py-4 font-black uppercase tracking-tight hover:border-primary hover:text-primary transition-all">
              See Pricing
            </button>
          </div>
        </div>
      </div>

      {/* Row 3 — Australian-Owned */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-surface-container border border-outline-variant/10 p-12 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_right,rgba(255,144,100,0.05),transparent)]"></div>
          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            <div className="md:col-span-1">
              <span className="text-primary font-label text-[10px] tracking-[0.3em] uppercase">Australian-Owned</span>
              <h2 className="font-headline text-4xl font-black tracking-tighter mt-4 mb-6 leading-[0.9]">
                LOCAL TEAM.<br/>LOCAL EXPERTISE.
              </h2>
              <p className="text-on-surface-variant leading-relaxed">
                100% Australian-owned and operated. Our warehouses are in Sydney and Melbourne, staffed by real people who care about your brand as much as you do.
              </p>
            </div>
            <div className="md:col-span-2 grid grid-cols-2 gap-4">
              {[
                { icon: 'location_on',   title: 'Sydney & Melbourne', desc: 'Fulfilment centres in both cities for fast metro delivery across the east coast.' },
                { icon: 'support_agent', title: 'Dedicated Account Manager', desc: 'A real human assigned to your account from Day 1. No bots. No call centres.' },
                { icon: 'schedule',      title: 'Same-Day Dispatch', desc: 'Orders placed before 2PM dispatched the same business day, every day.' },
                { icon: 'verified',      title: 'Australian Business', desc: 'ABN registered, locally operated, and proud of it. Your data stays in Australia.' },
              ].map(item => (
                <div key={item.title} className="bg-surface-container-lowest border border-outline-variant/10 p-6 group hover:border-primary/40 transition-colors">
                  <span className="material-symbols-outlined text-primary text-3xl mb-3 block">{item.icon}</span>
                  <h4 className="font-headline font-bold text-sm uppercase tracking-tight text-white mb-2">{item.title}</h4>
                  <p className="text-on-surface-variant text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
