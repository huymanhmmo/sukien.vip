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
  return {
    title, description,
    alternates: { canonical: `${site.url}${path}` },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: `${site.url}${path}`,
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
  '@type': ['Organization', 'LocalBusiness'],
  '@id': `${site.url}/#organization`,
  name: site.company, alternateName: site.name, url: site.url,
  logo: `${site.url}/images/your-dreams-logo.webp`,
  telephone: '+84979121097', email: site.email, taxID: site.taxId,
  address: { '@type': 'PostalAddress', streetAddress: 'Thôn Công Đình 3, Xã Phù Đổng', addressLocality: 'Hà Nội', addressCountry: 'VN' },
  areaServed: { '@type': 'Country', name: 'Việt Nam' },
};
