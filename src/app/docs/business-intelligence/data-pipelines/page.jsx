import DocsDetailTemplate from "../../_components/DocsDetailTemplate";
import {
export const metadata = {
  title: "Data Pipelines Guide | Alpath",
};

  businessIntelligenceDocLinks,
  businessIntelligenceDocs,
} from "../../../../lib/businessIntelligenceDocs";

export default function DataPipelinesPage() {
  return (
    <DocsDetailTemplate
      doc={businessIntelligenceDocs.dataPipelines}
      sectionTitle="Business Intelligence Documentation"
      docLinks={businessIntelligenceDocLinks}
    />
  );
}