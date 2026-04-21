import Link from 'next/link';
import { getSolutions } from '@/lib/mock-solutions';

export const metadata = {
  title: 'Giải pháp LED - Luxwave',
  description: 'Giải pháp toàn diện về màn hình LED, đèn chiếu logo, LED trang trí cho doanh nghiệp.',
};

export default async function SolutionsPage() {
  const solutions = await getSolutions();

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Giải pháp LED</h1>
          <p className="text-xl text-blue-100">
            Giải pháp toàn diện cho mọi không gian và ngành nghề
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution) => (
            <Link
              key={solution.id}
              href={`/solutions/${solution.slug}`}
              className="group bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-6xl">
                  {solution.id === "1" ? "🏢" :
                   solution.id === "2" ? "🏨" :
                   solution.id === "3" ? "📺" : "🏭"}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition">
                  {solution.name}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {solution.description}
                </p>

                {/* Features preview */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {solution.features.slice(0, 3).map((feature, i) => (
                    <span key={i} className="text-xs bg-gray-100 px-3 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                  {solution.features.length > 3 && (
                    <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
                      +{solution.features.length - 3} more
                    </span>
                  )}
                </div>

                {/* Target audience */}
                <p className="text-sm text-gray-500">
                  👥 Phù hợp: {solution.target_audience}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Bạn cần tư vấn giải pháp?</h2>
          <p className="mb-6 text-blue-100">
            Liên hệ ngay để được khảo sát và báo giá miễn phí
          </p>
          <Link
            href="/lien-he"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Liên hệ tư vấn
          </Link>
        </div>
      </section>
    </main>
  );
}
