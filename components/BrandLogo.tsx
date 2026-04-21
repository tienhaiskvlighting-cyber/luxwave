import Link from 'next/link';

interface Brand {
  id: number;
  name: string;
  slug: string;
  logo: string;
  description: string;
  category: string;
}

interface BrandLogoProps {
  brand: Brand;
}

export default function BrandLogo({ brand }: BrandLogoProps) {
  return (
    <Link href={`/thuong-hieu/${brand.slug}`} className="group block">
      <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:border-amber-300 transition-all duration-300">
        {/* Logo */}
        <div className="aspect-[3/2] flex items-center justify-center mb-4 relative overflow-hidden">
          <img
            src={brand.logo}
            alt={brand.name}
            className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
          />
        </div>

        {/* Info */}
        <div className="text-center">
          <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-amber-600 transition-colors">
            {brand.name}
          </h3>
          <span className="text-xs text-slate-500 uppercase tracking-wider">
            {brand.category}
          </span>
        </div>
      </div>
    </Link>
  );
}
