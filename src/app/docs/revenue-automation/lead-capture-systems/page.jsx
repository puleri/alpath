import DocsDetailTemplate from "../../_components/DocsDetailTemplate";
import {
  revenueAutomationDocLinks,
  revenueAutomationDocs,
} from "../../../../lib/revenueAutomationDocs";

export default function LeadCaptureSystemsPage() {
  return (
    <DocsDetailTemplate
      doc={revenueAutomationDocs.leadCaptureSystems}
      sectionTitle="Revenue Automation Documentation"
      docLinks={revenueAutomationDocLinks}
    />
  );
}
