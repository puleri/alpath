import DocsDetailTemplate from "../_components/DocsDetailTemplate";
import {
  revenueAutomationDocLinks,
  revenueAutomationDocs,
} from "../../../lib/revenueAutomationDocs";
export const metadata = {
  title: "Revenue Automation Guides | Alpath",
};


export default function RevenueAutomationDocsPage() {
  return (
    <DocsDetailTemplate
      doc={revenueAutomationDocs.overview}
      sectionTitle="Revenue Automation Documentation"
      docLinks={revenueAutomationDocLinks}
    />
  );
}