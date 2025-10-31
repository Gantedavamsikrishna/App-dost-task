import { Palette, Code, Globe, Smartphone, Layers, Lightbulb, Bot, Database, Cloud, Shield } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating intuitive and visually stunning user interfaces that enhance user experience and engagement.',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Building tailored software solutions that perfectly align with your business requirements and goals.',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Globe,
    title: 'Web Application Development',
    description: 'Developing responsive and scalable web applications using modern frameworks and best practices.',
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Crafting native and cross-platform mobile applications for iOS and Android with seamless performance.',
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Layers,
    title: 'Full-Stack Development',
    description: 'End-to-end development expertise covering frontend, backend, and database architecture.',
    gradient: 'from-orange-500 to-amber-500'
  },
  {
    icon: Lightbulb,
    title: 'Digital Transformation Consulting',
    description: 'Strategic guidance to modernize your business processes and embrace digital innovation.',
    gradient: 'from-yellow-500 to-lime-500'
  },
  {
    icon: Bot,
    title: 'Android App Development',
    description: 'Native Android applications built with Kotlin for optimal performance and user experience.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Database,
    title: 'CRM Software',
    description: 'Custom CRM solutions to streamline customer relationships and boost sales productivity.',
    gradient: 'from-indigo-500 to-blue-500'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Cloud migration, deployment, and management services using AWS and modern cloud platforms.',
    gradient: 'from-sky-500 to-cyan-500'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and ensure data integrity.',
    gradient: 'from-red-500 to-pink-500'
  }
];

export default function Services() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0a0a1a] via-[#161629] to-[#0a0a1a] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to transform your digital presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                   style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}></div>

              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500`}></div>

              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                   style={{
                     background: `linear-gradient(90deg, transparent, var(--tw-gradient-stops), transparent)`,
                     filter: 'blur(8px)'
                   }}></div>

              <div className="relative z-10 space-y-4">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.gradient} shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-violet-400 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">Learn more</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
