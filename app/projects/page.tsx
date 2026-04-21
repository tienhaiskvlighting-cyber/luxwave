import { getProjects } from '@/lib/api';
import Link from 'next/link';

export const metadata = {
  title: 'Dự án đã thi công - Luxwave',
  description: 'Danh sách các công trình màn hình LED, đèn GOBO đã thi công. Hơn 100+ dự án hoàn thành.',
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Dự án đã thi công</h1>
          <p className="text-xl text-blue-100">
            Hơn 100+ công trình hoàn thành trên toàn quốc
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                {project.images && project.images[0] ? (
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    Chưa có hình ảnh
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-lg group-hover:text-blue-600 transition line-clamp-2">
                  {project.title}
                </h3>
                
                <div className="mt-2 flex flex-wrap gap-2 text-xs text-gray-500">
                  {project.client && (
                    <span className="bg-gray-100 px-2 py-1 rounded">
                      🏢 {project.client}
                    </span>
                  )}
                  {project.location && (
                    <span className="bg-gray-100 px-2 py-1 rounded">
                      📍 {project.location}
                    </span>
                  )}
                </div>

                {project.scale && (
                  <p className="mt-2 text-sm text-gray-600">
                    Quy mô: {project.scale}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Chưa có dự án nào được hiển thị</p>
          </div>
        )}
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
            Liên hệ ngay
          </Link>
        </div>
      </section>
    </main>
  );
}
