import DocsDetailTemplate from "../_components/DocsDetailTemplate";
import { webConsultingDocLinks, webConsultingDocs } from "../../../lib/webConsultingDocs";

export const metadata = {
  title: "Web Consulting Guides | Alpath",
};

export default function WebConsultingDocsPage() {
  return (
    <DocsDetailTemplate
      doc={webConsultingDocs.overview}
      sectionTitle="Web Consulting Documentation"
      docLinks={webConsultingDocLinks}
    />
  );
}