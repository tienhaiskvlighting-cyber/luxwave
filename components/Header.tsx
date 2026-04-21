'use client';

import Link from 'next/link';
import { useState } from 'react';

const megaMenuProducts = {
  columns: [
    {
      title: "LED Trong nhà",
      items: [
        { name: "Màn hình LED trong nhà COB P0.9", href: "/products?cat=man-hinh-led-trong-nha-cob-p0.9" },
        { name: "Màn hình LED trong nhà COB P1.25", href: "/products?cat=man-hinh-led-trong-nha-cob-p1.25" },
        { name: "Màn hình LED trong nhà P1.25", href: "/products?cat=man-hinh-led-trong-nha-p1.25" },
        { name: "Màn hình LED trong nhà P1.538", href: "/products?cat=man-hinh-led-trong-nha-p1.538" },
        { name: "Màn hình LED trong nhà COB P1.56", href: "/products?cat=man-hinh-led-trong-nha-cob-p1.56" },
        { name: "Màn hình LED trong nhà P1.56", href: "/products?cat=man-hinh-led-trong-nha-p1.56" },
        { name: "Màn hình LED trong nhà P1.86", href: "/products?cat=man-hinh-led-trong-nha-p1.86" },
        { name: "Màn hình LED trong nhà P2", href: "/products?cat=man-hinh-led-trong-nha-p2" },
        { name: "Màn hình LED trong nhà P2.5", href: "/products?cat=man-hinh-led-trong-nha-p2.5" },
        { name: "Màn hình LED trong nhà P3.076", href: "/products?cat=man-hinh-led-trong-nha-p3.076" },
        { name: "Màn hình LED trong nhà P4", href: "/products?cat=man-hinh-led-trong-nha-p4" },
      ]
    },
    {
      title: "LED Ngoài trời",
      items: [
        { name: "Màn hình LED ngoài trời P2.0", href: "/products?cat=man-hinh-led-ngoai-troi-p2.0" },
        { name: "Màn hình LED ngoài trời P2.5", href: "/products?cat=man-hinh-led-ngoai-troi-p2.5" },
        { name: "Màn hình LED ngoài trời P2.976", href: "/products?cat=man-hinh-led-ngoai-troi-p2.976" },
        { name: "Màn hình LED ngoài trời P3.076", href: "/products?cat=man-hinh-led-ngoai-troi-p3.076" },
        { name: "Màn hình LED ngoài trời P4", href: "/products?cat=man-hinh-led-ngoai-troi-p4" },
        { name: "Màn hình LED ngoài trời P6.66", href: "/products?cat=man-hinh-led-ngoai-troi-p6.66" },
        { name: "Màn hình LED ngoài trời P8", href: "/products?cat=man-hinh-led-ngoai-troi-p8" },
        { name: "Màn hình LED ngoài trời P10", href: "/products?cat=man-hinh-led-ngoai-troi-p10" },
      ]
    },
    {
      title: "LED Trong suốt & Đặc biệt",
      items: [
        { name: "LED trong suốt trong nhà", href: "/products?cat=led-trong-suot-trong-nha" },
        { name: "LED trong suốt ngoài trời", href: "/products?cat=led-trong-suot-ngoai-troi" },
        { name: "LED trong suốt tường kính", href: "/products?cat=led-trong-suot-tuong-kinh" },
        { name: "LED film (dán kính)", href: "/products?cat=led-film" },
        { name: "LED Poster", href: "/products?cat=led-poster" },
        { name: "LED cong / 3D / Sky Fly", href: "/products?cat=led-special" },
        { name: "LED bảng hiệu / tủ trưng bày", href: "/products?cat=led-bang-hieu" },
      ]
    },
    {
      title: "Phụ kiện LED",
      items: [
        { name: "Module LED", href: "/products?cat=module-led" },
        { name: "Cabin LED", href: "/products?cat=cabin-led" },
        { name: "Card điều khiển LED", href: "/products?cat=card-led" },
        { name: "Bộ xử lý hình ảnh", href: "/products?cat=bo-xu-ly-hinh-anh" },
        { name: "Nguồn LED", href: "/products?cat=nguon-led" },
        { name: "Cáp tín hiệu LED", href: "/products?cat=cap-tin-hieu" },
      ]
    },
  ]
};

