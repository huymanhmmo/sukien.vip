import Hero from '@/components/sections/Hero';
import Partners from '@/components/sections/Partners';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import About from '@/components/sections/About';
import Process from '@/components/sections/Process';
import CTA from '@/components/sections/CTA';
import BlogPreview from '@/components/sections/BlogPreview';
import JsonLd from '@/components/ui/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { site } from '@/lib/site';
export const metadata = pageMetadata('Tổ chức sự kiện Hà Nội – Your Dreams', 'Tổ chức sự kiện thể thao, doanh nghiệp và giáo dục cùng Your Dreams. Khám phá dự án thực tế, giải pháp trọn gói và liên hệ 0979 121 097.', '/');
export default function Home() { return <><Hero /><Partners /><Services /><Portfolio /><About /><Process /><BlogPreview /><CTA /><JsonLd data={{ '@context': 'https://schema.org', '@type': 'WebSite', '@id': site.url + '/#website', url: site.url, name: site.name, inLanguage: 'vi-VN', publisher: { '@id': site.url + '/#organization' } }} /></>; }
