'use client';

import { useTranslations } from 'next-intl';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import teamData from '@/data/team.json';

export default function TeamPage() {
  const t = useTranslations();
  
  const team = teamData.map((member) => ({
    ...member,
    image: member.image, // JSON'dan gelen '/team/memberX.png' yolunu kullan
    role: t(member.roleKey)
  }));

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-48 pb-20 px-6 relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-foreground mb-10 leading-[0.9]">
            {t('team_title')}
          </h1>
          <p className="text-xl md:text-2xl text-foreground/50 max-w-4xl mx-auto leading-relaxed font-medium">
            {t('team_description')}
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 px-6 border-t border-border bg-foreground/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20">
            {team.map((member, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="relative w-48 h-48 md:w-56 md:h-56 mb-10">
                  {/* Circular Background with Hover Effect */}
                  <div className="absolute inset-0 bg-foreground/[0.03] rounded-full scale-100 group-hover:scale-105 transition-all duration-500 border border-border group-hover:border-primary/20 shadow-sm" />
                  
                  {/* Member Illustration */}
                  <div className="absolute inset-0 overflow-hidden rounded-full p-2">
                    <div className="w-full h-full relative">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        unoptimized
                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                        onError={(e) => {
                          // Fallback to a placeholder or transparent pixel if image fails
                          (e.target as any).src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
                        }}
                      />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-black text-foreground mb-1.5 tracking-tight text-center">
                  {member.name}
                </h3>
                <p className="text-sm font-bold text-foreground/40 uppercase tracking-[0.2em] text-center max-w-[200px] leading-snug">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy / CTA */}
      <section className="py-40 px-6 text-center border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-none">
            Join the 2ZEK engineering house.
          </h2>
          <p className="text-xl text-foreground/50 mb-12 font-medium">
            We're always looking for visionary creators to build the next generation of digital products.
          </p>
          <button className="bg-primary text-primary-foreground px-12 py-6 rounded-full text-xl font-black hover:scale-105 transition-transform shadow-xl shadow-primary/20">
            Apply Now
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
