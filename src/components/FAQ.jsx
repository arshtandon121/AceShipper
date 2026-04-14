import { useState } from 'react';

const faqs = [
  { q: 'How quickly can I get started?',                 a: 'You can onboard in under 24 hours. Connect your store via our Shopify or WooCommerce plugin, ship us your stock, and we handle fulfillment from Day 1.' },
  { q: 'Do I need a minimum order volume?',              a: 'No minimums, ever. Start with 1 order or 10,000. We scale with you on a month-to-month basis with zero lock-in contracts.' },
  { q: 'Which e-commerce platforms do you integrate with?', a: 'We integrate with Shopify, WooCommerce, Amazon, Etsy, BigCommerce, and more via our open API. Setup takes minutes.' },
  { q: 'Where are your warehouses located?',             a: 'Our primary fulfillment centres are in Sydney and Melbourne, with coverage across all major Australian metro areas.' },
  { q: 'Can I use my own branded packaging?',            a: 'Absolutely. Send us your custom boxes, tape, or inserts and we will use them for every order at no extra charge.' },
  { q: 'Do you handle returns?',                         a: 'Yes. We offer full returns management — items are received, inspected, and restocked or disposed of per your instructions.' },
  { q: 'What if an item is lost or damaged in transit?', a: 'All shipments include transit protection. We process claims quickly and work directly with carriers to resolve issues fast.' },
  { q: 'How does pricing work?',                         a: 'Simple pay-per-use: you pay per pick, pack, and ship — nothing else. No setup fees, no monthly minimums, full transparency from Day 1.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-24 px-6 bg-surface-container-lowest">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 rv">
          <span className="text-primary font-label text-[10px] tracking-[0.3em] uppercase font-black">Support</span>
          <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tighter uppercase mt-3">
            Got Questions?<br/><span className="text-primary">We've Got Answers.</span>
          </h2>
          <p className="text-on-surface-variant mt-4 max-w-sm mx-auto text-sm leading-relaxed">
            Everything you need to know before you start shipping with Ace Shipper.
          </p>
        </div>

        {/* Accordion */}
        <div className="divide-y divide-outline-variant/15">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`group transition-colors duration-200 rv ${isOpen ? 'bg-surface-container' : 'hover:bg-surface-container/50'}`}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full px-6 py-5 flex items-start justify-between gap-6 text-left"
                >
                  <span className={`font-headline text-base font-bold uppercase tracking-tight transition-colors duration-200 flex-1 ${isOpen ? 'text-primary' : 'text-white group-hover:text-primary'}`}>
                    {faq.q}
                  </span>
                  <span className={`material-symbols-outlined text-primary flex-shrink-0 transition-transform duration-300 mt-0.5 ${isOpen ? 'rotate-45' : ''}`}>
                    add
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? '200px' : '0px' }}
                >
                  <p className="px-6 pb-6 text-on-surface-variant text-sm leading-relaxed border-l-2 border-primary/40 ml-6">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 p-8 bg-surface-container border border-outline-variant/20 text-center rv">
          <p className="text-on-surface-variant text-sm mb-4">Still have questions? We'd love to chat.</p>
          <a href="mailto:hello@aceshipper.com.au" className="inline-flex items-center gap-2 text-primary font-black uppercase text-sm tracking-widest hover:underline transition-all">
            <span className="material-symbols-outlined text-base">mail</span>
            hello@aceshipper.com.au
          </a>
        </div>
      </div>
    </section>
  );
}
