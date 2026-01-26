import { getSortedPostsData } from '@/lib/blog';
import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

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
    description: t('nav_blog') + " - Teknoloji, tasarım ve dijital dönüşüm üzerine düşüncelerimiz.",
    openGraph: {
      title: `Blog | 2zek`,
      description: t('nav_blog'),
      type: 'website',
    }
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;
  const posts = await getSortedPostsData(locale);
  const t = await getTranslations({ locale });

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-foreground/60 max-w-2xl">
            {t('nav_blog')} - {locale === 'tr-TR' ? 'Teknoloji, tasarım ve dijital dönüşüm üzerine düşüncelerimiz.' : 'Our thoughts on technology, design, and digital transformation.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-background/50 border border-border rounded-3xl overflow-hidden hover:border-primary/50 transition-all font-sans"
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 flex items-center justify-center text-primary/40 font-bold">
                  2ZEK
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-bold text-primary px-3 py-1 bg-primary/10 rounded-full uppercase tracking-wider">
                    {locale === 'tr-TR' ? 'Duyuru' : 'Announcement'}
                  </span>
                  <span className="text-xs text-foreground/40 font-medium font-sans">
                    {post.date}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors font-sans">
                  {post.title}
                </h2>
                <p className="text-foreground/60 line-clamp-3 mb-6 font-sans">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center gap-3 text-sm font-bold font-sans">
                  <span>{locale === 'tr-TR' ? 'Daha fazla oku' : 'Read more'}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
