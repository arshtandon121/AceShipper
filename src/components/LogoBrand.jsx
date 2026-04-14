const brands = [
  { icon: 'storefront',     name: 'SHOPIFY' },
  { icon: 'deployed_code',  name: 'WOOCOMMERCE' },
  { icon: 'conveyor_belt',  name: 'DHL GLOBAL' },
  { icon: 'package_2',      name: 'AUSTRALIA POST' },
  { icon: 'speed',          name: 'AMAZON FBA' },
  { icon: 'rocket_launch',  name: 'BIGCOMMERCE' },
  { icon: 'local_shipping', name: 'STARTRACK' },
  { icon: 'inventory_2',    name: 'MYPOST BUSINESS' },
  { icon: 'storefront',     name: 'SHOPIFY' },
  { icon: 'deployed_code',  name: 'WOOCOMMERCE' },
  { icon: 'conveyor_belt',  name: 'DHL GLOBAL' },
  { icon: 'package_2',      name: 'AUSTRALIA POST' },
  { icon: 'speed',          name: 'AMAZON FBA' },
  { icon: 'rocket_launch',  name: 'BIGCOMMERCE' },
  { icon: 'local_shipping', name: 'STARTRACK' },
  { icon: 'inventory_2',    name: 'MYPOST BUSINESS' },
];

export default function LogoBrand() {
  return (
    <section className="bg-surface-container-lowest border-y border-outline-variant/10 py-10 overflow-hidden">
      <p className="text-center text-[10px] font-black tracking-[0.35em] uppercase text-zinc-600 mb-7">
        Integrated with the platforms you love
      </p>
      {/* Fade edges */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface-container-lowest to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface-container-lowest to-transparent z-10 pointer-events-none"></div>
        <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">
          {brands.map((b, i) => (
            <div key={i} className="flex items-center gap-2.5 text-base font-black text-white/20 tracking-wider flex-shrink-0 uppercase hover:text-white/50 transition-colors cursor-default">
              <span className="material-symbols-outlined text-primary/50 text-lg">{b.icon}</span>
              {b.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
