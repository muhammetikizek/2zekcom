import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import ServicesV2 from "@/components/home/ServicesV2";

interface ServicesPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({ params }: ServicesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  
  return {
    title: `${t('services')} | 2ZEK`,
    description: t('services_v2_description'),
  };
}

export default async function ServicesPage() {
  return (
    <main className="pt-20">
      <ServicesV2 />
    </main>
  );
}
