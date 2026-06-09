import DocsDetailTemplate from '../../_components/DocsDetailTemplate';
import {
  revenueAutomationDocLinks,
  revenueAutomationDocs,
} from '../../../../lib/revenueAutomationDocs';

export const metadata = {
  title: 'Lead Capture Systems Guide | Alpath',
};

export default function LeadCaptureSystemsPage() {
  return (
    <DocsDetailTemplate
      doc={revenueAutomationDocs.leadCaptureSystems}
      sectionTitle="Revenue Automation Documentation"
      docLinks={revenueAutomationDocLinks}
    />
  );
}
