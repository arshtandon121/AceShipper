const EarlyBirdBanner = () => {
    const scrollToForm = () => {
        const formSection = document.querySelector('.cta-section');
        if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="early-bird-section">
            <div className="container">
                <div className="early-bird-banner glass animate-fade-in">
                    <div className="early-bird-glow" />
                    <div className="early-bird-content">
                        <div className="early-bird-badge">🎁 Limited Time Offer</div>
                        <h2 className="early-bird-title">
                            First <span className="text-gradient-orange">10 Shipments</span> on Us
                        </h2>
                        <p className="early-bird-desc">
                            Sign up for early access today and get your first 10 pickups at discounted rates.
                        </p>
                        <button className="btn btn-orange early-bird-cta" onClick={scrollToForm}>
                            Claim Discounted Shipments →
                        </button>
                    </div>
                    <div className="early-bird-decoration">
                        <div className="eb-float eb-float-1">📦</div>
                        <div className="eb-float eb-float-2">🚀</div>
                        <div className="eb-float eb-float-3">✨</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EarlyBirdBanner;
