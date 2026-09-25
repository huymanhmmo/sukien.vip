import type { Metadata } from 'next';
import { site } from './site';

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title, description,
    alternates: { canonical: `${site.url}${path}` },
    openGraph: { title: `${title} | ${site.name}`, description, url: `${site.url}${path}`, siteName: site.name, locale: 'vi_VN', type: 'website' },
    twitter: { card: 'summary', title, description },
  };
}

export const organization = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  '@id': `${site.url}/#organization`,
  name: site.company, alternateName: site.name, url: site.url,
  logo: `${site.url}/images/your-dreams-logo.webp`,
  telephone: '+84979121097', email: site.email, taxID: site.taxId,
  foundingDate: '2019-08-27',
  address: { '@type': 'PostalAddress', streetAddress: 'Thôn Công Đình 3, Xã Phù Đổng', addressLocality: 'Hà Nội', addressCountry: 'VN' },
  areaServed: { '@type': 'Country', name: 'Việt Nam' },
};
