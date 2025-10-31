import { Search, Palette, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discovery & Planning',
    description: 'We analyze your requirements, define project scope, and create a comprehensive roadmap for success.',
    gradient: 'from-cyan-500 to-blue-500',
    position: 'top-0'
  },
  {
    icon: Palette,
    title: 'Design & Prototype',
    description: 'Our designers craft intuitive interfaces and interactive prototypes to visualize your solution.',
    gradient: 'from-violet-500 to-purple-500',
    position: 'top-8'
  },
  {
    icon: Code2,
    title: 'Development & Testing',
    description: 'Expert developers build your solution using best practices, with rigorous testing at every stage.',
    gradient: 'from-emerald-500 to-teal-500',
    position: 'top-16'
  },
  {
    icon: Rocket,
    title: 'Deployment & Support',
    description: 'We launch your solution and provide ongoing support to ensure continued success and growth.',
    gradient: 'from-orange-500 to-amber-500',
    position: 'top-24'
  }
];

export default function Process() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0a0a1a] via-[#161629] to-[#0a0a1a] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Our Process
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A proven methodology to deliver exceptional results
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500 via-violet-500 to-orange-500 opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500 via-violet-500 to-orange-500 opacity-50 animate-pulse"></div>
          </div>

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-1 w-full">
                  <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                    <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10`}></div>

                    <div className="relative z-10 space-y-4">
                      <div className="flex items-center gap-4">
                        <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${step.gradient} shadow-lg`}>
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className={`text-6xl font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent opacity-20`}>
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-white">
                        {step.title}
                      </h3>

                      <p className="text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:flex relative z-20 flex-shrink-0">
                  <div className={`relative w-16 h-16 rounded-full bg-gradient-to-r ${step.gradient} shadow-lg flex items-center justify-center animate-pulse`}>
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.gradient} blur-xl opacity-50`}></div>
                    <div className="relative w-8 h-8 rounded-full bg-[#0a0a1a] border-2 border-white/20"></div>
                  </div>
                </div>

                <div className="flex-1 w-full lg:opacity-0"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
