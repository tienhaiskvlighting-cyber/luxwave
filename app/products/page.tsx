import { getProducts, getCategories } from '@/lib/api';
import ProductCard from '@/components/ProductCard';

interface Props {
  searchParams: { 
    env?: string;
    type?: string;
    category?: string;
    q?: string;
  };
}

export const metadata = {
  title: 'Sản phẩm - Luxwave',
  description: 'Danh sách màn hình LED, đèn GOBO, LED trang trí chính hãng',
};

export default async function ProductsPage({ searchParams }: Props) {
  // Build filter query
  let filters = 'filter[status][_eq]=published';
  
  if (searchParams.env) {
    filters += `&filter[environment][_eq]=${searchParams.env}`;
  }
  
  const products = await getProducts(filters);
  const categories = await getCategories();

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Sản phẩm</h1>
          <p className="text-xl text-blue-100">
            Màn hình LED, đèn chiếu logo GOBO, LED trang trí chính hãng
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow p-6 sticky top-24">
              <h3 className="font-bold mb-4">Bộ lọc</h3>
              
              {/* Environment Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-sm mb-2">Môi trường</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">LED trong nhà</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">LED ngoài trời</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">LED trong suốt</span>
                  </label>
                </div>
              </div>

              {/* Application Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-sm mb-2">Ứng dụng</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Cho thuê (Rental)</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Cố định</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Quảng cáo</span>
                  </label>
                </div>
              </div>

              {/* Pixel Pitch Filter */}
              <div>
                <h4 className="font-semibold text-sm mb-2">Pixel Pitch</h4>
                <div className="space-y-2">
                  {['P1.8', 'P2', 'P2.5', 'P3', 'P4', 'P6', 'P10'].map(pitch => (
                    <label key={pitch} className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">{pitch}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Results Count */}
            <div className="mb-4 text-gray-600">
              Tìm thấy <strong>{products.length}</strong> sản phẩm
            </div>

            {/* Products */}
            {products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <p className="text-lg">Chưa có sản phẩm</p>
                <p className="text-sm">Vui lòng liên hệ để được tư vấn</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
