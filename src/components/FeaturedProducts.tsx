import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { useProducts } from '../hooks/useWooCommerce';
import { Loader2, ShoppingCart } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MOCK_PRODUCTS = [
  {
    id: 'mock-1',
    name: 'A5 Japanese Wagyu Ribeye',
    price: '249.99',
    price_html: '<span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">$</span>249.99</bdi></span>',
    images: [{ src: 'https://images.unsplash.com/photo-1607623814075-e51df1bd682f?q=80&w=800&auto=format&fit=crop', alt: 'Wagyu Ribeye' }],
    weight: '0.5'
  },
  {
    id: 'mock-2',
    name: 'Dry-Aged Tomahawk',
    price: '189.00',
    price_html: '<span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">$</span>189.00</bdi></span>',
    images: [{ src: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=800&auto=format&fit=crop', alt: 'Tomahawk Steak' }],
    weight: '1.2'
  },
  {
    id: 'mock-3',
    name: 'Prime Filet Mignon',
    price: '89.99',
    price_html: '<span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">$</span>89.99</bdi></span>',
    images: [{ src: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=800&auto=format&fit=crop', alt: 'Filet Mignon' }],
    weight: '0.4'
  },
  {
    id: 'mock-4',
    name: 'Heritage Pork Chops',
    price: '45.00',
    price_html: '<span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">$</span>45.00</bdi></span>',
    images: [{ src: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=800&auto=format&fit=crop', alt: 'Pork Chops' }],
    weight: '0.8'
  }
];

export function FeaturedProducts() {
  const { addItem } = useCartStore();
  const { data: wcProducts, isLoading } = useProducts({ per_page: 5 });

  const products = (wcProducts && wcProducts.length > 0) ? wcProducts : MOCK_PRODUCTS;

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

  return (
    <section className="bg-[#ffffff] text-[#1F3B54] border-t border-gray-200 relative py-24 md:py-32 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Clean Realistic Header */}
        <div className="flex flex-col items-center md:items-start pb-8 mb-12">
          <span className="text-red-700 font-bold uppercase tracking-widest text-sm mb-3">Shop Premium Cuts</span>
          <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight uppercase text-[#1F3B54] text-center md:text-left">
            Signature Cuts
          </h2>
        </div>

        {isLoading ? (
          <div className="w-full flex justify-center py-32">
            <Loader2 className="w-12 h-12 animate-spin text-red-700" />
          </div>
        ) : (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-16 featured-swiper"
          >
            {products.map((product: any) => (
              <SwiperSlide key={product.id} className="h-auto">
                <Link to={`/product/${product.id}`} className="block h-full">
                  {/* Clean E-commerce Card */}
                  <div className="bg-white rounded-sm shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl h-full flex flex-col relative group overflow-hidden">
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <div className="bg-[#1F3B54] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                        Best Seller
                      </div>
                    </div>

                    {/* Image Area */}
                    <div className="bg-gray-50 h-[280px] w-full relative overflow-hidden flex items-center justify-center">
                      {product.images?.length > 0 && product.images[0]?.src ? (
                        <img 
                          src={product.images[0].src} 
                          alt={product.images[0].alt || product.name} 
                          className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105" 
                        />
                      ) : (
                        <img 
                          src="https://images.unsplash.com/photo-1607623814075-e51df1bd682f?q=80&w=800&auto=format&fit=crop" 
                          alt="Premium Meat Placeholder" 
                          className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105 opacity-50 grayscale" 
                        />
                      )}
                    </div>
                    
                    {/* Content Area */}
                    <div className="p-6 flex flex-col flex-1 justify-between bg-white relative">
                      <div className="mb-4">
                        <h3 className="font-heading font-black text-xl mb-1 text-[#1F3B54] uppercase tracking-tight leading-tight line-clamp-2 group-hover:text-red-700 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-gray-400 text-sm font-medium tracking-wide">
                          {product.weight ? `${product.weight} kg avg` : 'Premium Cut'}
                        </p>
                      </div>
                      
                      <div className="flex flex-col mt-auto">
                        <div className="mb-5 flex items-end gap-3">
                          {product.on_sale && product.regular_price ? (
                            <>
                              <span className="font-serif font-black text-3xl text-red-700 tracking-tighter">
                                ${product.price}
                              </span>
                              <span className="font-serif font-bold text-lg text-gray-400 line-through mb-1">
                                ${product.regular_price}
                              </span>
                            </>
                          ) : (
                            <span className="font-serif font-black text-3xl text-[#1F3B54] tracking-tighter">
                              ${product.price || '0.00'}
                            </span>
                          )}
                        </div>
                        
                        
                        <button 
                          onClick={(e) => handleAddToCart(e, product)}
                          className="w-full bg-[#1F3B54] text-white hover:bg-red-700 py-4 flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-[0.15em] transition-colors"
                        >
                          <ShoppingCart className="w-4 h-4" />
                          Add to Cart
                        </button>
                      </div>
                    </div>

                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      <style>{`
        .featured-swiper .swiper-button-next,
        .featured-swiper .swiper-button-prev {
          color: #1F3B54;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          transition: all 0.2s ease;
        }
        .featured-swiper .swiper-button-next:after,
        .featured-swiper .swiper-button-prev:after {
          font-size: 16px;
          font-weight: bold;
        }
        .featured-swiper .swiper-button-next:hover,
        .featured-swiper .swiper-button-prev:hover {
          background: #1F3B54;
          color: #ffffff;
          border-color: #1F3B54;
        }
        .featured-swiper .swiper-pagination-bullet {
          background: #1F3B54;
          opacity: 0.2;
        }
        .featured-swiper .swiper-pagination-bullet-active {
          background: #D9251C;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
