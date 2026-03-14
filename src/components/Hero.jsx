import ParticlesBackground from './ParticlesBackground';

const Hero = () => {
    const scrollToForm = (e) => {
        e.preventDefault();
        document.querySelector('#early-access').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="hero">
            <video autoPlay loop muted playsInline className="hero-video-bg">
                <source src="/images/hero-bg.mp4" type="video/mp4" />
            </video>
            <div className="hero-overlay"></div>
            <ParticlesBackground />

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div className="hero-grid" style={{ gridTemplateColumns: '1fr', textAlign: 'center' }}>
                    <div className="hero-content animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                            <img
                                src="/logo_ace_shipper.png"
                                alt="Ace Shipper Logo"
                                style={{
                                    height: '160px',
                                    width: 'auto',
                                    filter: 'drop-shadow(0 0 24px rgba(99,179,237,0.6)) drop-shadow(0 0 8px rgba(255,255,255,0.3))',
                                    animation: 'logoPulse 3s ease-in-out infinite',
                                }}
                            />
                        </div>
                        <style>{`
                            @keyframes logoPulse {
                                0%, 100% { filter: drop-shadow(0 0 24px rgba(99,179,237,0.6)) drop-shadow(0 0 8px rgba(255,255,255,0.3)); transform: scale(1); }
                                50% { filter: drop-shadow(0 0 40px rgba(99,179,237,0.9)) drop-shadow(0 0 20px rgba(255,255,255,0.5)); transform: scale(1.04); }
                            }
                        `}</style>
                        <div className="tagline">Next-Gen Logistics</div>
                        <h1 className="hero-title" style={{ fontSize: '5.5rem' }}>
                            Seamless <span className="text-gradient">Pick & Pack</span><br />
                            For Your Business
                        </h1>
                        <p className="hero-subtitle" style={{ margin: '0 auto 2.5rem', maxWidth: '600px', fontSize: '1.25rem' }}>
                            Aceshipper redefines fulfillment with automated precision. Focus on growing your brand while we handle the heavy lifting of inventory, packing, and shipping.
                        </p>
                        <div className="hero-cta" style={{ justifyContent: 'center' }}>
                            <a href="#early-access" onClick={scrollToForm} className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.25rem' }}>
                                Get Early Access
                            </a>
                            <a href="#features" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.25rem' }}>
                                Explore Features
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
