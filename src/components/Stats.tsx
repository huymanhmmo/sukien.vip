'use client';

import { useEffect, useRef, useState } from 'react';

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { num: 50, suffix: '+', label: 'Sự Kiện Thành Công' },
    { num: 200, suffix: '+', label: 'Khách Hàng Hài Lòng' },
    { num: 5, suffix: '+', label: 'Năm Kinh Nghiệm' },
    { num: 50, suffix: '+', label: 'Nhân Viên Chuyên Gia' }
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-r from-[#1a3a5c] to-[#0f2340]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-[#d4af37] mb-2 flex justify-center items-center">
                <Counter end={stat.num} isVisible={isVisible} />
                <span>{stat.suffix}</span>
              </div>
              <p className="text-white font-medium text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ end, isVisible }: { end: number; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16); // ~60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, isVisible]);

  return <span>{count}</span>;
}
