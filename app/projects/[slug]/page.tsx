import { getProjectBySlug, getProjects } from '@/lib/api';
import { notFound } from 'next/navigation';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const project = await getProjectBySlug(params.slug);
  return {
    title: project?.title || 'Dự án',
    description: project?.challenge,
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm">
            {project.client && (
              <span className="bg-blue-800 px-3 py-1 rounded">🏢 {project.client}</span>
            )}
            {project.location && (
              <span className="bg-blue-800 px-3 py-1 rounded">📍 {project.location}</span>
            )}
            {project.scale && (
              <span className="bg-blue-800 px-3 py-1 rounded">📐 {project.scale}</span>
            )}
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.images && project.images.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.images.map((img: string, i: number) => (
              <img 
                key={i} 
                src={img} 
                alt={`${project.title} - ${i + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow"
              />
            ))}
          </div>
        </section>
      )}

      {/* Challenge & Solution */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-red-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-red-800 mb-4">🎯 Thách thức</h2>
            <p className="text-gray-700 whitespace-pre-line">{project.challenge}</p>
          </div>
          <div className="bg-green-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-green-800 mb-4">✅ Giải pháp</h2>
            <p className="text-gray-700 whitespace-pre-line">{project.solution}</p>
          </div>
        </div>
      </section>

      {/* Equipment Used */}
      {project.products && project.products.length > 0 && (
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">🛠️ Thiết bị sử dụng</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.products.map((product: any, i: number) => (
                <a 
                  key={i}
                  href={`/products/${product.slug}`}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
                >
                  <div className="text-lg font-semibold">{product.name}</div>
                  <div className="text-sm text-gray-500">{product.sku}</div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Cần tư vấn giải pháp tương tự?</h2>
        <a 
          href="/lien-he"
          className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
        >
          Liên hệ ngay
        </a>
      </section>
    </main>
  );
}
