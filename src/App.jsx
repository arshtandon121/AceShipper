import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoBrand from './components/LogoBrand';
import HowItWorks from './components/HowItWorks';
import PickAndPack from './components/PickAndPack';
import TrustBadges from './components/TrustBadges';
import Features from './components/Features';
import EarlyBirdBanner from './components/EarlyBirdBanner';
import Form from './components/Form';
import FAQ from './components/FAQ';
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
        // Try multiple IP/geo APIs with fallback
        let ip = 'Unknown';
        let location = 'Unknown';

        try {
          // Primary: ipinfo.io (50k free requests/month, no CORS issues)
          const geoResponse = await fetch('https://ipinfo.io/json?token=', { signal: AbortSignal.timeout(5000) });
          const geoData = await geoResponse.json();
          ip = geoData.ip || 'Unknown';
          location = `${geoData.city || 'Unknown City'}, ${geoData.region || ''}, ${geoData.country || 'Unknown Country'}`.replace(', ,', ',');
        } catch {
          try {
            // Fallback: ipapi.co
            const fallbackResponse = await fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(5000) });
            const fallbackData = await fallbackResponse.json();
            ip = fallbackData.ip || 'Unknown';
            location = `${fallbackData.city || 'Unknown City'}, ${fallbackData.country_name || 'Unknown Country'}`;
          } catch {
            // Last resort: just get IP
            try {
              const ipResponse = await fetch('https://api.ipify.org?format=json', { signal: AbortSignal.timeout(5000) });
              const ipData = await ipResponse.json();
              ip = ipData.ip || 'Unknown';
            } catch {
              console.warn('Could not fetch IP address');
            }
          }
        }

        const trackingData = {
          event_type: "Site Visit",
          name: "Anonymous Visitor",
          email: "N/A",
          city: "N/A",
          phone: "N/A",
          comment: "",
          ip: ip,
          location: location,
          date: new Date().toISOString()
        };

        // Save IP and Location in session storage so the Form can use it later
        sessionStorage.setItem('aceshipper_user_ip', trackingData.ip);
        sessionStorage.setItem('aceshipper_user_location', trackingData.location);

        const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbxHSBbhTqugvSH18RMV7Oq2y7UWAsXtzJiRu1wQR7pcqvX-wuZv-sEGh5q4gGSgjjTA/exec';

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
        <PickAndPack />
        <TrustBadges />
        <Features />
        <EarlyBirdBanner />
        <Form />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

export default App;
