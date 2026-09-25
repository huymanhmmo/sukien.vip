import Link from 'next/link';
import Icon from '@/components/ui/Icon';
const questions = [
  ['Your Dreams nhận tổ chức từ quy mô nào?', 'Chúng tôi trao đổi theo bối cảnh, mục tiêu và phạm vi công việc của từng chương trình. Một hạng mục riêng hoặc kế hoạch trọn gói đều cần được làm rõ để có phương án thực tế.'],
  ['Nếu chưa xác định ngân sách thì có thể trao đổi không?', 'Có. Bạn có thể chia sẻ những điều đã biết như thời gian, địa điểm, số khách và mục tiêu. Đội ngũ sẽ cùng xác định các hạng mục ưu tiên trước khi xây phương án.'],
  ['Tôi đã có đơn vị thiết kế hoặc địa điểm, có thể phối hợp không?', 'Có. Chúng tôi có thể phối hợp với các đơn vị bạn đã chọn, xác định đầu mối, mốc bàn giao và trách nhiệm của từng bên từ đầu.'],
  ['Nên liên hệ trước bao lâu?', 'Thời gian chuẩn bị phụ thuộc loại hình, địa điểm và phạm vi sản xuất. Liên hệ sớm giúp khảo sát và lên phương án kỹ hơn; khi thời gian gấp, chúng tôi sẽ cùng bạn đánh giá khả năng triển khai.'],
];
export default function Faq() { return <section className="section faq-section"><div className="container faq-layout"><div><p className="eyebrow">NHỮNG ĐIỀU BẠN CÓ THỂ ĐANG HỎI</p><h2>Để cuộc trao đổi đầu tiên<br />dễ bắt đầu hơn.</h2><p>Chưa cần một kế hoạch hoàn chỉnh. Hãy mang theo mục tiêu và những thông tin bạn đã có.</p><Link className="text-link" href="/lien-he">Gửi câu hỏi cho chúng tôi <Icon /></Link></div><div className="faq-list">{questions.map(([question, answer], i) => <details key={question} open={i === 0}><summary><span>0{i + 1}</span>{question}<Icon name="plus" /></summary><p>{answer}</p></details>)}</div></div></section>; }
