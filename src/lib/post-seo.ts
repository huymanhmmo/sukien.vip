import type { Metadata } from 'next';
import type { PostItem } from '@/content/posts';
import { postImagePath } from '@/content/posts';
import { pageMetadata } from '@/lib/seo';
import { site } from '@/lib/site';

export function postMetadata(post: PostItem, path: string): Metadata {
  const image = postImagePath(post);
  return {
    ...pageMetadata(post.title, post.excerpt, path, { url: image, alt: post.alt }),
    openGraph: {
      title: `${post.title} | ${site.name}`,
      description: post.excerpt,
      url: `${site.url}${path}`,
      siteName: site.name,
      locale: 'vi_VN',
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updated,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | ${site.name}`,
      description: post.excerpt,
      images: [{ url: image, alt: post.alt }],
    },
  };
}
