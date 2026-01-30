import { getSortedPostsData } from '@/lib/blog';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import BlogClient from './BlogClient';

interface BlogPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  
  return {
    title: `Blog | 2zek - ${t('hero_badge')}`,
    description: t('blog') + " - Teknoloji, tasarım ve dijital dönüşüm üzerine düşüncelerimiz.",
    openGraph: {
      title: `Blog | 2zek`,
      description: t('blog'),
      type: 'website',
    }
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;
  const posts = await getSortedPostsData(locale);

  return <BlogClient posts={posts} locale={locale} />;
}
