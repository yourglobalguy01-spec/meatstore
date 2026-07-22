import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { ShoppingBag, Loader2, ChevronDown, Filter } from 'lucide-react';
import { useProducts, useCategories } from '../hooks/useWooCommerce';
import { SEO } from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';

export function Products() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [priceFilter, setPriceFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('relevant');
  
  const { addItem } = useCartStore();

  const { data: products, isLoading: isLoadingProducts } = useProducts({ per_page: 100 });
  const { data: categories, isLoading: isLoadingCategories } = useCategories();

  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      price: parseFloat(product.price) || 0,
      image: product.images?.[0]?.src || '',
      weight: product.weight ? `${product.weight} kg` : 'Standard'
    });
  };

  const processedProducts = useMemo(() => {
    if (!products) return [];
    
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter(p => p.categories.some(c => c.slug === activeCategory));
    }

    if (priceFilter !== 'all') {
      result = result.filter(p => {
        const price = parseFloat(p.price) || 0;
        if (priceFilter === 'under50') return price < 50;
        if (priceFilter === '50to100') return price >= 50 && price <= 100;
        if (priceFilter === 'over100') return price > 100;
        return true;
      });
    }

    if (sortBy === 'newest') {
      result.sort((a, b) => new Date(b.date_created).getTime() - new Date(a.date_created).getTime());
    } else if (sortBy === 'price-asc') {
      result.sort((a, b) => (parseFloat(a.price) || 0) - (parseFloat(b.price) || 0));
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => (parseFloat(b.price) || 0) - (parseFloat(a.price) || 0));
    }

    return result;
  }, [products, activeCategory, priceFilter, sortBy]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 15 } }
  };

  return (
    <main className="relative w-full bg-[#FAFAFA] min-h-screen text-[#1F3B54] pt-48 pb-32 overflow-hidden selection:bg-red-600 selection:text-white">
      <SEO 
        title="Shop All Premium Cuts | Chopped The Meat Shop" 
        description="Browse our full selection of premium, farm-raised meats. Vacuum sealed and delivered fresh to your door." 
      />
      
      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-gray-200 pb-12"
        >
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-8xl font-heading font-black tracking-tighter mb-6 uppercase text-[#1F3B54]">
              The Collection<span className="text-red-600">.</span>
            </h1>
            <p className="font-body text-gray-600 text-lg md:text-xl font-light leading-relaxed max-w-xl">
              Browse our entire selection of ethically sourced, farm-fresh prime cuts. Vacuum sealed and delivered straight to your door with pristine perfection.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Sidebar */}
          <aside className="w-full lg:w-72 shrink-0">
            
            {/* Category Options */}
            <div className="mb-14">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-4 h-4 text-red-600" />
                <h3 className="font-heading font-bold text-sm text-[#1F3B54] uppercase tracking-[0.2em]">Categories</h3>
              </div>
              
              {isLoadingCategories ? (
                <div className="text-gray-400 text-sm animate-pulse">Loading categories...</div>
              ) : (
                <div className="flex flex-col gap-1">
                  <button
                    onClick={() => setActiveCategory('all')}
                    className={`group relative text-left py-3 px-4 rounded-xl transition-all duration-300 ${
                      activeCategory === 'all' ? 'bg-[#1F3B54] text-white font-medium shadow-md' : 'text-gray-600 hover:text-[#1F3B54] hover:bg-white'
                    }`}
                  >
                    All Cuts
                  </button>
                  {categories?.filter(c => c.count > 0).map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.slug)}
                      className={`group relative text-left py-3 px-4 rounded-xl transition-all duration-300 ${
                        activeCategory === cat.slug 
                          ? 'bg-[#1F3B54] text-white font-medium shadow-md' 
                          : 'text-gray-600 hover:text-[#1F3B54] hover:bg-white'
                      }`}
                    >
                      {cat.name} <span className={`text-xs ml-1 ${activeCategory === cat.slug ? 'text-white/70' : 'text-gray-400'}`}>({cat.count})</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Price Options */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-4 h-4 text-red-600" />
                <h3 className="font-heading font-bold text-sm text-[#1F3B54] uppercase tracking-[0.2em]">Price Range</h3>
              </div>
              
              <div className="flex flex-col gap-1">
                {[
                  { id: 'all', label: 'All Prices' },
                  { id: 'under50', label: 'Under $50' },
                  { id: '50to100', label: '$50 to $100' },
                  { id: 'over100', label: 'Over $100' }
                ].map(priceOpt => (
                  <button
                    key={priceOpt.id}
                    onClick={() => setPriceFilter(priceOpt.id)}
                    className={`group relative text-left py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-between ${
                      priceFilter === priceOpt.id ? 'bg-[#1F3B54] text-white font-medium shadow-md' : 'text-gray-600 hover:text-[#1F3B54] hover:bg-white'
                    }`}
                  >
                    <span>{priceOpt.label}</span>
                    <div className={`w-2 h-2 rounded-full transition-colors ${priceFilter === priceOpt.id ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]' : 'bg-transparent border border-gray-400'}`}></div>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1">
            
            {/* Top Bar (Sorting) */}
            <div className="flex justify-between items-center mb-10 pb-6 border-b border-gray-200">
              <div className="text-gray-500 font-body text-sm font-light tracking-wide">
                Showing <strong className="text-[#1F3B54] font-semibold">{processedProducts.length}</strong> results
              </div>
              <div className="relative group">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-200 text-[#1F3B54] py-3 pl-6 pr-14 rounded-full font-body text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all cursor-pointer shadow-sm hover:border-gray-300"
                >
                  <option value="relevant">Relevant Products</option>
                  <option value="newest">Newest Additions</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-[#1F3B54] transition-colors pointer-events-none" />
              </div>
            </div>

            {/* Product Grid */}
            {isLoadingProducts ? (
              <div className="flex justify-center items-center py-40">
                <Loader2 className="w-10 h-10 animate-spin text-red-600" />
              </div>
            ) : (
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16"
              >
                {processedProducts.length === 0 ? (
                  <div className="col-span-full py-24 flex flex-col items-center justify-center text-center bg-white rounded-3xl border border-gray-100 shadow-sm">
                    <ShoppingBag className="w-16 h-16 text-gray-300 mb-6" />
                    <h3 className="text-2xl font-heading font-bold text-[#1F3B54] mb-2">No cuts found</h3>
                    <p className="text-gray-500 font-light">Try adjusting your filters to discover more premium selections.</p>
                  </div>
                ) : (
                  <AnimatePresence>
                    {processedProducts.map(product => (
                      <motion.div key={product.id} variants={itemVariants} layout>
                        <Link 
                          to={`/product/${product.id}`}
                          className="group block relative"
                        >
                          {/* Image Container (Clean light background) */}
                          <div className="relative aspect-square bg-[#F8F9FA] rounded-2xl overflow-hidden mb-6 border border-gray-100 group-hover:border-gray-200 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500">
                            
                            {product.on_sale && (
                              <div className="absolute top-5 left-5 z-20 bg-red-600 text-white px-4 py-1.5 text-xs font-black uppercase tracking-widest rounded-full shadow-[0_4px_15px_rgba(220,38,38,0.4)]">
                                Sale
                              </div>
                            )}
                            
                            {product.images?.length > 0 ? (
                              <img 
                                src={product.images[0].src} 
                                alt={product.images[0].alt || product.name}
                                className="absolute inset-0 w-full h-full object-cover z-10 group-hover:scale-110 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] mix-blend-multiply"
                              />
                            ) : (
                              <div className="absolute inset-0 z-10 flex items-center justify-center text-gray-300 font-heading text-4xl font-black">
                                IMG
                              </div>
                            )}

                            {/* Quick Add Button Overlay */}
                            <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center backdrop-blur-[2px]">
                              <button 
                                onClick={(e) => handleAddToCart(e, product)}
                                className="bg-[#1F3B54] text-white px-8 py-4 rounded-full font-button font-bold transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:bg-red-600 flex items-center justify-center gap-3 shadow-xl"
                              >
                                <ShoppingBag className="w-5 h-5" />
                                Add to Cart
                              </button>
                            </div>
                          </div>

                          {/* Product Details (Below the dark container on the light background) */}
                          <div className="px-2">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-heading font-black text-2xl text-[#1F3B54] group-hover:text-red-600 transition-colors line-clamp-1 tracking-tight">
                                {product.name}
                              </h4>
                            </div>
                            
                            <div className="flex flex-col gap-2">
                              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                                {product.weight ? `${product.weight} kg` : 'Standard Cut'}
                              </div>
                              <div className="flex items-end gap-3">
                                {product.on_sale && product.regular_price ? (
                                  <>
                                    <span className="font-mono text-sm text-gray-400 line-through">
                                      ${product.regular_price}
                                    </span>
                                    <span className="font-mono text-2xl font-bold tracking-tighter text-red-600">
                                      ${product.price}
                                    </span>
                                  </>
                                ) : (
                                  <span className="font-mono text-2xl font-bold tracking-tighter text-[#1F3B54]">
                                    ${product.price || '0.00'}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
