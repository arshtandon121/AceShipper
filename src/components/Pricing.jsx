const tiers = [
  {
    name: 'STARTER',
    tag: 'Perfect to get going',
    price: '0.75',
    unit: 'per pick',
    color: 'border-outline-variant/20',
    highlight: false,
    description: 'Ideal for new e-commerce brands doing under 500 orders per month.',
    includes: [
      '$0 setup fee',
      'No minimum order volumes',
      'Shopify & WooCommerce integration',
      'Same-day dispatch',
      'Basic tracking dashboard',
      'Email support',
    ],
    cta: 'Start for Free',
  },
  {
    name: 'GROWTH',
    tag: 'Most Popular',
    price: '0.55',
    unit: 'per pick',
    color: 'border-primary',
    highlight: true,
    description: 'For scaling brands shipping 500–5,000 orders monthly who need more power.',
    includes: [
      'Everything in Starter',
      'Priority pick queue',
      'Custom branded packaging',
      'Returns management',
      'Advanced analytics dashboard',
      'Dedicated account manager',
      'Multi-carrier rate shopping',
    ],
    cta: 'Claim Growth Spot',
  },
  {
    name: 'ENTERPRISE',
    tag: 'For high-volume brands',
    price: 'Custom',
    unit: 'pricing',
    color: 'border-outline-variant/20',
    highlight: false,
    description: 'Tailored solutions for brands shipping 5,000+ orders per month.',
    includes: [
      'Everything in Growth',
      'Volume-based discounts',
      'API & webhook access',
      'Custom SLA agreements',
      'Dedicated warehouse zone',
      'White-glove onboarding',
      '24/7 priority support',
    ],
    cta: 'Contact Sales',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 rv">
          <span className="text-primary font-label text-[10px] tracking-[0.3em] uppercase font-black">Transparent Pricing</span>
          <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tighter mt-3 uppercase">
            Simple. Fair. <span className="text-primary">No Surprises.</span>
          </h2>
          <p className="text-on-surface-variant mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Pay only for what you use. No setup fees, no monthly minimums, no lock-in contracts.
          </p>
          {/* Guarantee pill */}
          <div className="inline-flex items-center gap-2 mt-6 border border-primary/30 bg-primary/5 px-4 py-2 text-[10px] uppercase tracking-widest font-black text-primary">
            <span className="material-symbols-outlined text-sm">verified</span>
            Price-match guarantee — we'll beat any like-for-like quote
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 items-start">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`relative border-2 ${tier.color} transition-all duration-300 hover:border-primary/60 rv`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Popular badge */}
              {tier.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-4 py-1 text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                  ★ Most Popular
                </div>
              )}

              <div className={`p-8 ${tier.highlight ? 'bg-surface-container' : 'bg-surface-container-lowest'}`}>
                {/* Tier name */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-[10px] text-primary font-black uppercase tracking-widest">{tier.tag}</span>
                    <h3 className="font-headline text-2xl font-black text-white mt-1">{tier.name}</h3>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-4">
                  {tier.price === 'Custom' ? (
                    <div className="text-4xl font-black text-white font-headline">Custom</div>
                  ) : (
                    <div className="flex items-end gap-1">
                      <span className="text-xl font-bold text-primary self-start mt-2">$</span>
                      <span className="text-5xl font-black text-white font-headline leading-none">{tier.price}</span>
                      <span className="text-on-surface-variant text-sm mb-1">&nbsp;{tier.unit}</span>
                    </div>
                  )}
                  <p className="text-on-surface-variant text-xs mt-2 leading-relaxed">{tier.description}</p>
                </div>

                <div className="divider mb-6"></div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.includes.map(f => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span className="material-symbols-outlined text-primary text-base flex-shrink-0 mt-0.5">check_circle</span>
                      <span className="text-on-surface-variant">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#waitlist"
                  onClick={e => { e.preventDefault(); document.querySelector('#waitlist')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className={`btn-sh block w-full text-center py-4 font-black uppercase text-sm tracking-widest transition-all ${
                    tier.highlight
                      ? 'bg-primary text-on-primary hover:brightness-110 shadow-[0_0_20px_rgba(255,92,0,0.3)]'
                      : 'bg-surface-container border border-outline-variant/30 text-white hover:border-primary/50 hover:text-primary'
                  }`}
                >
                  {tier.cta} →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 text-center text-[11px] text-zinc-600 uppercase tracking-widest rv">
          All plans include: $0 setup · No minimums · Month-to-month · Australian infrastructure
        </div>
      </div>
    </section>
  );
}
