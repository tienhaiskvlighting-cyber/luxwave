import Link from 'next/link';
import { getProducts, getProjects, getCategories } from '@/lib/api';
import HeroSlider from '@/components/HeroSlider';

export const metadata = {
  title: 'Luxwave - Giải Pháp LED Cho Shop, Khách Sạn, Resort | Báo Giá 2026',
  description: 'Luxwave - Giải pháp LED cho shop, khách sạn, resort. LED screens, đèn GOBO, LED decor. Báo giá 2026.',
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

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Danh mục sản phẩm</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.filter(c => !c.parent).slice(0, 4).map((category) => (
              <Link
                key={category.id}
                href={`/products?category=${category.slug}`}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center"
              >
                <div className="text-4xl mb-3">
                  {category.slug === 'man-hinh-led' ? '📺' :
                   category.slug === 'den-chieu-logo' ? '💡' :
                   category.slug === 'led-decor' ? '✨' : '🔧'}
                </div>
                <h3 className="font-semibold">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Sản phẩm nổi bật</h2>
            <Link href="/products" className="text-blue-600 hover:underline">
              Xem tất cả →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
              >
                <div className="aspect-video bg-gray-200">
                  {product.images?.[0] ? (
                    <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      Chưa có hình ảnh
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  {product.tech_specs?.pixel_pitch && (
                    <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                      Pixel Pitch: {product.tech_specs.pixel_pitch}
                    </span>
                  )}
                  <div className="mt-3 text-red-600 font-bold">
                    {product.price ? `${product.price.toLocaleString('vi-VN')}đ` : 'Liên hệ'}
                    <span className="text-gray-500 font-normal text-sm">/{product.unit}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Dự án tiêu biểu</h2>
            <Link href="/projects" className="text-blue-600 hover:underline">
              Xem tất cả →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="group bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
              >
                <div className="aspect-video bg-gray-200">
                  {project.images?.[0] ? (
                    <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      Chưa có hình ảnh
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold group-hover:text-blue-600 transition line-clamp-2">
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
