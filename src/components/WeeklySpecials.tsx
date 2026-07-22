import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { useProducts } from '../hooks/useWooCommerce';
import { ShoppingCart } from 'lucide-react';

export function WeeklySpecials() {
  const { addItem } = useCartStore();
  const { data: products, isLoading } = useProducts({ per_page: 4 });

  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      price: parseFloat(product.sale_price || product.price) || 0,
      image: product.images?.[0]?.src || '',
      weight: product.weight ? `${product.weight} kg` : 'Standard'
    });
  };

  if (isLoading || !products || products.length === 0) return null;

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Clean Header */}
        <div className="flex flex-col items-center text-center mb-12 pb-8 border-b border-gray-200">
          <span className="text-red-700 font-bold uppercase tracking-widest text-sm mb-3">Limited Availability</span>
          <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight uppercase text-[#1F3B54]">
            The Butcher's Specials
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <Link to={`/product/${product.id}`} className="block relative h-full">
                
                {/* Clean Card */}
                <div className="bg-white text-[#1F3B54] rounded-sm transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col h-full border border-gray-100 overflow-hidden">
                  
                  {/* Image Area */}
                  <div className="aspect-square relative mb-6 overflow-hidden bg-gray-50 flex items-center justify-center p-4">
                    {/* Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <div className="bg-red-700 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                        Sale
                      </div>
                    </div>

                    {product.images?.[0]?.src ? (
                      <img 
                        src={product.images[0].src} 
                        alt={product.images[0].alt || product.name} 
                        className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105" 
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-400 font-serif italic">No Image</div>
                    )}
                  </div>
                  
                  {/* Content Area */}
                  <div className="px-6 flex-grow flex flex-col justify-end text-center">
                    <h3 className="font-heading font-bold text-lg text-[#1F3B54] mb-2 uppercase leading-tight line-clamp-2 group-hover:text-red-700 transition-colors">
                      {product.name}
                    </h3>
                    
                    <div className="flex justify-center items-center gap-2 mb-6 mt-2 font-serif font-bold text-xl">
                      {product.on_sale && product.regular_price ? (
                        <>
                          <span className="line-through text-gray-400 text-lg">${product.regular_price}</span>
                          <span className="text-red-700">${product.price}</span>
                        </>
                      ) : (
                        <span className="text-red-700">${product.price || '0.00'}</span>
                      )}
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button 
                    onClick={(e) => handleAddToCart(e, product)}
                    className="w-full bg-[#1F3B54] text-white hover:bg-red-700 py-4 flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-[0.15em] transition-colors"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>

                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/products" className="inline-block border border-gray-300 text-[#1F3B54] px-10 py-4 font-bold text-sm tracking-[0.2em] uppercase hover:bg-red-700 hover:text-white hover:border-red-700 transition-colors">
            View All Offers
          </Link>
        </div>

      </div>
    </section>
  );
}
