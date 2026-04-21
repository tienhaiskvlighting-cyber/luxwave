import Link from 'next/link';
import { Product } from '@/lib/api';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Link 
      href={`/products/${product.slug}`}
      className="group block bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image */}
      <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
        {product.images && product.images[0] ? (
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400">
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        
        {/* Brand Badge */}
        {product.brand && (
          <span className="absolute top-4 left-4 bg-slate-900/90 text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
            {product.brand}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-2 mb-2">
          {product.name}
        </h3>
        
        {/* Tech Specs Preview */}
        {product.tech_specs && (
          <div className="flex flex-wrap gap-2 mb-3">
            {product.tech_specs.pixel_pitch && (
              <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                P{product.tech_specs.pixel_pitch}
              </span>
            )}
            {product.tech_specs.resolution && (
              <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                {product.tech_specs.resolution}
              </span>
            )}
          </div>
        )}

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
          <span className="text-lg font-bold text-amber-600">
            {product.price ? `${product.price.toLocaleString('vi-VN')}đ` : 'Liên hệ'}
            {product.price && <span className="text-sm font-normal text-slate-400">/{product.unit}</span>}
          </span>
          <span className="text-sm text-amber-600 font-medium group-hover:translate-x-1 transition-transform flex items-center gap-1">
            Chi tiết
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
