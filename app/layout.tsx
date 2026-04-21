import type { Metadata, Viewport } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0f172a',
};

export const metadata: Metadata = {
  title: 'Luxwave - Giải Pháp LED Cho Shop, Khách Sạn, Resort | Báo Giá 2026',
  description: 'Luxwave - Giải pháp LED cho shop, khách sạn, resort. LED screens, đèn GOBO, LED decor. Báo giá 2026.',
  keywords: 'đèn chiếu logo, màn hình LED, đèn LED cảnh quan, LED signs, GOBO, đèn trang trí, LED wall, module LED, cabin LED, Luxwave Vietnam',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="min-h-screen flex flex-col bg-white antialiased">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
