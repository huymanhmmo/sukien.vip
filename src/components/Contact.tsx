'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    type: '',
    date: '',
    guests: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Yêu cầu tư vấn của bạn đã được gửi. Chúng tôi sẽ liên hệ lại sớm nhất!');
  };

  return (
    <section id="lien-he" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Liên Hệ Tư Vấn Miễn Phí</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hãy liên hệ với chúng tôi để nhận tư vấn chi tiết về dịch vụ tổ chức sự kiện của bạn
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span>📝</span> Gửi Yêu Cầu Tư Vấn
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Họ và Tên</label>
                  <input type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:border-[#D4AF37] focus:ring focus:ring-[#D4AF37]/10 outline-none transition-all" onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Số Điện Thoại</label>
                  <input type="tel" required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:border-[#D4AF37] focus:ring focus:ring-[#D4AF37]/10 outline-none transition-all" onChange={e => setFormData({...formData, phone: e.target.value})} />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:border-[#D4AF37] focus:ring focus:ring-[#D4AF37]/10 outline-none transition-all" onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Công Ty / Tổ Chức</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:border-[#D4AF37] focus:ring focus:ring-[#D4AF37]/10 outline-none transition-all" onChange={e => setFormData({...formData, company: e.target.value})} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Loại Sự Kiện</label>
                  <select required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:border-[#D4AF37] focus:ring focus:ring-[#D4AF37]/10 outline-none transition-all bg-white" onChange={e => setFormData({...formData, type: e.target.value})}>
                    <option value="">Chọn loại sự kiện</option>
                    <option value="Sự Kiện Thể Thao">Sự Kiện Thể Thao</option>
                    <option value="Sự Kiện Doanh Nghiệp">Sự Kiện Doanh Nghiệp</option>
                    <option value="Hội Thảo / Hội Nghị">Hội Thảo / Hội Nghị</option>
                    <option value="Gala Dinner">Gala Dinner</option>
                    <option value="Team Building">Team Building</option>
                    <option value="Ra Mắt Sản Phẩm">Ra Mắt Sản Phẩm</option>
                    <option value="Sự Kiện Văn Hóa">Sự Kiện Văn Hóa</option>
                    <option value="Sự Kiện Giáo Dục">Sự Kiện Giáo Dục</option>
                    <option value="Khác">Khác</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Thời Gian Sự Kiện</label>
                  <input type="date" required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:border-[#D4AF37] focus:ring focus:ring-[#D4AF37]/10 outline-none transition-all" onChange={e => setFormData({...formData, date: e.target.value})} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Số Lượng Khách Mời Dự Kiến</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:border-[#D4AF37] focus:ring focus:ring-[#D4AF37]/10 outline-none transition-all" onChange={e => setFormData({...formData, guests: e.target.value})} />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mô Tả / Yêu Cầu Chi Tiết</label>
                <textarea rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-[#D4AF37] focus:ring focus:ring-[#D4AF37]/10 outline-none transition-all resize-none" onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
              </div>

              <button type="submit" className="w-full bg-[#D4AF37] hover:bg-[#B8962E] text-white font-bold py-3.5 px-6 rounded-lg transition-colors text-lg">
                Gửi Yêu Cầu Tư Vấn
              </button>
            </form>
          </div>

          <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-2xl shadow-lg p-6 sm:p-8 text-white h-fit">
            <h3 className="text-2xl font-bold text-[#D4AF37] mb-8 flex items-center gap-2">
              <span>📞</span> Thông Tin Liên Hệ
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start pb-6 border-b border-[#D4AF37]/30">
                <span className="text-2xl mr-4 mt-0.5">☎️</span>
                <div>
                  <h4 className="font-semibold text-gray-300 mb-1 text-sm uppercase tracking-wider">Điện Thoại</h4>
                  <p className="text-xl font-medium">+84 (912) 345 678</p>
                </div>
              </div>
              
              <div className="flex items-start pb-6 border-b border-[#D4AF37]/30">
                <span className="text-2xl mr-4 mt-0.5">✉️</span>
                <div>
                  <h4 className="font-semibold text-gray-300 mb-1 text-sm uppercase tracking-wider">Email</h4>
                  <p className="text-lg">info@sukien.vip</p>
                </div>
              </div>
              
              <div className="flex items-start pb-6 border-b border-[#D4AF37]/30">
                <span className="text-2xl mr-4 mt-0.5">📍</span>
                <div>
                  <h4 className="font-semibold text-gray-300 mb-1 text-sm uppercase tracking-wider">Địa Chỉ</h4>
                  <p className="text-lg">Phù Đổng, Hanoi, Vietnam</p>
                </div>
              </div>
              
              <div className="flex items-start pb-6 border-b border-[#D4AF37]/30">
                <span className="text-2xl mr-4 mt-0.5">💬</span>
                <div>
                  <h4 className="font-semibold text-gray-300 mb-2 text-sm uppercase tracking-wider">Mạng Xã Hội</h4>
                  <div className="flex space-x-4">
                    <Link href="#" className="text-white hover:text-[#D4AF37] transition-colors font-medium">Facebook</Link>
                    <span className="text-gray-500">|</span>
                    <Link href="#" className="text-white hover:text-[#D4AF37] transition-colors font-medium">Instagram</Link>
                    <span className="text-gray-500">|</span>
                    <Link href="#" className="text-white hover:text-[#D4AF37] transition-colors font-medium">TikTok</Link>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <h4 className="font-semibold text-[#D4AF37] mb-3 text-lg">Giờ Làm Việc</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-gray-200">
                    <span>Thứ 2 - Thứ 7:</span>
                    <span className="font-medium">08:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-200">
                    <span>Chủ Nhật:</span>
                    <span className="font-medium">08:00 - 20:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
