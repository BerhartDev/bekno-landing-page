import type { Metadata } from 'next';
import ProjectsView from '@/views/ProjectsView';
import { routing } from '@/lib/i18n/routing';
import { buildPageMetadata } from '@/lib/seo';

export function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata(routing.defaultLocale, '/projetos');
}

export default function ProjectsPage() {
  return <ProjectsView locale={routing.defaultLocale} />;
}
