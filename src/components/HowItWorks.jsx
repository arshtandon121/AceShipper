import tabPickingImg  from '../assets/smart_picking.png';
import tabPackingImg  from '../assets/precision_packing.png';
import tabShippingImg from '../assets/rapid_shipping.png';

const steps = [
  {
    num: '01',
    icon: 'input',
    title: 'CONNECT YOUR STORE',
    desc: 'Seamlessly integrate your Shopify, WooCommerce, or Amazon store with Aceshipper in minutes. Your orders instantly sync with our system — zero manual work.',
    img: null,
  },
  {
    num: '02',
    icon: 'inventory_2',
    title: 'SEND US YOUR STOCK',
    desc: 'Ship your products directly to our Australian fulfillment centres. Our team receives, QC-checks, and safely stores your inventory — ready to ship from Day 1.',
    img: tabPickingImg,
  },
  {
    num: '03',
    icon: 'precision_manufacturing',
    title: 'WE PICK & PACK',
    desc: 'When an order arrives, we pick with 99.9% accuracy, pack in custom-branded boxes, and prepare for dispatch — all within hours of the order being placed.',
    img: tabPackingImg,
  },
  {
    num: '04',
    icon: 'rocket_launch',
    title: 'RAPID DELIVERY',
    desc: 'Packed orders go straight to our carrier network — Australia Post, DHL, StarTrack and more — for same-day or next-day delivery to your customers\' doorstep.',
    img: tabShippingImg,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-primary font-label text-[10px] tracking-[0.3em] uppercase">The Workflow</span>
          <h2 className="font-headline text-5xl font-black tracking-tighter mt-4">
            FROM STORE TO DOORSTEP<br />
            <span className="text-primary">IN 4 STEPS</span>
          </h2>
          <p className="text-on-surface-variant text-lg mt-4 max-w-xl">
            Four simple steps to fully automated, hands-off order fulfillment. No warehouse headaches. No staffing costs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-outline-variant/10">
          {steps.map((step) => (
            <div key={step.num} className="bg-surface p-12 hover:bg-surface-container transition-colors duration-500 relative group overflow-hidden">
              {/* Ghost number */}
              <div className="text-8xl font-black text-primary/10 absolute -top-4 -right-4 transition-transform group-hover:scale-110 font-headline select-none">
                {step.num}
              </div>
              {/* Icon */}
              <span className="material-symbols-outlined text-5xl text-primary mb-6 block">{step.icon}</span>
              <h3 className="font-headline text-2xl font-bold mb-4 uppercase tracking-tight">{step.title}</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">{step.desc}</p>
              {/* Photo for steps that have one */}
              {step.img && (
                <div className="relative overflow-hidden mt-4 border border-outline-variant/20 group-hover:border-primary/30 transition-colors">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-full h-40 object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
