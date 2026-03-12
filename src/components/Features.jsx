import { useState } from 'react';

const Features = () => {
    const [activeTab, setActiveTab] = useState('picking');

    const tabs = {
        picking: {
            id: 'picking',
            title: 'Smart Picking',
            tagline: 'Automated Operations',
            heading: 'Scaling made simple with intelligent routing',
            desc: "Don't let fulfillment bottleneck your growth. Aceshipper's robotic fleets rapidly traverse the warehouse, selecting items with 99.9% accuracy.",
            image: '/images/tab-picking.png',
            features: [
                'AI algorithms optimize routing paths',
                'Robot fleets coordinate to prevent congestion',
                'Real-time inventory synchronization'
            ]
        },
        packing: {
            id: 'packing',
            title: 'Precision Packing',
            tagline: 'Customization at scale',
            heading: 'Delight customers with perfect unboxing',
            desc: 'Our advanced packing stations combine automation with meticulous handling to box items immaculately, maintaining your brand standards.',
            image: '/images/tab-packing.png',
            features: [
                'Custom branding and inserts included',
                'Box-sizing algorithms reduce wasted space',
                'Secure cushioning for fragile products'
            ]
        },
        shipping: {
            id: 'shipping',
            title: 'Rapid Shipping',
            tagline: 'Speed to doorstep',
            heading: 'Get products to hands faster than ever',
            desc: 'Once packed, orders are immediately routed out. We tap into an autonomous logistics network to ensure lightning fast delivery globally.',
            image: '/images/tab-shipping.png',
            features: [
                'Partnerships with top tier global carriers',
                'Autonomous last-mile delivery fleets',
                'Transparent tracking for you and your customer'
            ]
        }
    };

    const activeContent = tabs[activeTab];

    return (
        <section id="features" className="features">
            <div className="container">
                <div className="section-header animate-fade-in">
                    <h2 className="section-title">Why Choose <span className="text-gradient">Aceshipper</span></h2>
                    <p className="section-subtitle">
                        We provide end-to-end logistics solutions tailored for rapid growth and customer satisfaction.
                    </p>
                </div>

                <div className="tabs-container animate-fade-in">
                    <div className="tabs-nav glass">
                        {Object.keys(tabs).map(key => (
                            <button
                                key={key}
                                className={`tab-btn ${activeTab === key ? 'active' : ''}`}
                                onClick={() => setActiveTab(key)}
                            >
                                {tabs[key].title}
                            </button>
                        ))}
                    </div>

                    <div className="features-showcase glass-panel" key={activeTab} style={{ animation: 'fade-in-up 0.5s ease-out' }}>
                        <div className="showcase-content">
                            <div className="tagline" style={{ color: '#fb923c', background: 'rgba(249, 115, 22, 0.1)', borderColor: 'rgba(249, 115, 22, 0.3)' }}>
                                {activeContent.tagline}
                            </div>
                            <h3 className="showcase-title">{activeContent.heading.split(' ').map((word, i) => i === activeContent.heading.split(' ').length - 1 ? <span key={i} className="text-gradient-orange">{word}</span> : word + ' ')}</h3>
                            <p className="showcase-desc">
                                {activeContent.desc}
                            </p>
                            <ul className="showcase-list">
                                {activeContent.features.map((feature, i) => (
                                    <li key={i}>
                                        <svg className="check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="showcase-image-container">
                            <img
                                src={activeContent.image}
                                alt={activeContent.title}
                                className="showcase-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
