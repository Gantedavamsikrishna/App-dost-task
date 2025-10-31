import { ExternalLink, BookOpen, GraduationCap, Heart } from 'lucide-react';

const projects = [
  {
    icon: GraduationCap,
    title: 'BEU Mate',
    description: 'An innovative educational AI platform designed to enhance learning experiences for students with intelligent tutoring and personalized study materials.',
    tags: ['AI/ML', 'Education', 'React', 'Node.js'],
    gradient: 'from-cyan-500 to-blue-500',
    link: '#'
  },
  {
    icon: BookOpen,
    title: 'Devskillquest',
    description: 'A comprehensive learning platform for developers featuring interactive coding challenges, tutorials, and skill assessment tools.',
    tags: ['E-Learning', 'Web App', 'TypeScript', 'MongoDB'],
    gradient: 'from-violet-500 to-purple-500',
    link: '#'
  },
  {
    icon: Heart,
    title: 'The Weddings Chapter',
    description: 'A beautiful wedding planning portal connecting couples with top vendors, featuring booking management and customizable planning tools.',
    tags: ['Portal', 'Full-Stack', 'React', 'AWS'],
    gradient: 'from-pink-500 to-rose-500',
    link: '#'
  }
];

export default function Projects() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#161629] via-[#0a0a1a] to-[#161629] overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Delivering innovative solutions that drive real business results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              <div className={`absolute -inset-px bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10`}></div>

              <div className="relative z-10 p-8 space-y-6">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${project.gradient} shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}>
                  <project.icon className="w-8 h-8 text-white" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-violet-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-300 group-hover:border-white/20 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className={`group/btn flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105`}>
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                </button>
              </div>

              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]">
            <span className="relative z-10 flex items-center gap-2">
              View All Projects
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
