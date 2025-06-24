import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FAQSection = () => {
  const { t } = useTranslation();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: t('faq.0.question'),
      answer: t('faq.0.answer'),
    },
    {
      question: t('faq.1.question'),
      answer: t('faq.1.answer'),
    },
    {
      question: t('faq.2.question'),
      answer: t('faq.2.answer'),
    },
    {
      question: t('faq.3.question'),
      answer: t('faq.3.answer'),
    },
    {
      question: t('faq.4.question'),
      answer: t('faq.4.answer'),
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl md:text-6xl font-bold text-white mb-6">
            {t('faq.title')}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-black border border-gray-800 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-800 transition-colors"
              >
                <h3 className="font-oswald text-xl font-medium text-white">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-red-500 transition-transform ${openFAQ === index ? 'rotate-180' : ''
                    }`}
                />
              </button>

              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300 font-inter text-lg">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
