import { motion } from 'motion/react';
import { Figma, Image, Palette, Box, FileCode, Blocks, Brush, CodeXml } from 'lucide-react';

export function Skills() {
  const skills = [
    { name: 'Figma', icon: Figma, color: '#f19263' },
    { name: 'Photoshop', icon: Image, color: '#22C55E' },
    { name: 'Canva', icon: Palette, color: '#f19263' },
    { name: 'Blender', icon: Box, color: '#22C55E' },
    { name: 'Auto CAD', icon: Blocks, color: '#22C55E' },
    { name: 'Adobe Illustrator', icon: Brush, color: '#f19263' },
    { name: 'Python', icon: FileCode, color: '#22C55E' },
    { name: 'Front-end', icon: CodeXml, color: '#f19263' },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#6366F1] to-[#22C55E] bg-clip-text text-transparent"
        >
          Skills & Tools
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group relative p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl cursor-pointer transition-all duration-300 hover:border-[#6366F1]/50"
                style={{
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
                }}
              >
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="p-2 rounded-xl transition-all duration-300"
                    style={{
                      backgroundColor: `${skill.color}15`,
                    }}
                  >
                    <Icon
                      className="w-6 h-6 transition-all duration-300 group-hover:scale-110"
                      style={{ color: skill.color }}
                    />
                  </div>
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                </div>

                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
                  style={{
                    background: `radial-gradient(circle at center, ${skill.color}40, transparent 70%)`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
