import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Icon from '@/components/ui/Icon';
import { services } from '@/content/services';
import { pageMetadata } from '@/lib/seo';
export const metadata: Metadata = pageMetadata('Dịch vụ tổ chức sự kiện', 'Giải pháp tổ chức sự kiện thể thao, doanh nghiệp, giáo dục, thiết bị, truyền thông và thiết kế từ Your Dreams.', '/dich-vu');
export default function ServicesPage() { return <><div className="container"><Breadcrumbs items={[{ name: 'Dịch vụ', href: '/dich-vu' }]} /><header className="page-intro"><p className="eyebrow">DỊCH VỤ YOUR DREAMS</p><h1>Những điều cần thiết,<br />để một ý tưởng trở thành<br /><span className="red-text">trải nghiệm.</span></h1><p>Từ một hạng mục cụ thể đến kế hoạch tổ chức trọn vẹn, chúng tôi cùng bạn xác định cách làm phù hợp với mục tiêu, không gian và người tham gia.</p></header></div><section className="page-section services-section"><div className="container"><div className="service-list">{services.map(service => <Link key={service.slug} className="service-row" href={`/dich-vu/${service.slug}`}><span className="service-number">{service.number}</span><h2>{service.title}</h2><p>{service.description}</p><span className="service-arrow"><Icon name="up-right" /></span></Link>)}</div></div></section></>; }
