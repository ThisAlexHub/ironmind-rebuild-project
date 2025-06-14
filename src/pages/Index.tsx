import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhatIronMindIs from '@/components/WhatIronMindIs';
import WhyNotTherapy from '@/components/WhyNotTherapy';
import PremiumFeaturesSection from '@/components/PremiumFeaturesSection';
import WhyItWorksSection from '@/components/WhyItWorksSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import EmailSignup from '@/components/EmailSignup';
import AboutSection from '@/components/AboutSection';
import FAQSection from '@/components/FAQSection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add scroll animation trigger
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    // Observe all elements with section-fade-in class
    const elements = document.querySelectorAll('.section-fade-in, .text-slide-in');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WhatIronMindIs />
      <WhyNotTherapy />
      <PremiumFeaturesSection />
      <WhyItWorksSection />
      <TestimonialsSection />
      <EmailSignup />
      <AboutSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
