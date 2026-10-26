import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound, permanentRedirect } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import JsonLd from '@/components/ui/JsonLd';
import ProjectCard from '@/components/ui/ProjectCard';
import Icon from '@/components/ui/Icon';
import { projects } from '@/content/projects';
import { projectHref } from '@/content/legacy-content-routes';
import { services, serviceHref } from '@/content/services';
import { pageMetadata } from '@/lib/seo';
import { site } from '@/lib/site';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  return project
    ? pageMetadata(`${project.title} | Dự án tiêu biểu – Your Dreams`, project.description, projectHref(slug), {
        url: `/images/${project.image}.webp`,
        alt: project.alt,
      })
    : {};
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) notFound();

  const service = services.find(item => item.slug === project.service);
  const related = projects
    .filter(item => item.slug !== project.slug && item.service === project.service)
    .slice(0, 2);
  const path = projectHref(project.slug);

  if (path !== `/du-an/${project.slug}`) permanentRedirect(path);

  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ name: 'Dự án', href: '/du-an' }, { name: project.title, href: path }]} />
        <header className="page-intro">
          <p className="eyebrow">{project.category.toUpperCase()}{project.year && ` / ${project.year}`}</p>
          <h1>{project.title}</h1>
          <p>{project.intro}</p>
        </header>

        {/* HÌNH ẢNH 1: Hero Banner */}
        <div className="detail-image">
          <Image
            src={`/images/${project.image}.webp`}
            alt={project.alt}
            fill
            preload
            sizes="(max-width: 760px) 100vw, 1320px"
          />
        </div>
        <p className="image-credit">Hình ảnh tư liệu thực tế tại hiện trường do Your Dreams trực tiếp điều phối.</p>
      </div>

      <div className="container detail-grid">
        <article className="prose">
          <h2>Những hạng mục Your Dreams đồng hành</h2>
          <ul>
            {project.work.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>Câu chuyện hậu trường & Kết quả triển khai</h2>
          <p>{project.story}</p>

          {/* HÌNH ẢNH 2 & 3: Gallery 2 ảnh bổ sung (Tổng cộng >= 3 ảnh/dự án) */}
          {project.gallery && project.gallery.length > 0 && (
            <div>
              <h2>Hình ảnh khoảnh khắc ấn tượng tại sự kiện</h2>
              <div className="gallery-grid">
                {project.gallery.map((image, idx) => (
                  <div className="gallery-photo" key={image}>
                    <Image
                      src={`/images/${image}.webp`}
                      alt={`Tư liệu hình ảnh hoạt động ${idx + 1} của ${project.title}`}
                      fill
                      sizes="(max-width: 760px) 100vw, 45vw"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <section style={{ marginTop: '36px', paddingTop: '20px', borderTop: '1px solid var(--line)' }}>
            <h2>Giải pháp dịch vụ liên quan</h2>
            <p>{service?.description}</p>
            <Link className="text-link" href={serviceHref(project.service)}>
              Xem chi tiết dịch vụ {service?.shortTitle.toLocaleLowerCase('vi')} <Icon />
            </Link>
          </section>
        </article>

        <aside className="detail-aside">
          <p className="eyebrow">THÔNG TIN DỰ ÁN</p>
          <dl>
            <dt>Khách hàng</dt>
            <dd>{project.client}</dd>
            <dt>Địa điểm</dt>
            <dd>{project.location}</dd>
            <dt>Lĩnh vực</dt>
            <dd>{project.category}</dd>
            {project.year && (
              <>
                <dt>Thời gian</dt>
                <dd>{project.year}</dd>
              </>
            )}
          </dl>
          <Link href="/lien-he" className="button button-red">
            Khởi động dự án của bạn <Icon name="up-right" />
          </Link>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="section blog-section">
          <div className="container">
            <h2 className="related-heading">Có thể bạn muốn xem thêm</h2>
            <div className="listing-grid">
              {related.map(item => (
                <ProjectCard key={item.slug} project={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: project.title,
          description: project.description,
          image: `${site.url}/images/${project.image}.webp`,
          url: `${site.url}${path}`,
          creator: { '@id': `${site.url}/#organization` },
        }}
      />
    </>
  );
}
