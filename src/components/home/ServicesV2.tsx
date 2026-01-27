"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { useState } from 'react';

// Tech-focused SVG Icons
const Icons = {
  Sprints: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
    </svg>
  ),
  MVP: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.71-2.13.71-2.13l-1.58-1.58s-1.29 0-2.13.71z"/>
      <path d="M12 15l-3-3m1.35-4.87a8 8 0 0 1 7.41 7.41m-7.46-7.41c.05-.66.29-1.3.71-1.72a4 4 0 0 1 5.66 5.66c-.42.42-1.06.66-1.72.71"/>
    </svg>
  ),
  Scale: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
      <line x1="12" y1="22.08" x2="12" y2="12"/>
    </svg>
  ),
  DevOps: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  Design: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z"/>
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
      <path d="M2 2l7.586 7.586"/>
      <circle cx="11" cy="11" r="2"/>
    </svg>
  )
};

const ServicesV2 = () => {
  const t = useTranslations();
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 0,
      title: t('sprint_booster_title'),
      desc: t('sprint_booster_desc'),
      icon: <Icons.Sprints />,
      items: [
        { title: t('sub_mvp_workshop_title'), desc: t('sub_mvp_workshop_desc'), tech: "Arch" },
        { title: t('sub_ux_audit_title'), desc: t('sub_ux_audit_desc'), tech: "Audit" },
        { title: t('sub_performance_turbo_title'), desc: t('sub_performance_turbo_desc'), tech: "Load" }
      ]
    },
    {
      id: 1,
      title: t('sprint_mvp_title'),
      desc: t('sprint_mvp_desc'),
      icon: <Icons.MVP />,
      items: [
        { title: t('sub_mvp_workshop_title'), desc: t('sub_mvp_workshop_desc'), tech: "Vision" },
        { title: t('sub_design_system_title'), desc: t('sub_design_system_desc'), tech: "UI/UX" },
        { title: t('sub_a11y_sprint_title'), desc: t('sub_a11y_sprint_desc'), tech: "Access" }
      ]
    },
    {
      id: 2,
      title: t('sprint_longterm_title'),
      desc: t('sprint_longterm_desc'),
      icon: <Icons.Scale />,
      items: [
        { title: t('sub_live_dashboard_title'), desc: t('sub_live_dashboard_desc'), tech: "Live" },
        { title: t('sub_git_mastery_title'), desc: t('sub_git_mastery_desc'), tech: "Workflow" },
        { title: t('sub_integration_fast_title'), desc: t('sub_integration_fast_desc'), tech: "API" }
      ]
    },
    {
      id: 3,
      title: t('sprint_augment_title'),
      desc: t('sprint_augment_desc'),
      icon: <Icons.DevOps />,
      items: [
        { title: t('sub_git_mastery_title'), desc: t('sub_git_mastery_desc'), tech: "Talent" },
        { title: t('sub_cloud_cost_title'), desc: t('sub_cloud_cost_desc'), tech: "Cloud" },
        { title: t('sub_performance_turbo_title'), desc: t('sub_performance_turbo_desc'), tech: "Turbo" }
      ]
    },
    {
      id: 4,
      title: t('sprint_partnership_title'),
      desc: t('sprint_partnership_desc'),
      icon: <Icons.Design />,
      items: [
        { title: t('sub_mvp_workshop_title'), desc: t('sub_mvp_workshop_desc'), tech: "Venture" },
        { title: t('sub_design_system_title'), desc: t('sub_design_system_desc'), tech: "Brand" },
        { title: t('sub_integration_fast_title'), desc: t('sub_integration_fast_desc'), tech: "Data" }
      ]
    }
  ];

  return (
    <section className="py-32 px-6 relative bg-background overflow-hidden min-h-screen">
      {/* Dynamic Ambient Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.15, 0.05],
            x: [0, -50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex justify-between items-end mb-24 border-b border-foreground/5 pb-12">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black tracking-tighter mb-6"
            >
              {t('services_v2_title')}
            </motion.h2>
            <p className="text-xl text-foreground/30 font-medium tracking-tight">
              {t('services_v2_subtitle')}
            </p>
          </div>
          <div className="hidden lg:block text-right">
             <div className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-2">Architecting Growth</div>
             <div className="text-sm font-bold text-foreground/20">Version 3.0.0 (Visionary)</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[450px,1fr] gap-24">
          {/* Futuristic Sidebar */}
          <div className="space-y-6">
            {categories.map((cat, idx) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(idx)}
                className="w-full text-left group relative outline-none"
              >
                <div className="flex items-center gap-6 py-4">
                   <div className={`transition-all duration-500 ${activeCategory === idx ? "text-primary scale-125" : "text-foreground/10 group-hover:text-foreground/30"}`}>
                      {cat.icon}
                   </div>
                   <div className="flex-1">
                      <h3 className={`text-2xl md:text-3xl font-black tracking-tighter transition-all duration-500 ${
                        activeCategory === idx ? "text-foreground translate-x-2" : "text-foreground/20 group-hover:text-foreground/40"
                      }`}>
                        {cat.title}
                      </h3>
                      {activeCategory === idx && (
                        <motion.p 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="text-sm font-bold text-foreground/40 mt-2 ml-2 leading-relaxed max-w-xs"
                        >
                          {cat.desc}
                        </motion.p>
                      )}
                   </div>
                </div>
                
                {/* Visual Connector Line */}
                {activeCategory === idx && (
                  <motion.div 
                    layoutId="active-indicator"
                    className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-1 h-12 bg-primary shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)]"
                  />
                )}
              </button>
            ))}
          </div>

          {/* High-Impact Content Area */}
          <div className="relative min-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                className="grid gap-8"
              >
                 {categories[activeCategory].items.map((item, i) => (
                   <div key={i} className="group relative p-10 rounded-[40px] border border-foreground/[0.03] bg-foreground/[0.01] backdrop-blur-3xl overflow-hidden hover:border-primary/20 transition-all duration-700">
                      <div className="flex items-start justify-between relative z-10">
                        <div className="flex-1">
                          <div className="text-[10px] font-black uppercase tracking-widest text-primary mb-4 opacity-40 group-hover:opacity-100 transition-opacity">Module {i + 1} / {item.tech}</div>
                          <h4 className="text-3xl font-black tracking-tighter mb-4 group-hover:translate-x-1 transition-transform">{item.title}</h4>
                          <p className="text-lg text-foreground/30 font-medium leading-relaxed max-w-2xl">{item.desc}</p>
                        </div>
                        <div className="w-12 h-12 rounded-full border border-foreground/5 flex items-center justify-center text-foreground/10 group-hover:border-primary group-hover:text-primary transition-all rotate-[-45deg] group-hover:rotate-0">
                           <Icons.Sprints />
                        </div>
                      </div>

                      {/* Subtle Ambient Light for Card */}
                      <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-1000" />
                   </div>
                 ))}

                 {/* Visionary Footer CTA */}
                 <motion.button 
                   whileHover={{ scale: 1.01 }}
                   whileTap={{ scale: 0.99 }}
                   className="p-10 rounded-[40px] bg-foreground text-background flex items-center justify-between group overflow-hidden relative"
                 >
                    <div className="relative z-10 flex flex-col items-start">
                       <span className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 opacity-50">Initiate Collaboration</span>
                       <span className="text-2xl font-black tracking-tighter">Explore {categories[activeCategory].title} Core ↗</span>
                    </div>
                    
                    {/* Background Tech Mesh */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                       <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '20px 20px' }} />
                    </div>
                 </motion.button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesV2;
