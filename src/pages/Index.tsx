
import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import WhatIronMindIs from '@/components/WhatIronMindIs';
import WhyNotTherapy from '@/components/WhyNotTherapy';
import TestimonialsSection from '@/components/TestimonialsSection';
import EmailSignup from '@/components/EmailSignup';
import AboutSection from '@/components/AboutSection';
import FAQSection from '@/components/FAQSection';

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
      <HeroSection />
      <WhatIronMindIs />
      <WhyNotTherapy />
      <TestimonialsSection />
      <EmailSignup />
      <AboutSection />
      <FAQSection />
    </div>
  );
};

export default Index;
