import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export function CartDrawer() {
  const { items, isOpen, toggleCart, updateQuantity, getCartTotal, removeItem } = useCartStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-[#0a0a0a] border-l border-[#222] z-[101] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#222]">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-[var(--color-brand-red)]" />
                <h2 className="font-heading font-bold text-xl text-white tracking-wide uppercase">Your Cart</h2>
              </div>
              <button onClick={toggleCart} className="p-2 hover:bg-[#222] rounded-full transition-colors text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-500 font-body">
                  <ShoppingBag className="w-16 h-16 mb-4 opacity-20" />
                  <p>Your cart is empty.</p>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 bg-[#111] p-4 rounded-2xl border border-[#222]">
                      <div className="w-20 h-20 bg-[#1F3B54] rounded-xl overflow-hidden flex-shrink-0">
                        {item.image ? (
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-xs text-gray-600 font-heading font-bold">IMG</div>
                        )}
                      </div>
                      
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-heading font-bold text-white text-lg leading-tight pr-4">{item.name}</h3>
                            <button onClick={() => removeItem(item.id)} className="text-gray-600 hover:text-[var(--color-brand-red)] transition-colors">
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                          {item.weight && <p className="text-xs text-gray-500 font-body uppercase tracking-wider">{item.weight}</p>}
                        </div>
                        
                        <div className="flex items-center justify-between mt-2">
                          <span className="font-mono text-white tracking-tight">${item.price.toFixed(2)}</span>
                          
                          <div className="flex items-center bg-[#222] rounded-full px-2 py-1">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 hover:text-[var(--color-brand-red)] text-gray-400 transition-colors">
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center text-sm font-mono text-white">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 hover:text-[var(--color-brand-red)] text-gray-400 transition-colors">
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer / Checkout */}
            {items.length > 0 && (
              <div className="p-6 border-t border-[#222] bg-[#0a0a0a]">
                <div className="flex justify-between items-center mb-6 font-mono text-lg text-white">
                  <span className="font-body text-gray-400">Subtotal</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <Link to="/checkout" onClick={toggleCart} className="w-full block text-center bg-[var(--color-brand-red)] text-white py-4 rounded-xl font-button tracking-wide font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-900/20 uppercase">
                  Proceed to Checkout
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
