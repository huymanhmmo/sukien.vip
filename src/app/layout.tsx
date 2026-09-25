import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["vietnamese", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Tổ Chức Sự Kiện Hà Nội | Công ty Sự Kiện Vip - Your Dreams",
    template: "%s | Sự Kiện Vip",
  },
  description: "Your Dreams – Công ty tổ chức sự kiện Hà Nội chuyên nghiệp. Team building, sự kiện doanh nghiệp, tưng bừng sự kiện thể thao. Báo giá miễn phí. 50+ sự kiện thành công.",
  keywords: ["tổ chức sự kiện Hà Nội", "công ty tổ chức sự kiện", "tổ chức sự kiện chuyên nghiệp", "dịch vụ tổ chức sự kiện", "team building", "sự kiện doanh nghiệp", "sự kiện thể thao"],
  authors: [{ name: "Your Dreams - Sự Kiện Vip" }],
  openGraph: {
    title: "Tổ Chức Sự Kiện Hà Nội | Công ty Sự Kiện Vip",
    description: "Your Dreams – Công ty tổ chức sự kiện Hà Nội chuyên nghiệp. Team building, sự kiện doanh nghiệp, tưng bừng sự kiện thể thao.",
    type: "website",
    locale: "vi_VN",
    url: "https://sukien.vip",
    siteName: "Sự Kiện Vip",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={beVietnamPro.variable}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
