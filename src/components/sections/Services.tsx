import Link from 'next/link';
import { serviceHref, services } from '@/content/services';
import SectionHeading from '@/components/ui/SectionHeading';
import Icon from '@/components/ui/Icon';
import ServiceIllustration from '@/components/ui/ServiceIllustration';

const labels: Record<string, string> = {
  'to-chuc-su-kien-the-thao': 'RUN · SWIM · PLAY',
  'to-chuc-su-kien-doanh-nghiep': 'MEET · CONNECT · CELEBRATE',
  'giao-duc-the-thao': 'LEARN · MOVE · GROW',
  'cho-thue-thiet-bi-su-kien': 'BUILD · LIGHT · SOUND',
  'nhan-su-su-kien': 'PEOPLE · TIMING · CARE',
  'truyen-thong-su-kien': 'FRAME · STREAM · SHARE',
  'thiet-ke-in-an': 'IDEA · MAKE · REMEMBER',
};

export default function Services() {
  return (
    <section className="section services-section service-atlas-section" id="dich-vu">
      <div className="container">
        <SectionHeading eyebrow="01 / CHÚNG TÔI LÀM GÌ" title="Một đối tác. Nhiều giải pháp." href="/dich-vu" link="Khám phá dịch vụ" />
        <p className="service-atlas-intro">Chọn một điểm chạm để xem cách Your Dreams biến mục tiêu thành trải nghiệm hoàn chỉnh.</p>
        <div className="service-atlas">
          {services.map((service, index) => (
            <Link key={service.slug} className={`service-atlas-card service-atlas-card--${index + 1}`} href={serviceHref(service.slug)}>
              <div className="service-atlas-art" aria-hidden="true"><ServiceIllustration kind={service.slug} /></div>
              <div className="service-atlas-copy">
                <div className="service-atlas-meta"><span>{service.number}</span><span>{labels[service.slug]}</span></div>
                <h3>{service.shortTitle}</h3>
                <p>{service.description}</p>
                <span className="service-atlas-link">Khám phá dịch vụ <Icon name="up-right" /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
