const facts = [
  ['Từ ý tưởng', 'Lắng nghe mục tiêu và chuyển hóa thành một concept có thể triển khai.'],
  ['Đến hiện trường', 'Phối hợp nội dung, kỹ thuật, nhân sự và logistics theo cùng một kế hoạch.'],
  ['Đến sau sự kiện', 'Bàn giao nội dung, hình ảnh và cùng nhìn lại các điểm cần phát triển.'],
];
export default function Proof() { return <section className="proof-section"><div className="container"><p className="eyebrow">MỘT CÁCH LÀM VIỆC CÓ HỆ THỐNG</p><div className="proof-title"><h2>Không chỉ tổ chức<br />một ngày diễn ra.</h2><p>Chúng tôi xây dựng trải nghiệm từ những quyết định trước đó rất lâu: mục tiêu rõ ràng, đầu mối rõ ràng, điều kiện địa điểm được khảo sát và một đội ngũ hiểu vai trò của mình.</p></div><div className="proof-grid">{facts.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>;
}
