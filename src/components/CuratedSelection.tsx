import { Link } from 'react-router-dom';
import { PlayCircle } from 'lucide-react';

export function CuratedSelection() {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[800px] bg-white flex flex-col md:flex-row border-y border-gray-100">
      
      {/* Left Text Content */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 order-2 md:order-1 relative z-10 bg-white">
        <div className="max-w-xl">
          <h2 className="text-sm font-bold tracking-[0.2em] text-red-700 mb-6 uppercase border-l-4 border-red-700 pl-4">The Chopped Standard</h2>
          <h3 className="text-5xl md:text-6xl font-heading font-black tracking-tight text-[#1F3B54] leading-[1.1] mb-8 uppercase">
            Taste The <br/>
            Difference.
          </h3>
          <p className="text-gray-600 font-body text-lg leading-relaxed mb-12">
            Every cut we offer is sourced from sustainable farms and masterfully butchered to guarantee an unforgettable dining experience. 
            From the pasture to your freezer, we maintain uncompromising quality standards.
          </p>
          <Link 
            to="/products" 
            className="inline-flex items-center justify-center border-2 border-[#1F3B54] bg-[#1F3B54] text-white px-10 py-5 font-bold text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-[#1F3B54] transition-colors"
          >
            Discover the Process
          </Link>
        </div>
      </div>

      {/* Right Cinematic Image */}
      <div className="w-full md:w-1/2 h-[500px] md:h-auto order-1 md:order-2 relative group overflow-hidden border-l border-gray-100">
        <div className="absolute inset-0 bg-black/5 z-10 group-hover:bg-black/0 transition-colors duration-700" />
        <img 
          src="https://images.unsplash.com/photo-1594046243098-0fceea9d451e?q=80&w=2670&auto=format&fit=crop" 
          alt="Premium Raw Beef" 
          className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
        />
        {/* Play Button Overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <div className="w-24 h-24 rounded-full border border-white/50 backdrop-blur-sm flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-xl bg-black/10">
            <PlayCircle className="w-10 h-10 text-white" />
          </div>
        </div>
      </div>
      
    </section>
  );
}
