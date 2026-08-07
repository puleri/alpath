import DocsDetailTemplate from '../_components/DocsDetailTemplate';
import {
  aiSearchVisibilityDocLinks,
  aiSearchVisibilityDocs,
} from '../../../lib/aiSearchVisibilityDocs';

export const metadata = {
  title: 'AI Search Visibility Guides | Alpath',
  description:
    'Practical guides to SEO, AEO, GEO, LLMO, entity clarity, answer-ready content, and AI search visibility measurement.',
};

export default function AiSearchVisibilityDocsPage() {
  return (
    <DocsDetailTemplate
      doc={aiSearchVisibilityDocs.overview}
      sectionTitle="AI Search Visibility Documentation"
      docLinks={aiSearchVisibilityDocLinks}
    />
  );
}
