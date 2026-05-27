import DocsDetailTemplate from "../../_components/DocsDetailTemplate";
import {
  businessIntelligenceDocLinks,
  businessIntelligenceDocs,
} from "../../../../lib/businessIntelligenceDocs";
export const metadata = {
  title: "Metrics That Matter Guide | Alpath",
};


export default function MetricsThatMatterPage() {
  return (
    <DocsDetailTemplate
      doc={businessIntelligenceDocs.metricsThatMatter}
      sectionTitle="Business Intelligence Documentation"
      docLinks={businessIntelligenceDocLinks}
    />
  );
}