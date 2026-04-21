import Link from 'next/link';

interface Solution {
  id: number;
  name: string;
  slug: string;
  description: string;
  category: string;
  image?: string;
}

interface SolutionCardProps {
  solution: Solution;
}

export default function SolutionCard({ solution }: SolutionCardProps) {
  const categoryLabels: Record<string, string> = {
    space: 'Theo không gian',
    application: 'Theo ứng dụng',
    service: 'Dịch vụ',
    technology: 'Công nghệ',
  };

  return (
    <Link href={`/solutions/${solution.slug}`} className="group block">
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        {/* Image */}
        <div className="aspect-[4/3] bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
          {solution.image ? (
            <img
              src={solution.image}
              alt={solution.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <svg className="w-16 h-16 text-amber-500/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          )}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-amber-500 text-white text-xs font-medium rounded-full">
              {categoryLabels[solution.category] || solution.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
            {solution.name}
          </h3>
          <p className="text-slate-600 text-sm line-clamp-2 mb-4">
            {solution.description}
          </p>
          <div className="flex items-center text-amber-600 text-sm font-medium">
            Xem chi tiết
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
