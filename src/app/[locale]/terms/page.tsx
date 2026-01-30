import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

interface TermsPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({ params }: TermsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  
  return {
    title: `${t('terms')} | 2ZEK`,
    description: t('footer_description'),
  };
}

export default async function TermsPage() {
  return (
    <main className="pt-48 pb-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-16 leading-tight">
          Kullanım<br />
          <span className="text-primary">Şartları</span>
        </h1>
        <div className="prose prose-invert prose-lg max-w-none text-foreground/60 font-medium leading-relaxed space-y-8">
          <p>
            2zek web sitesini kullanarak aşağıdaki şartları kabul etmiş sayılırsınız.
          </p>
          <h2 className="text-2xl font-bold text-foreground">1. Fikri Mülkiyet</h2>
          <p>
            Bu sitede paylaşılan tüm içerik ve görseller 2zek'e aittir veya izne tabidir.
          </p>
          <h2 className="text-2xl font-bold text-foreground">2. Hizmet Kapsamı</h2>
          <p>
            Web sitemiz üzerinden sunulan bilgiler genel bilgilendirme amaçlıdır.
          </p>
          <p className="pt-8 text-sm italic">
            Son güncelleme: 31 Ocak 2026
          </p>
        </div>
      </div>
    </main>
  );
}
