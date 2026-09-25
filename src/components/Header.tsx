'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    'Tổ chức sự kiện thể thao',
    'Tổ chức sự kiện doanh nghiệp',
    'Dạy bơi chuyên nghiệp',
    'Cho thuê thiết bị sự kiện',
    'Truyền thông & quay phim sự kiện',
    'Thiết kế & in ấn sự kiện',
    'Marketing Sự Kiện'
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-border-color shadow-sm py-2' : 'bg-white py-4'}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="https://sukien.vip/wp-content/uploads/2025/07/Your-dream-Logo-ngang-1-scaled.webp" 
              alt="Your Dreams - Sự Kiện Vip" 
              width={200} 
              height={64} 
              className="h-10 md:h-12 lg:h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-text-dark hover:text-primary font-medium transition-colors">Trang chủ</Link>
            <Link href="#gioi-thieu" className="text-text-dark hover:text-primary font-medium transition-colors">Giới thiệu</Link>
            <Link href="#du-an" className="text-text-dark hover:text-primary font-medium transition-colors">Dự án</Link>
            
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link href="#dich-vu" className="text-text-dark hover:text-primary font-medium transition-colors flex items-center gap-1">
                Dịch vụ
                <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              
              <div className={`absolute top-full left-0 mt-2 w-72 bg-white rounded-md shadow-lg border border-border-color overflow-hidden transition-all duration-300 origin-top ${isServicesOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                <div className="py-2">
                  {services.map((service, index) => (
                    <Link key={index} href={`#dich-vu`} className="block px-4 py-2 text-sm text-text-dark hover:bg-light-bg hover:text-primary transition-colors">
                      {service}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <Link href="#blog" className="text-text-dark hover:text-primary font-medium transition-colors">Blog</Link>
          </nav>

          <div className="hidden lg:block">
            <Link href="#lien-he" className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-md font-medium transition-colors">
              Liên Hệ Ngay
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-text-dark p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white border-b border-border-color shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-4 flex flex-col gap-4">
          <Link href="/" className="text-text-dark hover:text-primary font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Trang chủ</Link>
          <Link href="#gioi-thieu" className="text-text-dark hover:text-primary font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Giới thiệu</Link>
          <Link href="#du-an" className="text-text-dark hover:text-primary font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Dự án</Link>
          
          <div>
            <button 
              className="flex items-center justify-between w-full text-text-dark hover:text-primary font-medium py-2"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Dịch vụ
              <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`pl-4 flex flex-col gap-2 overflow-hidden transition-all ${isServicesOpen ? 'max-h-[500px] py-2' : 'max-h-0'}`}>
              {services.map((service, index) => (
                <Link key={index} href={`#dich-vu`} className="text-sm text-text-light hover:text-primary py-1" onClick={() => setIsMobileMenuOpen(false)}>
                  {service}
                </Link>
              ))}
            </div>
          </div>
          
          <Link href="#blog" className="text-text-dark hover:text-primary font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
          
          <Link href="#lien-he" className="bg-primary hover:bg-primary-dark text-white text-center px-6 py-3 rounded-md font-medium mt-2" onClick={() => setIsMobileMenuOpen(false)}>
            Liên Hệ Ngay
          </Link>
        </div>
      </div>
    </header>
  );
}
