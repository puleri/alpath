import DocsDetailTemplate from "../_components/DocsDetailTemplate";
import {
export const metadata = {
  title: "Revenue Automation Guides | Alpath",
};

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