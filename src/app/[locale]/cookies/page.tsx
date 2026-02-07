import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

interface CookiesPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({ params }: CookiesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  
  return {
    title: `${t('cookies_page.title_main')} ${t('cookies_page.title_sub')} | 2ZEK`,
    description: t('footer_description'),
  };
}

export default async function CookiesPage() {
  const t = await getTranslations();

  return (
    <main className="pt-48 pb-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-16 leading-tight">
          {t('cookies_page.title_main')}<br />
          <span className="text-primary">{t('cookies_page.title_sub')}</span>
        </h1>
        <div className="prose prose-invert prose-lg max-w-none text-foreground/60 font-medium leading-relaxed space-y-8">
          <p>
            {t('cookies_page.intro')}
          </p>
          <h2 className="text-2xl font-bold text-foreground">{t('cookies_page.section1_title')}</h2>
          <p>
            {t('cookies_page.section1_text')}
          </p>
          <h2 className="text-2xl font-bold text-foreground">{t('cookies_page.section2_title')}</h2>
          <p>
            {t('cookies_page.section2_text')}
          </p>
          <p className="pt-8 text-sm italic">
            {t('last_updated')}
          </p>
        </div>
      </div>
    </main>
  );
}
