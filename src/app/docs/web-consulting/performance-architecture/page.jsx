import DocsDetailTemplate from "../../_components/DocsDetailTemplate";
import { webConsultingDocLinks, webConsultingDocs } from "../../../../lib/webConsultingDocs";

export default function PerformanceArchitecturePage() {
  return (
    <DocsDetailTemplate
      doc={webConsultingDocs.performanceArchitecture}
      sectionTitle="Web Consulting Documentation"
      docLinks={webConsultingDocLinks}
    />
  );
}
