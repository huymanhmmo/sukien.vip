import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import JsonLd from '@/components/ui/JsonLd';
import Icon from '@/components/ui/Icon';
import { services } from '@/content/services';
import { pageMetadata } from '@/lib/seo';
import { site } from '@/lib/site';
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return services.map(service => ({ slug: service.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; const service = services.find(item => item.slug === slug); return service ? pageMetadata(service.title, service.description, `/dich-vu/${slug}`) : {}; }
export default async function ServiceDetail({ params }: Props) { const { slug } = await params; const service = services.find(item => item.slug === slug); if (!service) notFound(); const path = `/dich-vu/${service.slug}`; return <><div className="container"><Breadcrumbs items={[{ name: 'Dịch vụ', href: '/dich-vu' }, { name: service.shortTitle, href: path }]} /><header className="page-intro"><p className="eyebrow">{service.number} / DỊCH VỤ YOUR DREAMS</p><h1>{service.title}</h1><p>{service.description}</p></header></div><div className="container detail-grid"><article className="prose"><p className="article-lead">{service.intro}</p><h2>Phù hợp với nhu cầu</h2><ul>{service.items.map(item => <li key={item}>{item}</li>)}</ul><h2>Chúng tôi cùng bạn chuẩn bị</h2>{service.deliverables.map((item, i) => <div key={item}><h3>0{i + 1}. {['Làm rõ bài toán', 'Kết nối các hạng mục', 'Chuẩn bị để triển khai', 'Đồng hành trong quá trình thực hiện'][i]}</h3><p>{item}</p></div>)}<details className="faq-item"><summary>{service.question}</summary><p>{service.answer}</p></details></article><aside className="detail-aside"><p className="eyebrow">CÙNG TRAO ĐỔI</p><h2>Bắt đầu từ nhu cầu của bạn.</h2><p>Chia sẻ bối cảnh, thời gian và điều bạn mong muốn. Your Dreams sẽ cùng bạn xác định bước tiếp theo.</p><Link href={`/lien-he?service=${service.slug}`} className="button button-red">Gửi brief sự kiện <Icon name="up-right" /></Link><a href={site.phoneLink}>{site.phone}</a></aside></div><JsonLd data={{ '@context': 'https://schema.org', '@type': 'Service', name: service.title, description: service.description, url: `${site.url}${path}`, provider: { '@id': `${site.url}/#organization` }, areaServed: { '@type': 'Country', name: 'Việt Nam' }, serviceType: service.title }} /></>; }
