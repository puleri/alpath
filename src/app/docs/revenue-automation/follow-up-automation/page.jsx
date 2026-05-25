import DocsDetailTemplate from "../../_components/DocsDetailTemplate";
import {
export const metadata = {
  title: "Follow-Up Automation Guide | Alpath",
};

  revenueAutomationDocLinks,
  revenueAutomationDocs,
} from "../../../../lib/revenueAutomationDocs";

export default function FollowUpAutomationPage() {
  return (
    <DocsDetailTemplate
      doc={revenueAutomationDocs.followUpAutomation}
      sectionTitle="Revenue Automation Documentation"
      docLinks={revenueAutomationDocLinks}
    />
  );
}