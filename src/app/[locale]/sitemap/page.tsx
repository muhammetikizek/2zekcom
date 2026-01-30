import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { Link } from '@/i18n/routing';

interface SitemapPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({ params }: SitemapPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  
  return {
    title: `${t('sitemap')} | 2ZEK`,
    description: t('footer_description'),
  };
}

export default async function SitemapPage() {
  const pages = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hakkımızda", href: "/about" },
    { name: "Hizmetler", href: "/services" },
    { name: "Portfolyo", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Ekip", href: "/team" },
    { name: "Müşteriler", href: "/clients" },
    { name: "İletişim", href: "/contact" },
    { name: "Gizlilik Politikası", href: "/privacy" },
    { name: "Kullanım Şartları", href: "/terms" },
  ];

  return (
    <main className="pt-48 pb-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-16 leading-tight">
          Site<br />
          <span className="text-primary">Haritası</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {pages.map((page) => (
            <Link 
              key={page.href}
              href={page.href}
              className="p-8 rounded-3xl bg-foreground/[0.02] border border-border hover:border-primary/30 hover:bg-foreground/[0.04] transition-all group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold">{page.name}</span>
                <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
