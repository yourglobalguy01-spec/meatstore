import { useEffect, useRef } from 'react';
import { Leaf, Package, Shield, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: 'Always Fresh',
    desc: 'Farm to table in less than 24 hours. Never frozen, always prime.',
    Icon: Leaf,
    id: 'fresh'
  },
  {
    title: 'Vacuum Sealed',
    desc: 'Advanced packaging locks in freshness and prevents oxidation.',
    Icon: Package,
    id: 'vacuum'
  },
  {
    title: 'No Chemicals',
    desc: '100% natural. No preservatives, no artificial coloring.',
    Icon: Shield,
    id: 'chemicals'
  },
  {
    title: '100% Hygiene',
    desc: 'Processed in state-of-the-art, temperature-controlled facilities.',
    Icon: ShieldCheck,
    id: 'hygiene'
  }
];

export function WhyChopped() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      // Stagger reveal the cards
      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });
      
      // Micro-animations on hover managed via CSS/Tailwind group-hover
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 bg-white text-black">
      <div className="w-full max-w-[1600px] mx-auto px-8">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-sm font-button uppercase tracking-[0.3em] text-[var(--color-brand-red)] mb-4">Why Chopped</h2>
            <h3 className="text-5xl md:text-7xl font-heading font-black tracking-tighter max-w-2xl leading-[0.9]">
              The New Standard of Meat.
            </h3>
          </div>
          <p className="max-w-md font-body text-gray-600 leading-relaxed text-lg">
            We've completely re-engineered the butcher experience. From farm selection to cold-chain delivery, every step is optimized for perfection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, i) => (
            <div 
              key={i} 
              className="feature-card group relative p-10 rounded-[2rem] bg-[#f8f8f8] border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-btn opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-12 group-hover:scale-110 transition-transform duration-500">
                <card.Icon className="w-8 h-8 text-[var(--color-primary)] group-hover:text-[var(--color-brand-red)] transition-colors duration-500" />
              </div>
              
              <h4 className="text-2xl font-heading font-bold mb-4">{card.title}</h4>
              <p className="font-body text-gray-500 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
