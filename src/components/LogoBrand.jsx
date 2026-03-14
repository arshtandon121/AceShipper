import { useState, useEffect, useRef } from 'react';

const LogoBrand = () => {
    const [colored, setColored] = useState(false);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
    const [hovered, setHovered] = useState(false);
    const [tvOn, setTvOn] = useState(false);
    const cardRef = useRef(null);

    // After 3 seconds, transition from B&W to color
    useEffect(() => {
        const timer = setTimeout(() => setColored(true), 3000);
        return () => clearTimeout(timer);
    }, []);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const tiltX = ((y - cy) / cy) * 12;
        const tiltY = ((cx - x) / cx) * 12;
        const glowX = (x / rect.width) * 100;
        const glowY = (y / rect.height) * 100;
        setTilt({ x: tiltX, y: tiltY });
        setGlowPos({ x: glowX, y: glowY });
    };

    const handleMouseEnter = () => {
        setHovered(true);
        setTvOn(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
        setTvOn(false);
        setTilt({ x: 0, y: 0 });
        setGlowPos({ x: 50, y: 50 });
    };

    return (
        <section style={{
            padding: '5rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(180deg, #0a0f1e 0%, #0d1527 100%)',
            overflow: 'hidden',
            position: 'relative',
        }}>
            <style>{`
                @keyframes floatLogo {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-12px); }
                }
                @keyframes ringPulse {
                    0% { transform: scale(1); opacity: 0.6; }
                    100% { transform: scale(1.6); opacity: 0; }
                }
                @keyframes tvTurnOn {
                    0% { transform: scale(1, 0.005); filter: brightness(10); opacity: 1; }
                    40% { transform: scale(1, 0.02); filter: brightness(5); opacity: 1; }
                    100% { transform: scale(1, 1); filter: brightness(1); opacity: 1; }
                }
                @keyframes crtFlicker {
                    0% { opacity: 0.95; }
                    5% { opacity: 0.85; }
                    10% { opacity: 0.95; }
                    15% { opacity: 1; }
                    100% { opacity: 1; }
                }
                @keyframes scanlines {
                    0% { background-position: 0 0; }
                    100% { background-position: 0 100%; }
                }
                @keyframes moveBox {
                    0% { transform: translateX(-150px) translateY(0); }
                    100% { transform: translateX(500px) translateY(0); }
                }
                @keyframes rollerSpin {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-24px); }
                }
                @keyframes laserScan {
                    0%, 30% { opacity: 0; height: 0; }
                    40% { opacity: 0.8; height: 100px; transform: translateY(-50px); }
                    60% { opacity: 0.8; height: 100px; transform: translateY(50px); }
                    70%, 100% { opacity: 0; height: 0; }
                }
                .logo-brand-card {
                    transition: transform 0.15s ease, box-shadow 0.3s ease;
                    cursor: pointer;
                    position: relative;
                    border-radius: 24px;
                    background: transparent;
                }
                .tv-screen {
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    border-radius: 24px;
                    overflow: hidden;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    background: #0a0f1e;
                }
                .tv-screen.on {
                    opacity: 1;
                    animation: tvTurnOn 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
                }
                .crteffect {
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
                    background-size: 100% 4px, 6px 100%;
                    z-index: 5;
                    pointer-events: none;
                    animation: scanlines 10s linear infinite, crtFlicker 0.15s infinite;
                    box-shadow: inset 0 0 40px rgba(0,0,0,0.8);
                }
            `}</style>

            <div style={{ position: 'relative', display: 'inline-block' }}>
                {hovered && [1.2, 1.5, 1.8].map((scale, i) => (
                    <div key={i} className="" style={{
                        position: 'absolute',
                        borderRadius: '50%',
                        border: '2px solid rgba(99, 179, 237, 0.5)',
                        animation: 'ringPulse 2.5s ease-out infinite',
                        pointerEvents: 'none',
                        width: '220px', height: '220px',
                        top: '50%', left: '50%',
                        marginTop: '-110px', marginLeft: '-110px',
                        animationDelay: `${i * 0.5}s`,
                    }} />
                ))}

                <div
                    ref={cardRef}
                    className="logo-brand-card"
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${hovered ? 1.06 : 1})`,
                        padding: '3rem',
                        boxShadow: hovered
                            ? '0 30px 80px rgba(99,179,237,0.3), 0 0 0 1px rgba(99,179,237,0.15)'
                            : 'none',
                        width: '400px',
                        height: '260px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    {/* TV Screen overlay containing the video */}
                    <div className={`tv-screen ${tvOn ? 'on' : ''}`}>
                        <video
                            ref={videoRef}
                            src="/images/Pick_and_Pack_Video_Creation.mp4"
                            muted
                            loop
                            playsInline
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <div className="crteffect"></div>
                        <div style={{
                            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                            background: tvOn ? 'rgba(10, 20, 40, 0.4)' : 'transparent',
                            zIndex: 4
                        }}></div>

                        {/* Glow spot following mouse inside TV */}
                        <div style={{
                            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                            background: tvOn ? `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(99,179,237,0.3) 0%, transparent 60%)` : 'transparent',
                            zIndex: 6, pointerEvents: 'none'
                        }}></div>
                    </div>

                    <img
                        src="/logo_ace_shipper.png"
                        alt="Ace Shipper Logo"
                        style={{
                            height: '180px',
                            width: 'auto',
                            display: 'block',
                            position: 'relative',
                            zIndex: 10,
                            animation: 'floatLogo 4s ease-in-out infinite',
                            filter: tvOn
                                ? `drop-shadow(0 0 20px rgba(99,179,237,1)) brightness(1.5)`
                                : (colored ? 'drop-shadow(0 0 20px rgba(99,179,237,0.4))' : 'grayscale(1) brightness(0.75)'),
                            transform: tvOn ? 'scale(0.9)' : 'scale(1)',
                            transition: 'all 0.4s ease',
                            pointerEvents: 'none'
                        }}
                    />
                </div>
            </div>

            <div style={{
                marginTop: '1.5rem',
                textAlign: 'center',
                opacity: colored ? 1 : 0.4,
                transition: 'opacity 2s ease',
            }}>
                <p style={{
                    fontSize: '0.85rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#63b3ed',
                    fontWeight: 600,
                }}>Hover to broadcast</p>
            </div>
        </section>
    );
};

export default LogoBrand;
