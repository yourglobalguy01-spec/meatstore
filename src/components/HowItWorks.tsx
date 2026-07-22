import { Leaf, PackageSearch, FlaskConicalOff, ShieldPlus } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Always Fresh",
      description: "Our premium cuts are always fresh, never frozen. We guarantee peak flavor and tenderness upon arrival."
    },
    {
      icon: <PackageSearch className="w-8 h-8" />,
      title: "Vacuum Sealed",
      description: "Every order is meticulously vacuum-sealed to lock in freshness, prevent oxidation, and ensure longevity."
    },
    {
      icon: <FlaskConicalOff className="w-8 h-8" />,
      title: "NO Chemicals",
      description: "100% natural and pasture-raised. Absolutely no artificial preservatives, added hormones, or antibiotics."
    },
    {
      icon: <ShieldPlus className="w-8 h-8" />,
      title: "100% Hygiene",
      description: "Processed in state-of-the-art facilities that exceed the highest industry standards for cleanliness and safety."
    }
  ];

  return (
    <section className="pt-48 pb-20 bg-white text-gray-900 border-t border-gray-100">
      <div className="w-full max-w-6xl mx-auto px-6">
        
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-gray-900 font-heading">
            Uncompromising Standards
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-body">
            Extraordinary meals begin long before they reach the kitchen. Our process is a testament to time-honored traditions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group cursor-default">
              {/* Circular Icon Container matching the brand guide style */}
              <div className="w-24 h-24 bg-white border-2 border-red-700 text-red-700 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-700 group-hover:text-white transition-colors duration-500 shadow-sm relative">
                {step.icon}
                {/* Decorative strike-through line for the NO chemicals icon */}
                {step.title === "NO Chemicals" && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity">
                    <div className="w-[120%] h-[2px] bg-red-700 group-hover:bg-white -rotate-45" />
                  </div>
                )}
              </div>
              <h3 className="font-heading font-bold text-xl mb-3 text-gray-900">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm font-body">{step.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
