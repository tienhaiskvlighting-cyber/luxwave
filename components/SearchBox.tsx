'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface SearchBoxProps {
  defaultValue?: string;
  placeholder?: string;
  size?: 'default' | 'large';
}

export default function SearchBox({
  defaultValue = '',
  placeholder = 'Tìm kiếm sản phẩm...',
  size = 'default',
}: SearchBoxProps) {
  const [query, setQuery] = useState(defaultValue);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const sizeClasses = {
    default: 'py-3 px-4 text-base',
    large: 'py-4 px-6 text-lg',
  };

  return (
    <form onSubmit={handleSearch} className="w-full">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className={`w-full ${sizeClasses[size]} pr-12 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all`}
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-amber-500 hover:bg-amber-600 text-white rounded-lg flex items-center justify-center transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </form>
  );
}
