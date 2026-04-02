import DocsDetailTemplate from "../../_components/DocsDetailTemplate";
import { webConsultingDocLinks, webConsultingDocs } from "../../../../lib/webConsultingDocs";

export default function ConversionPrinciplesPage() {
  return (
    <DocsDetailTemplate
      doc={webConsultingDocs.conversionPrinciples}
      sectionTitle="Web Consulting Documentation"
      docLinks={webConsultingDocLinks}
    />
  );
}
