import DocsDetailTemplate from "../../_components/DocsDetailTemplate";
import {
  businessIntelligenceDocLinks,
  businessIntelligenceDocs,
} from "../../../../lib/businessIntelligenceDocs";

export default function ReportingSystemsPage() {
  return (
    <DocsDetailTemplate
      doc={businessIntelligenceDocs.reportingSystems}
      sectionTitle="Business Intelligence Documentation"
      docLinks={businessIntelligenceDocLinks}
    />
  );
}
