import { motion } from 'motion/react';
import {
  AppWindow,
  BadgePercent,
  Box,
  Brush,
  Code2,
  Layers3,
} from 'lucide-react';

export function Services() {
  const services = [
    {
      title: 'UI/UX Design',
      description: 'Web and mobile app experiences shaped for clarity, flow, and delight.',
      icon: AppWindow,
      accent: 'from-[#6366F1]/25 to-[#6366F1]/5',
      iconColor: 'text-[#818CF8]',
    },
    {
      title: 'Graphic Design',
      description: 'Posters, banners, and social creatives designed to feel polished and bold.',
      icon: Brush,
      accent: 'from-[#22C55E]/25 to-[#22C55E]/5',
      iconColor: 'text-[#4ADE80]',
    },
    {
      title: 'Logo & Branding Design',
      description: 'Distinct visual identities built with consistency, personality, and purpose.',
      icon: BadgePercent,
      accent: 'from-[#F472B6]/20 to-[#F472B6]/5',
      iconColor: 'text-[#F472B6]',
    },
    {
      title: 'Interior Design Concepts',
      description: 'Thoughtful spatial concepts balancing mood, usability, and visual harmony.',
      icon: Layers3,
      accent: 'from-[#F59E0B]/20 to-[#F59E0B]/5',
      iconColor: 'text-[#FBBF24]',
    },
    {
      title: '3D Design & Visualization',
      description: 'Blender-based scenes and concepts crafted for depth, realism, and storytelling.',
      icon: Box,
      accent: 'from-[#06B6D4]/20 to-[#06B6D4]/5',
      iconColor: 'text-[#22D3EE]',
    },
    {
      title: 'Frontend Development',
      description: 'Responsive React TypeScript interfaces translated from design into clean layouts.',
      icon: Code2,
      accent: 'from-[#8B5CF6]/20 to-[#8B5CF6]/5',
      iconColor: 'text-[#A78BFA]',
    },
  ];

  return (
    <section id="services" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-10 backdrop-blur-md md:px-10 md:py-14"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.18),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.16),transparent_36%)]" />

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="mx-auto mb-12 max-w-2xl text-center"
            >
              <h2 className="text-4xl font-bold md:text-5xl bg-gradient-to-r from-[#6366F1] to-[#22C55E] bg-clip-text text-transparent">
                Services I Offer
              </h2>
              <p className="mt-4 text-base leading-7 text-[#94A3B8] md:text-lg">
                Creative services that blend thoughtful design, visual storytelling, and practical digital execution.
              </p>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -6, scale: 1.01 }}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0F172A]/60 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.22)] transition-all duration-300 hover:border-white/20"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

                    <div className="relative">
                      <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
                        <Icon className={`h-6 w-6 ${service.iconColor}`} />
                      </div>

                      <h3 className="mb-2 text-xl font-semibold text-white">
                        {service.title}
                      </h3>
                      <p className="text-sm leading-6 text-[#94A3B8]">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-10 text-center text-base font-medium text-white/85 md:text-lg"
            >
              Open for internships, freelance, and creative collaborations.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
