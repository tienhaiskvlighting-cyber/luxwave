'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { mockProducts } from '@/lib/mock-data';

// Filter options
const filterOptions = {
  environment: [
    { value: 'indoor', label: 'LED trong nhà' },
    { value: 'outdoor', label: 'LED ngoài trời' },
    { value: 'semi_outdoor', label: 'Bán ngoài trời' },
  ],
  pixelPitch: ['P1.8', 'P2', 'P2.5', 'P3', 'P4', 'P6', 'P8', 'P10'],
  brightness: ['500 nits', '800 nits', '1000 nits', '3000 nits', '5000 nits', '7000 nits'],
  refreshRate: ['1920Hz', '3840Hz', '7680Hz'],
  technology: ['SMD', 'DIP', 'COB', 'GOB'],
};

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
  const [products, setProducts] = useState(mockProducts);

  // Filter products based on selected filters
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Text search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.sku.toLowerCase().includes(query)
      );
    }

    // Apply filters
    Object.entries(selectedFilters).forEach(([key, values]) => {
      if (values.length > 0) {
        result = result.filter(p => {
          if (key === 'environment') {
            return values.includes(p.environment || '');
          }
          if (key === 'pixelPitch') {
            return p.tech_specs?.pixel_pitch && values.some(v => p.tech_specs.pixel_pitch!.includes(v));
          }
          if (key === 'technology') {
            return values.includes(p.technology || '');
          }
          return true;
        });
      }
    });

    return result;
  }, [searchQuery, selectedFilters, products]);

  // Toggle filter
  const toggleFilter = (filterType: string, value: string) => {
    setSelectedFilters(prev => {
      const current = prev[filterType] || [];
      const updated = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value];
      return { ...prev, [filterType]: updated };
    });
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedFilters({});
    setSearchQuery('');
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Tìm kiếm sản phẩm</h1>
          
          {/* Search Input */}
          <div className="max-w-2xl">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm theo tên, mã sản phẩm..."
                className="w-full px-6 py-4 rounded-lg text-gray-900 text-lg"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                Tìm
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full md:w-72 flex-shrink-0">
            <div className="bg-white rounded-lg shadow p-6 sticky top-24">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Bộ lọc</h3>
                <button
                  onClick={clearFilters}
                  className="text-sm text-blue-600 hover:underline"
                >
                  Xóa lọc
                </button>
              </div>

              {/* Environment Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-sm mb-3">Môi trường</h4>
                <div className="space-y-2">
                  {filterOptions.environment.map(option => (
                    <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.environment?.includes(option.value)}
                        onChange={() => toggleFilter('environment', option.value)}
                        className="rounded text-blue-600"
                      />
                      <span className="text-sm">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Pixel Pitch Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-sm mb-3">Pixel Pitch</h4>
                <div className="flex flex-wrap gap-2">
                  {filterOptions.pixelPitch.map(pitch => (
                    <button
                      key={pitch}
                      onClick={() => toggleFilter('pixelPitch', pitch)}
                      className={`px-3 py-1 text-sm rounded border transition ${
                        selectedFilters.pixelPitch?.includes(pitch)
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-blue-600'
                      }`}
                    >
                      {pitch}
                    </button>
                  ))}
                </div>
              </div>

              {/* Technology Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-sm mb-3">Công nghệ</h4>
                <div className="space-y-2">
                  {filterOptions.technology.map(tech => (
                    <label key={tech} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.technology?.includes(tech)}
                        onChange={() => toggleFilter('technology', tech)}
                        className="rounded text-blue-600"
                      />
                      <span className="text-sm">{tech}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Active Filters Count */}
              {Object.values(selectedFilters).flat().length > 0 && (
                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-500">
                    Đang lọc: {Object.values(selectedFilters).flat().length} tiêu chí
                  </p>
                </div>
              )}
            </div>
          </aside>

          {/* Results */}
          <div className="flex-1">
            {/* Results Count */}
            <div className="mb-4 flex justify-between items-center">
              <p className="text-gray-600">
                Tìm thấy <strong>{filteredProducts.length}</strong> sản phẩm
              </p>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
                  >
                    {/* Image */}
                    <div className="aspect-video bg-gray-200">
                      {product.images?.[0] ? (
                        <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-4xl">
                          📺
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 line-clamp-2 mb-2">
                        {product.name}
                      </h3>

                      {/* Key Specs - Hiển thị ngoài card */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {product.tech_specs?.pixel_pitch && (
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                            {product.tech_specs.pixel_pitch}
                          </span>
                        )}
                        {product.tech_specs?.brightness && (
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                            {product.tech_specs.brightness}
                          </span>
                        )}
                        {product.tech_specs?.refresh_rate && (
                          <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                            {product.tech_specs.refresh_rate}
                          </span>
                        )}
                      </div>

                      {/* Price */}
                      <div className="flex justify-between items-center">
                        <span className="text-red-600 font-bold">
                          {product.price ? `${product.price.toLocaleString('vi-VN')}đ` : 'Liên hệ'}
                        </span>
                        <span className="text-xs text-gray-500">/{product.unit}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg">
                <p className="text-gray-500 mb-4">Không tìm thấy sản phẩm nào</p>
                <button
                  onClick={clearFilters}
                  className="text-blue-600 hover:underline"
                >
                  Xóa bộ lọc và thử lại
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
