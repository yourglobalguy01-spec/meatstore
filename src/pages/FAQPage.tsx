import { useState } from 'react';
import { SEO } from '../components/SEO';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    category: "Shipping & Delivery",
    questions: [
      { q: "How is the meat kept cold during transit?", a: "We ship all our products in eco-friendly, fully insulated packaging packed with dry ice. This guarantees that your order arrives frozen or perfectly chilled, no matter where you live." },
      { q: "Where do you deliver?", a: "We currently deliver to all 50 states. However, due to transit times, some highly remote areas may incur additional shipping costs." },
      { q: "Do I need to be home to receive my delivery?", a: "No, FedEx/UPS will leave the package at your door. Because it is packed with dry ice, it will remain safely cold until you arrive home that evening." }
    ]
  },
  {
    category: "Sourcing & Quality",
    questions: [
      { q: "Where does your meat come from?", a: "We partner directly with a select group of independent farms that adhere to strict animal welfare and sustainability standards. All our beef is pasture-raised and grain-finished for optimal marbling." },
      { q: "What does 'Prime' mean?", a: "Prime is the highest grade of beef awarded by the USDA, representing abundant marbling. Less than 2% of all beef produced in the US earns this designation." },
      { q: "Do your products contain hormones or antibiotics?", a: "Never. All Chopped products are 100% free of added hormones and sub-therapeutic antibiotics." }
    ]
  }
];

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>("0-0");

  return (
    <main className="w-full bg-white min-h-screen pt-48 pb-24">
      <SEO title="FAQ - Chopped Premium Meat" />
      
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-black tracking-tighter uppercase text-[var(--color-text-primary)] mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] font-body">
            Everything you need to know about our sourcing, shipping, and quality.
          </p>
        </div>

        <div className="space-y-12">
          {FAQS.map((category, catIdx) => (
            <div key={category.category}>
              <h2 className="text-2xl font-heading font-bold uppercase mb-6 text-[var(--color-brand-red)] border-b border-gray-200 pb-2">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, qIdx) => {
                  const id = `${catIdx}-${qIdx}`;
                  const isOpen = openIndex === id;
                  return (
                    <div 
                      key={id} 
                      className={`border ${isOpen ? 'border-[var(--color-brand-red)]' : 'border-gray-200'} rounded-sm transition-colors`}
                    >
                      <button 
                        className="w-full flex items-center justify-between p-6 focus:outline-none"
                        onClick={() => setOpenIndex(isOpen ? null : id)}
                      >
                        <span className="font-bold text-left pr-4">{faq.q}</span>
                        {isOpen ? <Minus className="text-[var(--color-brand-red)] flex-shrink-0" /> : <Plus className="text-gray-400 flex-shrink-0" />}
                      </button>
                      <div 
                        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                          isOpen ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="text-[var(--color-text-secondary)] leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
