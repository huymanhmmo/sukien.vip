import Image from 'next/image';
import Link from 'next/link';

export default function Portfolio() {
  const items = [
    {
      title: "Giải Marathon Quốc Tế",
      desc: "Tổ chức, truyền thông, thiết bị 4K",
      overlay: "Marathon Thành Phố / 5,000 tham gia",
      img: "https://sukien.vip/wp-content/uploads/2025/07/Giai-chay-ROX-Living-Happy-Run-2024-scaled.webp"
    },
    {
      title: "Gala Dinner Doanh Nghiệp",
      desc: "Tổ chức, thiết kế, MC chuyên nghiệp",
      overlay: "Gala Dinner Sang Trọng / 300 khách VIP",
      img: "https://sukien.vip/wp-content/uploads/2025/07/Huong-Dan-Toan-Dien-ve-Quan-Ly-To-Chuc-Su-Kien-Tu-Len-Ke-Hoach-Den-Danh-Gia-Thanh-Cong-scaled.png"
    },
    {
      title: "Giải Bơi Chuyên Nghiệp",
      desc: "Tổ chức, quay phim, thiết bị an toàn",
      overlay: "Giải Bơi Quốc Gia / 200 vận động viên",
      img: "https://sukien.vip/wp-content/uploads/2025/07/Giai-boi-Kinh-ngu-Quan-bien-Ocean-City-2023-scaled.webp"
    },
    {
      title: "Hội Thảo & Hội Nghị",
      desc: "Tổ chức, livestream, âm thanh cao cấp",
      overlay: "Hội Thảo Kinh Doanh / 500 khách tham dự",
      img: "https://sukien.vip/wp-content/uploads/2025/07/Truyen-Thong-To-Chuc-Su-Kien-Huong-Dan-Toan-Dien-Tu-A-Z-scaled.png"
    },
    {
      title: "Sự Kiện Văn Hóa & Giáo Dục",
      desc: "Tổ chức, quay phim, thiết kế sân khấu",
      overlay: "Sự Kiện Văn Hóa / Truyền thông 4K",
      img: "https://sukien.vip/wp-content/uploads/2025/07/Thue-Bat-Su-Kien-Huong-Dan-Chi-Tiet-Tu-A-Z-Cho-Moi-Su-Kien-2025-scaled.png"
    },
    {
      title: "Lễ Ra Mắt & Sản Phẩm",
      desc: "Tổ chức, livestream, marketing sự kiện",
      overlay: "Lễ Ra Mắt Sản Phẩm / Livestream toàn quốc",
      img: "https://sukien.vip/wp-content/uploads/2025/07/San-Khau-To-Chuc-Su-Kien-Huong-Dan-Toan-Dien-Tu-A-Z-2025-scaled.png"
    },
    {
      title: "Team Building Sáng Tạo",
      desc: "Tổ chức, trò chơi, âm thanh, quay phim",
      overlay: "Sự Kiện Team Building / 150 nhân viên",
      img: "https://sukien.vip/wp-content/uploads/2025/07/Top-10-Cong-ty-To-chuc-Su-kien-Uy-tin-va-Chuyen-nghiep-Nhat-tai-Ha-Noi-2025-scaled.png"
    },
    {
      title: "Lễ Trao Giải Thưởng",
      desc: "Tổ chức, thiết kế, livestream, huy chương",
      overlay: "Lễ Trao Giải Thưởng / 1000+ khách",
      img: "https://sukien.vip/wp-content/uploads/2025/07/Agency-To-Chuc-Su-Kien-Doi-Tac-Tin-Cay-Kien-Tao-Thanh-Cong-scaled.png"
    }
  ];

  return (
    <section id="du-an" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Dự Án Tiêu Biểu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Những sự kiện ấn tượng mà chúng tôi đã thực hiện thành công
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {items.map((item, i) => (
            <div key={i} className="group rounded-xl overflow-hidden bg-white shadow hover:shadow-xl hover:scale-[1.03] transition-all duration-300 cursor-pointer">
              <div className="relative h-[200px] w-full">
                <Image src={item.img} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" />
                <div className="absolute inset-0 bg-blue-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-base font-semibold text-center px-4">{item.overlay}</span>
                </div>
              </div>
              <div className="p-5">
                <h4 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">{item.title}</h4>
                <p className="text-sm text-gray-600 line-clamp-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="#du-an" className="inline-block bg-[#D4AF37] hover:bg-[#B8962E] text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Xem Toàn Bộ Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
