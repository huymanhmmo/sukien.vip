import type { Metadata } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactWidget from '@/components/widgets/ContactWidget';
import JsonLd from '@/components/ui/JsonLd';
import { organization } from '@/lib/seo';
import { site, isPreview } from '@/lib/site';
const font = Be_Vietnam_Pro({ subsets: ['vietnamese', 'latin'], weight: ['400', '500', '600', '700', '800'], display: 'swap', variable: '--font-brand' });
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'Tổ chức sự kiện Hà Nội | Sự Kiện Vip – Your Dreams', template: '%s | Sự Kiện Vip' },
  description: 'Your Dreams tổ chức sự kiện thể thao, doanh nghiệp và giáo dục. Xem dự án thực tế, khám phá dịch vụ và trao đổi ý tưởng qua 0979 121 097.',
  robots: { index: !isPreview, follow: !isPreview },
  icons: { icon: '/icon.svg' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi" className={font.variable}><body id="top"><a href="#noi-dung" className="skip-link">Chuyển đến nội dung</a><Header /><main id="noi-dung">{children}</main><Footer /><ContactWidget /><JsonLd data={organization} /></body></html>;
}
