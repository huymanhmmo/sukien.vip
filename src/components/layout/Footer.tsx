import Link from 'next/link';
import { navigation, site } from '@/lib/site';
import { serviceHref, services } from '@/content/services';
import Icon from '@/components/ui/Icon';
export default function Footer() {
  return <footer className="site-footer"><div className="container footer-grid"><div className="footer-about"><Link href="/" className="brand-word">sukien<span>.vip</span></Link><p>Từ ý tưởng của bạn.<br />Đến khoảnh khắc của mọi người.</p><a className="footer-phone" href={site.phoneLink}>{site.phone}<Icon name="up-right" /></a><a href={`mailto:${site.email}`}>{site.email}</a></div><div><h2>Khám phá</h2>{navigation.map(item => <Link href={item.href} key={item.href}>{item.label}</Link>)}<Link href="/lien-he">Liên hệ</Link></div><div><h2>Giải pháp sự kiện</h2>{services.slice(0, 4).map(item => <Link href={serviceHref(item.slug)} key={item.slug}>{item.shortTitle}</Link>)}<Link href="/dich-vu">Tất cả dịch vụ</Link></div><div><h2>Your Dreams</h2><p>{site.company}</p><p>{site.address}</p><p>Mã số thuế: {site.taxId}</p><a href={site.zalo} target="_blank" rel="noopener noreferrer">Kết nối qua Zalo <span aria-hidden="true">↗</span></a></div></div><div className="container footer-bottom"><p>© {new Date().getFullYear()} Your Dreams. All rights reserved.</p><Link href="/chinh-sach-bao-mat">Chính sách bảo mật</Link><a href="#top">Về đầu trang ↑</a></div></footer>;
}
