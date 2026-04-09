import { motion } from 'motion/react';
import {
  Globe2,
  Languages,
  MessageCircleMore,
  Music4,
  PencilLine,
  PenSquare,
  Sparkles,
  Swords,
} from 'lucide-react';

export function ProfileExtras() {
  const hobbies = [
    {
      title: 'Art & Illustration',
      description: 'Sketching portraits, doodling, and oil painting as a way to explore form, mood, and visual storytelling.',
      icon: PencilLine,
      color: 'text-[#818CF8]',
      glow: 'from-[#6366F1]/20 to-transparent',
    },
    {
      title: 'Music Practice',
      description: 'Playing instruments like violin and piano to stay expressive, focused, and creatively balanced.',
      icon: Music4,
      color: 'text-[#4ADE80]',
      glow: 'from-[#22C55E]/20 to-transparent',
    },
    {
      title: 'Chess & Strategy',
      description: 'Strategic thinking through chess, strengthening patience, pattern recognition, and decision-making.',
      icon: Swords,
      color: 'text-[#FBBF24]',
      glow: 'from-[#F59E0B]/20 to-transparent',
    },
  ];

  const languages = [
    {
      name: 'English',
      level: 'Fluent',
      mode: 'Speaking & Writing',
      icon: Globe2,
      accent: 'from-[#6366F1]/25 to-[#6366F1]/5',
      iconColor: 'text-[#818CF8]',
      badgeClass: 'bg-[#6366F1]/15 text-[#C7D2FE] border-[#6366F1]/20',
      detail: null,
    },
    {
      name: 'Tamil',
      level: 'Native',
      mode: 'Speaking & Writing',
      icon: Languages,
      accent: 'from-[#22C55E]/25 to-[#22C55E]/5',
      iconColor: 'text-[#4ADE80]',
      badgeClass: 'bg-[#22C55E]/15 text-[#BBF7D0] border-[#22C55E]/20',
      detail: null,
    },
    {
      name: 'German',
      level: 'Basic',
      mode: 'Speaking & Writing',
      icon: MessageCircleMore,
      accent: 'from-[#8B5CF6]/25 to-[#8B5CF6]/5',
      iconColor: 'text-[#C4B5FD]',
      badgeClass: 'bg-[#8B5CF6]/15 text-[#DDD6FE] border-[#8B5CF6]/20',
      detail: 'Duolingo Score: 13',
    },
  ];

  return (
    <div className="mt-16 space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="w-6 h-6 text-[#818CF8]" />
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-[#CBD5E1] bg-clip-text text-transparent">
              Hobbies & Interests
            </h3>
          </div>
          <p className="text-[#94A3B8] max-w-2xl leading-relaxed">
            Creative routines and thoughtful interests that shape how I observe, imagine, and solve design problems.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;

            return (
              <motion.div
                key={hobby.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-white/20"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${hobby.glow} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

                <div className="relative">
                  <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-[#0F172A]/60 p-3">
                    <Icon className={`w-6 h-6 ${hobby.color}`} />
                  </div>

                  <h4 className="text-lg font-semibold mb-2">{hobby.title}</h4>
                  <p className="text-sm leading-6 text-[#94A3B8]">{hobby.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        viewport={{ once: true }}
      >
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <PenSquare className="w-6 h-6 text-[#A78BFA]" />
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-[#CBD5E1] bg-clip-text text-transparent">
              Languages
            </h3>
          </div>
          <p className="text-[#94A3B8] max-w-2xl leading-relaxed">
            Languages I use to communicate, learn, and work across creative and professional spaces.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {languages.map((language, index) => {
            const Icon = language.icon;

            return (
              <motion.div
                key={language.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-[0_18px_40px_rgba(15,23,42,0.2)] transition-all duration-300 hover:border-white/20"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${language.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

                <div className="relative">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="inline-flex rounded-2xl border border-white/10 bg-[#0F172A]/60 p-3">
                      <Icon className={`w-6 h-6 ${language.iconColor}`} />
                    </div>
                    <span className={`rounded-full border px-3 py-1 text-xs font-medium ${language.badgeClass}`}>
                      {language.level}
                    </span>
                  </div>

                  <h4 className="text-xl font-semibold text-white">{language.name}</h4>

                  <div className="mt-4 flex items-center gap-2 text-sm text-[#CBD5E1]">
                    <PenSquare className="h-4 w-4 text-white/70" />
                    <span>{language.mode}</span>
                  </div>

                  {language.detail ? (
                    <p className="mt-4 text-sm text-[#94A3B8]">{language.detail}</p>
                  ) : null}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
