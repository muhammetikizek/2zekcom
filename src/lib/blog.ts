import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  author: string;
  content: string;
}

export async function getSortedPostsData(locale: string) {
  const localeDirectory = path.join(postsDirectory, locale);
  
  if (!fs.existsSync(localeDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(localeDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(localeDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        slug,
        ...(matterResult.data as { title: string; date: string; excerpt: string; coverImage: string; author: string }),
      };
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(slug: string, locale: string): Promise<BlogPost | null> {
  const fullPath = path.join(postsDirectory, locale, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    content: contentHtml,
    ...(matterResult.data as { title: string; date: string; excerpt: string; coverImage: string; author: string }),
  };
}

export async function getAllPostSlugs() {
  const locales = ['en-US', 'tr-TR'];
  const paths: { slug: string; locale: string }[] = [];

  locales.forEach((locale) => {
    const localeDirectory = path.join(postsDirectory, locale);
    if (fs.existsSync(localeDirectory)) {
      const fileNames = fs.readdirSync(localeDirectory);
      fileNames.forEach((fileName) => {
        paths.push({
          slug: fileName.replace(/\.md$/, ''),
          locale,
        });
      });
    }
  });

  return paths;
}
