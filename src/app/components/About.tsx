import { motion } from 'motion/react';
import { Palette, Code, Lightbulb } from 'lucide-react';

export function About() {
  const tags = [
    { icon: Palette, text: 'Designer' },
    { icon: Code, text: 'Developer' },
    { icon: Lightbulb, text: 'Creative thinker' },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/subi.jpeg"
                alt="Subiksha"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-[#6366F1] rounded-full blur-[100px] opacity-30 -z-10" />
          </motion.div>

          {/* Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#6366F1] to-[#22C55E] bg-clip-text text-transparent"
            >
              About Me
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg text-[#94A3B8] leading-relaxed mb-8"
            >
              I’m a multi-disciplinary designer and IT student passionate about creating meaningful experiences across both digital and physical spaces.
              From UI/UX design and web interfaces to branding, interiors, and visual storytelling,
              I blend creativity with functionality always keeping the user at the center.
              I enjoy exploring new ideas and turning them into impactful, well-crafted designs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4"
            >
              {tags.map((tag, index) => {
                const Icon = tag.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
                  >
                    <Icon className="w-5 h-5 text-[#6366F1]" />
                    <span className="text-sm font-medium">{tag.text}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
