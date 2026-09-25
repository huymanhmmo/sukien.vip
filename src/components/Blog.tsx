import Image from 'next/image';
import Link from 'next/link';

export default function Blog() {
  const posts = [
    {
      cat: "Kiến Thức",
      title: "10 Sai Lầm Phổ Biến Khi Tổ Chức Sự Kiện",
      excerpt: "Tìm hiểu những sai lầm mà hầu hết người tổ chức sự kiện mới thường gặp phải và cách khắc phục chúng...",
      date: "15 tháng 11, 2024",
      img: "https://sukien.vip/wp-content/uploads/2025/07/Cho-Thue-Thiet-Bi-Su-Kien-Bao-Gia-Danh-Muc-Dich-Vu-Chuyen-Nghiep-2025-scaled.png"
    },
    {
      cat: "Xu Hướng 2025",
      title: "Xu Hướng Tổ Chức Sự Kiện Năm 2025",
      excerpt: "Livestream 4K, metaverse event, sustainability – những xu hướng mà doanh nghiệp không thể bỏ qua...",
      date: "12 tháng 11, 2024",
      img: "https://sukien.vip/wp-content/uploads/2025/07/Tuyen-Dung-Nhan-Vien-To-Chuc-Su-Kien-Huong-Dan-Chi-Tiet-Cho-Nguoi-Tim-Viec-scaled.png"
    },
    {
      cat: "Tips & Tuyệt Chiêu",
      title: "Cách Tạo Ấn Tượng Tại Sự Kiện Doanh Nghiệp",
      excerpt: "Bí quyết tạo điểm nhấn ấn tượng, kéo hút khách mời và tăng giá trị PR cho sự kiện của bạn...",
      date: "10 tháng 11, 2024",
      img: "https://sukien.vip/wp-content/uploads/2025/07/Cac-Vi-Tri-Trong-To-Chuc-Su-Kien-Huong-Dan-Chi-Tiet-Tu-A-Z-2025-scaled.png"
    },
    {
      cat: "Case Study",
      title: "Phân Tích: Marathon Hà Nội 2025 Thành Công",
      excerpt: "Cách Your Dreams tổ chức thành công sự kiện marathon với 5000 vận động viên và hơn 1M livestream...",
      date: "08 tháng 11, 2024",
      img: "https://sukien.vip/wp-content/uploads/2025/07/Cong-Ty-To-Chuc-Su-Kien-Chuyen-Nghiep-Huong-Dan-Toan-Dien-Tu-A-Z-scaled.png"
    }
  ];

  return (
    <section id="blog" className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tin Tức & Kiến Thức Sự Kiện</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Những bài viết hữu ích về tổ chức sự kiện chuyên nghiệp
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, i) => (
            <div key={i} className="flex flex-col rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="relative h-[200px] w-full shrink-0">
                <Image src={post.img} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" />
              </div>
              <div className="p-6 flex flex-col grow">
                <span className="inline-block px-3 py-1 bg-[#D4AF37] text-white text-xs font-semibold rounded-full w-fit mb-4">
                  {post.cat}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500">{post.date}</span>
                  <Link href="#" className="text-sm font-semibold text-blue-900 hover:text-[#D4AF37] transition-colors">
                    Đọc Thêm →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
