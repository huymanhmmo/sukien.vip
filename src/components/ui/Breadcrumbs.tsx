import Link from 'next/link';
import JsonLd from './JsonLd';
import { site } from '@/lib/site';
export default function Breadcrumbs({ items }: { items: { name: string; href: string }[] }) {
  const all = [{ name: 'Trang chủ', href: '/' }, ...items];
  return <><nav className="breadcrumbs" aria-label="Đường dẫn trang"><ol>{all.map((item, i) => <li key={item.href}>{i === all.length - 1 ? <span aria-current="page">{item.name}</span> : <Link href={item.href}>{item.name}</Link>}</li>)}</ol></nav><JsonLd data={{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: all.map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: item.name, item: `${site.url}${item.href}` })) }} /></>;
}
