import DocsDetailTemplate from "../../_components/DocsDetailTemplate";
import {
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
