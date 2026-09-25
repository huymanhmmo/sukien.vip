import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="bg-gradient-to-r from-blue-900 to-slate-900 rounded-xl px-6 py-[60px] text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sẵn Sàng Tổ Chức Sự Kiện?
          </h2>
          <p className="text-white/95 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Liên hệ ngay để nhận tư vấn miễn phí và báo giá chi tiết cho sự kiện của bạn
          </p>
          <Link 
            href="#lien-he"
            className="inline-block bg-[#D4AF37] hover:bg-[#B8962E] text-white font-bold py-4 px-10 rounded-lg transition-colors text-lg shadow-lg"
          >
            Liên Hệ Ngay
          </Link>
        </div>
      </div>
    </section>
  );
}
