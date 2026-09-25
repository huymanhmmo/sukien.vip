import Link from 'next/link';
import { posts } from '@/content/posts';
import SectionHeading from '@/components/ui/SectionHeading';
import BlogCard from '@/components/ui/BlogCard';
export default function BlogPreview() { return <section className="section blog-section"><div className="container"><SectionHeading eyebrow="05 / GÓC CHIA SẺ" title="Kiến thức để mỗi lần tổ chức tốt hơn." href="/blog" link="Xem tất cả bài viết" /><div className="blog-grid">{posts.map(post => <BlogCard key={post.slug} post={post} />)}</div><Link href="/blog" className="button button-outline mobile-blog-link">Khám phá góc chia sẻ</Link></div></section>; }
