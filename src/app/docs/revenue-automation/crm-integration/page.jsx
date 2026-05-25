import DocsDetailTemplate from "../../_components/DocsDetailTemplate";
import {
export const metadata = {
  title: "CRM Integration Guide | Alpath",
};

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