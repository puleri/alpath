import DocsDetailTemplate from '../../_components/DocsDetailTemplate';
import {
  aiSearchVisibilityDocLinks,
  aiSearchVisibilityDocs,
} from '../../../../lib/aiSearchVisibilityDocs';

export const metadata = {
  title: 'Search & AI Foundations Guide | Alpath',
};

export default function SearchAiFoundationsPage() {
  return (
    <DocsDetailTemplate
      doc={aiSearchVisibilityDocs.searchAiFoundations}
      sectionTitle="AI Search Visibility Documentation"
      docLinks={aiSearchVisibilityDocLinks}
    />
  );
}
