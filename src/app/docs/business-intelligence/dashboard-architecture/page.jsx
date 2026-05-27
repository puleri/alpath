import DocsDetailTemplate from "../../_components/DocsDetailTemplate";
import {
  businessIntelligenceDocLinks,
  businessIntelligenceDocs,
} from "../../../../lib/businessIntelligenceDocs";
export const metadata = {
  title: "Dashboard Architecture Guide | Alpath",
};


export default function DashboardArchitecturePage() {
  return (
    <DocsDetailTemplate
      doc={businessIntelligenceDocs.dashboardArchitecture}
      sectionTitle="Business Intelligence Documentation"
      docLinks={businessIntelligenceDocLinks}
    />
  );
}