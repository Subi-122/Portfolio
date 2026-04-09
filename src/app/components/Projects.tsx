import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'E-Wallet App UI/UX',
      year: '2025',
      description: [
        'Designed 20+ screens with a complete user journey',
        'Included Logos, splash screens and authentication (login/signup) flow',
        'Created a structured navigation flow connecting all screens',
        'Designed wallet dashboard with balance and quick actions',
        'Implemented money transfer flow (contact -> amount -> success)',
        'Added QR scanner feature for quick payments',
        'Included transaction success and failure feedback screens',
        'Designed profile and account management section',
        'Built secure document storage with PIN-based access',
        'Maintained consistent design system and smooth user flow across all screens'
      ],
      image: 'E-Wallet.png',
      link:'E-wallet case study.pdf',
    },
    {
      title: 'Blender 3D Project',
      year: '2026 Ongoing',
      description: [
        'Created a realistic 3D street environment using Blender',
        'Modeled buildings, street lights, road, and sidewalks',
        'Designed small shop structures with exterior details',
        'Added street elements like poles, wires, and seating',
        'Focused on lighting setup and scene composition',
        'Applied basic materials and textures',
        'Explored real-world scale and proportions',
        'Practiced environment design and visual storytelling',
        'Worked on clean layout and spatial arrangement',
        'Currently improving with advanced rendering and animation'
      ],
      image: 'blender.png',
      link: null,
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#6366F1] to-[#22C55E] bg-clip-text text-transparent"
        >
          Projects
        </motion.h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-[#6366F1]/50 transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <motion.div
                  className="relative overflow-hidden rounded-2xl w-full h-80"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-[#94A3B8] bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                    <span className="text-[#22C55E] font-semibold text-lg">({project.year})</span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {project.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[#94A3B8]">
                        <span className="text-[#22C55E] mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {project.link ? (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(project.link, '_blank')}
                      className="flex items-center gap-2 px-6 py-3 bg-[#6366F1] hover:bg-[#5558E3] rounded-full font-semibold w-fit transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]"
                    >
                      View Case Study
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  ) : null}
                </div>
              </div>

              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-2xl bg-gradient-to-r from-[#6366F1]/20 to-[#22C55E]/20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
