import Image from 'next/image';
import Link from 'next/link';
import type { PostItem } from '@/content/posts';
import Icon from './Icon';
export default function BlogCard({ post }: { post: PostItem }) {
  const date = new Intl.DateTimeFormat('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date(post.date));
  return <article className="blog-card"><Link href={`/blog/${post.slug}`} className="blog-image"><Image src={`/images/${post.image}.webp`} alt={post.alt} fill sizes="(max-width: 760px) 100vw, 33vw" /></Link><p className="meta"><span>{post.category}</span><span>{date}</span></p><h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3><p>{post.excerpt}</p><Link href={`/blog/${post.slug}`} className="text-link">Đọc bài viết <Icon /></Link></article>;
}
