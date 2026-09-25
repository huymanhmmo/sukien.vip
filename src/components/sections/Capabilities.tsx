import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';

const capabilities = [
  { number: '01', title: 'Ý tưởng & kịch bản', text: 'Làm rõ mục tiêu, thiết kế hành trình khách mời và tổ chức các điểm chạm thành một câu chuyện nhất quán.', items: ['Concept chương trình', 'Kịch bản & timeline', 'Không gian trải nghiệm'] },
  { number: '02', title: 'Sản xuất & kỹ thuật', text: 'Khảo sát điều kiện thực tế để cấu hình sân khấu, âm thanh, ánh sáng, màn hình và phương án thi công phù hợp.', items: ['Sân khấu & nhà bạt', 'Âm thanh & ánh sáng', 'LED, trình chiếu & livestream'] },
  { number: '03', title: 'Con người & vận hành', text: 'Kết nối đội ngũ điều phối, kỹ thuật và nhân sự hỗ trợ theo vai trò rõ ràng trong suốt ngày diễn ra.', items: ['Điều phối sự kiện', 'Lễ tân & hướng dẫn', 'Kỹ thuật & an toàn'] },
];

export default function Capabilities() {
  return <section className="capabilities section"><div className="container"><div className="capability-intro"><div><p className="eyebrow">NĂNG LỰC TRIỂN KHAI</p><h2>Một bản kế hoạch<br />được đưa vào đời thật.</h2></div><p>Ý tưởng chỉ phát huy khi từng phần việc được kết nối tốt. Your Dreams tổ chức ba trụ cột dưới một kế hoạch chung để mọi quyết định tại hiện trường có cùng mục tiêu.</p></div><div className="capability-layout"><div className="capability-image"><Image src="/images/ocean-city.webp" alt="Khu vực trao giải Kình ngư Quận biển Ocean City 2023" fill sizes="(max-width: 760px) 100vw, 46vw" /><span>THE DETAILS CREATE THE MEMORY</span></div><div className="capability-list">{capabilities.map(item => <article className="capability-item" key={item.number}><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.text}</p><ul>{item.items.map(label => <li key={label}>{label}</li>)}</ul></div></article>)}<Link href="/dich-vu" className="text-link">Xem các giải pháp của chúng tôi <Icon /></Link></div></div></div></section>;
}
