import type { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ProjectFilters from '@/components/widgets/ProjectFilters';
import { projects } from '@/content/projects';
import { pageMetadata } from '@/lib/seo';
export const metadata: Metadata = pageMetadata('Dự án tổ chức sự kiện', 'Khám phá những hoạt động thể thao, giáo dục và cộng đồng do Your Dreams đồng hành tổ chức.', '/du-an');
export default function ProjectsPage() { return <div className="container"><Breadcrumbs items={[{ name: 'Dự án', href: '/du-an' }]} /><header className="page-intro"><p className="eyebrow">DỰ ÁN YOUR DREAMS</p><h1>Những khoảnh khắc<br />được tạo nên <span className="red-text">cùng nhau.</span></h1><p>Mỗi chương trình là một bối cảnh riêng. Cùng xem lại những hoạt động thể thao, giáo dục và kết nối cộng đồng mà Your Dreams đã đồng hành.</p></header><section className="page-section"><ProjectFilters projects={projects} /></section></div>; }
