'use client';

import { useTranslations } from 'next-intl';
import { IoRocketOutline, IoCodeSlashOutline, IoCloudDoneOutline, IoTrendingUpOutline, IoSearchOutline, IoPeopleOutline } from "react-icons/io5";
import { motion, Variants } from 'framer-motion';

export default function AboutPage() {
  const t = useTranslations();

  const services = [
    { title: t('service_web_title'), desc: t('service_web_desc'), icon: IoCodeSlashOutline },
    { title: t('service_devops_title'), desc: t('service_devops_desc'), icon: IoCloudDoneOutline },
    { title: t('service_ad_title'), desc: t('service_ad_desc'), icon: IoTrendingUpOutline },
    { title: t('service_strategy_title'), desc: t('service_strategy_desc'), icon: IoSearchOutline },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <main className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="pt-48 pb-32 px-6 relative overflow-hidden">
        <motion.div 
          className="max-w-7xl mx-auto relative z-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="flex flex-col items-center text-center">
            <motion.h1 
              variants={itemVariants}
              className="text-6xl md:text-8xl font-black tracking-tighter text-foreground mb-10 leading-[0.9]"
            >
              {t('about_title')}
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-foreground/50 max-w-4xl mx-auto leading-relaxed font-medium"
            >
              {t('about_description')}
            </motion.p>
          </div>
        </motion.div>

        {/* Brand Watermark */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: -20 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -bottom-20 -left-20 text-[20vw] font-black text-foreground/[0.02] select-none pointer-events-none tracking-tighter"
        >
          2ZEK
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-start">
          <motion.div 
            className="sticky top-32"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tight">
              {t('about_vision_title')}
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1.5 bg-primary rounded-full mb-8" 
            />
            <p className="text-xl text-foreground/60 leading-relaxed font-medium">
              {t('about_vision_desc')}
            </p>
            
            <div className="mt-12 flex flex-wrap gap-4">
              <div className="px-6 py-3 rounded-2xl bg-foreground/[0.03] border border-border text-sm font-bold flex items-center gap-3">
                <IoRocketOutline className="text-primary" /> Speed Engineering
              </div>
              <div className="px-6 py-3 rounded-2xl bg-foreground/[0.03] border border-border text-sm font-bold flex items-center gap-3">
                <IoPeopleOutline className="text-primary" /> Active Partnership
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="grid gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {services.map((service, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="p-10 rounded-[32px] bg-foreground/[0.02] border border-border group hover:border-primary/20 hover:bg-foreground/[0.03] transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight">{service.title}</h3>
                <p className="text-lg text-foreground/40 leading-relaxed font-medium">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-6 text-center">
        <motion.div 
          className="max-w-4xl mx-auto p-16 rounded-[48px] bg-primary text-primary-foreground relative overflow-hidden group"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tight leading-none">
              Let&apos;s engineer your vision together.
            </h2>
            <button className="bg-white text-black px-10 py-5 rounded-full text-lg font-black hover:scale-105 transition-transform shadow-2xl">
              Start Your Project
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        </motion.div>
      </section>

    </main>
  );
}
