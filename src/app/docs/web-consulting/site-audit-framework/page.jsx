import DocsDetailTemplate from "../../_components/DocsDetailTemplate";
import { webConsultingDocLinks, webConsultingDocs } from "../../../../lib/webConsultingDocs";

export default function SiteAuditFrameworkPage() {
  return (
    <DocsDetailTemplate
      doc={webConsultingDocs.siteAuditFramework}
      sectionTitle="Web Consulting Documentation"
      docLinks={webConsultingDocLinks}
    />
  );
}
