import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoBrand from './components/LogoBrand';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Form from './components/Form';
import Footer from './components/Footer';
import './App.css';

function App() {
  // Add animation class to elements when they become visible
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.feature-card, .showcase-content, .showcase-image, .step-card').forEach((el) => {
      el.style.opacity = '0';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Fetch IP, Location and Log Visit
  useEffect(() => {
    const trackVisit = async () => {
      // Check if we've already logged a visit this session
      if (sessionStorage.getItem('aceshipper_visit_logged')) {
        return;
      }

      try {
        // Fetch public IP and Location
        const geoResponse = await fetch('https://ipapi.co/json/');
        const geoData = await geoResponse.json();

        const trackingData = {
          event_type: "Site Visit",
          name: "Anonymous Visitor",
          email: "N/A",
          city: "N/A",
          phone: "N/A",
          ip: geoData.ip || "Unknown",
          location: `${geoData.city || "Unknown City"}, ${geoData.country_name || "Unknown Country"}`,
          date: new Date().toISOString()
        };

        // Save IP and Location in session storage so the Form can use it later
        sessionStorage.setItem('aceshipper_user_ip', trackingData.ip);
        sessionStorage.setItem('aceshipper_user_location', trackingData.location);

        const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbwQ1pRcr6Avu7LLum8ffje3yfq48iw2AidkdB9-J8OV71CjpI0zsKNYmxHgBo4LzJON/exec';

        // Send 'Site Visit' event to Google Sheets
        await fetch(WEB_APP_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify(trackingData)
        });

        // Mark visit as logged for this session
        sessionStorage.setItem('aceshipper_visit_logged', 'true');
        console.log("Site visit logged successfully.");

      } catch (error) {
        console.error("Error tracking visit:", error);
      }
    };

    trackVisit();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoBrand />
        <HowItWorks />
        <Features />
        <Form />
      </main>
      <Footer />
    </>
  );
}

export default App;
