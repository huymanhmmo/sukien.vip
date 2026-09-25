import Link from 'next/link';
import Icon from './Icon';
export default function SectionHeading({ eyebrow, title, link, href }: { eyebrow: string; title: string; link?: string; href?: string }) {
  return <div className="section-heading"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>{href && <Link className="text-link" href={href}>{link}<Icon /></Link>}</div>;
}
