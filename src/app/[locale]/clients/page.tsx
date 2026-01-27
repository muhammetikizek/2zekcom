import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import Portfolio from "@/components/home/Portfolio";

interface ClientsPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({ params }: ClientsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  
  return {
    title: `${t('clients')} | 2ZEK`,
    description: t('portfolio_description'),
  };
}

export default async function ClientsPage() {
  return (
    <main className="pt-20">
      <Portfolio />
    </main>
  );
}
