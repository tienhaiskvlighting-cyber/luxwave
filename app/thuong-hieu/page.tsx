import Link from 'next/link';

export const metadata = {
  title: 'Thương Hiệu LED Hàng Đầu | Phân Phối Chính Hãng | Luxwave',
  description: 'Luxwave là đại lý phân phối chính hãng các thương hiệu LED hàng đầu: Novastar, BOE MLED, MUXWAVE, GLOSHINE, PixelHue. Cam kết 100% chính hãng, bảo hành 24 tháng.',
};

const brands = [
  {
    id: 'novastar',
    name: 'Novastar',
    slug: 'novastar',
    origin: '🇨🇳 Trung Quốc',
    category: 'Bộ xử lý hình ảnh & Card LED',
    description: 'Thương hiệu hàng đầu thế giới về bộ xử lý hình ảnh LED, card điều khiển. Được sử dụng trong hầu hết các dự án LED chuyên nghiệp.',
    highlights: ['Card LED đầy đủ dòng', 'Bộ xử lý hình ảnh 4K', 'Hệ thống điều khiển cloud'],
    color: '#0066CC',
  },
  {
    id: 'boe-mled',
    name: 'BOE MLED',
    slug: 'boe-mled',
    origin: '🇨🇳 Trung Quốc',
    category: 'Module LED & Cabin LED',
    description: 'Tập đoàn BOE là nhà sản xuất màn hình lớn thế giới. Dòng MLED chuyên về module LED COB chất lượng cao.',
    highlights: ['Module COB độ bền cao', 'Cabin LED chuẩn', 'Công nghệ GOB chống nước'],
    color: '#E31937',
  },
  {
    id: 'muxwave',
    name: 'MUXWAVE',
    slug: 'muxwave',
    origin: '🇨🇳 Trung Quốc',
    category: 'Màn hình LED trong suốt',
    description: 'Chuyên gia về màn hình LED trong suốt cho cửa hàng, trung tâm thương mại, showroom.',
    highlights: ['LED trong suốt độ nét cao', 'Cài đặt dễ dàng', 'Tùy chỉnh kích thước'],
    color: '#00A651',
  },
  {
    id: 'gloshine',
    name: 'GLOSHINE',
    slug: 'gloshine',
    origin: '🇨🇳 Trung Quốc',
    category: 'Màn hình LED Indoor/Outdoor',
    description: 'Nhà sản xuất màn hình LED chuyên nghiệp cho cả trong nhà và ngoài trời, với nhiều dòng sản phẩm đa dạng.',
    highlights: ['LED Indoor P1.8-P3', 'LED Outdoor P4-P10', 'Độ sáng cao'],
    color: '#FF6600',
  },
  {
    id: 'pixelhue',
    name: 'PixelHue',
    slug: 'pixelhue',
    origin: '🇨🇳 Trung Quốc',
    category: 'Bộ xử lý hình ảnh LED',
    description: 'Giải pháp xử lý hình ảnh LED chuyên nghiệp, thay thế nhập khẩu với giá thành tốt.',
    highlights: ['Xử lý hình ảnh thời gian thực', 'Tương thích nhiều card LED', 'Giá thành tốt'],
    color: '#9B59B6',
  },
  {
    id: 'g-energy',
    name: 'G-Energy',
    slug: 'g-energy',
    origin: '🇨🇳 Trung Quốc',
    category: 'Nguồn LED',
    description: 'Nhà sản xuất nguồn LED chuyên dụng cho màn hình LED, ổn định và bền bỉ.',
    highlights: ['Nguồn 5V/40A', 'Chống nhiễu', 'Bảo vệ quá tải'],
    color: '#2ECC71',
  },
  {
    id: 'ledman',
    name: 'Ledman',
    slug: 'ledman',
    origin: '🇨🇳 Trung Quốc',
    category: 'Module LED & Màn hình',
    description: 'Thương hiệu LED lâu năm, chuyên về module LED và màn hình LED cho sân khấu, sự kiện.',
    highlights: ['Module LED SMD/DIP', 'LED sân khấu', 'Cho thuê LED'],
    color: '#3498DB',
  },
  {
    id: 'filmbase',
    name: 'FILMBASE',
    slug: 'filmbase',
    origin: '🇨🇳 Trung Quốc',
    category: 'LED Film & Trong suốt',
    description: 'Chuyên về LED film dán kính, màn hình LED trong suốt siêu mỏng.',
    highlights: ['LED Film siêu mỏng', 'Dán kính không khung', 'Ứng dụng retail'],
    color: '#1ABC9C',
  },
  {
    id: 'djpower',
    name: 'DJPOWER',
    slug: 'djpower',
    origin: '🇨🇳 Trung Quốc',
    category: 'Thiết bị sân khấu',
    description: 'Chuyên sản xuất máy tạo khói, máy phun CO2, thiết bị hiệu ứng sân khấu.',
    highlights: ['Máy tạo khói', 'Máy phun CO2', 'Thiết bị hiệu ứng'],
    color: '#E74C3C',
  },
  {
    id: 'magnimage',
    name: 'MAGNIMAGE',
    slug: 'magnimage',
    origin: '🇨🇳 Trung Quốc',
    category: 'Bộ xử lý hình ảnh',
    description: 'Giải pháp xử lý hình ảnh LED chuyên nghiệp cho màn hình lớn.',
    highlights: ['Xử lý video 4K', 'Điều khiển đa màn hình', 'LED wall controller'],
    color: '#F39C12',
  },
];

export default function BrandsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Thương hiệu đối tác</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Luxwave tự hào là đại lý phân phối chính hãng các thương hiệu LED hàng đầu thế giới tại Việt Nam.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold">11</div>
              <div className="text-blue-200 text-sm">Thương hiệu</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-blue-200 text-sm">Năm kinh nghiệm</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-blue-200 text-sm">Dự án</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">24T</div>
              <div className="text-blue-200 text-sm">Bảo hành</div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map(brand => (
            <div
              key={brand.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* Brand Header */}
              <div 
                className="p-6 text-white"
                style={{ backgroundColor: brand.color }}
              >
                <h2 className="text-2xl font-bold">{brand.name}</h2>
                <p className="text-sm opacity-90 mt-1">{brand.origin} • {brand.category}</p>
              </div>

              {/* Brand Content */}
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4">{brand.description}</p>
                
                <h4 className="font-semibold text-sm mb-2">Sản phẩm nổi bật:</h4>
                <ul className="space-y-1 mb-4">
                  {brand.highlights.map((h, i) => (
                    <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
                      <span className="text-green-500">✓</span> {h}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/thuong-hieu/${brand.slug}`}
                  className="text-sm font-medium hover:underline"
                  style={{ color: brand.color }}
                >
                  Xem sản phẩm {brand.name} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Cần tư vấn thương hiệu phù hợp?</h2>
          <p className="mb-6 text-blue-100">
            Liên hệ ngay để được tư vấn sản phẩm chính hãng
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:0862301919" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              📞 0862.30.1919
            </a>
            <Link href="/lien-he" className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
              Yêu cầu báo giá
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
