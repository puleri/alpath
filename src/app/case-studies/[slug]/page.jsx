import { notFound } from 'next/navigation';
import { caseStudies, getCaseStudyBySlug } from '@/lib/caseStudies';
import CaseStudyDetailTemplate from './CaseStudyDetailTemplate';

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return { title: 'Case Study Not Found | Alpath Engineering' };
  }

  return {
    title: `${study.title} | Case Study | Alpath Engineering`,
    description: study.summary,
  };
}

export default async function CaseStudyDetailPage({ params }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return <CaseStudyDetailTemplate study={study} />;
}
