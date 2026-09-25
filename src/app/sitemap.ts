import type { MetadataRoute } from 'next';
import { posts } from '@/content/posts';
import { projects } from '@/content/projects';
import { services } from '@/content/services';
import { site } from '@/lib/site';
export default function sitemap(): MetadataRoute.Sitemap { const fixed = ['', '/gioi-thieu', '/dich-vu', '/du-an', '/blog', '/lien-he', '/chinh-sach-bao-mat'].map((path, i) => ({ url: `${site.url}${path}`, lastModified: new Date('2026-09-25'), changeFrequency: i === 0 ? 'weekly' as const : 'monthly' as const, priority: i === 0 ? 1 : .8 })); return [...fixed, ...services.map(item => ({ url: `${site.url}/dich-vu/${item.slug}`, lastModified: new Date('2026-09-25'), changeFrequency: 'monthly' as const, priority: .8 })), ...projects.map(item => ({ url: `${site.url}/du-an/${item.slug}`, lastModified: new Date('2026-09-25'), changeFrequency: 'monthly' as const, priority: .7 })), ...posts.map(item => ({ url: `${site.url}/blog/${item.slug}`, lastModified: new Date(item.updated), changeFrequency: 'yearly' as const, priority: .7 }))]; }
