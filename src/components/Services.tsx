import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: "Tổ Chức Sự Kiện Thể Thao",
      desc: "Giải chạy, bơi, bóng đá, marathon – 50+ sự kiện thành công, thiết bị 4K, an toàn tuyệt đối.",
      img: "https://sukien.vip/wp-content/uploads/2025/11/3.png",
      link: "#"
    },
    {
      title: "Tổ Chức Sự Kiện Doanh Nghiệp",
      desc: "Gala dinner, team building, hội nghị, ra mắt sản phẩm – các doanh nghiệp hàng đầu tin tưởng.",
      img: "https://sukien.vip/wp-content/uploads/2025/07/Huong-Dan-Toan-Dien-ve-Quan-Ly-To-Chuc-Su-Kien-Tu-Len-Ke-Hoach-Den-Danh-Gia-Thanh-Cong-scaled.png",
      link: "#"
    },
    {
      title: "Cho Thuê Thiết Bị Sự Kiện",
      desc: "Sân khấu, âm thanh, ánh sáng, màn LED, nhà bạt, livestream – bảng giá rõ, giao nhanh.",
      img: "https://sukien.vip/wp-content/uploads/2025/07/Thiet-Bi-Su-Kien-Huong-Dan-Chi-Tiet-Tu-A-Z-Cho-Moi-Buoi-Tiec-Thanh-Cong-scaled.png",
      link: "#"
    },
    {
      title: "Dạy Bơi & Giáo Dục Thể Thao",
      desc: "Lớp học bơi chuyên nghiệp, huấn luyện viên dày dạn, 99% học viên biết bơi sau 10 buổi.",
      img: "https://sukien.vip/wp-content/uploads/2025/07/Giai-boi-Kinh-ngu-Quan-bien-Ocean-City-2023-scaled.webp",
      link: "#"
    },
    {
      title: "Thiết Kế & In Ấn Sự Kiện",
      desc: "Backdrop, huy chương, cúp, poster, catalogue, nhận diện thương hiệu – giá tốt, giao nhanh.",
      img: "https://sukien.vip/wp-content/uploads/2025/11/Thiet-ke-in-an-su-kien-sukienvip.png",
      link: "#"
    },
    {
      title: "Marketing & Truyền Thông Sự Kiện",
      desc: "PR sự kiện, digital marketing, báo chí, video viral, KOL marketing – lan tỏa thương hiệu toàn diện.",
      img: "https://sukien.vip/wp-content/uploads/2025/07/Truyen-Thong-To-Chuc-Su-Kien-Huong-Dan-Toan-Dien-Tu-A-Z-scaled.png",
      link: "#"
    }
  ];

  return (
    <section id="dich-vu" className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a5c] mb-4">Danh Sách Dịch Vụ Chính</h2>
          <p className="text-lg text-gray-600">Giải pháp tổng thể cho mọi nhu cầu tổ chức sự kiện của bạn</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="relative h-[220px] w-full overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1a3a5c] mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-3">{service.desc}</p>
                <Link href={service.link} className="inline-flex items-center text-[#d4af37] font-semibold group/link">
                  Xem Chi Tiết 
                  <span className="ml-2 transition-transform duration-300 group-hover/link:translate-x-2">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
