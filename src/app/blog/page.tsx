import type { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import BlogFilters from '@/components/widgets/BlogFilters';
import { posts } from '@/content/posts';
import { pageMetadata } from '@/lib/seo';
export const metadata: Metadata = pageMetadata('Góc chia sẻ về tổ chức sự kiện', 'Bài viết về lập kế hoạch, tổ chức sự kiện thể thao và chuẩn bị brief từ Your Dreams.', '/blog');
export default function BlogPage() { return <div className="container"><Breadcrumbs items={[{ name: 'Góc chia sẻ', href: '/blog' }]} /><header className="page-intro"><p className="eyebrow">GÓC CHIA SẺ</p><h1>Những điều nhỏ,<br />làm nên một <span className="red-text">sự kiện lớn.</span></h1><p>Kinh nghiệm tổ chức, những câu hỏi nên đặt ra và góc nhìn từ các hoạt động thật. Viết để giúp mỗi lần chuẩn bị trở nên rõ ràng hơn.</p></header><section className="page-section"><BlogFilters posts={posts} /></section></div>; }
