import DocsDetailTemplate from "../../_components/DocsDetailTemplate";
import {
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
