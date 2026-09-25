'use client';
import { useMemo, useState } from 'react';
import type { PostItem } from '@/content/posts';
import BlogCard from '@/components/ui/BlogCard';
export default function BlogFilters({ posts }: { posts: PostItem[] }) {
  const [active, setActive] = useState('Tất cả'); const [query, setQuery] = useState('');
  const categories = ['Tất cả', ...Array.from(new Set(posts.map(post => post.category)))];
  const filtered = useMemo(() => posts.filter(post => (active === 'Tất cả' || post.category === active) && `${post.title} ${post.excerpt}`.toLocaleLowerCase('vi').includes(query.toLocaleLowerCase('vi'))), [active, query, posts]);
  return <><div className="blog-tools"><div className="filters" aria-label="Lọc bài viết">{categories.map(category => <button type="button" className="filter-button" aria-pressed={active === category} onClick={() => setActive(category)} key={category}>{category}</button>)}</div><label className="sr-only" htmlFor="blog-search">Tìm bài viết</label><input id="blog-search" className="search-input" value={query} onChange={event => setQuery(event.target.value)} placeholder="Tìm trong góc chia sẻ" /></div><p className="result-count">{filtered.length} bài viết phù hợp</p>{filtered.length ? <div className="blog-grid">{filtered.map(post => <BlogCard key={post.slug} post={post} />)}</div> : <div className="empty-state"><p>Chưa có bài viết phù hợp. Hãy thử một cụm từ khác.</p></div>}</>;
}
