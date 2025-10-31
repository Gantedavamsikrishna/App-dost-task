// import {
//   ArrowRight,
//   Sparkles,
//   Users,
//   Smartphone,
//   Database,
//   Calendar,
// } from "lucide-react";

// interface HeroProps {
//   onConsultationClick: () => void;
// }

// export default function Hero({ onConsultationClick }: HeroProps) {
//   const stats = [
//     { icon: Database, label: "Web Projects", value: "10+" },
//     { icon: Smartphone, label: "Android Apps", value: "4+" },
//     { icon: Users, label: "CRM Project", value: "1" },
//     { icon: Calendar, label: "Since", value: "2025" },
//   ];

//   const badges = [
//     "100% Client Satisfaction",
//     "24/7 Support",
//     "Secure & Scalable",
//     "Agile Development",
//   ];

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#161629] to-[#0a0a1a] pt-20">
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent"></div>

//       <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
//       <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="text-center space-y-8 animate-fade-in">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/30 backdrop-blur-sm">
//             <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
//             <span className="text-sm text-cyan-300 font-medium">
//               Complete IT Solution Provider Since 2025
//             </span>
//           </div>

//           <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
//             <span className="block bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent animate-gradient">
//               AppDost
//             </span>
//             <span className="block mt-4 text-3xl md:text-5xl lg:text-6xl text-white/90">
//               Empowering Digital Innovation
//             </span>
//           </h1>

//           <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
//             Transform your business with cutting-edge technology solutions. We
//             deliver responsive web applications, intuitive mobile apps, and
//             scalable enterprise solutions.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
//             <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]">
//               <span className="relative z-10 flex items-center gap-2">
//                 Explore Our Services
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </span>
//               <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </button>

//             <button
//               onClick={onConsultationClick}
//               className="group relative px-8 py-4 bg-transparent border-2 border-cyan-400 rounded-full font-semibold text-cyan-400 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
//             >
//               <span className="relative z-10 flex items-center gap-2">
//                 Get Free Consultation
//                 <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
//               </span>
//               <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </button>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 max-w-4xl mx-auto">
//             {stats.map((stat, index) => (
//               <div
//                 key={index}
//                 className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 animate-float"
//                 style={{ animationDelay: `${index * 0.2}s` }}
//               >
//                 <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 <div className="relative z-10 flex flex-col items-center gap-3">
//                   <stat.icon className="w-8 h-8 text-cyan-400 group-hover:text-violet-400 transition-colors" />
//                   <div className="text-center">
//                     <div className="text-2xl md:text-3xl font-bold text-white">
//                       {stat.value}
//                     </div>
//                     <div className="text-xs md:text-sm text-gray-400">
//                       {stat.label}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="flex flex-wrap gap-3 justify-center pt-8">
//             {badges.map((badge, index) => (
//               <div
//                 key={index}
//                 className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-400/30 backdrop-blur-sm hover:border-emerald-400/60 transition-all duration-300 hover:scale-105"
//               >
//                 <span className="text-sm font-medium text-emerald-300">
//                   {badge}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import {
  ArrowRight,
  Sparkles,
  Users,
  Smartphone,
  Database,
  Calendar,
} from "lucide-react";

interface HeroProps {
  onConsultationClick: () => void;
}

export default function Hero({ onConsultationClick }: HeroProps) {
  const stats = [
    { icon: Database, label: "Web Projects", value: "10+" },
    { icon: Smartphone, label: "Android Apps", value: "4+" },
    { icon: Users, label: "CRM Project", value: "1" },
    { icon: Calendar, label: "Since", value: "2025" },
  ];

  const badges = [
    "100% Client Satisfaction",
    "24/7 Support",
    "Secure & Scalable",
    "Agile Development",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#161629] to-[#0a0a1a] pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/30 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-sm text-cyan-300 font-medium">
              Complete IT Solution Provider Since 2025
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
            <span className="block bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent animate-gradient italic">
              {/* ^- MODIFICATION: 'blur-sm' removed, 'italic' remains. */}
              AppDost
            </span>
            <span className="block mt-4 text-3xl md:text-5xl lg:text-6xl text-white/90">
              Empowering Digital Innovation
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge technology solutions. We
            deliver responsive web applications, intuitive mobile apps, and
            scalable enterprise solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]">
              <span className="relative z-10 flex items-center gap-2">
                Explore Our Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={onConsultationClick}
              className="group relative px-8 py-4 bg-transparent border-2 border-cyan-400 rounded-full font-semibold text-cyan-400 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Free Consultation
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <stat.icon className="w-8 h-8 text-cyan-400 group-hover:text-violet-400 transition-colors" />
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 justify-center pt-8">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-400/30 backdrop-blur-sm hover:border-emerald-400/60 transition-all duration-300 hover:scale-105"
              >
                <span className="text-sm font-medium text-emerald-300">
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
