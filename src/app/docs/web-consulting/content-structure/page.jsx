import DocsDetailTemplate from "../../_components/DocsDetailTemplate";
import { webConsultingDocs } from "../../../../lib/webConsultingDocs";

export default function ContentStructurePage() {
  return <DocsDetailTemplate doc={webConsultingDocs.contentStructure} />;
}
