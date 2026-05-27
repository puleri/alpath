import DocsDetailTemplate from "../../_components/DocsDetailTemplate";
import {
  revenueAutomationDocLinks,
  revenueAutomationDocs,
} from "../../../../lib/revenueAutomationDocs";
export const metadata = {
  title: "Lead Routing Logic Guide | Alpath",
};


export default function LeadRoutingLogicPage() {
  return (
    <DocsDetailTemplate
      doc={revenueAutomationDocs.leadRoutingLogic}
      sectionTitle="Revenue Automation Documentation"
      docLinks={revenueAutomationDocLinks}
    />
  );
}