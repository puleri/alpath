import DocsDetailTemplate from '../../_components/DocsDetailTemplate';
import {
  businessIntelligenceDocLinks,
  businessIntelligenceDocs,
} from '../../../../lib/businessIntelligenceDocs';

export const metadata = {
  title: 'Data Pipelines Guide | Alpath',
};

export default function DataPipelinesPage() {
  return (
    <DocsDetailTemplate
      doc={businessIntelligenceDocs.dataPipelines}
      sectionTitle="Business Intelligence Documentation"
      docLinks={businessIntelligenceDocLinks}
    />
  );
}
