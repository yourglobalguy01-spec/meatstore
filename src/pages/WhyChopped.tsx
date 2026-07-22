import { SEO } from '../components/SEO';
import { ShieldCheck } from 'lucide-react';
import { QualityProcess } from '../components/QualityProcess';

export function WhyChopped() {
  return (
    <main className="w-full bg-white min-h-screen pt-48 pb-0">
      <SEO title="Why Chopped - Quality Guarantee" />
      
      {/* Hero */}
      <div className="relative w-full h-[50vh] min-h-[400px] mb-24 flex items-center justify-center bg-[#1a1a1a] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1544025162-81111421550a?q=80&w=2669&auto=format&fit=crop" 
          alt="Premium Meat Background"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 text-center px-6">
          <ShieldCheck className="w-16 h-16 text-[var(--color-brand-red)] mx-auto mb-6" />
          <h1 className="text-5xl md:text-7xl font-heading font-black tracking-tighter uppercase text-white mb-6 drop-shadow-lg">
            The Chopped Guarantee
          </h1>
          <p className="text-xl text-gray-200 font-body max-w-2xl mx-auto">
            We don't compromise. Neither should you.
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-heading font-bold uppercase mb-6 text-[var(--color-text-primary)]">
              Beyond Prime
            </h2>
            <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-6">
              When we say our meat is the best, we mean it. While grocery stores sell "Choice" and sometimes "Prime", we source exclusively from the top 2% of cattle in North America.
            </p>
            <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
              Our dry-aging process is meticulously controlled for temperature and humidity for a minimum of 28 days. This allows the natural enzymes to tenderize the meat while evaporating moisture, concentrating that intensely rich, nutty flavor that defines a legendary steakhouse experience.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1603048297172-c92544798d5e?q=80&w=600&auto=format&fit=crop" alt="Steak cooking" className="rounded-sm w-full h-full object-cover aspect-square" />
            <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&auto=format&fit=crop" alt="Raw meat" className="rounded-sm w-full h-full object-cover aspect-square mt-8" />
          </div>
        </div>
      </div>

      {/* Reuse the QualityProcess component here to reinforce the message */}
      <QualityProcess />
      
    </main>
  );
}
