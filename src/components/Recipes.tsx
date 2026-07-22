import imgMasterclass from '../assets/images/recipe_masterclass.png';

export function Recipes() {
  return (
    <section className="py-32 bg-[#faf9f6] text-black">
      <div className="w-full max-w-[1600px] mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-sm font-button uppercase tracking-[0.3em] text-[var(--color-brand-red)] mb-4">Editorial</h2>
            <h3 className="text-5xl md:text-7xl font-heading font-black tracking-tighter leading-[0.9]">
              The Chef's Table.
            </h3>
          </div>
          <button className="border border-black px-8 py-4 rounded-full font-button hover:bg-black hover:text-white transition-colors">
            View All Recipes
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Featured Recipe */}
          <div className="relative group cursor-pointer overflow-hidden rounded-[2rem] aspect-[4/3] lg:aspect-auto">
            <div className="absolute inset-0 bg-[#e0e0e0] group-hover:scale-105 transition-transform duration-700">
               <img src={imgMasterclass} alt="Masterclass Recipe" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-10 text-white w-full">
              <div className="flex gap-4 mb-4">
                <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-button uppercase tracking-widest">Prep: 15m</span>
                <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-button uppercase tracking-widest">Cook: 45m</span>
                <span className="bg-[var(--color-brand-red)] px-3 py-1 rounded-full text-xs font-button uppercase tracking-widest">Expert</span>
              </div>
              <h4 className="font-heading font-bold text-4xl mb-4 leading-tight group-hover:text-[var(--color-brand-red)] transition-colors">
                The Reverse Sear<br/>Tomahawk Masterclass
              </h4>
              <p className="font-body text-gray-300 max-w-md hidden md:block">
                Achieve edge-to-edge perfection with our step-by-step guide to the reverse sear method. Guaranteed to impress.
              </p>
            </div>
          </div>

          {/* Secondary Recipes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {[1, 2, 3, 4].map((i) => (
               <div key={i} className="group cursor-pointer">
                 <div className="aspect-square bg-[#e0e0e0] rounded-[2rem] mb-6 overflow-hidden relative">
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                 </div>
                 <h5 className="font-heading font-bold text-xl mb-2 group-hover:text-[var(--color-brand-red)] transition-colors">Smoked Brisket Basics</h5>
                 <p className="font-body text-gray-500 text-sm">15 Min Prep • 8 Hours Cook</p>
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
