import DocsDetailTemplate from "../../_components/DocsDetailTemplate";
import {
export const metadata = {
  title: "Metrics That Matter Guide | Alpath",
};

  businessIntelligenceDocLinks,
  businessIntelligenceDocs,
} from "../../../../lib/businessIntelligenceDocs";

export default function MetricsThatMatterPage() {
  return (
    <DocsDetailTemplate
      doc={businessIntelligenceDocs.metricsThatMatter}
      sectionTitle="Business Intelligence Documentation"
      docLinks={businessIntelligenceDocLinks}
    />
  );
}