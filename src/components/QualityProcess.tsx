import { Link } from 'react-router-dom';

export function QualityProcess() {
  return (
    <section className="w-full bg-[#ffffff] text-[#1F3B54] flex flex-col md:flex-row border-t border-gray-200">
      
      {/* Left Side: Image */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-auto min-h-[600px] relative">
        <img 
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2540&auto=format&fit=crop" 
          alt="Culinary Excellence"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Right Side: Content */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 bg-[#1F3B54] text-[#ffffff]">
        <div className="max-w-xl">
          <span className="font-serif italic text-xl md:text-2xl text-red-600 mb-6 block border-l-4 border-red-600 pl-4">
            The Process
          </span>
          <h2 className="text-5xl md:text-[6rem] font-heading font-black tracking-tighter uppercase leading-[0.9] mb-8">
            Farm to <br/> Table.
          </h2>
          <p className="font-body text-gray-300 text-lg md:text-xl leading-relaxed mb-12">
            Maintained at exact sub-zero temperatures throughout the entire chain. From our certified sustainable Canadian farms directly to your door, quality is never compromised.
          </p>
          
          <Link to="/about" className="inline-block border-2 border-[#ffffff] text-[#ffffff] px-10 py-4 font-bold text-sm tracking-[0.2em] uppercase hover:bg-[#ffffff] hover:text-[#1F3B54] transition-colors">
            Learn More
          </Link>
        </div>
      </div>

    </section>
  );
}
