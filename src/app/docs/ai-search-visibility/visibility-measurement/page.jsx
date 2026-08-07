import DocsDetailTemplate from '../../_components/DocsDetailTemplate';
import {
  aiSearchVisibilityDocLinks,
  aiSearchVisibilityDocs,
} from '../../../../lib/aiSearchVisibilityDocs';

export const metadata = {
  title: 'AI Search Visibility Measurement Guide | Alpath',
};

export default function VisibilityMeasurementPage() {
  return (
    <DocsDetailTemplate
      doc={aiSearchVisibilityDocs.visibilityMeasurement}
      sectionTitle="AI Search Visibility Documentation"
      docLinks={aiSearchVisibilityDocLinks}
    />
  );
}
