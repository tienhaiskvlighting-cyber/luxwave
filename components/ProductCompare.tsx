'use client';

import { useState } from 'react';
import { Product } from '@/lib/api';

interface Props {
  products: Product[];
}

export default function ProductCompare({ products }: Props) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [showCompare, setShowCompare] = useState(false);

  const toggleProduct = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(i => i !== id));
    } else if (selectedIds.length < 3) {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const compareProducts = products.filter(p => selectedIds.includes(p.id));

  if (compareProducts.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="font-semibold">So sánh ({selectedIds.length})</span>
            <div className="flex gap-2">
              {compareProducts.map(p => (
                <div key={p.id} className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded">
                  <span className="text-sm">{p.name}</span>
                  <button
                    onClick={() => toggleProduct(p.id)}
                    className="text-gray-500 hover:text-red-500"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedIds([])}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
            >
              Xóa
            </button>
            <button
              onClick={() => setShowCompare(true)}
              disabled={selectedIds.length < 2}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
            >
              So sánh
            </button>
          </div>
        </div>
      </div>

      {/* Compare Modal */}
      {showCompare && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold">So sánh sản phẩm</h2>
              <button onClick={() => setShowCompare(false)} className="text-gray-500 hover:text-gray-900">
                × Đóng
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-3 text-left">Thông số</th>
                    {compareProducts.map(p => (
                      <th key={p.id} className="p-3 text-center">{p.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Price */}
                  <tr className="border-t">
                    <td className="p-3 font-semibold">Giá</td>
                    {compareProducts.map(p => (
                      <td key={p.id} className="p-3 text-center text-red-600 font-bold">
                        {p.price ? `${p.price.toLocaleString('vi-VN')}đ` : 'Liên hệ'}
                      </td>
                    ))}
                  </tr>
                  
                  {/* Technical Specs */}
                  {Object.keys(compareProducts[0].tech_specs || {}).map(spec => (
                    <tr key={spec} className="border-t">
                      <td className="p-3 font-medium">{spec.replace(/_/g, ' ')}</td>
                      {compareProducts.map(p => (
                        <td key={p.id} className="p-3 text-center">
                          {p.tech_specs?.[spec] || '-'}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
