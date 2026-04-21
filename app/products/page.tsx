import { getProducts } from '@/lib/api';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

interface Props {
  searchParams: { 
    category?: string;
    brand?: string;
  };
}

export const metadata = {
  title: 'Sản phẩm - Luxwave | Màn Hình LED Chính Hãng',
  description: 'Danh sách màn hình LED, module LED, cabin LED COB, đèn GOBO chính hãng với giá tốt nhất.',
};

const categories = [
  { id: 'all', name: 'Tất cả', count: 12 },
  { id: 'man-hinh-led', name: 'Màn hình LED', count: 5 },
  { id: 'module-led', name: 'Module LED', count: 5 },
  { id: 'cabin-led', name: 'Cabin LED', count: 2 },
  { id: 'den-gobo', name: 'Đèn GOBO', count: 3 },
  { id: 'den-san-khau', name: 'Đèn sân khấu', count: 2 },
  { id: 'led-decor', name: 'LED Decor', count: 2 },
];

export default async function ProductsPage({ searchParams }: Props) {
  const products = await getProducts();
  
  const selectedCategory = searchParams.category || 'all';
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-slate-900 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sản Phẩm
          </h1>
          <p className="text-slate-400 max-w-2xl">
            Màn hình LED, module LED, cabin LED COB, đèn chiếu logo GOBO - Chính hãng, giá tốt nhất
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-100 py-3">
        <div className="container mx-auto px-4 md:px-8">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-slate-500 hover:text-amber-600">Trang chủ</Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 font-medium">Sản phẩm</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Categories */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl border border-slate-200 p-6 sticky top-24">
              <h3 className="font-semibold text-slate-900 mb-4">Danh mục sản phẩm</h3>
              
              <div className="space-y-1">
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={cat.id === 'all' ? '/products' : `/products?category=${cat.id}`}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors ${
                      selectedCategory === cat.id || (cat.id === 'all' && !searchParams.category)
                        ? 'bg-amber-50 text-amber-700 font-medium'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className="text-xs text-slate-400">{cat.count}</span>
                  </Link>
                ))}
              </div>

              {/* Quick Contact */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-sm text-slate-500 mb-3">Bạn cần tư vấn?</p>
                <a 
                  href="tel:0862301919" 
                  className="flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  0862.30.1919
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-slate-600">
                Hiển thị <span className="font-semibold text-slate-900">{filteredProducts.length}</span> sản phẩm
              </p>
              <select className="px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500">
                <option>Sắp xếp: Mặc định</option>
                <option>Giá: Thấp đến cao</option>
                <option>Giá: Cao đến thấp</option>
                <option>Tên: A-Z</option>
              </select>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
                <svg className="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Không tìm thấy sản phẩm</h3>
                <p className="text-slate-500 mb-4">Danh mục này hiện đang được cập nhật.</p>
                <Link href="/products" className="text-amber-600 font-medium hover:text-amber-700">
                  Xem tất cả sản phẩm →
                </Link>
              </div>
            )}

            {/* Pagination */}
            {filteredProducts.length > 0 && (
              <div className="mt-12 flex justify-center">
                <div className="flex items-center gap-2">
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-50">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-amber-500 text-white font-medium">1</button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50">2</button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50">3</button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
