import { motion } from 'motion/react';
import { Briefcase, Award, Eye } from 'lucide-react';
import { ProfileExtras } from './ProfileExtras';

export function Experience() {
  const experiences = [
    {
      year: '2024',
      title: 'UI/UX Intern',
      company: 'Techvolt',
      certificate: 'Techvolt.jpg',
    },
    {
      year: '2024',
      title: 'Full Stack Intern',
      company: 'NoviTech',
      certificate: 'Novi.pdf',
    },
  ];

  const certifications = [
    { name: 'UX Fundamentals: A Process for Problem Solving', link: 'ux.pdf' },
    { name: 'Fundamentals of Kotlin Programming', link: 'kotlin.pdf' },
    { name: 'Data Structures and Algorithms', link: 'Dsa.pdf' },
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#6366F1] to-[#22C55E] bg-clip-text text-transparent"
        >
          Experience
        </motion.h2>

        <div className="relative mb-16">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#6366F1] to-[#22C55E]" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-20"
              >
                <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-[#6366F1] border-4 border-[#0F172A]" />

                <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-[#6366F1]/50 transition-all duration-300">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[#6366F1]/20 rounded-lg">
                        <Briefcase className="w-6 h-6 text-[#6366F1]" />
                      </div>
                      <div>
                        <p className="text-sm text-[#22C55E] font-semibold mb-1">{exp.year}</p>
                        <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                        <p className="text-[#94A3B8]">{exp.company}</p>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(exp.certificate, '_blank')}
                      className="flex items-center gap-2 px-4 py-2 bg-[#6366F1] hover:bg-[#6366F1]/80 text-white rounded-lg font-medium transition-colors duration-200"
                    >
                      <Eye className="w-4 h-4" />
                      View Certificate
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-[#22C55E]" />
            <h3 className="text-2xl font-bold">Certifications</h3>
          </div>

          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-between gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-[#22C55E]/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-lg font-medium">{cert.name}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(cert.link, '_blank')}
                  className="flex items-center gap-2 px-4 py-2 bg-[#22C55E] hover:bg-[#22C55E]/80 text-white rounded-lg font-medium transition-colors duration-200"
                >
                  <Eye className="w-4 h-4" />
                  View
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <ProfileExtras />
      </div>
    </section>
  );
}
