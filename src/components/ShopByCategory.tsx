import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function ShopByCategory() {
  const categories = [
    { name: "Prime Beef", desc: "Aged to perfection", img: "/images/prime_beef.png", span: "col-span-1 md:col-span-2 md:row-span-2" },
    { name: "Poultry", desc: "Farm fresh", img: "/images/poultry.png", span: "col-span-1 md:row-span-1" },
    { name: "Seafood", desc: "Wild caught", img: "/images/seafood.png", span: "col-span-1 md:row-span-1" },
    { name: "Heritage Pork", desc: "Rich & flavorful", img: "/images/heritage_pork.png", span: "col-span-1 md:col-span-2 md:row-span-1" }
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Clean Header */}
        <div className="flex flex-col items-center text-center mb-16 pb-12 border-b border-gray-100">
          <span className="text-red-700 font-bold uppercase tracking-widest text-sm mb-3">
            The Collections
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight uppercase text-[#1F3B54]">
            Shop By Category
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[700px]">
          {categories.map((cat, idx) => (
            <Link 
              to="/products" 
              key={idx} 
              className={`group relative overflow-hidden ${cat.span} min-h-[300px] block bg-gray-50`}
            >
              <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
              
              <img 
                src={cat.img} 
                alt={cat.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              />
              
              <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col justify-end">
                <p className="text-gray-200 font-medium text-sm md:text-base mb-2 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                  {cat.desc}
                </p>
                <div className="flex justify-between items-center">
                  <h3 className="font-heading font-bold text-3xl text-white uppercase tracking-wide">
                    {cat.name}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-white text-[#1F3B54] flex items-center justify-center transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
