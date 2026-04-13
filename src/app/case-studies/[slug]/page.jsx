import { notFound } from 'next/navigation';
import { caseStudies, getCaseStudyBySlug } from '@/lib/caseStudies';
import CaseStudyDetailTemplate from './CaseStudyDetailTemplate';

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }) {
  const study = getCaseStudyBySlug(params.slug);

  if (!study) {
    return { title: 'Case Study Not Found | Alpath Engineering' };
  }

  return {
    title: `${study.title} | Case Study | Alpath Engineering`,
    description: study.summary,
  };
}

export default function CaseStudyDetailPage({ params }) {
  const study = getCaseStudyBySlug(params.slug);

  if (!study) {
    notFound();
  }

  return <CaseStudyDetailTemplate study={study} />;
}
