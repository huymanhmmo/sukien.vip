import Image from 'next/image';
export default function Partners() {
  return <section className="partners container" aria-label="Khách hàng tiêu biểu"><p>ĐỒNG HÀNH CÙNG<br /><strong>NHỮNG THƯƠNG HIỆU</strong></p><Image src="/images/vinhomes-logo.webp" width={140} height={64} alt="Vinhomes" /><Image src="/images/rox-logo.webp" width={150} height={56} alt="ROX Living" /><span className="partner-text">FPT <small>UNIVERSITY</small></span><span className="partner-text partner-rangdong">RẠNG ĐÔNG</span><span className="partner-text partner-evn">EVN</span></section>;
}
