export type SitemapEntry = {
  url: string;
  lastModified?: string | Date;
};

const escapeXml = (value: string) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

const xmlResponse = (body: string) => new Response(body, {
  headers: {
    'Content-Type': 'application/xml; charset=utf-8',
    'Cache-Control': 'public, max-age=0, s-maxage=3600',
  },
});

export function sitemapIndex(urls: string[]) {
  const entries = urls.map(url => `  <sitemap><loc>${escapeXml(url)}</loc></sitemap>`).join('\n');
  return xmlResponse(`<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</sitemapindex>`);
}

export function sitemapUrlset(entries: SitemapEntry[]) {
  const urls = entries.map(({ url, lastModified }) => {
    const modified = lastModified ? `<lastmod>${escapeXml(new Date(lastModified).toISOString())}</lastmod>` : '';
    return `  <url><loc>${escapeXml(url)}</loc>${modified}</url>`;
  }).join('\n');
  return xmlResponse(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`);
}
