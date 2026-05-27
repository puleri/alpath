import DocsDetailTemplate from "../../_components/DocsDetailTemplate";
import {
  revenueAutomationDocLinks,
  revenueAutomationDocs,
} from "../../../../lib/revenueAutomationDocs";
export const metadata = {
  title: "Follow-Up Automation Guide | Alpath",
};


export default function FollowUpAutomationPage() {
  return (
    <DocsDetailTemplate
      doc={revenueAutomationDocs.followUpAutomation}
      sectionTitle="Revenue Automation Documentation"
      docLinks={revenueAutomationDocLinks}
    />
  );
}