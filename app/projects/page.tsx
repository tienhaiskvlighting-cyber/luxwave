import { getProjects } from '@/lib/api';
import Link from 'next/link';

export const metadata = {
  title: 'Dự Án Tiêu Biểu - Luxwave | LED Hội Trường, Quảng Cáo',
  description: 'Hơn 500+ dự án màn hình LED, đèn GOBO đã hoàn thành trên toàn quốc. Xem case study chi tiết.',
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-slate-900 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Dự Án Tiêu Biểu
          </h1>
          <p className="text-slate-400 max-w-2xl">
            Những công trình màn hình LED, đèn chiếu sáng đã hoàn thành của Luxwave trên toàn quốc
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-100 py-3">
        <div className="container mx-auto px-4 md:px-8">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-slate-500 hover:text-amber-600">Trang chủ</Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 font-medium">Dự án</span>
          </nav>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white border-b border-slate-100 py-6">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-amber-500">500+</div>
              <div className="text-sm text-slate-500">Dự án hoàn thành</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-amber-500">10+</div>
              <div className="text-sm text-slate-500">Năm kinh nghiệm</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-amber-500">24/7</div>
              <div className="text-sm text-slate-500">Hỗ trợ kỹ thuật</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-amber-500">100%</div>
              <div className="text-sm text-slate-500">Khách hàng hài lòng</div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[16/10] bg-slate-100 relative overflow-hidden">
                {project.images && project.images[0] ? (
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-400">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-semibold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                  {project.title}
                </h3>
                
                {/* Meta */}
                <div className="flex flex-wrap gap-3 text-sm text-slate-500 mb-4">
                  {project.client && (
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {project.client}
                    </span>
                  )}
                  {project.location && (
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      {project.location}
                    </span>
                  )}
                </div>

                {/* Scale */}
                {project.scale && (
                  <div className="flex items-center gap-2 text-sm">
                    <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-medium">
                      {project.scale}
                    </span>
                  </div>
                )}

                {/* CTA */}
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-sm text-slate-400">{project.completionDate || '2025'}</span>
                  <span className="text-sm text-amber-600 font-medium flex items-center gap-1">
                    Xem chi tiết
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {projects.length === 0 && (
          <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
            <svg className="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Chưa có dự án nào</h3>
            <p className="text-slate-500">Danh sách dự án đang được cập nhật.</p>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Bạn có dự án cần thi công?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Liên hệ ngay để nhận tư vấn và báo giá chi tiết cho dự án của bạn.
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
              Yêu cầu báo giá
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
