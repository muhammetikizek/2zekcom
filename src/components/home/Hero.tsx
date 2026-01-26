"use client";

import { motion } from "framer-motion";
import { IoArrowForward, IoLogoGithub } from "react-icons/io5";
import { useTranslations } from 'next-intl';

const Hero = () => {
  const t = useTranslations();

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
          style={{ backgroundImage: 'url("/images/hero_bg.png")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      {/* Mesh Gradient Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] glow-primary opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Heading */}
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
            {t('hero_title1')} <span className="text-primary">{t('hero_title2')}</span> <br /> 
            {t('hero_title3')} <span className="text-foreground/40">{t('hero_title4')}</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-12 font-medium">
            {t('hero_description')}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-primary/20">
              {t('hero_startProject')} <IoArrowForward size={18} />
            </button>
            <button className="w-full sm:w-auto bg-foreground/5 hover:bg-foreground/10 text-foreground px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all border border-border">
              <IoLogoGithub size={20} /> {t('hero_viewPortfolio')}
            </button>
          </div>
        </motion.div>

        {/* Floating Code Visual Concept (Supabase style) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 relative"
        >
          <div className="relative mx-auto max-w-4xl rounded-3xl border border-border bg-background/50 backdrop-blur-xl p-4 shadow-2xl overflow-hidden aspect-video group">
             {/* Simulating code/content structure */}
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />
             <div className="w-full h-full rounded-2xl border border-border/50 bg-[#0a0a0a] overflow-hidden flex flex-col">
                <div className="h-10 border-b border-border/50 flex items-center px-4 gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500/20" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                   <div className="w-3 h-3 rounded-full bg-green-500/20" />
                </div>
                <div className="flex-1 p-8 text-left font-mono text-sm space-y-2 opacity-60">
                   <div className="text-primary ring-1 ring-primary/20 px-2 rounded w-fit">2zek.init()</div>
                   <div className="text-foreground/40 mt-4">// Preparing your digital infrastructure...</div>
                   <div className="w-3/4 h-3 bg-foreground/10 rounded-full" />
                   <div className="w-1/2 h-3 bg-foreground/10 rounded-full" />
                   <div className="w-2/3 h-3 bg-foreground/10 rounded-full" />
                   <div className="pt-6 text-foreground/80">{t('hero_status')} <span className="animate-pulse">_</span></div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
