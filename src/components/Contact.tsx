import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    details: ['contact@appdost.in', 'hr@appdost.in'],
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+91 76350 75422', '+91 11 6929 0750'],
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    icon: MapPin,
    title: 'Our Offices',
    details: ['Patna (HQ)', 'Motihari', 'Banka'],
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Globe,
    title: 'Website',
    details: ['www.appdost.in'],
    gradient: 'from-orange-500 to-amber-500'
  }
];

export default function Contact() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#161629] via-[#0a0a1a] to-[#0a0a1a] overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Ready to transform your digital presence? Let's start a conversation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10`}></div>

              <div className="relative z-10 text-center space-y-4">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${item.gradient} shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-bold text-white">
                  {item.title}
                </h3>

                <div className="space-y-1">
                  {item.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-400 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]">
            <span className="relative z-10 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Send Us a Message
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
