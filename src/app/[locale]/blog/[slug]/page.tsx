import { getPostData, getAllPostSlugs } from '@/lib/blog';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await getAllPostSlugs();
  return posts.map((post) => ({
    slug: post.slug,
    locale: post.locale,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const post = await getPostData(slug, locale);

  if (!post) {
    return {
      title: 'Post Not Found | 2zek',
    };
  }

  return {
    title: `${post.title} | 2zek Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug, locale } = await params;
  const post = await getPostData(slug, locale);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen pt-32 pb-20 px-6 font-sans">
      <div className="max-w-3xl mx-auto">
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-bold text-primary px-3 py-1 bg-primary/10 rounded-full uppercase tracking-wider">
              {locale === 'tr-TR' ? 'Blog' : 'Insights'}
            </span>
            <span className="text-sm text-foreground/40 font-medium">
              {post.date} • {post.author}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            {post.title}
          </h1>
        </header>

        <div 
          className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-primary prose-strong:text-foreground prose-p:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
        
        <footer className="mt-20 pt-10 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                2Z
              </div>
              <div>
                <div className="font-bold text-foreground">{post.author}</div>
                <div className="text-sm text-foreground/40">{locale === 'tr-TR' ? '2zek Blog Yazarı' : '2zek Blog Author'}</div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
}
