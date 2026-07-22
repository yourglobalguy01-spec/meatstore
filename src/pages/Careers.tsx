import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { ArrowRight, MapPin } from 'lucide-react';

export function Careers() {
  const jobs = [
    { title: 'Master Butcher', location: 'New York, NY', type: 'Full-time' },
    { title: 'Logistics Coordinator', location: 'New York, NY', type: 'Full-time' },
    { title: 'Customer Experience Specialist', location: 'Remote', type: 'Full-time' },
  ];

  return (
    <main className="w-full bg-[#FAFAFA] min-h-screen pt-48 pb-32 text-[#1F3B54]">
      <SEO title="Careers | Chopped" description="Join the team at Chopped. We are always looking for passionate individuals to help us deliver the best meat in the world." />
      
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-heading font-black tracking-tighter uppercase mb-6">
            Careers at Chopped<span className="text-red-600">.</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            We're on a mission to redefine the modern butcher experience. If you're passionate about uncompromising quality and premium service, we want you on our team.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100"
        >
          <h2 className="text-2xl font-heading font-bold uppercase tracking-wide mb-8 border-b border-gray-100 pb-4">Open Positions</h2>
          
          <div className="flex flex-col gap-6">
            {jobs.map((job, idx) => (
              <div key={idx} className="group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl border border-gray-100 hover:border-red-200 hover:bg-red-50/30 transition-all duration-300 cursor-pointer">
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-red-600 transition-colors">{job.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#1F3B54] group-hover:text-red-600 transition-colors">
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center p-8 bg-gray-50 rounded-2xl">
            <h3 className="font-heading font-bold text-lg mb-2">Don't see a fit?</h3>
            <p className="text-gray-500 text-sm mb-4">We are always looking for great talent. Send your resume to us directly.</p>
            <a href="mailto:careers@chopped.com" className="text-red-600 font-bold hover:underline">careers@chopped.com</a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
