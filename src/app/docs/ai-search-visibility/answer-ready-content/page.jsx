import DocsDetailTemplate from '../../_components/DocsDetailTemplate';
import {
  aiSearchVisibilityDocLinks,
  aiSearchVisibilityDocs,
} from '../../../../lib/aiSearchVisibilityDocs';

export const metadata = {
  title: 'Answer-Ready Content Guide | Alpath',
};

export default function AnswerReadyContentPage() {
  return (
    <DocsDetailTemplate
      doc={aiSearchVisibilityDocs.answerReadyContent}
      sectionTitle="AI Search Visibility Documentation"
      docLinks={aiSearchVisibilityDocLinks}
    />
  );
}
