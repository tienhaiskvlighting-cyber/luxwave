'use client';

import { useState, useEffect } from 'react';

const banners = [
  {
    image: '/images/banner-1.jpg',
    title: 'Module LED BOE MLED',
    description: 'Công nghệ COB tiên tiến, hình ảnh sắc nét',
    link: '/products',
    cta: 'Xem chi tiết'
  },
  {
    image: '/images/banner-2.jpg', 
    title: 'Giải Pháp LED Chuyên Nghiệp',
    description: 'Từ module LED đến cabin LED COB cho mọi không gian',
    link: '/products',
    cta: 'Xem chi tiết'
  },
  {
    image: '/images/banner-3.jpg',
    title: 'Dịch Vụ Thi Công & Bảo Trì',
    description: 'Đội ngũ kỹ thuật chuyên nghiệp, hỗ trợ 24/7',
    link: '/contact',
    cta: 'Liên hệ ngay'
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  const next = () => setCurrent((prev) => (prev + 1) % banners.length);

  return (
    <section className="relative h-[450px] overflow-hidden">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={banner.image}
            alt={banner.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-xl text-white">
                <h2 className="text-4xl font-bold mb-4">{banner.title}</h2>
                <p className="text-xl mb-6 text-gray-200">{banner.description}</p>
                <a
                  href={banner.link}
                  className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
                >
                  {banner.cta}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white text-xl transition"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white text-xl transition"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === current ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
