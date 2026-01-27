import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import Contact from "@/components/home/Contact";

interface ContactPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  
  return {
    title: `${t('contact_us')} | 2ZEK`,
    description: t('contact_description'),
  };
}

export default async function ContactPage() {
  return (
    <main className="pt-20">
      <Contact />
    </main>
  );
}
