import Link from "next/link";
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
    <footer className="py-24 border-t border-border bg-[#0a0a0a] dark relative overflow-hidden text-foreground/60">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          <div className="col-span-2 md:col-span-4">
            <Brand size={48} className="mb-6 w-fit text-foreground/60" rotateOnHover={true} />
            <p className="text-sm text-foreground/60 max-w-xs font-medium leading-relaxed mb-8">
              {t('footer_description')}
            </p>
            <div className="flex gap-4">
              {siteConfig.socials.map((social, i) => {
                const Icon = socialIconMap[social.icon.toLowerCase()];
                if (!Icon) return null;
                return (
                  <Link 
                    key={i} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground/40 hover:text-primary transition-colors"
                    title={social.platform}
                  >
                    <Icon size={20} />
                  </Link>
                );
              })}
            </div>
          </div>

          {siteConfig.footer.menus.map((menu) => (
            <div key={menu.title} className={menu.title === 'company' ? "col-span-1 md:col-span-1" : "col-span-1 md:col-span-2"}>
              <h4 className="text-[11px] font-black uppercase tracking-widest text-foreground/40 mb-6">{t(menu.title)}</h4>
              <ul className="space-y-4 text-sm font-medium text-foreground/60">
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
            <h4 className="text-[11px] font-black uppercase tracking-widest text-foreground/40 mb-6">{t('footer_latestPosts')}</h4>
            <ul className="space-y-4 text-sm font-medium text-foreground/60">
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

        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-border gap-6">
          <div className="text-sm font-medium text-foreground/40">
            © {new Date().getFullYear()} {siteConfig.branding.name}. {t('copyright')}
          </div>
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="text-sm font-medium text-foreground/40 hover:text-primary transition-colors">{t('privacy')}</Link>
            <Link href="/terms" className="text-sm font-medium text-foreground/40 hover:text-primary transition-colors">{t('terms')}</Link>
            <Link href="/sitemap" className="text-sm font-medium text-foreground/40 hover:text-primary transition-colors">{t('sitemap')}</Link>
          </div>
        </div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute -bottom-1/2 -left-1/4 w-1/2 h-full bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
    </footer>
  );
};

export default Footer;
