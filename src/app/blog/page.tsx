import type { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import BlogFilters from '@/components/widgets/BlogFilters';
import JsonLd from '@/components/ui/JsonLd';
import { posts } from '@/content/posts';
import { postHref } from '@/content/legacy-content-routes';
import { pageMetadata } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata: Metadata = pageMetadata(
  'Góc chia sẻ về tổ chức sự kiện',
  'Bài viết về lập kế hoạch, tổ chức sự kiện thể thao và chuẩn bị brief từ Your Dreams.',
  '/blog'
);

export default function BlogPage() {
  return (
    <div className="container">
      <Breadcrumbs items={[{ name: 'Góc chia sẻ', href: '/blog' }]} />
      <header className="page-intro">
        <p className="eyebrow">GÓC CHIA SẺ</p>
        <h1>Những điều nhỏ,<br />làm nên một <span className="red-text">sự kiện lớn.</span></h1>
        <p>Kinh nghiệm tổ chức, những câu hỏi nên đặt ra và góc nhìn từ các hoạt động thật. Viết để giúp mỗi lần chuẩn bị trở nên rõ ràng hơn.</p>
      </header>
      <section className="page-section">
        <BlogFilters posts={posts} />
      </section>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Blog',
        '@id': `${site.url}/blog#webpage`,
        url: `${site.url}/blog`,
        name: 'Góc chia sẻ về tổ chức sự kiện – Your Dreams',
        description: 'Bài viết về lập kế hoạch, tổ chức sự kiện thể thao và chuẩn bị brief từ Your Dreams.',
        inLanguage: 'vi-VN',
        publisher: { '@id': `${site.url}/#organization` },
        blogPost: posts.map(post => ({
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.excerpt,
          url: `${site.url}${postHref(post.slug)}`,
          datePublished: post.date,
          dateModified: post.updated,
        })),
      }} />
    </div>
  );
}

