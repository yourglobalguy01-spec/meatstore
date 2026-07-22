import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, User } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { fetchCategories } from '../lib/woocommerce';
import logoImg from '../assets/FinalLogo1_page-0001.png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const items = useCartStore((state) => state.items);
  const toggleCart = useCartStore((state) => state.toggleCart);
  const location = useLocation();
  const [categories, setCategories] = useState<{name: string, slug: string}[]>([]);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        const validCategories = data.filter(c => c.name !== 'Uncategorized');
        setCategories(validCategories);
      } catch (err) {
        console.error("Failed to load categories", err);
      }
    };
    loadCategories();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'All Products', path: '/products' },
    ...categories.map(c => ({ name: c.name, path: `/products?category=${c.slug}` })),
    { name: 'Deals', path: '/products?on_sale=true' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-gray-100' : 'bg-white'}`}>
      
      {/* Top Banner */}
      <div className="bg-[var(--color-brand-navy)] text-white/90 text-center py-2 text-[10px] md:text-[11px] font-medium uppercase tracking-[0.25em]">
        Complimentary delivery on all orders over $150
      </div>
      
      {/* Main Nav */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        <div className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? 'py-3' : 'py-5 md:py-6'}`}>
          
          {/* Left: Logo */}
          <div className="flex-1">
            <Link to="/" className="inline-block relative group z-20">
              <img 
                src={logoImg} 
                alt="Chopped Logo" 
                className={`transition-all duration-500 object-contain origin-left ${isScrolled ? 'h-10 md:h-12' : 'h-14 md:h-20'}`} 
              />
            </Link>
          </div>

          {/* Center: Desktop Nav Links */}
          <div className="hidden lg:flex items-center justify-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`group relative text-[12px] uppercase tracking-[0.15em] font-bold transition-colors ${
                  location.pathname === link.path ? 'text-[var(--color-brand-red)]' : 'text-[var(--color-text-primary)] hover:text-[var(--color-brand-red)]'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 w-full h-[2px] bg-[var(--color-brand-red)] transform origin-left transition-transform duration-300 ease-out ${
                  location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center justify-end gap-6 md:gap-8 flex-1 z-20">
            {/* Desktop Search - Minimal */}
            <div className="hidden xl:flex items-center relative group">
              <input 
                type="text" 
                placeholder="Search premium cuts..." 
                className="w-48 xl:w-64 bg-transparent border-b border-gray-200 focus:border-[var(--color-brand-red)] py-1.5 px-2 pl-8 text-xs font-medium outline-none transition-all placeholder:text-gray-400"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-0 top-1/2 -translate-y-1/2 group-focus-within:text-[var(--color-brand-red)] transition-colors" />
            </div>

            <Link to="#" className="hidden md:flex items-center gap-2 text-[var(--color-text-primary)] hover:text-[var(--color-brand-red)] transition-colors group">
              <User className="w-[18px] h-[18px] group-hover:scale-110 transition-transform" />
            </Link>
            
            <button 
              onClick={toggleCart}
              className="relative flex items-center text-[var(--color-text-primary)] hover:text-[var(--color-brand-red)] transition-colors group"
              aria-label="Cart"
            >
              <ShoppingCart className="w-[18px] h-[18px] group-hover:scale-110 transition-transform" />
              {itemCount > 0 && (
                <span className="absolute -top-2.5 -right-2.5 bg-[var(--color-brand-red)] text-white text-[9px] font-bold w-[18px] h-[18px] flex items-center justify-center rounded-full transform group-hover:scale-110 transition-transform shadow-sm">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-[var(--color-text-primary)] hover:text-[var(--color-brand-red)] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Glassmorphic Slide Down) */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-2xl transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6">
          <div className="relative mb-8">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-gray-50 border border-gray-200 rounded-full py-3 px-5 pl-12 text-sm focus:outline-none focus:border-[var(--color-brand-red)] transition-colors"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
          <div className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <Link 
                key={link.name}
                to={link.path}
                style={{ transitionDelay: `${index * 50}ms` }}
                className={`text-[var(--color-text-primary)] uppercase tracking-widest text-[11px] font-bold p-2 hover:text-[var(--color-brand-red)] transition-all ${
                  isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
