import type { Metadata } from 'next';
import { site } from './site';

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  socialImage: { url: string; alt: string } = {
    url: '/images/happy-run.webp',
    alt: 'Cộng đồng tham gia giải chạy do Your Dreams tổ chức',
  },
): Metadata {
  const cleanPath = path === '/' ? '' : path.replace(/\/+$/, '');
  const canonicalUrl = `${site.url}${cleanPath}`;
  return {
    title, description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: canonicalUrl,
      siteName: site.name,
      locale: 'vi_VN',
      type: 'website',
      images: [socialImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${site.name}`,
      description,
      images: [socialImage.url],
    },
  };
}

export const organization = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
  '@id': `${site.url}/#organization`,
  name: site.company,
  legalName: 'CÔNG TY CỔ PHẦN YOUR DREAMS',
  alternateName: [site.name, 'Sự Kiện Vip', 'Swim For Life Việt Nam', 'Your Dreams'],
  url: site.url,
  logo: {
    '@type': 'ImageObject',
    '@id': `${site.url}/#logo`,
    url: `${site.url}/images/your-dreams-logo.webp`,
    caption: 'Logo Công ty Cổ phần Your Dreams',
  },
  image: `${site.url}/images/happy-run.webp`,
  telephone: '+84979121097',
  email: site.email,
  taxID: site.taxId,
  foundingDate: '2019-08-27',
  founder: {
    '@type': 'Person',
    name: 'Nguyễn Huy Mạnh',
    jobTitle: 'Người đại diện pháp luật',
  },
  slogan: 'Từ Ý Tưởng Đến Sự Kiện Hoàn Hảo',
  description: 'Công ty Cổ phần Your Dreams chuyên tổ chức sự kiện thể thao, sự kiện doanh nghiệp, giáo dục thể thao và cho thuê thiết bị chuyên nghiệp tại Hà Nội và toàn quốc.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Thôn Công Đình 3, Xã Phù Đổng',
    addressLocality: 'Gia Lâm',
    addressRegion: 'Hà Nội',
    postalCode: '100000',
    addressCountry: 'VN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 21.0667,
    longitude: 105.9500,
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Hà Nội' },
    { '@type': 'Country', name: 'Việt Nam' },
  ],
  priceRange: '$$',
  currenciesAccepted: 'VND',
  paymentAccepted: 'Chuyển khoản ngân hàng, Tiền mặt',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '08:00',
    closes: '18:00',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+84979121097',
    contactType: 'customer service',
    availableLanguage: ['vi', 'en'],
    areaServed: 'VN',
  },
  sameAs: [
    site.zalo,
  ],
  knowsAbout: [
    'Tổ chức sự kiện thể thao',
    'Tổ chức giải chạy bộ',
    'Tổ chức giải bơi lội',
    'Tổ chức giải pickleball',
    'Tổ chức sự kiện doanh nghiệp',
    'Tổ chức Team Building',
    'Cho thuê thiết bị sự kiện',
    'Cung cấp nhân sự sự kiện',
    'Swim For Life Việt Nam',
  ],
};

