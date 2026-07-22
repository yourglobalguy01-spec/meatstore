import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { useCartStore } from '../store/cartStore';
import { ShoppingBag, ChevronLeft, Minus, Plus, Loader2 } from 'lucide-react';
import { useProduct } from '../hooks/useWooCommerce';
import { SEO } from '../components/SEO';

export function ProductDetail() {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useProduct(id ? parseInt(id, 10) : null);
  
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const { addItem } = useCartStore();

  const handleAddToCart = () => {
    if (!product) return;
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: parseFloat(product.price) || 0,
        image: product.images?.[0]?.src || '',
        weight: product.weight ? `${product.weight} kg` : 'Standard'
      });
    }
  };

  if (isLoading) {
    return (
      <div className="w-full bg-[var(--color-brand-black)] min-h-screen flex items-center justify-center">
        <Loader2 className="w-16 h-16 animate-spin text-[var(--color-brand-red)]" />
      </div>
    );
  }

  if (isError || !product) {
    return (
      <div className="w-full bg-[var(--color-brand-black)] min-h-screen flex items-center justify-center flex-col gap-6 text-white">
        <h2 className="font-heading text-4xl">Product not found.</h2>
        <Link to="/products" className="bg-white text-black px-6 py-3 rounded-full font-button">Return to Collection</Link>
      </div>
    );
  }

  // Strip HTML from description for meta tag
  const plainTextDescription = product.short_description ? product.short_description.replace(/<[^>]+>/g, '') : product.name;

  return (
    <main className="w-full bg-[#FAFAFA] min-h-screen text-[#1F3B54] pt-48 pb-32 font-body selection:bg-[var(--color-brand-red)] selection:text-white">
      <SEO 
        title={`${product.name} | Chopped The Meat Shop`} 
        description={plainTextDescription}
        image={product.images?.[0]?.src}
      />
      
      <article className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Breadcrumb / Back */}
        <Link to="/products" className="inline-flex items-center gap-2 text-gray-500 hover:text-[var(--color-brand-red)] transition-colors mb-8 md:mb-12 font-button tracking-[0.1em] text-xs uppercase font-bold group">
          <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-[var(--color-brand-red)] transition-colors">
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          </div>
          Back to Collection
        </Link>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left: Image Gallery (Sticky) */}
          <div className="w-full lg:w-1/2 relative">
            <div className="sticky top-32">
              <div className="aspect-square bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center justify-center relative group p-8">
                {/* Decorative background blur */}
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-white opacity-50" />
                
                {product.images?.length > 0 ? (
                  <img 
                    src={product.images[0].src} 
                    alt={product.images[0].alt || product.name} 
                    className="w-full h-full object-contain relative z-10 drop-shadow-2xl transition-transform duration-700 group-hover:scale-105" 
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-heading text-4xl text-gray-200 relative z-10">IMAGE</div>
                )}

                {product.stock_status === 'outofstock' && (
                  <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-20 flex items-center justify-center">
                    <span className="bg-gray-900 text-white font-button px-6 py-3 rounded-full tracking-widest text-sm uppercase">Out of Stock</span>
                  </div>
                )}
                {product.on_sale && product.stock_status !== 'outofstock' && (
                  <div className="absolute top-6 right-6 z-20">
                    <div className="bg-[var(--color-brand-red)] text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg shadow-red-500/30">
                      Sale
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="w-full lg:w-1/2 flex flex-col justify-start pt-4">
            
            {/* Header */}
            <div className="mb-10">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[var(--color-brand-red)] font-button uppercase tracking-[0.2em] text-xs font-bold bg-red-50 px-3 py-1 rounded-full">
                  {product.categories?.[0]?.name || 'Premium'}
                </span>
                {product.sku && (
                  <span className="text-gray-400 font-mono text-sm tracking-wider">SKU: {product.sku}</span>
                )}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6 leading-[1.1] text-[#1F3B54] uppercase tracking-tight">
                {product.name}
              </h1>
              
              <div className="font-mono text-3xl md:text-4xl tracking-tighter text-[#1F3B54] flex items-center gap-4">
                {product.on_sale && product.regular_price ? (
                  <>
                    <span className="line-through text-gray-400 text-2xl">${product.regular_price}</span>
                    <span className="text-[var(--color-brand-red)] font-bold">${product.price}</span>
                  </>
                ) : (
                  <span className="font-bold">${product.price || '0.00'}</span>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="prose prose-lg text-gray-600 font-body leading-relaxed mb-10" dangerouslySetInnerHTML={{ __html: product.description || product.short_description }}>
            </div>

            <hr className="border-gray-200 mb-10" />

            {/* Metadata (Weight/Categories/Tags) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <p className="text-gray-400 font-button uppercase text-[10px] tracking-[0.2em] mb-2 font-bold">Weight</p>
                <p className="font-heading font-bold text-xl text-[#1F3B54]">{product.weight ? `${product.weight} kg` : 'Standard Cut'}</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <p className="text-gray-400 font-button uppercase text-[10px] tracking-[0.2em] mb-2 font-bold">Category</p>
                <p className="font-heading font-bold text-xl text-[#1F3B54]">{product.categories?.map(c => c.name).join(', ') || 'General'}</p>
              </div>
              
              {product.tags && product.tags.length > 0 && (
                <div className="col-span-2">
                  <p className="text-gray-400 font-button uppercase text-[10px] tracking-[0.2em] mb-3 font-bold">Tags</p>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map(t => (
                      <span key={t.id} className="text-xs bg-gray-100 text-gray-600 px-4 py-2 rounded-full font-mono transition-colors hover:bg-gray-200 cursor-default">{t.name}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Attributes / Options */}
            {product.attributes && product.attributes.length > 0 && (
              <div className="mb-10 flex flex-col gap-6">
                {product.attributes.filter(a => a.visible).map(attr => (
                  <div key={attr.id}>
                    <p className="text-[#1F3B54] font-button uppercase text-xs tracking-widest mb-3 font-bold">{attr.name}</p>
                    <div className="flex flex-wrap gap-2">
                      {attr.options.map(opt => (
                        <button
                          key={opt}
                          onClick={() => setSelectedOptions(prev => ({ ...prev, [attr.name]: opt }))}
                          className={`px-6 py-3 rounded-full font-button text-xs tracking-wider uppercase transition-all duration-300 ${
                            selectedOptions[attr.name] === opt
                              ? 'bg-[#1F3B54] text-white shadow-lg shadow-[#1F3B54]/20 scale-105'
                              : 'bg-white text-gray-500 border border-gray-200 hover:border-[#1F3B54] hover:text-[#1F3B54]'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center justify-between bg-white border border-gray-300 rounded-full px-6 py-4 sm:w-1/3 shadow-sm">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-gray-400 hover:text-[var(--color-brand-red)] transition-colors"><Minus className="w-4 h-4" /></button>
                <span className="font-mono text-[#1F3B54] font-bold text-lg">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="text-gray-400 hover:text-[var(--color-brand-red)] transition-colors"><Plus className="w-4 h-4" /></button>
              </div>
              
              <button 
                onClick={handleAddToCart}
                disabled={product.stock_status === 'outofstock'}
                className={`flex-1 rounded-full flex items-center justify-center gap-3 font-button tracking-[0.15em] text-sm font-bold uppercase transition-all duration-500 py-4 lg:py-5 ${
                  product.stock_status === 'outofstock' 
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                    : 'bg-[var(--color-brand-red)] text-white hover:bg-red-800 hover:shadow-[0_10px_40px_rgba(185,28,28,0.4)] hover:-translate-y-1'
                }`}
              >
                <ShoppingBag className="w-5 h-5" />
                {product.stock_status === 'outofstock' ? 'Out of Stock' : `Add to Cart — $${(parseFloat(product.price || '0') * quantity).toFixed(2)}`}
              </button>
            </div>
            
            <div className="mt-8 flex items-center gap-4 text-xs font-body text-gray-500 justify-center lg:justify-start">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span> 100% Satisfaction Guarantee</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[var(--color-brand-navy)]"></span> Secure Checkout</span>
            </div>

          </div>
        </div>

      </article>
    </main>
  );
}
