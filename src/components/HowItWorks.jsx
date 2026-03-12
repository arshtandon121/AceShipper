const HowItWorks = () => {
    return (
        <section className="how-it-works">
            <div className="container">
                <div className="section-header animate-fade-in">
                    <h2 className="section-title">How <span className="text-gradient">Aceshipper</span> Works</h2>
                    <p className="section-subtitle">
                        Four simple steps to fully automated, hands-off order fulfillment.
                    </p>
                </div>

                <div className="steps-container">

                    <div className="step-card animate-fade-in">
                        <div className="step-number">1</div>
                        <div className="step-content">
                            <h3 className="step-title">Connect Your Store</h3>
                            <p className="step-desc">
                                Seamlessly integrate your Shopify, WooCommerce, or custom eCommerce platform with Aceshipper in minutes using our plug-and-play integrations. Your orders instantly sync with our system.
                            </p>
                        </div>
                    </div>

                    <div className="step-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        <div className="step-number">2</div>
                        <div className="step-content">
                            <h3 className="step-title">Send Us Inventory</h3>
                            <p className="step-desc">
                                Ship your products directly to our high-tech fulfillment centers. Our autonomous receiving robots instantly categorize and safely store your items across vertical shelving grids.
                            </p>
                        </div>
                    </div>

                    <div className="step-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <div className="step-number">3</div>
                        <div className="step-content">
                            <h3 className="step-title">We Pick & Pack</h3>
                            <p className="step-desc">
                                When an order drops, our automated picking fleets grab the item with 99.9% accuracy. Precision robotic arms carefully pack your products into custom-branded boxes to delight your end customers.
                            </p>
                        </div>
                    </div>

                    <div className="step-card animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        <div className="step-number">4</div>
                        <div className="step-content">
                            <h3 className="step-title">Rapid Delivery</h3>
                            <p className="step-desc">
                                Packed orders are immediately sorted onto outbound fleets. We utilize an autonomous delivery network spanning drones and automated vans to get products to hands faster than ever.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
