import Link from 'next/link';
import { services } from '@/content/services';
import SectionHeading from '@/components/ui/SectionHeading';
import Icon from '@/components/ui/Icon';
export default function Services() {
  return <section className="section services-section" id="dich-vu"><div className="container"><SectionHeading eyebrow="01 / CHÚNG TÔI LÀM GÌ" title="Một đối tác. Nhiều giải pháp." href="/dich-vu" link="Khám phá dịch vụ" /><div className="service-list">{services.map(service => <Link key={service.slug} className="service-row" href={`/dich-vu/${service.slug}`}><span className="service-number">{service.number}</span><h3>{service.shortTitle}</h3><p>{service.description}</p><span className="service-arrow"><Icon name="up-right" /></span></Link>)}</div></div></section>;
}
