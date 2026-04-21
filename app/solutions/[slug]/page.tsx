import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getSolutionBySlug } from '@/lib/mock-solutions';
import { mockProducts, mockProjects } from '@/lib/mock-data';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const { getSolutions } = await import('@/lib/mock-solutions');
  const solutions = await getSolutions();
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const solution = await getSolutionBySlug(params.slug);
  if (!solution) return { title: 'Not Found' };
  
  return {
    title: `${solution.name} | Luxwave`,
    description: solution.description,
  };
}

export default async function SolutionDetailPage({ params }: Props) {
  const solution = await getSolutionBySlug(params.slug);

  if (!solution) {
    notFound();
  }

  // Get related products
  const relatedProducts = solution.products
    .map(id => mockProducts.find(p => p.id === id))
    .filter(Boolean);

  // Get related projects (random for demo)
  const relatedProjects = mockProjects.slice(0, 2);

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Link 
              href="/solutions" 
              className="text-blue-200 hover:text-white mb-4 inline-block"
            >
              ← Quay lại giải pháp
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {solution.name}
            </h1>
            <p className="text-xl text-blue-100">
              {solution.description}
            </p>
            <div className="mt-6">
              <span className="bg-blue-800 px-4 py-2 rounded-full text-sm">
                👥 Phù hợp: {solution.target_audience}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Tính năng nổi bật</h2>
            <ul className="space-y-4">
              {solution.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Lợi ích</h2>
            <ul className="space-y-4">
              {solution.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">⭐</span>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Sản phẩm cho giải pháp này</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProducts.map((product: any) => (
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
                        📺
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{product.name}</h3>
                    <div className="mt-2 text-red-600 font-bold">
                      {product.price ? `${product.price.toLocaleString('vi-VN')}đ` : 'Liên hệ'}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Projects - Proof of Capability */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Dự án đã triển khai</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {relatedProjects.map((project: any) => (
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
                    🏢
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold group-hover:text-blue-600 transition">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  {project.client} • {project.location}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Dynamic CTA */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {solution.cta_text || 'Bạn quan tâm giải pháp này?'}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Liên hệ ngay để được tư vấn và báo giá miễn phí
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={solution.cta_link || '/lien-he'}
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              {solution.cta_text || 'Liên hệ ngay'}
            </Link>
            <a
              href="tel:0862301919"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              📞 0862.30.1919
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
