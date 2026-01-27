"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion, Variants } from 'framer-motion';
import { IoArrowForward, IoTimeOutline, IoPersonOutline } from 'react-icons/io5';

interface BlogClientProps {
  posts: any[];
  locale: string;
}

export default function BlogClient({ posts, locale }: BlogClientProps) {
  const t = useTranslations();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <div className="min-h-screen pt-48 pb-32 px-6 relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      
      {/* Watermark */}
      <div className="absolute top-24 left-6 text-[15vw] font-black text-foreground/[0.02] select-none pointer-events-none tracking-tighter leading-none">
        INSIGHTS
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-tight">
            {locale === 'tr' ? 'Fikirler &' : 'Ideas &'}<br />
            <span className="text-primary">{locale === 'tr' ? 'Stratejiler' : 'Strategies'}</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/40 max-w-2xl font-medium leading-relaxed">
            {locale === 'tr' 
              ? 'Teknoloji, tasarım ve dijital büyüme üzerine vizyoner yaklaşımlarımızı paylaşıyoruz.' 
              : 'Sharing our visionary approaches on technology, design, and digital growth.'}
          </p>
        </motion.div>

        {featuredPost && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-32"
          >
            <Link href={`/blog/${featuredPost.slug}`} className="group relative block aspect-[21/9] rounded-[48px] overflow-hidden border border-border bg-foreground/[0.02] hover:border-primary/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0">
                <div className="text-[20vw] font-black text-primary/20 tracking-tighter select-none">2ZEK</div>
              </div>

              <div className="absolute bottom-0 left-0 p-8 md:p-16 z-20 w-full md:w-2/3">
                <div className="flex items-center gap-6 mb-8">
                  <span className="px-4 py-1.5 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-widest">
                    {locale === 'tr' ? 'ÖNE ÇIKAN' : 'FEATURED'}
                  </span>
                  <div className="flex items-center gap-2 text-foreground/40 text-xs font-bold uppercase tracking-widest">
                    <IoTimeOutline /> {featuredPost.date}
                  </div>
                </div>
                <h2 className="text-3xl md:text-5xl font-black mb-8 group-hover:text-primary transition-colors tracking-tight leading-tight">
                  {featuredPost.title}
                </h2>
                <div className="flex items-center gap-6">
                   <div className="h-0.5 w-12 bg-primary/30" />
                   <span className="text-sm font-bold text-primary group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                     {locale === 'tr' ? 'Devamını Oku' : 'Read More'} <IoArrowForward />
                   </span>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {remainingPosts.map((post, index) => (
            <motion.div key={post.slug} variants={itemVariants}>
              <Link 
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-full p-10 rounded-[40px] border border-border bg-foreground/[0.01] hover:bg-foreground/[0.02] hover:border-primary/20 transition-all duration-500 relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-3 text-[10px] font-black tracking-widest text-foreground/40 uppercase">
                    <IoTimeOutline className="text-primary text-sm" /> {post.date}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <IoArrowForward />
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-black mb-6 tracking-tight leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-foreground/40 line-clamp-2 text-lg font-medium leading-relaxed mb-10">
                  {post.excerpt}
                </p>

                <div className="mt-auto flex items-center gap-4 border-t border-border/50 pt-8">
                  <div className="w-8 h-8 rounded-full bg-foreground/[0.05] flex items-center justify-center text-xs">
                    <IoPersonOutline />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-foreground/30">
                    {post.author || '2ZEK STUDIO'}
                  </span>
                </div>

                {/* Subtle Hover Decoration */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
