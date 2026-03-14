import { useState } from 'react';

const faqData = [
    {
        question: "What cities do you serve?",
        answer: "We are currently launching in major metro cities across India. Join our early access list and we'll notify you as soon as we go live in your city!"
    },
    {
        question: "What's the maximum parcel weight allowed?",
        answer: "We support parcels up to 30 kg per item. For heavier or bulk shipments, reach out to us through the enquiry form and we'll arrange a custom solution."
    },
    {
        question: "How do I track my shipment?",
        answer: "Once your parcel is picked up, you'll receive a unique tracking link via SMS and email. You can monitor real-time status directly from your Aceshipper dashboard."
    },
    {
        question: "How much does it cost?",
        answer: "Our rates start as low as ₹35 per shipment, depending on weight and destination. We negotiate bulk discounts with top carriers and pass the savings to you — no hidden fees, ever."
    },
    {
        question: "Do I need to pack my items before pickup?",
        answer: "No! That's what we do. Just hand over your products — our team picks them up, professionally packs them with secure materials, and ships them out. Truly hassle-free."
    },
    {
        question: "How do I get started?",
        answer: "Simply fill out the early access form on this page. We'll reach out to onboard you, set up your dashboard, and schedule your first pickup — all within 24 hours."
    }
];

const FAQItem = ({ item, isOpen, onClick }) => {
    return (
        <div className={`faq-item glass ${isOpen ? 'faq-open' : ''}`} onClick={onClick}>
            <button className="faq-question" aria-expanded={isOpen}>
                <span>{item.question}</span>
                <svg
                    className={`faq-chevron ${isOpen ? 'rotated' : ''}`}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </button>
            <div className={`faq-answer ${isOpen ? 'faq-answer-open' : ''}`}>
                <p>{item.answer}</p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section" id="faq">
            <div className="container">
                <div className="section-header animate-fade-in">
                    <h2 className="section-title">
                        Got <span className="text-gradient">Questions?</span>
                    </h2>
                    <p className="section-subtitle">
                        Everything you need to know about Aceshipper, answered.
                    </p>
                </div>

                <div className="faq-list animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    {faqData.map((item, index) => (
                        <FAQItem
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onClick={() => toggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
