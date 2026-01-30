import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

interface PrivacyPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({ params }: PrivacyPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  
  return {
    title: `${t('privacy')} | 2ZEK`,
    description: t('footer_description'),
  };
}

export default async function PrivacyPage() {
  return (
    <main className="pt-48 pb-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-16 leading-tight">
          Gizlilik<br />
          <span className="text-primary">Politikası</span>
        </h1>
        <div className="prose prose-invert prose-lg max-w-none text-foreground/60 font-medium leading-relaxed space-y-8">
          <p>
            2zek olarak gizliliğinize önem veriyoruz. Bu metin, verilerinizin nasıl işlendiğini açıklar.
          </p>
          <h2 className="text-2xl font-bold text-foreground">1. Veri Toplama</h2>
          <p>
            İletişim formları aracılığıyla paylaştığınız isim ve e-posta adresi gibi bilgiler, yalnızca size geri dönüş yapmak amacıyla saklanır.
          </p>
          <h2 className="text-2xl font-bold text-foreground">2. Çerezler</h2>
          <p>
            Sitemizde kullanıcı deneyimini iyileştirmek için anonim analiz çerezleri kullanılmaktadır.
          </p>
          <p className="pt-8 text-sm italic">
            Son güncelleme: 31 Ocak 2026
          </p>
        </div>
      </div>
    </main>
  );
}
