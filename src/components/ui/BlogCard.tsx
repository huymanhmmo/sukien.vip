import Image from 'next/image';
import Link from 'next/link';
import { postHref } from '@/content/legacy-content-routes';
import { postImagePath, type PostItem } from '@/content/posts';
import Icon from './Icon';
export default function BlogCard({ post }: { post: PostItem }) {
  const date = new Intl.DateTimeFormat('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date(post.date));
  const href = postHref(post.slug);
  return <article className="blog-card"><Link href={href} className="blog-image"><Image src={postImagePath(post)} alt={post.alt} fill sizes="(max-width: 760px) 100vw, 33vw" /></Link><p className="meta"><span>{post.category}</span><span>{date}</span></p><h3><Link href={href}>{post.title}</Link></h3><p>{post.excerpt}</p><Link href={href} className="text-link">Đọc bài viết <Icon /></Link></article>;
}
