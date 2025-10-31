import { Code2 } from 'lucide-react';

const technologies = [
  { name: 'React', color: 'from-cyan-400 to-blue-500' },
  { name: 'Node.js', color: 'from-green-400 to-emerald-500' },
  { name: 'Python', color: 'from-blue-400 to-indigo-500' },
  { name: 'MongoDB', color: 'from-green-500 to-teal-500' },
  { name: 'AWS', color: 'from-orange-400 to-amber-500' },
  { name: 'Docker', color: 'from-blue-500 to-cyan-500' },
  { name: 'Kotlin', color: 'from-purple-400 to-violet-500' },
  { name: 'TypeScript', color: 'from-blue-500 to-blue-600' }
];

export default function Technologies() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-[#0a0a1a] to-[#161629] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/30 backdrop-blur-sm">
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300 font-medium">Technologies We Master</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative px-6 py-3 rounded-full bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              <div className={`absolute -inset-px rounded-full bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 -z-10`}></div>
              <span className={`relative z-10 font-semibold bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
