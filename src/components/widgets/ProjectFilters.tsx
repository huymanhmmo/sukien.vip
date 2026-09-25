'use client';
import { useMemo, useState } from 'react';
import type { Project } from '@/content/projects';
import ProjectCard from '@/components/ui/ProjectCard';
export default function ProjectFilters({ projects }: { projects: Project[] }) {
  const categories = ['Tất cả', ...Array.from(new Set(projects.map(project => project.category)))];
  const [active, setActive] = useState('Tất cả');
  const filtered = useMemo(() => active === 'Tất cả' ? projects : projects.filter(project => project.category === active), [active, projects]);
  return <><div className="filters" aria-label="Lọc dự án">{categories.map(category => <button type="button" className="filter-button" aria-pressed={active === category} onClick={() => setActive(category)} key={category}>{category}</button>)}</div><p className="result-count">{filtered.length} dự án được hiển thị</p><div className="listing-grid">{filtered.map(project => <ProjectCard key={project.slug} project={project} />)}</div></>;
}
