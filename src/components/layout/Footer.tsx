"use client";

import Link from "next/link";
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";
import { useTranslations } from 'next-intl';
import LogoIcon from '@/components/ui/LogoIcon';
import Brand from '@/components/ui/Brand';

const Footer = () => {
  const t = useTranslations();

  return (
    <footer className="py-24 border-t border-border bg-[#0a0a0a] dark relative overflow-hidden text-foreground/60">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-12 md:gap-8 mb-20">
          <div className="col-span-2">
            <Brand size={48} className="mb-6 w-fit text-foreground/60" rotateOnHover={true} />
            <p className="text-sm text-foreground/60 max-w-xs font-medium leading-relaxed mb-8">
              {t('footer_description')}
            </p>
            <div className="flex gap-4">
              {[IoLogoTwitter, IoLogoGithub, IoLogoLinkedin, IoLogoInstagram].map((Icon, i) => (
                <Link key={i} href="#" className="text-foreground/40 hover:text-primary transition-colors">
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-widest text-foreground/40 mb-6">{t('footer_product')}</h4>
            <ul className="space-y-4 text-sm font-medium text-foreground/60">
              <li><Link href="#" className="hover:text-primary transition-colors">{t('footer_digitalBridge')}</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">{t('footer_saasEcosystem')}</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">{t('footer_ecommerce')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-widest text-foreground/40 mb-6">{t('footer_services')}</h4>
            <ul className="space-y-4 text-sm font-medium text-foreground/60">
              <li><Link href="#" className="hover:text-primary transition-colors">{t('footer_webDev')}</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">{t('footer_mobileDev')}</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">{t('footer_mediaManagement')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-widest text-foreground/40 mb-6">{t('footer_company')}</h4>
            <ul className="space-y-4 text-sm font-medium text-foreground/60">
              <li><Link href="#" className="hover:text-primary transition-colors">{t('about')}</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">{t('clients')}</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">{t('careers')}</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">{t('blog')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-widest text-foreground/40 mb-6">{t('footer_legal')}</h4>
            <ul className="space-y-4 text-sm font-medium text-foreground/60">
              <li><Link href="#" className="hover:text-primary transition-colors">{t('footer_privacy')}</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">{t('footer_terms')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border gap-6">
          <div className="text-[11px] font-bold text-foreground/40">
            © {new Date().getFullYear()} {t('footer_copyright')}
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[11px] font-bold text-foreground/40 tracking-widest uppercase">{t('footer_status')}</span>
          </div>
        </div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute -bottom-1/2 -left-1/4 w-1/2 h-full bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
    </footer>
  );
};

export default Footer;
