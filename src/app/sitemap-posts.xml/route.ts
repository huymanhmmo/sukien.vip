import { posts } from '@/content/posts';
import { canonicalLegacySlugByPostSlug, legacyContentRoutes } from '@/content/legacy-content-routes';
import { site } from '@/lib/site';
import { sitemapUrlset } from '@/lib/sitemap-xml';

export function GET() {
  const legacyCanonicalPosts = legacyContentRoutes
    .filter(route => route.kind === 'post' && route.sourceSlug === route.canonicalSlug)
    .map(route => ({
      url: `${site.url}/${route.canonicalSlug}`,
      lastModified: posts.find(post => post.slug === route.contentSlug)?.updated,
    }));
  const newPosts = posts
    .filter(post => !canonicalLegacySlugByPostSlug[post.slug])
    .map(post => ({ url: `${site.url}/blog/${post.slug}`, lastModified: post.updated }));

  return sitemapUrlset([...legacyCanonicalPosts, ...newPosts]);
}
