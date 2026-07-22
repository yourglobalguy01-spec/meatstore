import { Star, Quote, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const TESTIMONIALS = [
  { 
    text: "The quality of the Wagyu is unmatched. It literally melted in my mouth. Delivery was prompt and the packaging felt incredibly premium.", 
    author: "James M.", 
    role: "Executive Chef" 
  },
  { 
    text: "I've ordered from many online butchers, but Chopped is on another level. The vacuum sealing kept everything perfectly fresh.", 
    author: "Sarah T.", 
    role: "Home Cook" 
  },
  { 
    text: "You can taste the difference in their sourcing. The Ribeye was the best steak I've cooked at home, hands down.", 
    author: "David L.", 
    role: "Food Critic" 
  },
];

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 }
  }
};

const cardVariants: any = {
  hidden: { y: 50, opacity: 0, rotateX: -20 },
  visible: { 
    y: 0, 
    opacity: 1, 
    rotateX: 0,
    transition: { type: "spring", stiffness: 70, damping: 20 }
  }
};

export function Testimonials() {
  return (
    <section className="relative py-32 bg-gray-900 overflow-hidden perspective-[1000px]">
      
      {/* Realistic Dark Studio Background Lighting */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vh] bg-[radial-gradient(ellipse_at_top,rgba(187,51,60,0.15)_0%,transparent_70%)] opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-red-500 mb-4 font-body">Customer Reviews</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight mb-20 text-white uppercase drop-shadow-xl">
            Word of Mouth
          </h3>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div 
              key={i} 
              variants={cardVariants}
              className="relative group cursor-default"
            >
              {/* Realistic Contact Shadow directly under the card */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-[30px] bg-black/60 blur-[20px] rounded-[100%] z-0 transition-all duration-500 group-hover:w-[90%] group-hover:bg-black/40 group-hover:blur-[25px]" />
              
              <div className="relative bg-white p-10 rounded-2xl z-10 h-full flex flex-col text-left transition-transform duration-500 group-hover:-translate-y-3 group-hover:rotate-1 border border-gray-100">
                
                {/* Large Decorative Quote */}
                <Quote className="absolute top-6 right-8 w-20 h-20 text-gray-100 rotate-180 -z-10 group-hover:text-red-50 transition-colors duration-500" />

                <div className="flex gap-1 text-red-500 mb-6">
                  {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-current" />)}
                </div>
                
                <p className="text-lg md:text-xl font-heading leading-relaxed mb-10 text-gray-800 italic flex-grow">
                  "{t.text}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-white font-heading font-bold text-lg shadow-inner">
                    {t.author.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold font-body text-gray-900 text-lg">{t.author}</h4>
                      <BadgeCheck className="w-4 h-4 text-blue-500" />
                    </div>
                    <span className="text-red-600 font-body text-xs uppercase tracking-widest font-bold">{t.role}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
