import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';

export function Terms() {
  return (
    <main className="w-full bg-[#FAFAFA] min-h-screen pt-48 pb-32 text-[#1F3B54]">
      <SEO title="Terms of Service | Chopped" description="Terms of service and conditions for using Chopped." />
      
      <div className="max-w-[800px] mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tighter uppercase mb-6 text-center">
            Terms of Service<span className="text-red-600">.</span>
          </h1>
          <p className="text-center text-gray-500 font-medium tracking-widest uppercase text-sm mb-12">Last Updated: October 2023</p>
          
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 font-body text-gray-600 leading-relaxed space-y-8">
            <section>
              <h2 className="text-2xl font-heading font-bold text-[#1F3B54] mb-4">1. Agreement to Terms</h2>
              <p>By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service. These Terms apply to all visitors, users, and others who access or use the Service.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-heading font-bold text-[#1F3B54] mb-4">2. Purchases & Delivery</h2>
              <p>All meat products are shipped vacuum-sealed with dry ice to ensure freshness upon delivery. We are not responsible for packages that are stolen or spoiled after they have been marked as delivered by the carrier.</p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-[#1F3B54] mb-4">3. Refund Policy</h2>
              <p>Due to the perishable nature of our products, we do not accept returns. If you are unsatisfied with your order, please contact our support team within 24 hours of delivery with photographic evidence, and we will issue a replacement or refund at our discretion.</p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-[#1F3B54] mb-4">4. Governing Law</h2>
              <p>These Terms shall be governed and construed in accordance with the laws of New York, United States, without regard to its conflict of law provisions.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
