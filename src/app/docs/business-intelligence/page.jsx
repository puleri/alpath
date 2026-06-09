import DocsDetailTemplate from '../_components/DocsDetailTemplate';
import {
  businessIntelligenceDocLinks,
  businessIntelligenceDocs,
} from '../../../lib/businessIntelligenceDocs';

export const metadata = {
  title: 'Business Intelligence Guides | Alpath',
};

export default function BusinessIntelligenceDocsPage() {
  return (
    <DocsDetailTemplate
      doc={businessIntelligenceDocs.overview}
      sectionTitle="Business Intelligence Documentation"
      docLinks={businessIntelligenceDocLinks}
    />
  );
}
