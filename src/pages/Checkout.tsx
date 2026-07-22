import { useState } from 'react';
import { useCartStore } from '../store/cartStore';
import { Link } from 'react-router-dom';
import { createOrder } from '../lib/woocommerce';
import { Loader2, CheckCircle } from 'lucide-react';
import { SEO } from '../components/SEO';

export function Checkout() {
  const { items, getCartTotal, clearCart } = useCartStore();
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;
    
    setLoading(true);
    setError('');
    
    try {
      const orderData = {
        payment_method: 'bacs',
        payment_method_title: 'Direct Bank Transfer',
        set_paid: false,
        billing: {
          first_name: formData.firstName,
          last_name: formData.lastName,
          address_1: formData.address,
          city: formData.city,
          state: formData.state,
          postcode: formData.zip,
          country: 'US',
          email: formData.email,
          phone: formData.phone
        },
        shipping: {
          first_name: formData.firstName,
          last_name: formData.lastName,
          address_1: formData.address,
          city: formData.city,
          state: formData.state,
          postcode: formData.zip,
          country: 'US'
        },
        line_items: items.map(item => ({
          product_id: item.id,
          quantity: item.quantity
        }))
      };

      // Direct WooCommerce API call using Basic Auth to bypass URL parameter blocks
      const res = await createOrder(orderData);
      
      if (res && res.id) {
        setSuccess(true);
        clearCart();
      } else {
        throw new Error("Failed to create order");
      }
    } catch (err: any) {
      console.error('Order creation error:', err);
      if (err.response?.status === 401 || err.response?.data?.code === 'woocommerce_rest_authentication_error') {
        setError('Checkout Failed: Your WooCommerce API Key requires Read/Write permissions to create orders. Please update your API Key in WordPress to have Write access.');
      } else {
        setError(err.response?.data?.message || 'Checkout Failed: Unable to create order. Please verify your connection or try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <main className="w-full min-h-screen bg-[var(--color-brand-navy)] text-white pt-48 pb-32 flex items-center justify-center">
        <SEO title="Order Successful | Chopped" />
        <div className="max-w-xl mx-auto px-6 text-center">
          <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-8" />
          <h1 className="text-4xl md:text-5xl font-heading font-black tracking-tight mb-6 uppercase">Order Received!</h1>
          <p className="text-xl text-gray-400 font-body mb-10">
            Thank you for your order. We have received it and are processing it now. We will contact you shortly with delivery details.
          </p>
          <Link to="/products" className="bg-[var(--color-brand-red)] text-white px-8 py-4 rounded-xl font-button tracking-wide font-bold hover:bg-red-700 transition-colors inline-block">
            CONTINUE SHOPPING
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full bg-[var(--color-brand-navy)] min-h-screen text-white pt-48 pb-32">
      <SEO title="Checkout | Chopped" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-heading font-black tracking-tighter mb-12 uppercase">
          Secure Checkout
        </h1>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-heading mb-4 text-gray-400">Your cart is empty</h2>
            <Link to="/products" className="text-[var(--color-brand-red)] hover:underline font-button">Return to Shop</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handlePlaceOrder} className="bg-[#111] p-8 rounded-2xl border border-[#222]">
                <h2 className="text-2xl font-heading font-bold mb-6 border-b border-[#222] pb-4">Shipping Information</h2>
                
                {error && (
                  <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-xl mb-6 font-body text-sm">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-button text-gray-400 mb-2">First Name *</label>
                    <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full bg-black border border-[#333] rounded-xl px-4 py-3 text-white focus:border-[var(--color-brand-red)] focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-button text-gray-400 mb-2">Last Name *</label>
                    <input required type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full bg-black border border-[#333] rounded-xl px-4 py-3 text-white focus:border-[var(--color-brand-red)] focus:outline-none transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-button text-gray-400 mb-2">Email Address *</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-black border border-[#333] rounded-xl px-4 py-3 text-white focus:border-[var(--color-brand-red)] focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-button text-gray-400 mb-2">Phone Number *</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-black border border-[#333] rounded-xl px-4 py-3 text-white focus:border-[var(--color-brand-red)] focus:outline-none transition-colors" />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-button text-gray-400 mb-2">Street Address *</label>
                  <input required type="text" name="address" value={formData.address} onChange={handleChange} className="w-full bg-black border border-[#333] rounded-xl px-4 py-3 text-white focus:border-[var(--color-brand-red)] focus:outline-none transition-colors" placeholder="123 Meat Street" />
                </div>

                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="col-span-1">
                    <label className="block text-sm font-button text-gray-400 mb-2">City *</label>
                    <input required type="text" name="city" value={formData.city} onChange={handleChange} className="w-full bg-black border border-[#333] rounded-xl px-4 py-3 text-white focus:border-[var(--color-brand-red)] focus:outline-none transition-colors" />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-sm font-button text-gray-400 mb-2">State *</label>
                    <input required type="text" name="state" value={formData.state} onChange={handleChange} className="w-full bg-black border border-[#333] rounded-xl px-4 py-3 text-white focus:border-[var(--color-brand-red)] focus:outline-none transition-colors" />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-sm font-button text-gray-400 mb-2">ZIP Code *</label>
                    <input required type="text" name="zip" value={formData.zip} onChange={handleChange} className="w-full bg-black border border-[#333] rounded-xl px-4 py-3 text-white focus:border-[var(--color-brand-red)] focus:outline-none transition-colors" />
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-gradient-btn text-white py-4 rounded-xl font-button tracking-widest font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2 uppercase"
                >
                  {loading ? (
                    <><Loader2 className="w-6 h-6 animate-spin" /> Processing...</>
                  ) : (
                    'Place Order'
                  )}
                </button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-5">
              <div className="bg-[#111] p-8 rounded-2xl border border-[#222] sticky top-32">
                <h2 className="text-2xl font-heading font-bold mb-6 border-b border-[#222] pb-4">Order Summary</h2>
                
                <div className="flex flex-col gap-4 mb-6 max-h-[400px] overflow-y-auto pr-2 scrollbar-hide">
                  {items.map(item => (
                    <div key={item.id} className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-[#1F3B54] rounded-lg overflow-hidden shrink-0 border border-[#222]">
                        {item.image ? (
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-[10px] text-gray-600 font-heading">IMG</div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-heading font-bold text-white text-sm line-clamp-1">{item.name}</h4>
                        <p className="text-gray-500 text-xs font-body">Qty: {item.quantity}</p>
                      </div>
                      <div className="font-mono font-bold text-[var(--color-brand-red)]">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-[#222] pt-4 space-y-3 font-mono">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span>${getCartTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Shipping</span>
                    <span>Calculated later</span>
                  </div>
                  <div className="flex justify-between text-white text-xl font-bold pt-4 border-t border-[#333]">
                    <span>Total</span>
                    <span className="text-[var(--color-brand-red)]">${getCartTotal().toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </main>
  );
}
