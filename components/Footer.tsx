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
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white">YouTube</a>
              <a href="#" className="text-gray-400 hover:text-white">Zalo</a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold mb-4">Sản phẩm</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/san-pham/man-hinh-led" className="hover:text-white">Màn hình LED</Link></li>
              <li><Link href="/san-pham/den-gobo" className="hover:text-white">Đèn GOBO</Link></li>
              <li><Link href="/san-pham/led-decor" className="hover:text-white">LED Decor</Link></li>
              <li><Link href="/san-pham/module" className="hover:text-white">Module & Cabin</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-bold mb-4">Giải pháp</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/giai-phap/shop" className="hover:text-white">Shop & Cửa hàng</Link></li>
              <li><Link href="/giai-phap/hotel" className="hover:text-white">Khách sạn & Resort</Link></li>
              <li><Link href="/giai-phap/nha-xuong" className="hover:text-white">Nhà xưởng</Link></li>
              <li><Link href="/giai-phap/su-kien" className="hover:text-white">Sự kiện</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Liên hệ</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📍 Phố biển 16-08, Nghĩa Trụ, Hưng Yên</li>
              <li>📞 <a href="tel:0862301919" className="hover:text-white">0862.30.1919</a></li>
              <li>✉️ <a href="mailto:info.luxwave@gmail.com" className="hover:text-white">info.luxwave@gmail.com</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 Luxwave. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/chinh-sach-bao-mat" className="hover:text-white">Chính sách bảo mật</Link>
            <Link href="/dieu-khoan-su-dung" className="hover:text-white">Điều khoản sử dụng</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
