import DocsDetailTemplate from "../../_components/DocsDetailTemplate";
import {
export const metadata = {
  title: "Lead Routing Logic Guide | Alpath",
};

  revenueAutomationDocLinks,
  revenueAutomationDocs,
} from "../../../../lib/revenueAutomationDocs";

export default function LeadRoutingLogicPage() {
  return (
    <DocsDetailTemplate
      doc={revenueAutomationDocs.leadRoutingLogic}
      sectionTitle="Revenue Automation Documentation"
      docLinks={revenueAutomationDocLinks}
    />
  );
}