import RoiGeoPresentation from './RoiGeoPresentation';

export const metadata = {
  title: 'The ROI of Generative Engine Optimization | Alpath',
  description:
    'A 15-slide briefing on the business case for generative engine optimization, AI citations, and the changing economics of search.',
  alternates: {
    canonical: '/presentation/the-roi-of-geo',
  },
  openGraph: {
    title: 'The ROI of Generative Engine Optimization | Alpath',
    description:
      'How enterprise brands can become recognized, trusted, and cited by AI.',
    url: '/presentation/the-roi-of-geo',
    type: 'article',
  },
};

export default function RoiGeoPage() {
  return <RoiGeoPresentation />;
}
