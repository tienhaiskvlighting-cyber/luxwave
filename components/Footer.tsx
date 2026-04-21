import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">LUXWAVE</h3>
            <p className="text-gray-400 text-sm mb-4">
              Giải pháp LED hàng đầu Việt Nam. Chuyên cung cấp và thi công màn hình LED, đèn chiếu logo GOBO, LED trang trí.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/></svg>
              </a>
            </div>
          </div>

          {/* Sản phẩm */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wide">Sản phẩm</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/products?category=module-led" className="hover:text-white transition">Module LED</Link></li>
              <li><Link href="/products?category=cabin-led" className="hover:text-white transition">Cabin LED</Link></li>
              <li><Link href="/products?category=man-hinh-led" className="hover:text-white transition">Màn hình LED</Link></li>
              <li><Link href="/products?category=den-gobo" className="hover:text-white transition">Đèn GOBO</Link></li>
              <li><Link href="/products?category=den-san-khau" className="hover:text-white transition">Đèn sân khấu</Link></li>
              <li><Link href="/products?category=led-trong-suot" className="hover:text-white transition">LED trong suốt</Link></li>
              <li><Link href="/products?category=phu-kien" className="hover:text-white transition">Phụ kiện LED</Link></li>
            </ul>
          </div>

          {/* Giải pháp */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wide">Giải pháp</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/solutions/led-phong-hop" className="hover:text-white transition">LED phòng họp</Link></li>
              <li><Link href="/solutions/led-hoi-truong" className="hover:text-white transition">LED hội trường</Link></li>
              <li><Link href="/solutions/giai-phap-truong-hoc" className="hover:text-white transition">LED trường học</Link></li>
              <li><Link href="/solutions/giai-phap-quang-cao" className="hover:text-white transition">LED quảng cáo</Link></li>
              <li><Link href="/solutions/giai-phap-retail" className="hover:text-white transition">LED retail</Link></li>
              <li><Link href="/solutions/giai-phap-home-cinema" className="hover:text-white transition">LED Home Cinema</Link></li>
              <li><Link href="/solutions/bao-tri-led" className="hover:text-white transition">Bảo trì LED</Link></li>
            </ul>
          </div>

          {/* Liên hệ */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wide">Liên hệ</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Phố biển 16-08, Nghĩa Trụ,<br/>Hưng Yên</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:0862301919" className="hover:text-white transition">0862.30.1919</a>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:info.luxwave@gmail.com" className="hover:text-white transition">info.luxwave@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <span>🕐</span>
                <span>Thứ 2 - Thứ 7: 8:00 - 17:30</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© 2026 Luxwave. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/chinh-sach-bao-mat" className="hover:text-white transition">Chính sách bảo mật</Link>
              <Link href="/dieu-khoan-su-dung" className="hover:text-white transition">Điều khoản sử dụng</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
