import { SEO } from '../components/SEO';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export function Contact() {
  return (
    <main className="w-full bg-white min-h-screen pt-48 pb-24">
      <SEO title="Contact Us - Chopped Premium Meat" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-black tracking-tighter uppercase text-[var(--color-text-primary)] mb-6">
            Get In Touch
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] font-body leading-relaxed">
            Have questions about an order or need cooking advice? Our concierge team of meat experts is here to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-[var(--color-bg-gray)] p-8 md:p-12 rounded-sm">
            <h2 className="text-2xl font-heading font-bold uppercase mb-8 text-[var(--color-text-primary)]">Send a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">First Name</label>
                  <input type="text" className="w-full bg-white border border-gray-200 p-3 focus:outline-none focus:border-[var(--color-brand-red)] transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-white border border-gray-200 p-3 focus:outline-none focus:border-[var(--color-brand-red)] transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Email Address</label>
                <input type="email" className="w-full bg-white border border-gray-200 p-3 focus:outline-none focus:border-[var(--color-brand-red)] transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Message</label>
                <textarea rows={5} className="w-full bg-white border border-gray-200 p-3 focus:outline-none focus:border-[var(--color-brand-red)] transition-colors"></textarea>
              </div>
              <button className="w-full bg-[var(--color-brand-navy)] text-white font-bold uppercase tracking-widest py-4 hover:bg-[var(--color-brand-red)] transition-colors">
                Submit Request
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-12 pl-0 lg:pl-12">
            <div>
              <h2 className="text-2xl font-heading font-bold uppercase mb-8 text-[var(--color-text-primary)]">Contact Details</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-full flex-shrink-0">
                    <Phone className="w-5 h-5 text-[var(--color-brand-red)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm uppercase tracking-wider mb-1">Phone</h3>
                    <p className="text-[var(--color-text-secondary)]">1-800-CHOPPED</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-full flex-shrink-0">
                    <Mail className="w-5 h-5 text-[var(--color-brand-red)]" />
                  </div>
                <div>
                    <h3 className="font-bold text-sm uppercase tracking-wider mb-1">Email</h3>
                    <p className="text-[var(--color-text-secondary)]">concierge@chopped.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-full flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[var(--color-brand-red)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm uppercase tracking-wider mb-1">Headquarters</h3>
                    <p className="text-[var(--color-text-secondary)]">123 Butcher Lane<br/>Meatpack District, NY 10014</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold uppercase mb-8 text-[var(--color-text-primary)]">Hours of Operation</h2>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-full flex-shrink-0">
                  <Clock className="w-5 h-5 text-[var(--color-brand-red)]" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between w-48 border-b border-gray-100 pb-2">
                    <span className="font-bold text-xs uppercase text-gray-500">Mon - Fri</span>
                    <span className="text-sm font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between w-48 border-b border-gray-100 pb-2">
                    <span className="font-bold text-xs uppercase text-gray-500">Saturday</span>
                    <span className="text-sm font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between w-48">
                    <span className="font-bold text-xs uppercase text-gray-500">Sunday</span>
                    <span className="text-sm font-medium text-[var(--color-brand-red)]">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
