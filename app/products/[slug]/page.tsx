import { getProductBySlug, getProducts } from '@/lib/api';
import { notFound } from 'next/navigation';

interface Props {
  params: { slug: string };
}

// Generate static params for SSG
export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// SEO Metadata
export async function generateMetadata({ params }: Props) {
  const product = await getProductBySlug(params.slug);
  
  if (!product) {
    return { title: 'Product Not Found' };
  }

  return {
    title: product.meta_title || product.name,
    description: product.meta_description || product.short_description,
  };
}

// Product Page Component
export default async function ProductPage({ params }: Props) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="container mx-auto px-4 py-4 text-sm text-gray-500">
        <a href="/" className="hover:text-blue-600">Trang chủ</a>
        <span className="mx-2">/</span>
        <a href="/san-pham" className="hover:text-blue-600">Sản phẩm</a>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{product.name}</span>
      </nav>

      {/* Product Hero */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            {product.images && product.images.length > 0 ? (
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            ) : (
              <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Chưa có hình ảnh</span>
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            {product.price && (
              <div className="mb-6">
                <span className="text-3xl font-bold text-red-600">
                  {product.price.toLocaleString('vi-VN')}đ
                </span>
                <span className="text-gray-500 ml-2">/{product.unit}</span>
              </div>
            )}

            <a
              href="/lien-he"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Yêu cầu báo giá
            </a>
          </div>
        </div>
      </section>

      {/* Technical Specs - Tab Layout */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Thông số kỹ thuật</h2>
          
          {product.tech_specs ? (
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow">
                <tbody>
                  {Object.entries(product.tech_specs).map(([key, value], index) => (
                    <tr key={key} className={index % 2 === 0 ? 'bg-gray-50' : 'white'}>
                      <td className="px-6 py-4 font-medium text-gray-900 w-1/3">
                        {key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </td>
                      <td className="px-6 py-4 text-gray-700">{String(value)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-500">Đang cập nhật...</p>
          )}
        </div>
      </section>

      {/* Related Products */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Sản phẩm liên quan</h2>
        {/* Add related products logic here */}
      </section>
    </main>
  );
}
