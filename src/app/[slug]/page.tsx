import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ArticleContent from '@/components/blog/ArticleContent';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Icon from '@/components/ui/Icon';
import JsonLd from '@/components/ui/JsonLd';
import { legacyContentRoutes } from '@/content/legacy-content-routes';
import { posts } from '@/content/posts';
import { projects } from '@/content/projects';
import { serviceHref, services } from '@/content/services';
import { postMetadata } from '@/lib/post-seo';
import { pageMetadata } from '@/lib/seo';
import { site } from '@/lib/site';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return legacyContentRoutes.map(route => ({ slug: route.sourceSlug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const route = legacyContentRoutes.find(item => item.sourceSlug === slug);
  if (!route) return {};

  const canonicalPath = `/${route.canonicalSlug}`;
  if (route.kind === 'post') {
    const post = posts.find(item => item.slug === route.contentSlug);
    return post ? postMetadata(post, canonicalPath) : {};
  }

  const project = projects.find(item => item.slug === route.contentSlug);
  return project
    ? pageMetadata(`${project.title} | Dự án`, project.description, canonicalPath, {
      url: `/images/${project.image}.webp`, alt: project.alt,
    })
    : {};
}

export default async function LegacyContentPage({ params }: Props) {
  const { slug } = await params;
  const route = legacyContentRoutes.find(item => item.sourceSlug === slug);
  if (!route) notFound();

  const path = `/${slug}`;
  const canonicalPath = `/${route.canonicalSlug}`;
  if (route.kind === 'post') {
    const post = posts.find(item => item.slug === route.contentSlug);
    if (!post) notFound();
    return <ArticleContent post={post} path={path} canonicalPath={canonicalPath} />;
  }

  const project = projects.find(item => item.slug === route.contentSlug);
  if (!project) notFound();
  const service = services.find(item => item.slug === project.service);

  return <>
    <div className="container">
      <Breadcrumbs items={[{ name: 'Dự án', href: '/du-an' }, { name: project.title, href: path }]} />
      <header className="page-intro">
        <p className="eyebrow">{project.category.toUpperCase()}{project.year && ` / ${project.year}`}</p>
        <h1>{project.title}</h1>
        <p>{project.intro}</p>
      </header>
      <div className="detail-image"><Image src={`/images/${project.image}.webp`} alt={project.alt} fill preload sizes="(max-width: 760px) 100vw, 1320px" /></div>
      <p className="image-credit">Ảnh tư liệu hoạt động do Your Dreams cung cấp.</p>
    </div>
    <div className="container detail-grid">
      <article className="prose">
        <h2>Điều Your Dreams đồng hành</h2>
        <ul>{project.work.map(item => <li key={item}>{item}</li>)}</ul>
        <h2>Câu chuyện của chương trình</h2>
        <p>{project.story}</p>
        <h2>Giải pháp liên quan</h2>
        <p>{service?.description}</p>
        {service && <Link className="text-link" href={serviceHref(service.slug)}>Xem dịch vụ {service.shortTitle.toLocaleLowerCase('vi')} <Icon /></Link>}
      </article>
      <aside className="detail-aside">
        <p className="eyebrow">THÔNG TIN DỰ ÁN</p>
        <dl><dt>Đơn vị</dt><dd>{project.client}</dd><dt>Địa điểm</dt><dd>{project.location}</dd><dt>Lĩnh vực</dt><dd>{project.category}</dd>{project.year && <><dt>Năm</dt><dd>{project.year}</dd></>}</dl>
        <Link href="/lien-he" className="button button-red">Bắt đầu dự án mới <Icon name="up-right" /></Link>
      </aside>
    </div>
    <JsonLd data={{
      '@context': 'https://schema.org', '@type': 'CreativeWork', name: project.title,
      description: project.description, image: `${site.url}/images/${project.image}.webp`,
      url: `${site.url}${canonicalPath}`, creator: { '@id': `${site.url}/#organization` },
    }} />
  </>;
}
