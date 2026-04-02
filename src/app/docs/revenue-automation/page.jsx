import DocsDetailTemplate from "../_components/DocsDetailTemplate";
import {
  revenueAutomationDocLinks,
  revenueAutomationDocs,
} from "../../../lib/revenueAutomationDocs";

export default function RevenueAutomationDocsPage() {
  return (
    <DocsDetailTemplate
      doc={revenueAutomationDocs.overview}
      sectionTitle="Revenue Automation Documentation"
      docLinks={revenueAutomationDocLinks}
    />
  );
}