const megaMenuSolutions = {
  columns: [
    {
      title: "Theo không gian",
      items: [
        { name: "Màn hình LED cho phòng họp", href: "/solutions/led-phong-hop" },
        { name: "Màn hình LED hội trường", href: "/solutions/led-hoi-truong" },
        { name: "Màn hình LED cho trường học", href: "/solutions/giai-phap-truong-hoc" },
        { name: "Màn hình LED cho sân vận động", href: "/solutions/giai-phap-san-van-dong" },
      ]
    },
    {
      title: "Theo ứng dụng",
      items: [
        { name: "Màn hình LED quảng cáo ngoài trời", href: "/solutions/giai-phap-quang-cao" },
        { name: "Màn hình LED ngành bán lẻ (retail)", href: "/solutions/giai-phap-retail" },
        { name: "Màn hình LED Home Cinema", href: "/solutions/giai-phap-home-cinema" },
        { name: "Cho thuê màn hình LED", href: "/solutions/giai-phap-cho-thue" },
      ]
    },
    {
      title: "Dự án tiêu biểu",
      items: [
        { name: "Dự án trong nhà", href: "/projects?cat=trong-nha" },
        { name: "Dự án ngoài trời", href: "/projects?cat=ngoai-troi" },
        { name: "Xem tất cả", href: "/projects" },
      ]
    },
    {
      title: "Dịch vụ",
      items: [
        { name: "Dịch vụ lắp đặt", href: "/solutions/dich-vu-lap-dat" },
        { name: "Bảo trì màn hình LED cố định", href: "/solutions/bao-tri-led-co-dinh" },
        { name: "Bảo trì màn hình LED ngoài trời", href: "/solutions/bao-tri-led-ngoai-troi" },
        { name: "Bảo trì màn hình LED cho thuê (rental)", href: "/solutions/bao-tri-led-cho-thue" },
        { name: "Báo giá", href: "/lien-he" },
        { name: "Liên hệ", href: "/lien-he" },
      ]
    },
  ]
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);
  const [solutionsMenuOpen, setSolutionsMenuOpen] = useState(false);

  const renderMegaMenu = (data: typeof megaMenuProducts) => (
    <div className="absolute top-full left-0 right-0 bg-white shadow-xl border-t z-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-4 gap-8">
          {data.columns.map((col, i) => (
            <div key={i}>
              <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.items.map((item, j) => (
                  <li key={j}>
                    <Link 
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-blue-600 hover:pl-1 transition-all"
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
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-gray-900 text-white text-xs py-2">
        <div className="container mx-auto px-4 flex justify-between">
          <div className="flex gap-4">
            <span>📞 <a href="tel:0862301919" className="hover:text-blue-300">0862.30.1919</a></span>
            <span>✉️ <a href="mailto:info.luxwave@gmail.com" className="hover:text-blue-300">info.luxwave@gmail.com</a></span>
          </div>
          <div className="hidden md:flex gap-4">
            <Link href="/kien-thuc" className="hover:text-blue-300">Kiến thức LED</Link>
            <Link href="/tai-xuong" className="hover:text-blue-300">Tải xuống</Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <img src="/logo-luxwave.png" alt="Luxwave" className="h-10" />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-blue-600">Trang chủ</Link>
            
            <div 
              className="relative"
              onMouseEnter={() => setProductsMenuOpen(true)}
              onMouseLeave={() => setProductsMenuOpen(false)}
            >
              <button className="text-sm font-medium hover:text-blue-600 flex items-center gap-1">
                Sản phẩm ▾
              </button>
              {productsMenuOpen && renderMegaMenu(megaMenuProducts)}
            </div>

            <div 
              className="relative"
              onMouseEnter={() => setSolutionsMenuOpen(true)}
              onMouseLeave={() => setSolutionsMenuOpen(false)}
            >
              <button className="text-sm font-medium hover:text-blue-600 flex items-center gap-1">
                Giải pháp ▾
              </button>
              {solutionsMenuOpen && renderMegaMenu(megaMenuSolutions)}
            </div>

            <Link href="/projects" className="text-sm font-medium hover:text-blue-600">Dự án</Link>
            <Link href="/thuong-hieu" className="text-sm font-medium hover:text-blue-600">Thương hiệu</Link>
            <Link href="/kien-thuc" className="text-sm font-medium hover:text-blue-600">Kiến thức</Link>
            <Link href="/about" className="text-sm font-medium hover:text-blue-600">Giới thiệu</Link>
            <Link href="/search" className="text-sm font-medium hover:text-blue-600">🔍</Link>
            <Link 
              href="/lien-he" 
              className="bg-red-600 text-white text-sm px-5 py-2 rounded hover:bg-red-700 transition font-semibold"
            >
              Báo giá
            </Link>
          </nav>

          <button 
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="lg:hidden border-t py-4 bg-white">
          <div className="container mx-auto px-4 flex flex-col gap-3">
            <Link href="/" className="py-2">Trang chủ</Link>
            <Link href="/products" className="py-2">Sản phẩm</Link>
            <Link href="/solutions" className="py-2">Giải pháp</Link>
            <Link href="/projects" className="py-2">Dự án</Link>
            <Link href="/thuong-hieu" className="py-2">Thương hiệu</Link>
            <Link href="/kien-thuc" className="py-2">Kiến thức</Link>
            <Link href="/search" className="py-2">🔍 Tìm kiếm</Link>
            <Link href="/lien-he" className="bg-red-600 text-white py-2 px-4 rounded text-center font-semibold">
              Yêu cầu báo giá
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
