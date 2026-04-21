import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Giới thiệu - Luxwave | Giải Pháp LED Hàng Đầu Việt Nam',
  description: 'Tìm hiểu về Luxwave - công ty cung cấp và thi công màn hình LED chất lượng cao tại Việt Nam với hơn 10 năm kinh nghiệm.',
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-900 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Về <span className="text-amber-500">Luxwave</span>
            </h1>
            <p className="text-xl text-slate-300">
              Giải pháp LED hàng đầu Việt Nam - Thiết kế ánh sáng. Kiến tạo không gian.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-white border-b border-slate-100 py-4">
        <div className="container mx-auto px-4 md:px-8">
          <Breadcrumb items={[{ label: 'Giới thiệu' }]} />
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
                <div className="w-full h-full flex items-center justify-center">
                  <svg className="w-32 h-32 text-amber-500/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              {/* Stats overlay */}
              <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white rounded-xl p-6 shadow-xl">
                <div className="text-4xl font-bold">10+</div>
                <div className="text-sm opacity-90">Năm kinh nghiệm</div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Công ty TNHH Luxwave
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Luxwave là công ty chuyên cung cấp và thi công các giải pháp màn hình LED, đèn chiếu sáng công nghiệp và trang trí cao cấp tại Việt Nam.
                </p>
                <p>
                  Với hơn 10 năm kinh nghiệm trong ngành, chúng tôi tự hào mang đến những sản phẩm và dịch vụ chất lượng nhất, phục vụ hơn 500+ dự án trên toàn quốc.
                </p>
                <p>
                  Đội ngũ kỹ thuật viên chuyên nghiệp, được đào tạo bài bản, luôn sẵn sàng hỗ trợ khách hàng 24/7.
                </p>
              </div>

              {/* Key points */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: '✓', text: 'Sản phẩm chính hãng 100%' },
                  { icon: '✓', text: 'Bảo hành 24 tháng' },
                  { icon: '✓', text: 'Hỗ trợ kỹ thuật 24/7' },
                  { icon: '✓', text: 'Giao hàng toàn quốc' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm">
                      {item.icon}
                    </span>
                    <span className="text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Dự án hoàn thành' },
              { number: '10+', label: 'Năm kinh nghiệm' },
              { number: '24/7', label: 'Hỗ trợ kỹ thuật' },
              { number: '11', label: 'Thương hiệu đối tác' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Dịch vụ của chúng tôi</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Luxwave cung cấp đầy đủ các giải pháp LED từ tư vấn, thiết kế đến thi công và bảo trì.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Tư vấn & Thiết kế',
                description: 'Khảo sát thực tế, tư vấn giải pháp phù hợp với nhu cầu và ngân sách.',
                icon: '💡',
              },
              {
                title: 'Thi công & Lắp đặt',
                description: 'Đội ngũ kỹ thuật chuyên nghiệp, thi công nhanh chóng, an toàn.',
                icon: '🔧',
              },
              {
                title: 'Bảo trì & Sửa chữa',
                description: 'Dịch vụ bảo trì định kỳ và sửa chữa nhanh chóng với chế độ bảo hành 24 tháng.',
                icon: '🛠',
              },
            ].map((service, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Liên hệ với chúng tôi
              </h2>
              <p className="text-slate-600 mb-8">
                Hãy để Luxwave đồng hành cùng bạn trong việc kiến tạo không gian ánh sáng hoàn hảo.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Hotline</div>
                    <div className="text-lg font-semibold text-slate-900">0862.30.1919</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Email</div>
                    <div className="text-lg font-semibold text-slate-900">info.luxwave@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Địa chỉ</div>
                    <div className="text-lg font-semibold text-slate-900">Phố biển 16-08, Nghĩa Trụ, Hưng Yên</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Gửi yêu cầu tư vấn</h3>
              <ContactForm showProductField />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
