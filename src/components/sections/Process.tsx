import SectionHeading from '@/components/ui/SectionHeading';
export const steps = [
  ['Lắng nghe', 'Hiểu mục tiêu, khách mời và điều bạn muốn tạo nên.'],
  ['Lên ý tưởng', 'Đề xuất concept, kịch bản và ngân sách phù hợp.'],
  ['Chuẩn bị', 'Khảo sát, thiết kế, sắp xếp nhân sự và thiết bị.'],
  ['Thực hiện', 'Điều phối chương trình, chăm chút từng điểm chạm.'],
  ['Nhìn lại', 'Tổng kết, bàn giao và lắng nghe phản hồi.'],
];
export default function Process() {
  return <section className="section container"><SectionHeading eyebrow="04 / CÁCH CHÚNG TÔI ĐỒNG HÀNH" title="Rõ ràng từ đầu. Trọn vẹn về sau." /><div className="process-grid">{steps.map(([title, text], i) => <div className="process-step" key={title}><span className="step-number">0{i + 1}</span><h3>{title}</h3><p>{text}</p></div>)}</div></section>;
}
