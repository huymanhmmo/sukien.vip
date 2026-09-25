import { site } from '@/lib/site';
import Icon from '@/components/ui/Icon';
export default function ContactWidget() {
  return <aside className="contact-widget" aria-label="Liên hệ nhanh"><a href={site.zalo} target="_blank" rel="noopener noreferrer" className="widget-zalo" aria-label="Tư vấn qua Zalo">Zalo</a><a href={site.phoneLink} className="widget-call" aria-label={`Gọi ${site.phone}`}><Icon name="phone" /></a></aside>;
}
