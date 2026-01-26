'use client';

import { useTranslations } from 'next-intl';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LogoIcon from '@/components/ui/LogoIcon';
import Image from 'next/image';
import teamData from '@/data/team.json';
import { motion, Variants } from 'framer-motion';

export default function TeamPage() {
  const t = useTranslations();
  
  const team = teamData.map((member) => ({
    ...member,
    role: t(member.roleKey)
  }));

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-48 pb-20 px-6 relative overflow-hidden text-center">
        <motion.div 
          className="max-w-7xl mx-auto relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-foreground mb-10 leading-[0.9]">
            {t('team_title')}
          </h1>
          <p className="text-xl md:text-2xl text-foreground/50 max-w-4xl mx-auto leading-relaxed font-medium">
            {t('team_description')}
          </p>
        </motion.div>
      </section>

      {/* Team Grid */}
      <section className="py-24 px-6 border-t border-border bg-foreground/[0.01]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {team.map((member, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="flex flex-col items-center group"
              >
                <div className="relative w-48 h-48 md:w-56 md:h-56 mb-10 flex items-center justify-center">
                  {/* Circular Background with Hover Effect */}
                  <div className="absolute inset-0 bg-foreground/[0.03] rounded-full scale-100 group-hover:scale-105 transition-all duration-500 border border-border group-hover:border-primary/20 shadow-sm" />
                  
                  {member.id === "1" ? (
                    /* Specific Portrait for Muhammet */
                    <div className="absolute inset-0 overflow-hidden rounded-full p-2">
                      <div className="w-full h-full relative">
                        <Image
                          src="/team/muhammet.png"
                          alt={member.name}
                          fill
                          unoptimized
                          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                          onError={(e) => {
                            (e.target as any).src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
                          }}
                        />
                      </div>
                    </div>
                  ) : (
                    /* Brand Logo Placeholder for others */
                    <div className="relative z-10 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out grayscale group-hover:grayscale-0">
                      <LogoIcon size={80} />
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-1 tracking-tight text-center">
                  {member.name}
                </h3>
                <p className="text-xs font-medium text-foreground/40 uppercase tracking-[0.15em] text-center max-w-[200px] leading-snug">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Philosophy / CTA */}
      <section className="py-40 px-6 text-center border-t border-border">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-none">
            Join the 2ZEK engineering house.
          </h2>
          <p className="text-xl text-foreground/50 mb-12 font-medium">
            We're always looking for visionary creators to build the next generation of digital products.
          </p>
          <button className="bg-primary text-primary-foreground px-12 py-6 rounded-full text-xl font-black hover:scale-105 transition-transform shadow-xl shadow-primary/20">
            Apply Now
          </button>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
