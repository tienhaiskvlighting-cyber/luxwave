import Link from 'next/link';
import { getProducts, getProjects, getCategories } from '@/lib/api';
import HeroSlider from '@/components/HeroSlider';

// Premium mock news data
const newsItems = [
  {
    id: "1",
    title: "Thông báo nghỉ Tết Nguyên Đán 2026",
    date: "15/01/2026",
    slug: "/kien-thuc/thong-bao-nghi-tet-2026",
    image: "/images/projects/project-1.jpg"
  },
  {
    id: "2", 
    title: "Hoàn thành dự án màn hình LED trung tâm thương mại",
    date: "20/12/2025",
    slug: "/kien-thuc/du-an-trung-tam-thuong-mai",
    image: "/images/projects/project-2.jpg"
  },
  {
    id: "3",
    title: "Công nghệ COB - Xu hướng mới trong ngành LED",
    date: "10/12/2025", 
    excerpt: "Công nghệ COB mang lại chất lượng hình ảnh vượt trội",
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

  const featuredProducts = products.slice(0, 6);
  const featuredProjects = projects.slice(0, 3);

  return (
    <main className="bg-white">
      {/* Hero Slider */}
      <HeroSlider />

      {/* SẢN PHẨM NỔI BẬT */}
      <section className="section bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <div className="divider mx-auto"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              SẢN PHẨM NỔI BẬT
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Giải pháp LED chất lượng cao từ các thương hiệu hàng đầu thế giới
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="card-premium group"
              >
                <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                  {product.images?.[0] ? (
                    <img 
                      src={product.images[0]} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400">
                      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                  {product.brand && (
                    <span className="absolute top-4 left-4 bg-slate-900/90 text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
                      {product.brand}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {product.name}
                  </h3>
                  {product.tech_specs?.pixel_pitch && (
                    <p className="text-sm text-slate-400 mb-3">
                      Pixel Pitch: {product.tech_specs.pixel_pitch}
                    </p>
                  )}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <span className="text-lg font-bold text-amber-600">
                      {product.price ? `${product.price.toLocaleString('vi-VN')}đ` : 'Liên hệ'}
                    </span>
                    <span className="text-sm text-slate-400">/{product.unit}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/products" 
              className="inline-flex items-center gap-2 text-slate-900 font-medium hover:text-amber-600 transition-colors"
            >
              Xem tất cả sản phẩm
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* HOẠT ĐỘNG DOANH NGHIỆP */}
      <section className="section">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <div className="divider mx-auto"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              HOẠT ĐỘNG DOANH NGHIỆP
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Cập nhật tin tức và hoạt động của Luxwave
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {newsItems.map((news) => (
              <Link
                key={news.id}
                href={news.slug}
                className="card-premium group"
              >
                <div className="aspect-[16/9] bg-slate-100 overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-slate-400 mb-2">{news.date}</p>
                  <h3 className="font-semibold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DỰ ÁN TIÊU BIỂU */}
      <section className="section bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <div className="divider mx-auto"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              DỰ ÁN TIÊU BIỂU
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Những dự án tiêu biểu đã hoàn thành bởi Luxwave
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="card-premium group"
              >
                <div className="aspect-[16/10] bg-slate-100 overflow-hidden">
                  {project.images?.[0] ? (
                    <img 
                      src={project.images[0]} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400">
                      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-2 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400">
                    {project.location} • {project.scale}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-2 text-slate-900 font-medium hover:text-amber-600 transition-colors"
            >
              Xem tất cả dự án
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ĐỐI TÁC */}
      <section className="section">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <div className="divider mx-auto"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              ĐỐI TÁC CỦA CÔNG TY
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            <div className="text-center group">
              <div className="h-20 flex items-center justify-center mb-3">
                <img 
                  src="/images/brands/novastar.png" 
                  alt="NovaStar" 
                  className="h-full w-auto object-contain grayscale group-hover:grayscale-0 transition duration-300" 
                />
              </div>
              <p className="text-sm font-medium text-slate-600">NovaStar</p>
              <p className="text-xs text-slate-400 mt-1">Controller & Video Processor</p>
            </div>
            <div className="text-center group">
              <div className="h-20 flex items-center justify-center mb-3">
                <img 
                  src="/images/brands/boe.png" 
                  alt="BOE MLED" 
                  className="h-full w-auto object-contain grayscale group-hover:grayscale-0 transition duration-300" 
                />
              </div>
              <p className="text-sm font-medium text-slate-600">BOE MLED</p>
              <p className="text-xs text-slate-400 mt-1">Module LED & Mini LED</p>
            </div>
            <div className="text-center group">
              <div className="h-20 flex items-center justify-center mb-3">
                <img 
                  src="/images/brands/yellow-river.png" 
                  alt="Yellow River" 
                  className="h-full w-auto object-contain grayscale group-hover:grayscale-0 transition duration-300" 
                />
              </div>
              <p className="text-sm font-medium text-slate-600">Yellow River</p>
              <p className="text-xs text-slate-400 mt-1">Đèn Stage & Moving Head</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Cần tư vấn giải pháp LED?
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Liên hệ ngay để được khảo sát và báo giá miễn phí từ đội ngũ chuyên gia Luxwave
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:0862301919" 
              className="btn-primary flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              0862.30.1919
            </a>
            <Link 
              href="/contact" 
              className="btn-outline"
            >
              Yêu cầu báo giá
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
