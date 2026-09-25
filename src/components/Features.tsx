export default function Features() {
  const features = [
    {
      icon: "🎯",
      title: "Dịch Vụ Trọn Gói",
      desc: "Từ lên ý tưởng, thiết kế, tổ chức đến truyền thông – chúng tôi lo toàn bộ, bạn chỉ cần tập trung vào sự kiện thành công."
    },
    {
      icon: "⚙️",
      title: "Thiết Bị Hiện Đại",
      desc: "Sân khấu 4K, âm thanh cao cấp, màn LED, livestream chuyên nghiệp – toàn bộ thiết bị tối tân được quản lý bởi chúng tôi."
    },
    {
      icon: "👥",
      title: "Đội Ngũ Chuyên Gia",
      desc: "Hơn 50 nhân viên dày dạn kinh nghiệm: MC, nhạc sĩ, nhân viên kỹ thuật, an ninh, tiếp tân – sẵn sàng phục vụ."
    },
    {
      icon: "💼",
      title: "Kinh Nghiệm Đa Dạng",
      desc: "Từ sự kiện chính trị, doanh nghiệp, thể thao, giáo dục đến truyền thông – chúng tôi tổ chức mọi loại sự kiện."
    },
    {
      icon: "✅",
      title: "100% An Toàn & Chuyên Nghiệp",
      desc: "Quy trình chuẩn, bảo hiểm sự kiện, an ninh 24/7, quản lý rủi ro – mọi chi tiết được chăm sóc kỹ lưỡng."
    },
    {
      icon: "⏱️",
      title: "Thi Hành Nhanh Chóng",
      desc: "Có thể setup sự kiện lớn trong 48 giờ, quay phim 4K trong 24 giờ – tốc độ và chất lượng đi kèm."
    }
  ];

  return (
    <section id="gioi-thieu" className="bg-light-bg bg-gray-50 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a5c] mb-4">Tại Sao Chọn Your Dreams</h2>
          <p className="text-lg text-gray-600">Hơn 5 năm kinh nghiệm tổ chức sự kiện – Sự lựa chọn hàng đầu của các doanh nghiệp</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md border-t-4 border-[#d4af37] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-[#1a3a5c] mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
