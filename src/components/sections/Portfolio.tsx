import { projects } from '@/content/projects';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from '@/components/ui/ProjectCard';
export default function Portfolio() {
  return <section className="section container"><SectionHeading eyebrow="02 / DẤU ẤN YOUR DREAMS" title="Mỗi dự án, một câu chuyện." href="/du-an" link="Xem tất cả dự án" /><div className="portfolio-grid">{[projects[1], projects[2], projects[4], projects[3]].map((project, i) => <ProjectCard key={project.slug} project={project} large={i === 0} />)}</div></section>;
}
