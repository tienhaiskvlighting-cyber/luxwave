import Link from 'next/link';
import { getSolutions } from '@/lib/mock-solutions';

export const metadata = {
  title: 'Giải Pháp LED - Luxwave | Giải Pháp Cho Mọi Không Gian',
  description: 'Giải pháp LED toàn diện: phòng họp, hội trường, trường học, quảng cáo, retail. Tư vấn miễn phí.',
};

const categoryLabels: Record<string, string> = {
  space: 'Theo không gian',
  application: 'Theo ứng dụng',
  service: 'Dịch vụ',
  technology: 'Công nghệ',
};

const categoryColors: Record<string, string> = {
  space: 'from-blue-500 to-blue-700',
  application: 'from-green-500 to-green-700',
  service: 'from-purple-500 to-purple-700',
  technology: 'from-amber-500 to-amber-700',
};

const categoryIcons: Record<string, string> = {
  space: '🏢',
  application: '💼',
  service: '🔧',
  technology: '⚡',
};

export default async function SolutionsPage() {
  const solutions = await getSolutions();

  // Group by category
  const grouped = solutions.reduce((acc, sol) => {
    const cat = sol.category || 'other';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(sol);
    return acc;
  }, {} as Record<string, typeof solutions>);

  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-slate-900 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Giải Pháp LED
          </h1>
          <p className="text-slate-400 max-w-2xl">
            Giải pháp tối ưu cho từng không gian và ứng dụng - Từ phòng họp đến sân vận động
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-100 py-3">
        <div className="container mx-auto px-4 md:px-8">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-slate-500 hover:text-amber-600">Trang chủ</Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 font-medium">Giải pháp</span>
          </nav>
        </div>
      </div>

      {/* Solutions by Category */}
      <section className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        {Object.entries(grouped).map(([category, items]) => (
          <div key={category} className="mb-16 last:mb-0">
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">{categoryIcons[category] || '📋'}</span>
              <h2 className="text-2xl font-bold text-slate-900">
                {categoryLabels[category] || category}
              </h2>
              <div className="flex-1 h-px bg-slate-200 ml-4"></div>
            </div>

            {/* Solutions Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((solution) => (
                <Link
                  key={solution.id}
                  href={`/solutions/${solution.slug}`}
                  className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Image */}
                  <div className={`aspect-[16/10] bg-gradient-to-br ${categoryColors[category] || 'from-slate-500 to-slate-700'} relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl opacity-30">{categoryIcons[category] || '💡'}</span>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                      {solution.name}
                    </h3>
                    <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                      {solution.description}
                    </p>
                    <div className="flex items-center text-amber-600 text-sm font-medium">
                      Tìm hiểu thêm
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Bạn cần tư vấn giải pháp?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Liên hệ ngay với đội ngũ chuyên gia Luxwave để được tư vấn miễn phí và khảo sát thực tế.
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
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
