import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-[#1a3a5c] via-[#0f2340] to-[#0a1a2e] overflow-hidden py-16 flex items-center">
      {/* Floating circle decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#d4af37]/20 animate-float pointer-events-none blur-xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-[#d4af37]/20 animate-float pointer-events-none blur-xl" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side text */}
          <div className="text-center lg:text-left text-white space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Tổ Chức Sự Kiện <span className="text-[#d4af37]">Chuyên Nghiệp</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
              Your Dreams Sự Kiện Vip – Từ sự kiện thể thao quy mô lớn đến gala dinner sang trọng, chúng tôi là đối tác đáng tin cậy của hàng trăm doanh nghiệp hàng đầu Hà Nội.
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-2xl mx-auto lg:mx-0">
              {['Thiết bị 4K hiện đại', '50+ nhân viên chuyên gia', '50+ sự kiện thành công', '200+ khách hàng hài lòng'].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Link href="#lien-he" className="w-full sm:w-auto bg-[#d4af37] hover:bg-[#b8952b] text-white font-semibold py-3 px-8 rounded-lg transition duration-300 text-center shadow-lg shadow-[#d4af37]/30">
                Tư Vấn Miễn Phí
              </Link>
              <Link href="#dich-vu" className="w-full sm:w-auto border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300 text-center">
                Xem Danh Sách Dịch Vụ
              </Link>
            </div>
          </div>

          {/* Right side image */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
              <Image
                src="https://sukien.vip/wp-content/uploads/2025/07/Giai-chay-ROX-Living-Happy-Run-2024-scaled.webp"
                alt="Your Dreams Sự Kiện Vip"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
