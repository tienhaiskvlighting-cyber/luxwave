import Link from 'next/link';
import { getProducts, getProjects, getCategories } from '@/lib/api';
import HeroSlider from '@/components/HeroSlider';

// Mock news data
const newsItems = [
  {
    id: "1",
    title: "Thông báo nghỉ Tết Nguyên Đán 2026",
    date: "2026-01-15",
    excerpt: "Kính gửi Quý Khách Hàng và Quý Đối Tác, nhân dịp Tết Nguyên Đán 2026, Công ty xin thông báo lịch nghỉ lễ.",
    slug: "/kien-thuc/thong-bao-nghi-tet-2026",
    image: "/images/projects/project-1.jpg"
  },
  {
    id: "2", 
    title: "Luxwave hoàn thành dự án màn hình LED cho trung tâm thương mại",
    date: "2025-12-20",
    excerpt: "Dự án lắp đặt màn hình LED P2.5 trong nhà cho trung tâm thương mại tại Hà Nội đã hoàn thành.",
    slug: "/kien-thuc/du-an-trung-tam-thuong-mai",
    image: "/images/projects/project-2.jpg"
  },
  {
    id: "3",
    title: "Công nghệ COB - Xu hướng mới trong ngành LED",
    date: "2025-12-10", 
    excerpt: "Công nghệ COB (Chip on Board) đang trở thành xu hướng mới với nhiều ưu điểm vượt trội về chất lượng hình ảnh.",
    slug: "/kien-thuc/cong-nghe-cob",
    image: "/images/products/module-boe-btx-series.jpg"
  }
];

export const metadata = {
  title: 'Luxwave - Giải Pháp LED Hàng Đầu Việt Nam | Báo Giá 2026',
  description: 'Luxwave - Chuyên cung cấp và thi công màn hình LED, module LED, cabin LED COB, đèn chiếu logo GOBO. Giải pháp LED cho mọi không gian.',
};

export default async function HomePage() {
  const products = await getProducts();
  const projects = await getProjects();
  const categories = await getCategories();

  // Get featured products (first 6)
  const featuredProducts = products.slice(0, 6);
  const featuredProjects = projects.slice(0, 3);

  return (
    <main>
      {/* Hero Slider */}
      <HeroSlider />

      {/* SẢN PHẨM NỔI BẬT */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">SẢN PHẨM NỔI BẬT</h2>
            <Link href="/products" className="text-blue-600 hover:underline font-medium">
              Xem tất cả →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="bg-white rounded-lg shadow hover:shadow-xl transition overflow-hidden group"
              >
                <div className="aspect-video bg-gray-100 relative overflow-hidden">
                  {product.images?.[0] ? (
                    <img 
                      src={product.images[0]} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      Chưa có hình ảnh
                    </div>
                  )}
                  {product.brand && (
                    <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                      {product.brand}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition">
                    {product.name}
                  </h3>
                  {product.tech_specs?.pixel_pitch && (
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded inline-block mb-2">
                      Pixel Pitch: {product.tech_specs.pixel_pitch}
                    </span>
                  )}
                  <div className="mt-2 text-red-600 font-bold text-lg">
                    {product.price ? `${product.price.toLocaleString('vi-VN')}đ` : 'Liên hệ'}
                    <span className="text-gray-500 font-normal text-sm">/{product.unit}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOẠT ĐỘNG DOANH NGHIỆP */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">HOẠT ĐỘNG DOANH NGHIỆP</h2>
            <Link href="/kien-thuc" className="text-blue-600 hover:underline font-medium">
              Xem tất cả →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((news) => (
              <Link
                key={news.id}
                href={news.slug}
                className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden group"
              >
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300" 
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-400 mb-2">{news.date}</p>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">{news.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DỰ ÁN TIÊU BIỂU */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">DỰ ÁN TIÊU BIỂU</h2>
            <Link href="/projects" className="text-blue-600 hover:underline font-medium">
              Xem tất cả →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="group bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition"
              >
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  {project.images?.[0] ? (
                    <img 
                      src={project.images[0]} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      Chưa có hình ảnh
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold group-hover:text-blue-600 transition line-clamp-2 text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    {project.location} • {project.scale}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ĐỐI TÁC */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10">ĐỐI TÁC CỦA CÔNG TY</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="text-center p-4">
              <img src="/images/brands/novastar.png" alt="NovaStar" className="h-14 mx-auto mb-3 grayscale hover:grayscale-0 transition" />
              <p className="text-sm text-gray-600 font-medium">NovaStar</p>
              <p className="text-xs text-gray-400">Controller & Video Processor</p>
            </div>
            <div className="text-center p-4">
              <img src="/images/brands/boe.png" alt="BOE MLED" className="h-14 mx-auto mb-3 grayscale hover:grayscale-0 transition" />
              <p className="text-sm text-gray-600 font-medium">BOE MLED</p>
              <p className="text-xs text-gray-400">Module LED & Mini LED</p>
            </div>
            <div className="text-center p-4">
              <img src="/images/brands/yellow-river.png" alt="Yellow River" className="h-14 mx-auto mb-3 grayscale hover:grayscale-0 transition" />
              <p className="text-sm text-gray-600 font-medium">Yellow River</p>
              <p className="text-xs text-gray-400">Đèn Stage & Moving Head</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Cần tư vấn giải pháp?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Liên hệ ngay để được khảo sát và báo giá miễn phí
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:0862301919" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              📞 0862.30.1919
            </a>
            <Link href="/contact" className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
              Yêu cầu báo giá
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
