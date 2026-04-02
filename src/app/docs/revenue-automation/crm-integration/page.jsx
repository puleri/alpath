import DocsDetailTemplate from "../../_components/DocsDetailTemplate";
import {
  revenueAutomationDocLinks,
  revenueAutomationDocs,
} from "../../../../lib/revenueAutomationDocs";

export default function CrmIntegrationPage() {
  return (
    <DocsDetailTemplate
      doc={revenueAutomationDocs.crmIntegration}
      sectionTitle="Revenue Automation Documentation"
      docLinks={revenueAutomationDocLinks}
    />
  );
}
