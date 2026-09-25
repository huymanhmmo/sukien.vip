import type { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';
import ArticleContent from '@/components/blog/ArticleContent';
import { canonicalLegacySlugByPostSlug, postHref } from '@/content/legacy-content-routes';
import { posts } from '@/content/posts';
import { postMetadata } from '@/lib/post-seo';
type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.filter(post => !canonicalLegacySlugByPostSlug[post.slug]).map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find(item => item.slug === slug);
  return post ? postMetadata(post, postHref(post.slug)) : {};
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find(item => item.slug === slug);
  if (!post) notFound();

  const path = postHref(post.slug);
  if (path !== `/blog/${post.slug}`) permanentRedirect(path);

  return <ArticleContent post={post} path={path} />;
}
