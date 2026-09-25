import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/content/projects';
import { projectHref } from '@/content/legacy-content-routes';
import Icon from './Icon';
export default function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  const href = projectHref(project.slug);
  return <article className={`project-card ${large ? 'project-large' : ''}`}><Link href={href} className="project-image"><Image src={`/images/${project.image}.webp`} alt={project.alt} fill sizes={large ? '(max-width: 760px) 100vw, 65vw' : '(max-width: 760px) 100vw, 45vw'} /><span className="image-tag">{project.category}{project.year && ` / ${project.year}`}</span><span className="image-arrow"><Icon name="up-right" /></span></Link><div className="card-caption"><div><p className="meta">{project.client} · {project.location}</p><h3><Link href={href}>{project.title}</Link></h3></div></div><p className="card-description">{project.description}</p></article>;
}
