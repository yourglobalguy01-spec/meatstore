import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';

export function Privacy() {
  return (
    <main className="w-full bg-[#FAFAFA] min-h-screen pt-48 pb-32 text-[#1F3B54]">
      <SEO title="Privacy Policy | Chopped" description="Our privacy policy and how we protect your data." />
      
      <div className="max-w-[800px] mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tighter uppercase mb-6 text-center">
            Privacy Policy<span className="text-red-600">.</span>
          </h1>
          <p className="text-center text-gray-500 font-medium tracking-widest uppercase text-sm mb-12">Last Updated: October 2023</p>
          
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 font-body text-gray-600 leading-relaxed space-y-8">
            <section>
              <h2 className="text-2xl font-heading font-bold text-[#1F3B54] mb-4">1. Information We Collect</h2>
              <p>At Chopped, we take your privacy seriously. We collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-heading font-bold text-[#1F3B54] mb-4">2. How We Use Your Data</h2>
              <p>We use the information we collect to provide, maintain, and improve our services, such as to facilitate payments, send receipts, provide products and services you request, and develop new features.</p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-[#1F3B54] mb-4">3. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect the personal data that we collect and process about you. Our payments are processed using industry-standard secure encryption.</p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-[#1F3B54] mb-4">4. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@chopped.com" className="text-red-600 hover:underline">privacy@chopped.com</a>.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
