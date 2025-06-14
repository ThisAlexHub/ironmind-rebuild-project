import { useState, useEffect, useRef } from 'react';
import EmailCaptureModal from './EmailCaptureModal';

const FinalCTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section ref={sectionRef} id="early-access" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <div className={`max-w-3xl mx-auto space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="font-oswald text-4xl md:text-6xl font-bold text-white leading-tight">
              Ready to stop surviving and start <span className="text-red-500">rebuilding</span>?
            </h2>

            <div className="text-xl text-gray-300 font-inter">
              The storm hit. Now it's time to build something stronger from the wreckage.
            </div>

            <div className="pt-6">
              <button
                id="final-cta-pricing-btn"
                onClick={() => setIsModalOpen(true)}
                className="iron-button rounded-lg font-oswald text-xl px-10 py-5 mb-4"
              >
                Claim Early Access for $4.99 →
              </button>
              <p className="text-gray-400 font-inter">
                50% off. Limited time. Cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      <EmailCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default FinalCTASection;
