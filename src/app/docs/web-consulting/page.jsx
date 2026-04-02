import DocsDetailTemplate from "../_components/DocsDetailTemplate";
import { webConsultingDocs } from "../../../lib/webConsultingDocs";

export default function WebConsultingDocsPage() {
  return <DocsDetailTemplate doc={webConsultingDocs.overview} />;
}
