import DocsDetailTemplate from "../../_components/DocsDetailTemplate";
import {
  businessIntelligenceDocLinks,
  businessIntelligenceDocs,
} from "../../../../lib/businessIntelligenceDocs";

export default function DashboardArchitecturePage() {
  return (
    <DocsDetailTemplate
      doc={businessIntelligenceDocs.dashboardArchitecture}
      sectionTitle="Business Intelligence Documentation"
      docLinks={businessIntelligenceDocLinks}
    />
  );
}
