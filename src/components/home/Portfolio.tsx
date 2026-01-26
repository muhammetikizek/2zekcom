"use client";

import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';

const projects = [
  { name: "Taraftaro", category: "Sports Community", year: "2024" },
  { name: "E-Global", category: "E-commerce Platform", year: "2023" },
  { name: "FinTech Pro", category: "SaaS Solution", year: "2024" },
  { name: "SocialFlow", category: "Media Agency", year: "2023" }
];

const Portfolio = () => {
  const t = useTranslations();

  return (
    <section id="portfolio" className="py-24 bg-foreground/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
              {t('portfolio_heading1')} <span className="text-primary">{t('portfolio_heading2')}</span>
            </h2>
            <p className="text-foreground/60 max-w-xl font-medium">
              {t('portfolio_description')}
            </p>
          </div>
          <div className="flex justify-center">
            <button className="text-sm font-bold text-primary hover:underline transition-all">
              {t('portfolio_viewAll')} ↗
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-3xl border border-border bg-background flex flex-col items-center justify-center p-8 transition-all hover:bg-primary/5 hover:border-primary/20 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#00bf63_1px,transparent_1px)] [background-size:20px_20px]" />
              
              <div className="text-2xl font-black tracking-tighter mb-2 group-hover:scale-110 transition-transform duration-500">
                {project.name}
              </div>
              <div className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold mb-1">
                {project.category}
              </div>
              <div className="text-[10px] text-primary font-black">
                {project.year}
              </div>
              
              {/* Fake UI elements to look like a card */}
              <div className="absolute bottom-4 left-4 right-4 h-1 bg-border rounded-full overflow-hidden">
                <div className="h-full bg-primary w-0 group-hover:w-full transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
