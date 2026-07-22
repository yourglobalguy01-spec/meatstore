import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Play, Star } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const textReveal: any = {
  hidden: { y: 100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  }
};

const imageReveal: any = {
  hidden: { scale: 0.95, opacity: 0, filter: 'blur(15px)' },
  visible: { 
    scale: 1, 
    opacity: 1, 
    filter: 'blur(0px)',
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }
  }
};

export function PremiumHero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <section className="relative w-full min-h-[95vh] bg-[#fdfdfd] pt-48 pb-24 lg:pt-56 lg:pb-32 font-body selection:bg-red-500 selection:text-white overflow-hidden flex items-center border-b border-gray-100">
      
      {/* Hyper-realistic Studio Lighting Cyclorama effect */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,white_0%,#f1f5f9_100%)]" />
        <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-red-500/5 blur-[120px] rounded-full" />
      </div>

      {/* Massive Background Typography */}
      <motion.div style={{ y: y2 }} className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none select-none">
        <h1 className="text-[12vw] font-heading font-black text-gray-900/[0.03] tracking-tighter whitespace-nowrap">
          UNCOMPROMISING
        </h1>
      </motion.div>

      <motion.div 
        className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-0"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        
        {/* Left: Text Content - Editorial & Cinematic */}
        <div className="w-full lg:w-[50%] z-20">
          
          <div className="overflow-hidden mb-6">
            <motion.div variants={textReveal} className="flex items-center gap-3">
              <div className="w-12 h-[2px] bg-red-600" />
              <span className="text-red-600 font-button uppercase tracking-[0.25em] text-xs font-bold">
                The Master Butcher's Choice
              </span>
            </motion.div>
          </div>
          
          <div className="mb-8">
            <div className="overflow-hidden pb-2">
              <motion.h1 variants={textReveal} className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading font-black tracking-tighter text-gray-900 leading-[0.95]">
                Next Generation.
              </motion.h1>
            </div>
            <div className="overflow-hidden mt-1 pb-2">
              <motion.h1 variants={textReveal} className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading font-black tracking-tighter text-red-600 leading-[0.95]">
                Halal Meat.
              </motion.h1>
            </div>
          </div>
          
          <div className="overflow-hidden mb-10 max-w-lg">
            <motion.p variants={textReveal} className="text-gray-600 text-lg md:text-xl leading-relaxed font-light">
              Experience ethically raised, <strong className="font-semibold text-gray-900">farm-fresh prime cuts</strong>, expertly curated for the modern culinary home. Delivered with pristine perfection.
            </motion.p>
          </div>
          
          {/* Trust Indicators */}
          <div className="overflow-hidden mb-12">
            <motion.div variants={textReveal} className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3 bg-white px-5 py-3 shadow-sm rounded-sm border border-gray-100">
                <CheckCircle2 className="w-5 h-5 text-red-600" />
                <span className="text-gray-900 font-bold text-xs uppercase tracking-widest">No Hormones</span>
              </div>
              <div className="flex items-center gap-3 bg-white px-5 py-3 shadow-sm rounded-sm border border-gray-100">
                <ShieldCheck className="w-5 h-5 text-red-600" />
                <span className="text-gray-900 font-bold text-xs uppercase tracking-widest">Certified Halal</span>
              </div>
            </motion.div>
          </div>
          
          {/* Action Buttons */}
          <div className="overflow-hidden">
            <motion.div variants={textReveal} className="flex flex-wrap items-center gap-6">
              <Link 
                to="/products"
                className="group relative flex items-center gap-3 bg-[#1F3B54] text-white px-8 py-5 font-button font-bold text-sm tracking-widest overflow-hidden transition-transform hover:-translate-y-1 shadow-[0_20px_40px_-15px_rgba(31,59,84,0.5)]"
              >
                <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10 flex items-center gap-3">
                  SHOP COLLECTION
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link 
                to="/how-it-works"
                className="flex items-center gap-4 text-gray-900 px-4 py-4 font-button font-bold text-sm tracking-widest hover:text-red-600 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center group-hover:scale-110 group-hover:border-red-200 transition-all duration-300">
                  <Play className="w-4 h-4 text-red-600 ml-1" />
                </div>
                HOW WE SOURCE
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Right: Studio Grounded Image */}
        <div className="w-full lg:w-[50%] relative flex items-center justify-center lg:justify-end mt-16 lg:mt-0 perspective-[1000px]">
          
          <motion.div 
            variants={imageReveal}
            style={{ y: y1 }}
            className="relative w-full max-w-[700px] flex justify-center items-end"
          >
            {/* The Product Image */}
            <img 
              src="/images/hero_image.png"
              alt="Premium Raw Meat" 
              className="w-[90%] h-auto object-contain relative z-10 pb-[2px]"
            />
            
            {/* Ultra-realistic tight contact shadow */}
            <div className="absolute bottom-[2px] left-1/2 -translate-x-1/2 w-[65%] h-[12px] bg-black/60 blur-[6px] rounded-[100%] z-0 mix-blend-multiply" />
            
            {/* Soft ambient ground shadow */}
            <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-[85%] h-[40px] bg-black/15 blur-[20px] rounded-[100%] z-0 mix-blend-multiply" />
            
            {/* Floating Glass Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -left-4 md:-left-8 bottom-16 z-20 bg-white/95 backdrop-blur-md p-5 shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white rounded-2xl flex items-start gap-4 max-w-[260px]"
            >
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                <Star className="w-5 h-5 text-red-600" />
              </div>
              <div className="text-sm text-gray-600 leading-snug">
                <span className="font-heading font-black text-lg text-gray-900 block mb-1">Local Butcher</span>
                Hand-cut in New York, <strong className="text-gray-900">Available Today.</strong>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
