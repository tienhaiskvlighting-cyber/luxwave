import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="bg-white">
      {/* ======= 1. HERO SLIDER ======= */}
      {/* Kích thước: Full width, chiều cao 450px */}
      {/* Nội dung: 3 slides, auto chuyển 4s */}
      {/* Mỗi slide: background image + overlay gradient + title + description + CTA button */}
      <section className="bg-slate-900">
        <div className="h-[450px] flex items-center justify-center text-white">
          <div className="text-center">
            <p className="text-amber-500 mb-2">HERO SLIDER</p>
            <h1 className="text-5xl font-bold">3 Slides Banner</h1>
            <p className="text-slate-400 mt-2">Auto 4s | Prev/Next arrows | Dot indicators</p>
          </div>
        </div>
      </section>

      {/* ======= 2. DANH MỤC SẢN PHẨM ======= */}
      {/* 6 category boxes trong 1 row */}
      {/* Mỗi box: icon + tên + mô tả ngắn */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-xl font-bold text-slate-900 mb-8 border-b pb-4">
            SECTION 2: DANH MỤC SẢN PHẨM
          </h2>
          <div className="grid grid-cols-6 gap-4">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="bg-slate-100 border-2 border-dashed border-slate-300 rounded-xl p-6 text-center">
                <div className="text-4xl mb-2">📺</div>
                <p className="text-sm font-medium">Category {i}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= 3. SẢN PHẨM NỔI BẬT ======= */}
      {/* 6 product cards trong grid 3x2 */}
      {/* Mỗi card: image + brand badge + name + price + CTA */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-xl font-bold text-slate-900 mb-8 border-b pb-4">
            SECTION 3: SẢN PHẨM NỔI BẬT
          </h2>
          <div className="grid grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="bg-white border-2 border-dashed border-slate-300 rounded-xl p-4">
                <div className="bg-slate-200 h-48 rounded-lg mb-4"></div>
                <p className="text-sm font-medium mb-2">Product Card {i}</p>
                <p className="text-amber-500 font-bold">4.500.000đ</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= 4. GIẢI PHÁP ======= */}
      {/* 4 solution cards trong grid 4x1 */}
      {/* Mỗi card: image + title + description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-xl font-bold text-slate-900 mb-8 border-b pb-4">
            SECTION 4: GIẢI PHÁP LED
          </h2>
          <div className="grid grid-cols-4 gap-6">
            {[1,2,3,4].map((i) => (
              <div key={i} className="bg-slate-100 border-2 border-dashed border-slate-300 rounded-xl p-4">
                <div className="bg-slate-200 h-32 rounded-lg mb-4"></div>
                <p className="text-sm font-medium">Solution {i}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= 5. DỰ ÁN TIÊU BIỂU ======= */}
      {/* 3 project cards */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-xl font-bold text-white mb-8 border-b border-slate-700 pb-4">
            SECTION 5: DỰ ÁN TIÊU BIỂU
          </h2>
          <div className="grid grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <div key={i} className="bg-slate-800 border-2 border-dashed border-slate-600 rounded-xl p-4">
                <div className="bg-slate-700 h-40 rounded-lg mb-4"></div>
                <p className="text-sm font-medium text-white">Project {i}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= 6. ĐỐI TÁC ======= */}
      {/* 3 brand logos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-xl font-bold text-slate-900 mb-8 border-b pb-4">
            SECTION 6: ĐỐI TÁC CHIẾN LƯỢC
          </h2>
          <div className="grid grid-cols-3 gap-8 items-center justify-items-center max-w-2xl mx-auto">
            {[1,2,3].map((i) => (
              <div key={i} className="bg-slate-100 border-2 border-dashed border-slate-300 rounded-xl w-40 h-24 flex items-center justify-center">
                <p className="text-sm text-slate-500">Logo {i}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= 7. HOẠT ĐỘNG DOANH NGHIỆP ======= */}
      {/* 3 news cards */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-xl font-bold text-slate-900 mb-8 border-b pb-4">
            SECTION 7: HOẠT ĐỘNG DOANH NGHIỆP
          </h2>
          <div className="grid grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <div key={i} className="bg-white border-2 border-dashed border-slate-300 rounded-xl p-4">
                <div className="bg-slate-200 h-32 rounded-lg mb-4"></div>
                <p className="text-sm text-slate-400">15/01/2026</p>
                <p className="text-sm font-medium mt-1">News Title {i}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= 8. THỐNG KÊ ======= */}
      {/* 4 stats numbers */}
      <section className="py-16 bg-amber-500">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-8 text-center text-white">
            <div>
              <p className="text-4xl font-bold">500+</p>
              <p className="text-amber-100 mt-1">Dự án hoàn thành</p>
            </div>
            <div>
              <p className="text-4xl font-bold">10+</p>
              <p className="text-amber-100 mt-1">Năm kinh nghiệm</p>
            </div>
            <div>
              <p className="text-4xl font-bold">24/7</p>
              <p className="text-amber-100 mt-1">Hỗ trợ kỹ thuật</p>
            </div>
            <div>
              <p className="text-4xl font-bold">11</p>
              <p className="text-amber-100 mt-1">Thương hiệu đối tác</p>
            </div>
          </div>
        </div>
      </section>

      {/* ======= 9. CTA SECTION ======= */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Bạn Cần Tư Vấn Về Giải Pháp LED?
          </h2>
          <p className="text-slate-400 mb-8">Liên hệ ngay để được tư vấn miễn phí</p>
          <div className="flex gap-4 justify-center">
            <button className="bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold">
              📞 0862.30.1919
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold">
              Liên hệ ngay
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
