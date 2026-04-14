const solutions = ['E-commerce Fulfillment', 'Shopify Integration', 'WooCommerce Integration', 'Amazon FBA Prep'];
const company   = ['About Us', 'Our Warehouses', 'Careers', 'Press'];
const support   = ['Track an Order', 'Contact Us', 'Help Center', 'Resources'];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-outline-variant/10">

      {/* Top strip with logo */}
      <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-zinc-900">
        <div className="flex items-center gap-4">
          <img
            src="/logo_ace_shipper.png"
            alt="Ace Shipper"
            className="w-14 h-14 object-contain"
            style={{ filter: 'drop-shadow(0 0 10px rgba(255,144,100,0.35))' }}
          />
          <div>
            <div className="text-xl font-black text-white uppercase font-headline tracking-tighter">ACE SHIPPER</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">Pick & Pack Services</div>
          </div>
        </div>
        <p className="text-zinc-600 text-sm max-w-xs text-center md:text-right leading-relaxed">
          Australia's tech-first fulfillment platform. Precision built for DTC brands.
        </p>
        <a
          href="#waitlist"
          onClick={e => { e.preventDefault(); document.querySelector('#waitlist')?.scrollIntoView({behavior:'smooth'}); }}
          className="btn-sh flex-shrink-0 bg-primary text-on-primary px-6 py-3 font-black uppercase text-xs tracking-widest hover:brightness-110 transition-all"
        >
          Get Early Access →
        </a>
      </div>

      {/* Main columns */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 px-8 py-12">
        <div className="md:col-span-1 space-y-3">
          <h4 className="font-label text-[10px] uppercase font-black text-primary mb-4 tracking-widest">Solutions</h4>
          {solutions.map(l => <a key={l} href="#" className="block text-zinc-500 text-sm hover:text-primary transition-colors">{l}</a>)}
        </div>
        <div className="space-y-3">
          <h4 className="font-label text-[10px] uppercase font-black text-primary mb-4 tracking-widest">Company</h4>
          {company.map(l => <a key={l} href="#" className="block text-zinc-500 text-sm hover:text-primary transition-colors">{l}</a>)}
        </div>
        <div className="space-y-3">
          <h4 className="font-label text-[10px] uppercase font-black text-primary mb-4 tracking-widest">Support</h4>
          {support.map(l => <a key={l} href="#" className="block text-zinc-500 text-sm hover:text-primary transition-colors">{l}</a>)}
        </div>
        <div>
          <h4 className="font-label text-[10px] uppercase font-black text-primary mb-4 tracking-widest">Service Areas</h4>
          {['Sydney, NSW', 'Melbourne, VIC', 'Brisbane, QLD', 'Perth, WA', 'All Major Cities'].map(l => (
            <div key={l} className="flex items-center gap-2 text-zinc-500 text-sm mb-3">
              <span className="material-symbols-outlined text-primary text-sm">location_on</span>
              {l}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-8 pb-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-zinc-900 pt-6">
        <div className="text-zinc-600 text-[11px] font-label uppercase tracking-widest">
          © 2025 Ace Shipper Pty Ltd · All rights reserved
        </div>
        <div className="flex gap-6 text-zinc-600 text-[11px] font-label uppercase tracking-widest">
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
          <a href="#" className="hover:text-primary transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
