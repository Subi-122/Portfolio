import { motion } from 'motion/react';
import { Mail, Github, Linkedin } from 'lucide-react';

export function Contact() {
  const socials = [
    {
      name: 'Email',
      icon: Mail,
      link: 'mailto:subiksha@example.com',
      color: '#6366F1',
    },
    {
      name: 'GitHub',
      icon: Github,
      link: 'https://github.com',
      color: '#22C55E',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      link: 'https://linkedin.com',
      color: '#6366F1',
    },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's work together{' '}
            <span className="inline-block">✨</span>
          </h2>

          <p className="text-lg md:text-xl text-[#94A3B8] mb-12 max-w-2xl mx-auto">
            I'm always open to new opportunities and exciting projects. <br />Feel free to reach out and let's create something amazing!
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            {socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative flex items-center gap-3 px-6 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-[#6366F1]/50 transition-all duration-300"
                  style={{
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
                  }}
                >
                  <div
                    className="p-2 rounded-lg transition-all duration-300"
                    style={{
                      backgroundColor: `${social.color}20`,
                    }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: social.color }}
                    />
                  </div>
                  <span className="font-semibold">{social.name}</span>

                  {/* Hover glow effect */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
                    style={{
                      background: `radial-gradient(circle at center, ${social.color}30, transparent 70%)`,
                    }}
                  />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-white/10"
          >
            <p className="text-[#94A3B8] text-sm">
              © 2026 Subiksha. Crafted with passion and creativity.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
