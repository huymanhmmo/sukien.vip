import type { Metadata } from 'next';
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
  return service ? pageMetadata(service.title, service.description, canonicalPath) : {};
}

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;
  const service = serviceForRoute(slug);
  if (!service) notFound();
  const path = serviceHref(service.slug);
  if (slug === service.slug && path !== `/dich-vu/${slug}`) permanentRedirect(path);

  return <>
    <div className="container">
      <Breadcrumbs items={[{ name: 'Dịch vụ', href: '/dich-vu' }, { name: service.shortTitle, href: path }]} />
      <header className="page-intro"><p className="eyebrow">{service.number} / DỊCH VỤ YOUR DREAMS</p><h1>{service.title}</h1><p>{service.description}</p></header>
    </div>
    <div className="container detail-grid">
      <article className="prose">
        <p className="article-lead">{service.intro}</p>
        <h2>Phù hợp với nhu cầu</h2><ul>{service.items.map(item => <li key={item}>{item}</li>)}</ul>
        <h2>Chúng tôi cùng bạn chuẩn bị</h2>
        {service.deliverables.map((item, index) => <div key={item}><h3>0{index + 1}. {['Làm rõ bài toán', 'Kết nối các hạng mục', 'Chuẩn bị để triển khai', 'Đồng hành trong quá trình thực hiện'][index]}</h3><p>{item}</p></div>)}
        <details className="faq-item"><summary>{service.question}</summary><p>{service.answer}</p></details>
      </article>
      <aside className="detail-aside"><p className="eyebrow">CÙNG TRAO ĐỔI</p><h2>Bắt đầu từ nhu cầu của bạn.</h2><p>Chia sẻ bối cảnh, thời gian và điều bạn mong muốn. Your Dreams sẽ cùng bạn xác định bước tiếp theo.</p><Link href={`/lien-he?service=${service.slug}`} className="button button-red">Gửi brief sự kiện <Icon name="up-right" /></Link><a href={site.phoneLink}>{site.phone}</a></aside>
    </div>
    <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Service', name: service.title, description: service.description, url: `${site.url}${path}`, provider: { '@id': `${site.url}/#organization` }, areaServed: { '@type': 'Country', name: 'Việt Nam' }, serviceType: service.title }} />
  </>;
}
