import DocsDetailTemplate from '../../_components/DocsDetailTemplate';
import {
  businessIntelligenceDocLinks,
  businessIntelligenceDocs,
} from '../../../../lib/businessIntelligenceDocs';

export const metadata = {
  title: 'Reporting Systems Guide | Alpath',
};

export default function ReportingSystemsPage() {
  return (
    <DocsDetailTemplate
      doc={businessIntelligenceDocs.reportingSystems}
      sectionTitle="Business Intelligence Documentation"
      docLinks={businessIntelligenceDocLinks}
    />
  );
}
