import DocsDetailTemplate from "../../_components/DocsDetailTemplate";
import { webConsultingDocLinks, webConsultingDocs } from "../../../../lib/webConsultingDocs";

export const metadata = {
  title: "Site Audit Framework Guide | Alpath",
};

export default function SiteAuditFrameworkPage() {
  return (
    <DocsDetailTemplate
      doc={webConsultingDocs.siteAuditFramework}
      sectionTitle="Web Consulting Documentation"
      docLinks={webConsultingDocLinks}
    />
  );
}