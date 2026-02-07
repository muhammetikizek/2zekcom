import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://2zek.com';
  const locales = ['en', 'tr'];
  const routes = [
    '',
    '/about',
    '/services',
    '/team',
    '/clients',
    '/blog',
    '/privacy',
    '/terms',
    '/contact',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
      });
    }
  }

  return sitemapEntries;
}
