import { Target, Zap, Users, Award, TrendingUp, Clock } from 'lucide-react';

const expertise = [
  {
    icon: Target,
    title: 'Responsive Applications',
    description: 'Developing responsive web and mobile applications that work seamlessly across all devices',
    color: 'cyan'
  },
  {
    icon: Zap,
    title: 'Intuitive Interfaces',
    description: 'Creating user interfaces that are both beautiful and easy to use, enhancing user engagement',
    color: 'violet'
  },
  {
    icon: Users,
    title: 'Scalable Solutions',
    description: 'Building enterprise-grade solutions that grow with your business needs',
    color: 'fuchsia'
  },
  {
    icon: Award,
    title: 'Strategic Guidance',
    description: 'Providing expert digital transformation consulting to modernize your business',
    color: 'emerald'
  }
];

const whyChoose = [
  {
    icon: TrendingUp,
    title: '100% Client Satisfaction',
    description: 'Committed to delivering excellence in every project',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock assistance for your peace of mind',
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    icon: Award,
    title: 'Secure & Scalable',
    description: 'Built with security and growth in mind',
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Zap,
    title: 'Agile Development',
    description: 'Flexible and iterative approach to software delivery',
    gradient: 'from-orange-500 to-amber-500'
  }
];

export default function About() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#161629] via-[#0a0a1a] to-[#161629] overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Our Expertise
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Empowering businesses with cutting-edge technology solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-${item.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r from-${item.color}-500/50 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10`}></div>

              <div className="relative z-10 space-y-4">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r from-${item.color}-500/20 to-${item.color}-600/20 border border-${item.color}-500/30`}>
                  <item.icon className={`w-6 h-6 text-${item.color}-400`} />
                </div>

                <h3 className="text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Why Choose Us
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Your trusted partner for digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChoose.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              <div className="relative z-10 text-center space-y-4">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${item.gradient} shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-lg font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
