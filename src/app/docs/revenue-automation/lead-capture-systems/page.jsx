import DocsDetailTemplate from "../../_components/DocsDetailTemplate";
import {
export const metadata = {
  title: "Lead Capture Systems Guide | Alpath",
};

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