'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation, site } from '@/lib/site';
import Icon from '@/components/ui/Icon';
export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggle = useRef<HTMLButtonElement>(null);
  return <header className="site-header" onKeyDown={event => { if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); } }}><div className="header-inner container"><Link href="/" className="brand" aria-label="Sự Kiện Vip — Trang chủ" onClick={() => setOpen(false)}><span className="brand-word">sukien<span>.vip</span></span><span className="brand-by">BY <Image src="/images/your-dreams-logo.webp" alt="Your Dreams" width={100} height={38} /></span></Link><nav className="desktop-nav" aria-label="Điều hướng chính">{navigation.map(item => <Link key={item.href} href={item.href} aria-current={pathname.startsWith(item.href) ? 'page' : undefined}>{item.label}</Link>)}</nav><Link href="/lien-he" className="button button-dark header-cta">Kể chúng tôi ý tưởng <Icon name="up-right" /></Link><button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Đóng menu' : 'Mở menu'} onClick={() => setOpen(!open)}><Icon name={open ? 'close' : 'menu'} /></button></div>{open && <nav id="mobile-menu" className="mobile-nav" aria-label="Điều hướng di động">{navigation.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} aria-current={pathname.startsWith(item.href) ? 'page' : undefined}>{item.label}<Icon name="up-right" /></Link>)}<Link href="/lien-he" onClick={() => setOpen(false)}>Liên hệ tư vấn <Icon name="up-right" /></Link><a href={site.phoneLink}>{site.phone}</a></nav>}</header>;
}
