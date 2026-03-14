const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="logo" style={{ justifyContent: 'center', marginBottom: '1.5rem', opacity: 0.8 }}>
                    <img src="/logo_ace_shipper.png" alt="Ace Shipper Logo" style={{ height: '48px', width: 'auto' }} />
                    Aceshipper
                </div>
                <p>© {new Date().getFullYear()} Aceshipper Logistics. All rights reserved.</p>
                <p style={{ fontSize: '0.875rem', marginTop: '0.5rem', opacity: 0.6 }}>Redefining Pick & Pack Fulfillment</p>
            </div>
        </footer>
    );
};

export default Footer;
