'use client';

interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

interface FilterSidebarProps {
  categories: FilterOption[];
  brands: FilterOption[];
  selectedCategory: string;
  selectedBrand: string;
  priceRange: [number, number];
  onCategoryChange: (category: string) => void;
  onBrandChange: (brand: string) => void;
  onPriceChange: (range: [number, number]) => void;
  onReset: () => void;
}

export default function FilterSidebar({
  categories,
  brands,
  selectedCategory,
  selectedBrand,
  priceRange,
  onCategoryChange,
  onBrandChange,
  onPriceChange,
  onReset,
}: FilterSidebarProps) {
  const hasActiveFilters = selectedCategory || selectedBrand || priceRange[0] > 0 || priceRange[1] < 100000000;

  return (
    <aside className="bg-white rounded-xl border border-slate-200 p-6 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-slate-900">Bộ lọc</h3>
        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="text-sm text-amber-600 hover:text-amber-700 font-medium"
          >
            Đặt lại
          </button>
        )}
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-slate-700 mb-3">Danh mục</h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label
              key={cat.value}
              className="flex items-center cursor-pointer group"
            >
              <input
                type="radio"
                name="category"
                value={cat.value}
                checked={selectedCategory === cat.value}
                onChange={() => onCategoryChange(cat.value)}
                className="w-4 h-4 text-amber-500 border-slate-300 focus:ring-amber-500"
              />
              <span className="ml-2 text-sm text-slate-600 group-hover:text-slate-900 flex-1">
                {cat.label}
              </span>
              {cat.count !== undefined && (
                <span className="text-xs text-slate-400">({cat.count})</span>
              )}
            </label>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-slate-700 mb-3">Thương hiệu</h4>
        <div className="space-y-2">
          {brands.map((brand) => (
            <label
              key={brand.value}
              className="flex items-center cursor-pointer group"
            >
              <input
                type="radio"
                name="brand"
                value={brand.value}
                checked={selectedBrand === brand.value}
                onChange={() => onBrandChange(brand.value)}
                className="w-4 h-4 text-amber-500 border-slate-300 focus:ring-amber-500"
              />
              <span className="ml-2 text-sm text-slate-600 group-hover:text-slate-900 flex-1">
                {brand.label}
              </span>
              {brand.count !== undefined && (
                <span className="text-xs text-slate-400">({brand.count})</span>
              )}
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-slate-700 mb-3">Khoảng giá</h4>
        <div className="space-y-3">
          <input
            type="range"
            min="0"
            max="100000000"
            step="1000000"
            value={priceRange[1]}
            onChange={(e) => onPriceChange([priceRange[0], parseInt(e.target.value)])}
            className="w-full accent-amber-500"
          />
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600">
              {(priceRange[0] / 1000000).toFixed(0)}M
            </span>
            <span className="text-slate-600">
              {(priceRange[1] / 1000000).toFixed(0)}M
            </span>
          </div>
        </div>
      </div>

      {/* Apply Button */}
      <button className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors">
        Áp dụng
      </button>
    </aside>
  );
}
