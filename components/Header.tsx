'use client';

import Link from 'next/link';
import { useState } from 'react';

const megaMenuProducts = {
  columns: [
    {
      title: "LED Trong nhà",
      items: [
        { name: "COB P0.9 - P1.25", href: "/products?category=cob-indoor" },
        { name: "P1.25 - P1.538", href: "/products?category=p1-25-indoor" },
        { name: "P1.56 - P1.86", href: "/products?category=p1-56-indoor" },
        { name: "P2 - P2.5", href: "/products?category=p2-indoor" },
        { name: "P3 - P4", href: "/products?category=p3-indoor" },
      ]
    },
    {
      title: "LED Ngoài trời",
      items: [
        { name: "P2 - P2.5", href: "/products?category=p2-outdoor" },
        { name: "P3 - P4", href: "/products?category=p3-outdoor" },
        { name: "P6 - P8", href: "/products?category=p6-outdoor" },
        { name: "P10", href: "/products?category=p10-outdoor" },
      ]
    },
    {
      title: "LED Đặc biệt",
      items: [
        { name: "LED trong suốt", href: "/products?category=transparent" },
        { name: "LED Poster", href: "/products?category=poster" },
        { name: "LED Film", href: "/products?category=film" },
        { name: "LED cong / 3D", href: "/products?category=curved" },
      ]
    },
    {
      title: "Phụ kiện",
      items: [
        { name: "Module LED", href: "/products?category=module" },
        { name: "Cabin LED", href: "/products?category=cabin" },
        { name: "Card điều khiển", href: "/products?category=controller" },
        { name: "Bộ xử lý hình", href: "/products?category=processor" },
      ]
    },
  ]
};

const megaMenuSolutions = {
  columns: [
    {
      title: "Theo không gian",
      items: [
        { name: "Phòng họp", href: "/solutions/led-phong-hop" },
        { name: "Hội trường", href: "/solutions/led-hoi-truong" },
        { name: "Trường học", href: "/solutions/truong-hoc" },
        { name: "Sân vận động", href: "/solutions/san-van-dong" },
      ]
    },
    {
      title: "Theo ứng dụng",
      items: [
        { name: "Quảng cáo ngoài trời", href: "/solutions/quang-cao" },
        { name: "Retail", href: "/solutions/retail" },
        { name: "Home Cinema", href: "/solutions/home-cinema" },
        { name: "Cho thuê", href: "/solutions/cho-thue" },
      ]
    },
    {
      title: "Dịch vụ",
      items: [
        { name: "Lắp đặt", href: "/solutions/lap-dat" },
        { name: "Bảo trì cố định", href: "/solutions/bao-tri-co-dinh" },
        { name: "Bảo trì rental", href: "/solutions/bao-tri-rental" },
        { name: "Báo giá", href: "/contact" },
      ]
    },
  ]
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);
  const [solutionsMenuOpen, setSolutionsMenuOpen] = useState(false);

  const renderMegaMenu = (data: typeof megaMenuProducts) => (
    <div className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 z-50">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-4 gap-8">
          {data.columns.map((col, i) => (
            <div key={i}>
              <h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.items.map((item, j) => (
                  <li key={j}>
                    <Link 
                      href={item.href}
                      className="text-sm text-slate-500 hover:text-amber-600 hover:pl-1 transition-all duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100">
      {/* Top bar - slim */}
      <div className="bg-slate-900 text-white text-xs">
        <div className="container mx-auto px-4 md:px-8 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:0862301919" className="flex items-center gap-1.5 hover:text-amber-400 transition">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              0862.30.1919
            </a>
            <a href="mailto:info.luxwave@gmail.com" className="hidden md:flex items-center gap-1.5 hover:text-amber-400 transition">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info.luxwave@gmail.com
            </a>
          </div>
          <div className="hidden md:flex items-center gap-6 text-slate-400">
            <Link href="/kien-thuc" className="hover:text-white transition">Kiến thức</Link>
            <Link href="/tai-xuong" className="hover:text-white transition">Tải xuống</Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center">
            <img src="/logo-luxwave.png" alt="Luxwave" className="h-9 md:h-11" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-slate-700 hover:text-amber-600 transition">
              Trang chủ
            </Link>
            
            <div 
              className="relative"
              onMouseEnter={() => setProductsMenuOpen(true)}
              onMouseLeave={() => setProductsMenuOpen(false)}
            >
              <button className="text-sm font-medium text-slate-700 hover:text-amber-600 transition flex items-center gap-1">
                Sản phẩm
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {productsMenuOpen && renderMegaMenu(megaMenuProducts)}
            </div>

            <div 
              className="relative"
              onMouseEnter={() => setSolutionsMenuOpen(true)}
              onMouseLeave={() => setSolutionsMenuOpen(false)}
            >
              <button className="text-sm font-medium text-slate-700 hover:text-amber-600 transition flex items-center gap-1">
                Giải pháp
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {solutionsMenuOpen && renderMegaMenu(megaMenuSolutions)}
            </div>

            <Link href="/projects" className="text-sm font-medium text-slate-700 hover:text-amber-600 transition">
              Dự án
            </Link>
            <Link href="/thuong-hieu" className="text-sm font-medium text-slate-700 hover:text-amber-600 transition">
              Thương hiệu
            </Link>
            <Link href="/about" className="text-sm font-medium text-slate-700 hover:text-amber-600 transition">
              Giới thiệu
            </Link>
            
            <Link 
              href="/contact" 
              className="bg-amber-500 text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-amber-600 transition shadow-lg shadow-amber-500/20"
            >
              Báo giá
            </Link>
          </nav>

          <button 
            className="lg:hidden p-2 text-slate-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="lg:hidden border-t bg-white py-4">
          <div className="container mx-auto px-4 flex flex-col gap-1">
            <Link href="/" className="py-3 text-slate-700 font-medium">Trang chủ</Link>
            <Link href="/products" className="py-3 text-slate-700 font-medium">Sản phẩm</Link>
            <Link href="/solutions" className="py-3 text-slate-700 font-medium">Giải pháp</Link>
            <Link href="/projects" className="py-3 text-slate-700 font-medium">Dự án</Link>
            <Link href="/thuong-hieu" className="py-3 text-slate-700 font-medium">Thương hiệu</Link>
            <Link href="/about" className="py-3 text-slate-700 font-medium">Giới thiệu</Link>
            <Link href="/contact" className="bg-amber-500 text-white py-3 px-4 rounded-lg text-center font-semibold mt-2">
              Yêu cầu báo giá
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
