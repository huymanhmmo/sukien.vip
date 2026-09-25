import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import { projectHref } from '@/content/legacy-content-routes';

const details = [
  ['Bối cảnh', 'Một ngày hội bơi dành cho cộng đồng cư dân ở nhiều lứa tuổi.'],
  ['Cách làm', 'Kết nối lịch thi đấu, luồng vận động viên, hỗ trợ chuyên môn và hoạt động trao giải.'],
  ['Điều để lại', 'Một không gian nơi tinh thần thi đấu gặp niềm vui của cộng đồng.'],
];
export default function FeaturedCase() {
  return <section className="featured-case"><div className="container featured-case-grid"><div className="case-copy"><p className="eyebrow">CASE STUDY / OCEAN CITY 2023</p><h2>Một ngày hội bơi,<br />nhiều khoảnh khắc <span>đồng hành.</span></h2><p className="case-lead">Kình ngư Quận biển là hoạt động thể thao dành cho cộng đồng cư dân Vinhomes Ocean Park. Chương trình quy tụ các nội dung bơi và tiếp sức trong một ngày hội giàu năng lượng.</p><div className="case-details">{details.map(([title, text]) => <div key={title}><span>{title}</span><p>{text}</p></div>)}</div><Link href={projectHref('kinh-ngu-quan-bien-ocean-city-2023')} className="button button-dark">Xem câu chuyện dự án <Icon name="up-right" /></Link></div><div className="case-image-stack"><div className="case-primary-image"><Image src="/images/ocean-city.webp" alt="Tập thể tham gia giải bơi Kình ngư Quận biển Ocean City 2023" fill sizes="(max-width: 760px) 100vw, 50vw" /></div><div className="case-secondary-image"><Image src="/images/swim-vinhomes.webp" alt="Hoạt động học bơi tại khu đô thị Vinhomes" fill sizes="(max-width: 760px) 48vw, 24vw" /></div><p className="case-stamp"><strong>YOUR<br />DREAMS</strong><span>HUMAN<br />EXPERIENCE<br />SINCE 2019</span></p></div></div></section>;
}
