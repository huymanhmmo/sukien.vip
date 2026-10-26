import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Icon from '@/components/ui/Icon';
import JsonLd from '@/components/ui/JsonLd';
import { services, serviceHref } from '@/content/services';
import { pageMetadata } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata: Metadata = pageMetadata(
  'Dịch vụ tổ chức sự kiện',
  'Giải pháp tổ chức sự kiện thể thao, doanh nghiệp, giáo dục, thiết bị, truyền thông và thiết kế từ Your Dreams.',
  '/dich-vu'
);

export default function ServicesPage() {
  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ name: 'Dịch vụ', href: '/dich-vu' }]} />
        <header className="page-intro">
          <p className="eyebrow">DỊCH VỤ YOUR DREAMS</p>
          <h1>Những điều cần thiết,<br />để một ý tưởng trở thành<br /><span className="red-text">trải nghiệm.</span></h1>
          <p>Từ một hạng mục cụ thể đến kế hoạch tổ chức trọn vẹn, chúng tôi cùng bạn xác định cách làm phù hợp với mục tiêu, không gian và người tham gia.</p>
        </header>
      </div>
      <section className="page-section services-section">
        <div className="container">
          <div className="service-list">
            {services.map(service => (
              <Link key={service.slug} className="service-row" href={`/dich-vu/${service.slug}`}>
                <span className="service-number">{service.number}</span>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <span className="service-arrow"><Icon name="up-right" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        '@id': `${site.url}/dich-vu#webpage`,
        url: `${site.url}/dich-vu`,
        name: 'Dịch vụ tổ chức sự kiện – Your Dreams',
        description: 'Giải pháp tổ chức sự kiện thể thao, doanh nghiệp, giáo dục, thiết bị, truyền thông và thiết kế từ Your Dreams.',
        inLanguage: 'vi-VN',
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: services.map((service, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'Service',
              name: service.title,
              description: service.description,
              url: `${site.url}${serviceHref(service.slug)}`,
              provider: { '@id': `${site.url}/#organization` },
            },
          })),
        },
      }} />
    </>
  );
}

