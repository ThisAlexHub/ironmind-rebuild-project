
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is IronMind therapy?",
      answer: "No. It's a system to make you better."
    },
    {
      question: "Is it private?",
      answer: "100%. No logs. No judgments."
    },
    {
      question: "Is this for me?",
      answer: "If you're reading this, probably."
    },
    {
      question: "Will it make her come back?",
      answer: "That's not the goal. But it might make her regret leaving."
    },
    {
      question: "How is this different from other apps?",
      answer: "Other apps want you to feel better. We want you to be better."
    }
  ];

  return (
    <section className="py-20 bg-steel-gunmetal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl md:text-6xl font-bold text-white mb-6">
            FAQ
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-steel-navy border border-steel-gunmetal rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-steel-gunmetal transition-colors"
              >
                <h3 className="font-oswald text-xl font-medium text-white">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-6 h-6 text-steel-orange transition-transform ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <p className="text-steel-light font-inter text-lg">
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
