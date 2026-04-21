import Link from 'next/link';
import { Product } from '@/lib/api';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Link 
      href={`/products/${product.slug}`}
      className="group block bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
    >
      {/* Image */}
      <div className="aspect-video bg-gray-100 relative overflow-hidden">
        {product.images && product.images[0] ? (
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}
        
        {/* Environment Badge */}
        {product.environment && (
          <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
            {product.environment === 'indoor' ? 'Trong nhà' : 
             product.environment === 'outdoor' ? 'Ngoài trời' : product.environment}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition line-clamp-2">
          {product.name}
        </h3>
        
        {product.short_description && (
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
            {product.short_description}
          </p>
        )}

        {/* Tech Specs Preview */}
        {product.tech_specs && (
          <div className="mt-3 flex flex-wrap gap-1">
            {product.tech_specs.pixel_pitch && (
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                P{product.tech_specs.pixel_pitch}
              </span>
            )}
            {product.tech_specs.brightness && (
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                {product.tech_specs.brightness}
              </span>
            )}
          </div>
        )}

        {/* Price */}
        {product.price && (
          <div className="mt-3">
            <span className="text-lg font-bold text-red-600">
              {product.price.toLocaleString('vi-VN')}đ
            </span>
            <span className="text-sm text-gray-500">/{product.unit}</span>
          </div>
        )}
      </div>
    </Link>
  );
}
