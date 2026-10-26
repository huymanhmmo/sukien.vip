import { projects } from '@/content/projects';
import { projectHref } from '@/content/legacy-content-routes';
import { services } from '@/content/services';
import { serviceHref } from '@/content/services';
import { site } from '@/lib/site';
import { sitemapUrlset } from '@/lib/sitemap-xml';

export function GET() {
  const fixed = [
    { path: '', lastModified: '2026-10-25' },
    { path: '/gioi-thieu', lastModified: '2026-10-25' },
    { path: '/dich-vu', lastModified: '2026-10-25' },
    { path: '/du-an', lastModified: '2026-10-25' },
    { path: '/blog', lastModified: '2026-10-25' },
    { path: '/lien-he', lastModified: '2026-10-25' },
    { path: '/chinh-sach-bao-mat', lastModified: '2026-10-25' },
  ];
  const entries = [
    ...fixed.map(item => ({ url: `${site.url}${item.path}`, lastModified: item.lastModified })),
    ...services.map(service => ({ url: `${site.url}${serviceHref(service.slug)}`, lastModified: '2026-10-25' })),
    ...projects.map(project => ({
      url: `${site.url}${projectHref(project.slug)}`,
      lastModified: '2026-10-25',
    })),
  ];

  return sitemapUrlset(entries);
}

