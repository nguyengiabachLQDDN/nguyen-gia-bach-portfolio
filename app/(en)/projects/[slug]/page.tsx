import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProjectCaseStudy from '../../../components/ProjectCaseStudy';
import { getProject, getProjects, projectSlugs } from '../../../content';
import { getProjectMetadata } from '../../../metadata';

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug, 'en');
  return project ? getProjectMetadata(project, 'en') : {};
}

export default async function EnglishProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const projects = getProjects('en');
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  return <ProjectCaseStudy project={project} nextProject={nextProject} locale="en" />;
}
