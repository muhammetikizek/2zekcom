import { Link } from '@/i18n/routing';
import { getTranslations, getLocale } from 'next-intl/server';
import Brand from '@/components/ui/Brand';
import { siteConfig, socialIconMap } from "@/config/site";
import { getSortedPostsData } from '@/lib/blog';

const Footer = async () => {
  const t = await getTranslations();
  const locale = await getLocale();
  const latestPosts = await getSortedPostsData(locale);
  const footerPosts = latestPosts.slice(0, 4);

  return (
    <footer className="pt-32 pb-16 border-t border-border bg-[#0a0a0a] dark relative overflow-hidden text-foreground/60 group">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.03] mix-blend-luminosity group-hover:opacity-[0.05] transition-opacity duration-1000"
          style={{ backgroundImage: 'url("/images/hero_bg.png")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/80" />
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 opacity-50" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Pre-footer CTA */}
        <div className="mb-32 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-10 max-w-3xl leading-[1.05] text-foreground">
            {t('contact_title')}
          </h2>
          <Link 
            href="/contact" 
            className="group relative bg-primary text-primary-foreground px-12 py-6 rounded-full text-lg font-black hover:scale-105 transition-all shadow-2xl shadow-primary/20 flex items-center gap-3 overflow-hidden"
          >
            <span className="relative z-10">{t('contact_us')}</span>
            <span className="text-2xl transition-transform group-hover:translate-x-1 relative z-10">→</span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-12 md:gap-8 mb-24">
          <div className="col-span-2 md:col-span-4">
            <Brand size={44} className="mb-8 w-fit text-foreground/60" rotateOnHover={true} />
            <p className="text-base text-foreground/50 max-w-sm font-medium leading-relaxed mb-10">
              {t('footer_description')}
            </p>
            <div className="flex gap-3">
              {siteConfig.socials.map((social, i) => {
                const Icon = socialIconMap[social.icon.toLowerCase()];
                if (!Icon) return null;
                return (
                  <Link 
                    key={i} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center rounded-2xl bg-foreground/[0.03] border border-border/50 text-foreground/40 hover:text-primary hover:border-primary/30 hover:bg-primary/[0.05] transition-all hover:-translate-y-1"
                    title={social.platform}
                  >
                    <Icon size={20} />
                  </Link>
                );
              })}
            </div>
          </div>

          {siteConfig.footer.menus.map((menu) => (
            <div key={menu.title} className={menu.title === 'services' ? "col-span-1 md:col-span-2" : "col-span-1 md:col-span-3"}>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30 mb-8">{t(menu.title)}</h4>
              <ul className="space-y-5 text-[15px] font-medium text-foreground/50">
                {menu.items.map((item) => (
                  <li key={item.label}>
                    {item.external ? (
                      <a 
                        href={item.href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-primary transition-colors inline-flex items-center gap-1.5"
                      >
                        {t(item.label)}
                      </a>
                    ) : (
                      <Link href={item.href} className="hover:text-primary transition-colors">
                        {t(item.label)}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-1 md:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30 mb-8">{t('footer_latestPosts')}</h4>
            <ul className="space-y-5 text-[15px] font-medium text-foreground/50">
              {footerPosts.map((post) => (
                <li key={post.slug}>
                  <Link 
                    href={`/blog/${post.slug}`} 
                    className="hover:text-primary transition-all duration-300 line-clamp-2 leading-snug"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
              {footerPosts.length === 0 && (
                <li><Link href="/blog" className="hover:text-primary transition-colors">{t('blog')}</Link></li>
              )}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-sm font-medium text-foreground/30">
              © {new Date().getFullYear()} {siteConfig.branding.name}. {t('copyright')}
            </div>
            <div className="flex items-center gap-8">
              <Link href="/privacy" className="text-xs font-bold uppercase tracking-widest text-foreground/30 hover:text-primary transition-colors">{t('privacy')}</Link>
              <Link href="/terms" className="text-xs font-bold uppercase tracking-widest text-foreground/30 hover:text-primary transition-colors">{t('terms')}</Link>
              <Link href="/cookies" className="text-xs font-bold uppercase tracking-widest text-foreground/30 hover:text-primary transition-colors">{t('cookies')}</Link>
              <Link href="/sitemap" className="text-xs font-bold uppercase tracking-widest text-foreground/30 hover:text-primary transition-colors">{t('sitemap')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
