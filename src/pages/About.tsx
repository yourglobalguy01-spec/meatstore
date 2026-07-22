import { SEO } from '../components/SEO';

export function About() {
  return (
    <main className="w-full bg-white min-h-screen pt-48 pb-24">
      <SEO title="About Us - Chopped Premium Meat" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-heading font-black tracking-tighter uppercase text-[var(--color-text-primary)] mb-6">
            Our Story
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] font-body leading-relaxed">
            Founded on the belief that everyone deserves access to restaurant-quality meat, Chopped began as a small family butcher shop and has grown into a premier destination for uncompromising quality.
          </p>
        </div>

        {/* Image & Text Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative h-[500px] overflow-hidden rounded-sm">
            <img 
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop" 
              alt="Butcher preparing meat" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-heading font-bold uppercase mb-6 text-[var(--color-text-primary)]">
              The Art of Butchery
            </h2>
            <p className="text-[var(--color-text-secondary)] font-body mb-6 leading-relaxed">
              We approach butchery not just as a trade, but as an art form. Every cut is meticulously inspected, trimmed, and prepared by our master butchers who bring decades of experience to the block.
            </p>
            <p className="text-[var(--color-text-secondary)] font-body leading-relaxed">
              Our relationships with trusted, sustainable farms ensure that every piece of meat we offer meets our exacting standards for marbling, flavor, and ethical raising practices.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-[var(--color-bg-gray)] p-12 md:p-24 rounded-sm text-center">
          <h2 className="text-3xl font-heading font-bold uppercase mb-12 text-[var(--color-text-primary)]">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-xl font-bold text-[var(--color-brand-red)] shadow-sm mb-6">1</div>
              <h3 className="font-heading font-bold uppercase mb-3">Uncompromising Quality</h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">We source only the top 2% of prime meats, ensuring unparalleled tenderness and flavor.</p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-xl font-bold text-[var(--color-brand-red)] shadow-sm mb-6">2</div>
              <h3 className="font-heading font-bold uppercase mb-3">Sustainable Farming</h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">We partner exclusively with farms that prioritize animal welfare and environmental stewardship.</p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-xl font-bold text-[var(--color-brand-red)] shadow-sm mb-6">3</div>
              <h3 className="font-heading font-bold uppercase mb-3">Master Craftsmanship</h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">Our master butchers hand-cut every order to your exact specifications.</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
