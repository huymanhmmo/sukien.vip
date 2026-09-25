import { projects } from '@/content/projects';
import { projectHref } from '@/content/legacy-content-routes';
import { services } from '@/content/services';
import { serviceHref } from '@/content/services';
import { site } from '@/lib/site';
import { sitemapUrlset } from '@/lib/sitemap-xml';

export function GET() {
  const fixed = ['', '/gioi-thieu', '/dich-vu', '/du-an', '/blog', '/lien-he', '/chinh-sach-bao-mat'];
  const entries = [
    ...fixed.map(path => ({ url: `${site.url}${path}` })),
    ...services.map(service => ({ url: `${site.url}${serviceHref(service.slug)}` })),
    ...projects.map(project => ({ url: `${site.url}${projectHref(project.slug)}` })),
  ];

  return sitemapUrlset(entries);
}
