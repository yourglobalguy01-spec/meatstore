import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';

export function RefundPolicy() {
  return (
    <main className="w-full bg-[#FAFAFA] min-h-screen pt-48 pb-32 text-[#1F3B54]">
      <SEO title="Refund Policy | Chopped" description="Our refund and return policy for all premium meat purchases." />
      
      <div className="max-w-[800px] mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tighter uppercase mb-6 text-center">
            Refund Policy<span className="text-red-600">.</span>
          </h1>
          <p className="text-center text-gray-500 font-medium tracking-widest uppercase text-sm mb-12">Last Updated: October 2023</p>
          
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 font-body text-gray-600 leading-relaxed space-y-8">
            <section>
              <h2 className="text-2xl font-heading font-bold text-[#1F3B54] mb-4">1. Perishable Goods</h2>
              <p>Because we ship highly perishable raw meat products, we do not accept returns. All sales are considered final once they have been dispatched from our facility.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-heading font-bold text-[#1F3B54] mb-4">2. The Chopped Guarantee</h2>
              <p>Your satisfaction is our absolute priority. If your order arrives damaged, thawed, or if you are unsatisfied with the quality of the meat, please contact us within 7 days of delivery.</p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-[#1F3B54] mb-4">3. Requesting a Refund</h2>
              <p>To process a refund or replacement request, please email our support team at <a href="mailto:support@chopped.com" className="text-red-600 hover:underline">support@chopped.com</a> with:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Your order number</li>
                <li>A brief description of the issue</li>
                <li>Photographic evidence of the product and its packaging</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-[#1F3B54] mb-4">4. Processing Time</h2>
              <p>If your refund is approved, it will be processed immediately. A credit will automatically be applied to your original method of payment within 3-5 business days, depending on your bank's processing times.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
