import Link from 'next/link';
import { getProducts, getProjects } from '@/lib/api';
import HeroSlider from '@/components/HeroSlider';
import ProductCard from '@/components/ProductCard';
import ProjectCard from '@/components/ProjectCard';
import SolutionCard from '@/components/SolutionCard';
import Breadcrumb from '@/components/Breadcrumb';

// Categories data
const categories = [
  {
    id: '1',
    name: 'Màn hình LED',
    slug: 'man-hinh-led',
    icon: '📺',
    description: 'Indoor, Outdoor, Transparent',
    color: 'from-blue-600 to-blue-800',
    href: '/products?category=man-hinh-led'
  },
  {
    id: '2',
    name: 'Module LED',
    slug: 'module-led',
    icon: '🔲',
    description: 'COB, SMD Series',
    color: 'from-green-600 to-green-800',
    href: '/products?category=module-led'
  },
  {
    id: '3',
    name: 'Cabin LED',
    slug: 'cabin-led',
    icon: '📦',
    description: 'COB Cabinet',
    color: 'from-purple-600 to-purple-800',
    href: '/products?category=cabin-led'
  },
  {
    id: '4',
    name: 'Đèn GOBO',
    slug: 'den-gobo',
    icon: '💡',
    description: 'Chiếu logo, hiệu ứng',
    color: 'from-amber-500 to-amber-700',
    href: '/products?category=den-gobo'
  },
  {
    id: '5',
    name: 'Đèn sân khấu',
    slug: 'den-san-khau',
    icon: '🎭',
    description: 'Moving Head, Beam',
    color: 'from-red-500 to-red-700',
    href: '/products?category=den-san-khau'
  },
  {
    id: '6',
    name: 'LED Decor',
    slug: 'led-decor',
    icon: '✨',
    description: 'Neon Flex, LED Vẫy',
    color: 'from-pink-500 to-pink-700',
    href: '/products?category=led-decor'
  },
];

// Solutions data
const featuredSolutions = [
  {
    id: 1,
    name: 'LED Phòng họp',
    slug: 'led-phong-hop',
    description: 'Màn hình LED cho phòng họp cao cấp, hội nghị truyền hình.',
    category: 'space',
    image: '/images/products/module-boe-btx-series.jpg'
  },
  {
    id: 2,
    name: 'LED Hội trường',
    slug: 'led-hoi-truong',
    description: 'Giải pháp màn hình LED cho hội trường, auditorium.',
    category: 'space',
    image: '/images/projects/project-1.jpg'
  },
  {
    id: 3,
    name: 'LED Quảng cáo',
    slug: 'giai-phap-quang-cao',
    description: 'Màn hình LED quảng cáo ngoài trời, billboard số.',
    category: 'application',
    image: '/images/projects/project-3.jpg'
  },
  {
    id: 4,
    name: 'LED Trường học',
    slug: 'giai-phap-truong-hoc',
    description: 'Giải pháp LED cho trường học, trung tâm đào tạo.',
    category: 'space',
    image: '/images/projects/project-2.jpg'
  },
];

// News data
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

      {/* ======= DANH MỤC SẢN PHẨM ======= */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Danh Mục Sản Phẩm
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Luxwave cung cấp đa dạng giải pháp LED cho mọi nhu cầu
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={cat.href}
                className="group"
              >
                <div className={`bg-gradient-to-br ${cat.color} rounded-xl p-6 text-white h-full flex flex-col items-center justify-center text-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg`}>
                  <span className="text-4xl mb-3">{cat.icon}</span>
                  <h3 className="font-semibold text-sm md:text-base mb-1">{cat.name}</h3>
                  <p className="text-xs opacity-80">{cat.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors"
            >
              Xem tất cả sản phẩm
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ======= SẢN PHẨM NỔI BẬT ======= */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Sản Phẩm Nổi Bật
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Giải pháp LED chất lượng cao từ các thương hiệu hàng đầu thế giới
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-600 transition-colors"
            >
              Xem tất cả sản phẩm
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ======= GIẢI PHÁP ======= */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Giải Pháp LED
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Giải pháp tối ưu cho từng không gian và ứng dụng
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredSolutions.map((solution) => (
              <SolutionCard key={solution.id} solution={solution} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/solutions"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-900 text-slate-900 rounded-lg font-medium hover:bg-slate-900 hover:text-white transition-colors"
            >
              Xem tất cả giải pháp
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ======= DỰ ÁN TIÊU BIỂU ======= */}
      <section className="py-16 md:py-20 bg-slate-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Dự Án Tiêu Biểu
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Những công trình đã hoàn thành của Luxwave
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-slate-900 transition-colors"
            >
              Xem tất cả dự án
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ======= THƯƠNG HIỆU ======= */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Đối Tác Chiến Lược
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Luxwave là đại lý phân phối chính hãng các thương hiệu LED hàng đầu
            </p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center">
            {[
              { name: 'NovaStar', logo: '/images/brands/novastar.png' },
              { name: 'BOE MLED', logo: '/images/brands/boe.png' },
              { name: 'Yellow River', logo: '/images/brands/yellow-river.png' },
            ].map((brand, i) => (
              <div key={i} className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300">
                <img src={brand.logo} alt={brand.name} className="max-h-12 object-contain" />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/thuong-hieu"
              className="text-amber-600 font-medium hover:text-amber-700 transition-colors"
            >
              Xem tất cả thương hiệu →
            </Link>
          </div>
        </div>
      </section>

      {/* ======= HOẠT ĐỘNG DOANH NGHIỆP ======= */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Hoạt Động Doanh Nghiệp
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <Link key={item.id} href={item.slug} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-sm text-slate-400">{item.date}</span>
                    <h3 className="font-semibold text-slate-900 mt-2 group-hover:text-amber-600 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ======= THỐNG KÊ ======= */}
      <section className="py-16 bg-amber-500">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-amber-100">Dự án hoàn thành</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <div className="text-amber-100">Năm kinh nghiệm</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-amber-100">Hỗ trợ kỹ thuật</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">11</div>
              <div className="text-amber-100">Thương hiệu đối tác</div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= CTA ======= */}
      <section className="py-16 md:py-20 bg-slate-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Bạn Cần Tư Vấn Về Giải Pháp LED?
            </h2>
            <p className="text-slate-400 mb-8">
              Liên hệ ngay với đội ngũ chuyên gia Luxwave để được tư vấn miễn phí và nhận báo giá tốt nhất.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0862301919"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0862.30.1919
              </a>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors"
              >
                Liên hệ ngay
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
