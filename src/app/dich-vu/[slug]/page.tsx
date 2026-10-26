import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound, permanentRedirect } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import JsonLd from '@/components/ui/JsonLd';
import Icon from '@/components/ui/Icon';
import { services, serviceHref } from '@/content/services';
import { pageMetadata } from '@/lib/seo';
import { site } from '@/lib/site';

type Props = { params: Promise<{ slug: string }> };
const legacyServiceAliases: Record<string, string> = {
  'day-boi-vinhomes': 'giao-duc-the-thao',
  'marketing-su-kien': 'truyen-thong-su-kien',
};
const serviceForRoute = (slug: string) => services.find(service => service.slug === (legacyServiceAliases[slug] ?? slug));

export function generateStaticParams() {
  return [...services.map(service => ({ slug: service.slug })), ...Object.keys(legacyServiceAliases).map(slug => ({ slug }))];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceForRoute(slug);
  const canonicalPath = service?.slug === 'giao-duc-the-thao' ? serviceHref(service.slug) : `/dich-vu/${service?.slug ?? slug}`;
  return service
    ? pageMetadata(
        `${service.title} – Your Dreams`,
        service.description,
        canonicalPath,
        service.heroImage ? { url: service.heroImage.src, alt: service.heroImage.alt } : undefined
      )
    : {};
}

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;
  const service = serviceForRoute(slug);
  if (!service) notFound();
  const path = serviceHref(service.slug);
  if (`/dich-vu/${slug}` !== path) permanentRedirect(path);

  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ name: 'Dịch vụ', href: '/dich-vu' }, { name: service.shortTitle, href: path }]} />
        <header className="page-intro">
          <p className="eyebrow">{service.number} / DỊCH VỤ YOUR DREAMS</p>
          <h1>{service.title}</h1>
          <p>{service.description}</p>
        </header>

        {/* HÌNH ẢNH 1: Hero Banner */}
        {service.heroImage && (
          <div className="detail-image">
            <Image
              src={service.heroImage.src}
              alt={service.heroImage.alt}
              fill
              priority
              sizes="(max-width: 760px) 100vw, 1320px"
            />
          </div>
        )}
      </div>

      <div className="container detail-grid">
        <article className="prose">
          <p className="article-lead">{service.intro}</p>

          {/* ANSWER CAPSULE CHO AI OVERVIEWS */}
          {service.answerCapsule && (
            <div className="answer-capsule">
              <strong>Tóm tắt giải pháp:</strong> {service.answerCapsule}
            </div>
          )}

          <h2>Phạm vi đáp ứng & Các loại hình dịch vụ</h2>
          <ul>
            {service.items.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {/* BẢNG BÁO GIÁ / PHÂN BỔ HẠNG MỤC */}
          {service.packageTable && (
            <div className="service-packages-section">
              <h2>Bảng cấu hình gói & Ngân sách tham khảo</h2>
              <p>Mức dự toán tham khảo dựa trên quy mô thực tế do Your Dreams triển khai:</p>
              <div className="table-responsive">
                <table className="content-table">
                  <thead>
                    <tr>
                      {service.packageTable.headers.map((h, i) => (
                        <th key={i}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {service.packageTable.rows.map((row, i) => (
                      <tr key={i}>
                        {row.map((cell, j) => (
                          <td key={j}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* QUY TRÌNH 5 BƯỚC */}
          <h2>Quy trình 5 bước triển khai chuẩn xác</h2>
          {service.deliverables.map(item => (
            <div key={item.step} style={{ marginBottom: '18px' }}>
              <h3>{item.step}. {item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}

          {/* HÌNH ẢNH 2 & 3: Gallery thực tế */}
          {service.gallery && service.gallery.length > 0 && (
            <div>
              <h2>Hình ảnh thực tế từ các chương trình đã thực hiện</h2>
              <div className="service-gallery">
                {service.gallery.map((img, idx) => (
                  <div key={idx} className="service-gallery-item">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 760px) 100vw, 45vw"
                      loading="lazy"
                    />
                    {img.caption && (
                      <div className="service-gallery-caption">{img.caption}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CÂU HỎI THƯỜNG GẶP (FAQ) */}
          {service.faqs && service.faqs.length > 0 && (
            <div>
              <h2>Câu hỏi thường gặp về {service.shortTitle.toLocaleLowerCase('vi')}</h2>
              <div className="faq-list" style={{ marginTop: '20px' }}>
                {service.faqs.map(faq => (
                  <details key={faq.question} className="faq-item">
                    <summary>
                      <span>FAQ</span>
                      <strong>{faq.question}</strong>
                      <span className="icon"><Icon name="plus" /></span>
                    </summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          )}

          {/* INTERNAL LINKS */}
          <section style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid var(--line)' }}>
            <h2>Tham khảo thêm kiến thức liên quan</h2>
            <p>
              Khám phá thêm các cẩm nang thực chiến: <Link href="/blog">Thư viện bài viết tổ chức sự kiện</Link> hoặc xem các <Link href="/du-an">dự án thực tế tiêu biểu</Link> do Your Dreams thực hiện.
            </p>
            <p>
              Cần nhận dự toán chi tiết cho chương trình sắp tới? <Link href="/lien-he">Gửi brief trực tuyến hoặc liên hệ tư vấn 24/7</Link>.
            </p>
          </section>
        </article>

        <aside className="detail-aside">
          <p className="eyebrow">CÙNG TRAO ĐỔI</p>
          <h2>Bắt đầu từ nhu cầu của bạn.</h2>
          <p>Chia sẻ bối cảnh, thời gian và điều bạn mong muốn. Your Dreams sẽ gửi phương án và bảng dự toán bóc tách trong 24 giờ.</p>
          <Link href={`/lien-he?service=${service.slug}`} className="button button-red">
            Gửi brief sự kiện <Icon name="up-right" />
          </Link>
          <a href={site.phoneLink} className="header-phone" style={{ marginTop: '16px', display: 'inline-flex' }}>
            <Icon name="phone" /> {site.phone}
          </a>
        </aside>
      </div>

      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.title,
        description: service.description,
        url: `${site.url}${path}`,
        provider: { '@id': `${site.url}/#organization` },
        areaServed: { '@type': 'Country', name: 'Việt Nam' },
        serviceType: service.title,
      }} />

      {service.faqs && service.faqs.length > 0 && (
        <JsonLd data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: service.faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }} />
      )}
    </>
  );
}
