import { SEO } from '../components/SEO';
import { Truck, ShieldCheck, Box } from 'lucide-react';

export function Shipping() {
  return (
    <main className="w-full bg-white min-h-screen pt-48 pb-24">
      <SEO title="Shipping & Returns - Chopped Premium Meat" />
      
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-black tracking-tighter uppercase text-[var(--color-text-primary)] mb-6">
            Shipping & Returns
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] font-body">
            How we ensure your meat arrives in perfect condition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[var(--color-bg-gray)] p-8 text-center rounded-sm">
            <Truck className="w-10 h-10 text-[var(--color-brand-red)] mx-auto mb-4" />
            <h3 className="font-heading font-bold uppercase mb-2">Fast Transit</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">1-3 day shipping across the continental US.</p>
          </div>
          <div className="bg-[var(--color-bg-gray)] p-8 text-center rounded-sm">
            <Box className="w-10 h-10 text-[var(--color-brand-red)] mx-auto mb-4" />
            <h3 className="font-heading font-bold uppercase mb-2">Eco-Packaging</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Fully recyclable insulation and dry ice.</p>
          </div>
          <div className="bg-[var(--color-bg-gray)] p-8 text-center rounded-sm">
            <ShieldCheck className="w-10 h-10 text-[var(--color-brand-red)] mx-auto mb-4" />
            <h3 className="font-heading font-bold uppercase mb-2">Quality Guarantee</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">If it's not perfect, we make it right.</p>
          </div>
        </div>

        <div className="space-y-12 prose prose-lg max-w-none text-[var(--color-text-secondary)]">
          <div>
            <h2 className="text-2xl font-heading font-bold uppercase text-[var(--color-text-primary)] mb-4 border-b border-gray-200 pb-2">Our Shipping Process</h2>
            <p>
              We ship packages Monday through Wednesday to ensure your order doesn't sit in a shipping facility over the weekend. Orders placed after 12:00 PM EST on Wednesday will ship the following Monday. 
            </p>
            <p>
              Every order is carefully hand-packed in our specialized, eco-friendly insulated boxes. We use an exact calculation of dry ice based on your location and transit time to ensure your meat remains frozen solid until it reaches your doorstep.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold uppercase text-[var(--color-text-primary)] mb-4 border-b border-gray-200 pb-2">Shipping Rates</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Orders over $150:</strong> Free Standard Shipping</li>
              <li><strong>Orders under $150:</strong> Flat rate of $29.99</li>
              <li><strong>Overnight Shipping:</strong> Available at checkout for an additional $49.99</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold uppercase text-[var(--color-text-primary)] mb-4 border-b border-gray-200 pb-2">Return & Refund Policy</h2>
            <p>
              Because our products are highly perishable, we cannot accept returns. However, your satisfaction is our top priority. If your order arrives damaged, thawed, or if you are completely unsatisfied with the quality, please contact our concierge team within 7 days of receipt.
            </p>
            <p>
              We will review the issue and gladly offer a replacement or a full refund. We may request photos of the product and packaging to help us improve our shipping processes.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
