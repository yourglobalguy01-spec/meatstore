import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQS = [
  { q: "Where does your meat come from?", a: "All our meat is sourced from certified sustainable, free-range Canadian farms. We maintain strict relationships with our farmers to ensure premium quality." },
  { q: "How is the meat packaged for delivery?", a: "Every cut is vacuum-sealed immediately after processing and shipped in specialized thermal packaging with eco-friendly ice packs to maintain safe temperatures." },
  { q: "Do you use any preservatives or chemicals?", a: "Absolutely not. Our meat is 100% natural. We rely on temperature control, vacuum sealing, and high hygiene standards to maintain absolute freshness." },
  { q: "How long does shipping take?", a: "We offer next-day delivery for all orders placed before 2 PM within our primary service zones. You'll receive tracking information as soon as it leaves our facility." },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-white text-[#1F3B54] border-t border-[#1F3B54]/10">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-red-700 mb-6 font-serif italic">Support</h2>
          <h3 className="text-5xl md:text-7xl font-heading font-black tracking-tighter leading-[0.9] mb-8 uppercase text-[#1F3B54]">
            Questions? <br/>We have answers.
          </h3>
          <p className="font-body text-[#1F3B54]/70 text-lg max-w-sm mb-12 leading-relaxed">
            Can't find what you're looking for? Reach out to our customer care team and a master butcher will assist you.
          </p>
          <button className="border-2 border-[#1F3B54] bg-transparent text-[#1F3B54] px-10 py-4 font-bold text-sm tracking-[0.2em] uppercase hover:bg-[#1F3B54] hover:text-[#ffffff] transition-colors">
            Contact Us
          </button>
        </div>

        <div className="space-y-4 pt-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="border-b border-[#1F3B54]/20 overflow-hidden">
              <button 
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-heading font-bold text-2xl pr-8 tracking-wide group-hover:text-red-700 transition-colors uppercase">{faq.q}</span>
                <ChevronDown 
                  className={`w-6 h-6 transform transition-transform duration-300 text-red-700 flex-shrink-0 ${openIndex === i ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <p className="pb-8 font-body text-[#1F3B54]/70 leading-relaxed text-lg">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
