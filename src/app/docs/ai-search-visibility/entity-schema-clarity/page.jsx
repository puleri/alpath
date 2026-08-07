import DocsDetailTemplate from '../../_components/DocsDetailTemplate';
import {
  aiSearchVisibilityDocLinks,
  aiSearchVisibilityDocs,
} from '../../../../lib/aiSearchVisibilityDocs';

export const metadata = {
  title: 'Entity & Schema Clarity Guide | Alpath',
};

export default function EntitySchemaClarityPage() {
  return (
    <DocsDetailTemplate
      doc={aiSearchVisibilityDocs.entitySchemaClarity}
      sectionTitle="AI Search Visibility Documentation"
      docLinks={aiSearchVisibilityDocLinks}
    />
  );
}
