import { site } from '@/lib/site';
import { sitemapIndex } from '@/lib/sitemap-xml';

export function GET() {
  return sitemapIndex([
    `${site.url}/sitemap-posts.xml`,
    `${site.url}/sitemap-pages.xml`,
  ]);
}
