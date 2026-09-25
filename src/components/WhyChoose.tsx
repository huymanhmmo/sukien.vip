import Image from 'next/image';

export default function WhyChoose() {
  const points = [
    "Kiến thức sâu rộng về tổ chức sự kiện quy mô lớn",
    "Thiết bị tối tân và cơ sở vật chất hiện đại",
    "Đội ngũ nhân viên chuyên nghiệp, được đào tạo kỹ lưỡng",
    "Khả năng sắp xếp mọi loại sự kiện trong thời gian ngắn",
    "Cam kết chất lượng cao và 100% an toàn",
    "Giá cả hợp lý, minh bạch, không phí ẩn",
    "Hỗ trợ khách hàng 24/7 trước, trong và sau sự kiện",
    "Portfolio phong phú từ các dự án thành công"
  ];

  return (
    <section className="bg-white py-[80px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Tại Sao Your Dreams Là Lựa Chọn Hàng Đầu
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Chúng tôi không phải là một công ty đơn thuần điều phối các nhà cung cấp bên ngoài. Your Dreams sở hữu toàn bộ cơ sở hạ tầng, thiết bị và nhân lực, cho phép chúng tôi kiểm soát mọi khía cạnh của sự kiện bạn.
            </p>
            <ul className="space-y-4">
              {points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 font-bold text-lg">✓</span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl lg:max-w-[600px] ml-auto">
            <Image 
              src="https://sukien.vip/wp-content/uploads/2025/07/Giai-chay-ROX-Living-Happy-Run-2024-scaled.webp"
              alt="Why Choose Us"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 600px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
