import { useState } from 'react';

const Form = () => {
    const [status, setStatus] = useState('idle');

    const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userIp = sessionStorage.getItem('aceshipper_user_ip') || 'Unknown';
        const userLocation = sessionStorage.getItem('aceshipper_user_location') || 'Unknown';

        const formData = {
            event_type: "Form Submit",
            name: e.target.name.value,
            email: e.target.email.value,
            city: e.target.city.value,
            phone: e.target.phone.value,
            comment: e.target.comment.value || '',
            ip: userIp,
            location: userLocation,
            date: new Date().toISOString()
        };

        if (!validateEmail(formData.email)) {
            alert('Please enter a valid email address.');
            return;
        }

        setStatus('submitting');

        // Google Apps Script Web App URL
        const URL = 'https://script.google.com/macros/s/AKfycbxHSBbhTqugvSH18RMV7Oq2y7UWAsXtzJiRu1wQR7pcqvX-wuZv-sEGh5q4gGSgjjTA/exec';

        if (URL === 'YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE') {
            // Simulate success if the user hasn't put their URL in yet to not break the frontend demo
            setTimeout(() => {
                setStatus('success');
                e.target.reset();
            }, 1500);
            console.warn("Please replace 'YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE' with your actual Google Apps Script Web App URL in Form.jsx");
            return;
        }

        try {
            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                e.target.reset();
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting the form. Please try again later.');
            setStatus('idle');
        }
    };

    return (
        <section id="early-access" className="cta-section">
            <div className="bg-glow glow-bottom-left"></div>

            <div className="container">
                <div className="cta-container glass-panel">
                    <div className="cta-content">
                        <h2 className="cta-title">Aceshipper Will Be In <span className="text-gradient">Your City</span></h2>
                        <p className="cta-subtitle">
                            Join the waitlist today. We are expanding rapidly and giving priority to early registrants when we launch in new locations.
                        </p>

                        {status === 'success' ? (
                            <div className="success-message">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto 1rem', display: 'block' }}>
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'white' }}>You're on the list!</h3>
                                <p>We'll notify you as soon as Aceshipper arrives in your city.</p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="btn btn-outline"
                                    style={{ marginTop: '1.5rem' }}
                                >
                                    Register Another Location
                                </button>
                            </div>
                        ) : (
                            <form className="early-access-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="name">Full Name</label>
                                    <input type="text" id="name" className="form-input" placeholder="John Doe" required />
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="email">Email Address</label>
                                    <input type="email" id="email" className="form-input" placeholder="john@company.com" required />
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="city">Your City</label>
                                    <input type="text" id="city" className="form-input" placeholder="New York City" required />
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="phone">Phone Number</label>
                                    <input type="tel" id="phone" className="form-input" placeholder="(555) 123-4567" required />
                                </div>

                                <div className="form-group full-width">
                                    <label className="form-label" htmlFor="comment">Suggestions / Comments <span style={{ opacity: 0.5, fontWeight: 400 }}>(optional)</span></label>
                                    <textarea
                                        id="comment"
                                        className="form-input"
                                        placeholder="Any special requirements or questions..."
                                        rows="3"
                                        style={{ resize: 'vertical', minHeight: '80px', lineHeight: '1.6' }}
                                    />
                                </div>

                                <div className="form-group full-width">
                                    <button type="submit" className="btn btn-orange form-submit" disabled={status === 'submitting'}>
                                        {status === 'submitting' ? 'Processing...' : 'Secure Early Access'}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Form;
