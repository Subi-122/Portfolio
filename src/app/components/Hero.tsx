import { motion } from 'motion/react';
import { ArrowDown, Sparkles, Code2, Palette } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-6 pt-20">
      {/* Floating orbs that follow mouse */}
      <motion.div
        className="fixed w-4 h-4 bg-[#EC4899] rounded-full blur-sm pointer-events-none z-10"
        animate={{
          x: mousePosition.x - 400,
          y: mousePosition.y - 400,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      />
      <motion.div
        className="fixed w-3 h-3 bg-[#3B82F6] rounded-full blur-sm pointer-events-none z-10"
        animate={{
          x: mousePosition.x - 400,
          y: mousePosition.y - 400,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 150, delay: 0.05 }}
      />

      {/* Floating decorative elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-32 left-12 text-[#EC4899] opacity-20"
      >
        <Sparkles className="w-16 h-16" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-48 right-16 text-[#3B82F6] opacity-20"
      >
        <Code2 className="w-20 h-20" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-32 left-24 text-[#8B5CF6] opacity-20"
      >
        <Palette className="w-14 h-14" />
      </motion.div>

      <div className="text-center max-w-4xl mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-[#EC4899]/20 to-[#3B82F6]/20 backdrop-blur-sm border border-white/10 rounded-full"
          >
            <span className="text-sm font-medium bg-gradient-to-r from-[#EC4899] to-[#3B82F6] bg-clip-text text-transparent">
              ✨ Available for freelance work
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{' '}
            <motion.span
              className="inline-block bg-gradient-to-r from-[#EC4899] via-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              Subiksha
            </motion.span>{' '}
            👋
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl md:text-3xl font-semibold mb-4"
        >
          Multi-Disciplinary Designer
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg md:text-xl text-[#94A3B8] mb-12"
        >
          I create clean, user-focused digital experiences that inspire and engage.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            onClick={scrollToProjects}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-[#EC4899] via-[#8B5CF6] to-[#3B82F6] rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_40px_rgba(236,72,153,0.6)]"
          >
            View Projects
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-[#94A3B8]" />
        </motion.div>
      </motion.div>
    </section>
  );
}