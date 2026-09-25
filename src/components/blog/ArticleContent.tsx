import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import BlogCard from '@/components/ui/BlogCard';
import Icon from '@/components/ui/Icon';
import JsonLd from '@/components/ui/JsonLd';
import { projectHref } from '@/content/legacy-content-routes';
import { projects } from '@/content/projects';
import { postImagePath, posts, type PostItem } from '@/content/posts';
import { serviceHref, services } from '@/content/services';
import { site } from '@/lib/site';

const formatDate = (date: string) => new Intl.DateTimeFormat('vi-VN', {
  day: 'numeric', month: 'long', year: 'numeric',
}).format(new Date(date));

const idFor = (heading: string) => heading.toLowerCase().normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-');

export default function ArticleContent({ post, path, canonicalPath = path }: {
  post: PostItem;
  path: string;
  canonicalPath?: string;
}) {
  const related = [
    ...posts.filter(item => item.slug !== post.slug && item.category === post.category),
    ...posts.filter(item => item.slug !== post.slug && item.category !== post.category),
  ].slice(0, 2);
  const serviceSlug = post.category === 'Thiết bị sự kiện'
    ? 'cho-thue-thiet-bi-su-kien'
    : post.category === 'Sự kiện thể thao'
      ? 'to-chuc-su-kien-the-thao'
      : post.category === 'Sự kiện doanh nghiệp'
        ? 'to-chuc-su-kien-doanh-nghiep'
        : post.category === 'Nghề nghiệp sự kiện'
          ? 'nhan-su-su-kien'
          : 'to-chuc-su-kien-doanh-nghiep';
  const service = services.find(item => item.slug === serviceSlug);
  const featuredProject = post.slug === 'to-chuc-giai-boi-cho-doanh-nghiep'
    ? projects.find(item => item.slug === 'kinh-ngu-quan-bien-ocean-city-2023')
    : post.slug === 'to-chuc-su-kien-ngoai-troi' || post.slug === 'to-chuc-giai-pickleball'
      ? projects.find(item => item.slug === 'ngay-hoi-the-thao-dien-chau')
      : undefined;

  return <>
    <div className="container">
      <Breadcrumbs items={[{ name: 'Góc chia sẻ', href: '/blog' }, { name: post.title, href: path }]} />
      <header className="article-header">
        <p className="eyebrow red-text">{post.category.toUpperCase()}</p>
        <h1>{post.title}</h1>
        <div className="article-meta">
          <span>Đăng ngày {formatDate(post.date)}</span>
          <span>Cập nhật {formatDate(post.updated)}</span>
          <span>{post.readingTime}</span>
        </div>
      </header>
      <div className="detail-image">
        <Image src={postImagePath(post)} alt={post.alt} fill preload sizes="(max-width: 760px) 100vw, 1320px" />
      </div>
    </div>

    <div className="container detail-grid">
      <article className="prose">
        <p className="article-lead">{post.lead}</p>
        {post.sections.map(section => <section key={section.heading} id={idFor(section.heading)}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          {section.list && <ul>{section.list.map(item => <li key={item}>{item}</li>)}</ul>}
        </section>)}
        <section>
          <h2>Đọc thêm về giải pháp tổ chức</h2>
          <p>{service?.description} <Link href={serviceHref(serviceSlug)}>Xem dịch vụ {service?.shortTitle.toLocaleLowerCase('vi')}</Link>.</p>
          {featuredProject && <p>Tham khảo dự án liên quan: <Link href={projectHref(featuredProject.slug)}>{featuredProject.title}</Link>.</p>}
          <p><Link href="/lien-he">Gửi brief hoặc trao đổi với Your Dreams</Link> nếu bạn muốn thảo luận về nhu cầu cụ thể.</p>
        </section>
      </article>
      <aside className="detail-aside toc">
        <p className="eyebrow">NỘI DUNG BÀI VIẾT</p>
        <ol>{post.sections.map(section => <li key={section.heading}><a href={`#${idFor(section.heading)}`}>{section.heading.replace(/^\d+\. /, '')}</a></li>)}</ol>
        <Link href="/lien-he" className="button button-red">Trao đổi ý tưởng <Icon name="up-right" /></Link>
      </aside>
    </div>

    <section className="section blog-section">
      <div className="container">
        <h2 className="related-heading">Đọc thêm</h2>
        <div className="blog-grid">{related.map(item => <BlogCard key={item.slug} post={item} />)}</div>
      </div>
    </section>

    <JsonLd data={{
      '@context': 'https://schema.org', '@type': 'BlogPosting', headline: post.title,
      description: post.excerpt, image: `${site.url}${postImagePath(post)}`,
      datePublished: post.date, dateModified: post.updated, inLanguage: 'vi-VN',
      mainEntityOfPage: `${site.url}${canonicalPath}`,
      author: { '@type': 'Organization', name: site.company },
      publisher: { '@id': `${site.url}/#organization` },
    }} />
  </>;
}
