import SmallBusinessAiSearchPresentation from './SmallBusinessAiSearchPresentation';

export const metadata = {
  title: 'AI Search Visibility for Small Business | Alpath',
  description:
    'A plain-English presentation for small business owners on earning qualified leads by becoming recognized, trusted, and cited in AI search.',
  alternates: {
    canonical: '/presentation/ai-search-visibility-for-small-business',
  },
  openGraph: {
    title: 'AI Search Visibility for Small Business | Alpath',
    description:
      'How can your business be recognized, trusted, and cited by AI?',
    url: '/presentation/ai-search-visibility-for-small-business',
    type: 'article',
  },
};

export default function SmallBusinessAiSearchPage() {
  return <SmallBusinessAiSearchPresentation />;
}
