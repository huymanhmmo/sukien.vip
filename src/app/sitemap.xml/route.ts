import { site } from '@/lib/site';
import { sitemapIndex } from '@/lib/sitemap-xml';

export function GET() {
  return sitemapIndex([
    { url: `${site.url}/sitemap-posts.xml`, lastModified: '2026-10-24' },
    { url: `${site.url}/sitemap-pages.xml`, lastModified: '2026-10-24' },
  ]);
}

