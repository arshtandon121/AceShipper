import { useState } from 'react';
import smartPickingImg from '../assets/smart_picking.png';
import precisionPackingImg from '../assets/precision_packing.png';
import rapidShippingImg from '../assets/rapid_shipping.png';

const cards = [
    {
        id: 'picking',
        title: 'Smart Picking',
        tagline: 'Automated Operations',
        heading: 'Scaling made simple with intelligent routing',
        desc: "Don't let fulfillment bottleneck your growth. Aceshipper's robotic fleets rapidly traverse the warehouse, selecting items with 99.9% accuracy.",
        image: smartPickingImg,
        features: [
            'AI algorithms optimize routing paths',
            'Robot fleets coordinate to prevent congestion',
            'Real-time inventory synchronization'
        ],
        accentColor: 'rgba(37, 99, 235, 0.3)',
        glowColor: 'rgba(37, 99, 235, 0.2)'
    },
    {
        id: 'packing',
        title: 'Precision Packing',
        tagline: 'Customization at scale',
        heading: 'Delight customers with perfect unboxing',
        desc: 'Our advanced packing stations combine automation with meticulous handling to box items immaculately, maintaining your brand standards.',
        image: precisionPackingImg,
        features: [
            'Custom branding and inserts included',
            'Box-sizing algorithms reduce wasted space',
            'Secure cushioning for fragile products'
        ],
        accentColor: 'rgba(139, 92, 246, 0.3)',
        glowColor: 'rgba(139, 92, 246, 0.2)'
    },
    {
        id: 'shipping',
        title: 'Rapid Shipping',
        tagline: 'Speed to doorstep',
        heading: 'Get products to hands faster than ever',
        desc: 'Once packed, orders are immediately routed out. We tap into an autonomous logistics network to ensure lightning fast delivery globally.',
        image: rapidShippingImg,
        features: [
            'Partnerships with top tier global carriers',
            'Autonomous last-mile delivery fleets',
            'Transparent tracking for you and your customer'
        ],
        accentColor: 'rgba(249, 115, 22, 0.3)',
        glowColor: 'rgba(249, 115, 22, 0.2)'
    }
];

const FlipCard = ({ card }) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
            className={`flip-card ${flipped ? 'flipped' : ''}`}
            onMouseEnter={() => setFlipped(true)}
            onMouseLeave={() => setFlipped(false)}
            onClick={() => setFlipped(f => !f)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setFlipped(f => !f); }}
            aria-label={`${card.title} — tap or hover to see image`}
        >
            <div className="flip-card-inner">
                {/* FRONT */}
                <div className="flip-card-front glass" style={{ borderColor: card.accentColor }}>
                    <div
                        className="flip-card-glow"
                        style={{ background: `radial-gradient(ellipse at top left, ${card.glowColor}, transparent 70%)` }}
                    />
                    <div className="flip-front-tag">{card.tagline}</div>
                    <h3 className="flip-front-title">{card.title}</h3>
                    <p className="flip-front-desc">{card.desc}</p>
                    <ul className="flip-front-list">
                        {card.features.map((f, i) => (
                            <li key={i}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                {f}
                            </li>
                        ))}
                    </ul>
                    <div className="flip-hint">
                        <span>Hover to reveal</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 2H3v16h5v4l4-4h5l4-4V2z" /><path d="M11 7v2" /><path d="M11 13h.01" /></svg>
                    </div>
                </div>

                {/* BACK */}
                <div className="flip-card-back glass" style={{ borderColor: card.accentColor }}>
                    <div
                        className="flip-card-glow"
                        style={{ background: `radial-gradient(ellipse at bottom right, ${card.glowColor}, transparent 70%)` }}
                    />
                    <div className="flip-back-image-wrap">
                        <img src={card.image} alt={card.title} />
                    </div>
                    <div className="flip-back-label">{card.title}</div>
                </div>
            </div>
        </div>
    );
};

const Features = () => {
    return (
        <section id="features" className="features">
            <div className="container">
                <div className="section-header animate-fade-in">
                    <h2 className="section-title">Why Choose <span className="text-gradient">Aceshipper</span></h2>
                    <p className="section-subtitle">
                        We provide end-to-end logistics solutions tailored for rapid growth and customer satisfaction.
                    </p>
                </div>

                <p className="flip-instruction animate-fade-in">Hover or tap a card to reveal the magic ✨</p>

                <div className="flip-cards-grid animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    {cards.map((card, i) => (
                        <FlipCard key={card.id} card={card} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
