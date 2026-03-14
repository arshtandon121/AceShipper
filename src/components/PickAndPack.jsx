import doorstepPickupImg from '../assets/doorstep_pickup.png';
import packingStationImg from '../assets/packing_station.png';
import bestCourierRatesImg from '../assets/best_courier_rates.png';

const PickAndPack = () => {
    return (
        <section className="pick-and-pack" id="services">
            <div className="container">
                <div className="section-header animate-fade-in">
                    <h2 className="section-title">
                        Hassle-Free <span className="text-gradient-orange">Pick & Pack</span>
                    </h2>
                    <p className="section-subtitle">
                        From your doorstep to their hands — we handle every step with precision and care.
                    </p>
                </div>

                <div className="bento-grid animate-fade-in" style={{ animationDelay: '0.15s' }}>

                    {/* Large Card - Doorstep Pickup */}
                    <div className="bento-card bento-large glass">
                        <div className="bento-card-content">
                            <div className="bento-label">Step 01</div>
                            <h3 className="bento-title">Doorstep Courier Pickup</h3>
                            <p className="bento-desc">
                                Book a courier directly from your Aceshipper dashboard. Schedule a pickup, and our agent arrives at your doorstep — no queues, no stress.
                            </p>
                            <ul className="bento-feature-list">
                                <li>🗓️ Schedule pickup in under 60 seconds</li>
                                <li>📍 Real-time agent tracking on map</li>
                                <li>🏠 Collected right from your door</li>
                                <li>📦 Multiple parcel sizes supported</li>
                            </ul>
                        </div>
                        <div className="bento-card-image bento-image-large">
                            <img src={doorstepPickupImg} alt="Courier picking up parcel from doorstep" />
                        </div>
                    </div>

                    {/* Small Card - Pack & Ship */}
                    <div className="bento-card bento-small glass">
                        <div className="bento-card-content">
                            <div className="bento-label">Step 02</div>
                            <h3 className="bento-title">We Pick, Pack & Ship</h3>
                            <p className="bento-desc">
                                Our automated hubs pack your orders securely and dispatch them through our optimised carrier network — fast, safe, and branded.
                            </p>
                        </div>
                        <div className="bento-card-image bento-image-small">
                            <img src={packingStationImg} alt="Automated packing station" />
                        </div>
                    </div>

                    {/* Small Card - Best Rates */}
                    <div className="bento-card bento-small bento-accent glass">
                        <div className="bento-card-content">
                            <div className="bento-label">Step 03</div>
                            <h3 className="bento-title">Best Courier Rates</h3>
                            <p className="bento-desc">
                                Leverage our volume to unlock unbeatable discounts from top global carriers — passed directly to you, saving up to 40%.
                            </p>
                        </div>
                        <div className="bento-card-image bento-image-small">
                            <img src={bestCourierRatesImg} alt="Competitive courier rates" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PickAndPack;
