const badges = [
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
            </svg>
        ),
        title: "Insured Shipments",
        desc: "Every parcel is fully insured"
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
        title: "Same-Day Pickup",
        desc: "Book before 2 PM, we pick up today"
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                <line x1="1" y1="10" x2="23" y2="10" />
            </svg>
        ),
        title: "No Hidden Fees",
        desc: "Transparent pricing, always"
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
        ),
        title: "24/7 Support",
        desc: "Reach us anytime, any day"
    }
];

const TrustBadges = () => {
    return (
        <section className="trust-badges-section">
            <div className="container">
                <div className="trust-badges-grid animate-fade-in">
                    {badges.map((badge, index) => (
                        <div className="trust-badge" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="trust-badge-icon">{badge.icon}</div>
                            <div className="trust-badge-text">
                                <h4 className="trust-badge-title">{badge.title}</h4>
                                <p className="trust-badge-desc">{badge.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBadges;
