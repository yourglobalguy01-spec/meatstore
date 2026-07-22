import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const fadeUp: any = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 60, damping: 20 }
  }
};

export function Footer() {
  return (
    <footer className="relative bg-[#0b111a] text-gray-300 pt-24 pb-12 mt-0 border-t-4 border-red-600 overflow-hidden font-body">
      
      {/* Background Lighting / Watermark to look realistic */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(187,51,60,0.08)_0%,transparent_70%)] opacity-100" />
        
        {/* Massive faded logo watermark */}
        <div className="absolute -bottom-10 -right-20 text-[15rem] md:text-[20rem] font-heading font-black text-white/[0.02] select-none tracking-tighter">
          CHOPPED
        </div>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10"
      >
        
        {/* Newsletter Section */}
        <motion.div variants={fadeUp} className="flex flex-col lg:flex-row justify-between items-start lg:items-center pb-16 border-b border-white/10 mb-16 gap-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter uppercase mb-4 text-white drop-shadow-md">
              Join the <span className="text-red-500">Chopped Club</span>
            </h2>
            <p className="font-body text-gray-400 text-base md:text-lg">
              Subscribe for early access to rare cuts, exclusive offers, and masterclass recipes delivered straight to your inbox.
            </p>
          </div>
          
          <form className="w-full lg:w-[450px] relative group shadow-2xl" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="ENTER YOUR EMAIL" 
              className="w-full bg-white/5 border border-white/10 py-5 px-6 text-sm font-bold uppercase tracking-widest text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500 focus:bg-white/10 transition-all duration-500 backdrop-blur-sm"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-red-600 text-white flex items-center justify-center hover:bg-red-500 hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(187,51,60,0.5)]">
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </motion.div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <motion.div variants={fadeUp} className="md:col-span-12 lg:col-span-4 lg:pr-12">
            <h3 className="text-4xl md:text-5xl font-heading font-black tracking-tighter uppercase mb-6 text-white drop-shadow-md cursor-pointer hover:opacity-80 transition-opacity">
              Chopped<span className="text-red-500">.</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Sourcing the top 2% of prime meats to deliver uncompromising quality from pasture to plate. Experience the pinnacle of modern butchery.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:border-red-600 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:border-red-600 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:border-red-600 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
            </div>
          </motion.div>

          {/* Links Columns */}
          <motion.div variants={fadeUp} className="md:col-span-4 lg:col-span-2 lg:col-start-6">
            <h4 className="font-bold text-xs mb-6 uppercase tracking-widest text-white">Shop</h4>
            <ul className="space-y-4 text-sm font-medium">
              {['All Products', 'Prime Beef', 'Poultry', 'Seafood'].map(link => (
                <li key={link}><Link to="/products" className="text-gray-400 hover:text-red-400 hover:translate-x-1 inline-block transition-all duration-300">{link}</Link></li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="md:col-span-4 lg:col-span-2">
            <h4 className="font-bold text-xs mb-6 uppercase tracking-widest text-white">Company</h4>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { name: 'Our Story', path: '/about' },
                { name: 'The Guarantee', path: '/why-chopped' },
                { name: 'FAQ', path: '/faq' },
                { name: 'Careers', path: '/careers' }
              ].map(link => (
                <li key={link.name}><Link to={link.path} className="text-gray-400 hover:text-red-400 hover:translate-x-1 inline-block transition-all duration-300">{link.name}</Link></li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="md:col-span-4 lg:col-span-3">
            <h4 className="font-bold text-xs mb-6 uppercase tracking-widest text-white">Contact</h4>
            <ul className="space-y-5 text-sm font-medium text-gray-400">
              <li className="flex items-start gap-4 group cursor-default">
                <MapPin className="w-5 h-5 text-red-500 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">123 Butcher's Lane, Meat District<br/>New York, NY 10014</span>
              </li>
              <li className="flex items-center gap-4 group cursor-default">
                <Phone className="w-5 h-5 text-red-500 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">1-800-CHOPPED</span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <Mail className="w-5 h-5 text-red-500 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">hello@chopped.com</span>
              </li>
            </ul>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <motion.div variants={fadeUp} className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-[11px] uppercase tracking-widest text-gray-500 font-bold">
          <p>&copy; {new Date().getFullYear()} CHOPPED PREMIUM MEAT. ALL RIGHTS RESERVED.</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4 md:mt-0">
            <Link to="/shipping" className="hover:text-red-400 transition-colors">Shipping Policy</Link>
            <Link to="/refund-policy" className="hover:text-red-400 transition-colors">Refund Policy</Link>
            <Link to="/privacy" className="hover:text-red-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-red-400 transition-colors">Terms of Service</Link>
          </div>
        </motion.div>

      </motion.div>
    </footer>
  );
}
