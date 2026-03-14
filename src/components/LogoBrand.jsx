import { useState, useEffect, useRef } from 'react';

const LogoBrand = () => {
    const [colored, setColored] = useState(false);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
    const [hovered, setHovered] = useState(false);
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

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => {
        setHovered(false);
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
                @keyframes bwReveal {
                    0% { filter: grayscale(1) brightness(0.8); }
                    100% { filter: grayscale(0) brightness(1); }
                }
                @keyframes floatLogo {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-12px); }
                }
                @keyframes ringPulse {
                    0% { transform: scale(1); opacity: 0.6; }
                    100% { transform: scale(1.6); opacity: 0; }
                }
                .logo-brand-card {
                    transition: transform 0.15s ease, box-shadow 0.3s ease;
                    cursor: pointer;
                    position: relative;
                }
                .logo-brand-img {
                    transition: filter 3s ease;
                    animation: floatLogo 4s ease-in-out infinite;
                    pointer-events: none;
                    user-select: none;
                }
                .logo-brand-ring {
                    position: absolute;
                    border-radius: 50%;
                    border: 2px solid rgba(99, 179, 237, 0.5);
                    animation: ringPulse 2.5s ease-out infinite;
                    pointer-events: none;
                }
            `}</style>

            {/* Subtle ambient glow rings */}
            <div style={{ position: 'relative', display: 'inline-block' }}>
                {hovered && [1.2, 1.5, 1.8].map((scale, i) => (
                    <div key={i} className="logo-brand-ring" style={{
                        width: '220px', height: '220px',
                        top: '50%', left: '50%',
                        marginTop: '-110px', marginLeft: '-110px',
                        animationDelay: `${i * 0.5}s`,
                    }} />
                ))}

                {/* 3D tilt card */}
                <div
                    ref={cardRef}
                    className="logo-brand-card"
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${hovered ? 1.06 : 1})`,
                        borderRadius: '24px',
                        padding: '2rem',
                        background: hovered
                            ? `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(99,179,237,0.12) 0%, transparent 70%)`
                            : 'transparent',
                        boxShadow: hovered
                            ? `0 30px 80px rgba(99,179,237,0.3), 0 0 0 1px rgba(99,179,237,0.15)`
                            : 'none',
                    }}
                >
                    <img
                        src="/logo_ace_shipper.png"
                        alt="Ace Shipper Logo"
                        className="logo-brand-img"
                        style={{
                            height: '260px',
                            width: 'auto',
                            display: 'block',
                            filter: colored
                                ? `drop-shadow(0 0 ${hovered ? '40px' : '20px'} rgba(99,179,237,${hovered ? '0.8' : '0.4'}))`
                                : 'grayscale(1) brightness(0.75)',
                            transition: colored
                                ? 'filter 0.4s ease'
                                : 'filter 3s ease',
                        }}
                    />
                </div>
            </div>

            {/* Label below */}
            <div style={{
                marginTop: '2rem',
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
                }}>Hover to interact</p>
            </div>
        </section>
    );
};

export default LogoBrand;
