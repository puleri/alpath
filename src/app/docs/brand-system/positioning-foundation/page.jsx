import DocsDetailTemplate from "../../_components/DocsDetailTemplate";
import { brandSystemDocLinks, brandSystemDocs } from "../../../../lib/brandSystemDocs";

export const metadata = {
  title: "Positioning Foundation | Alpath Brand System Docs",
};

export default function PositioningFoundationDocsPage() {
  return (
    <DocsDetailTemplate
      doc={brandSystemDocs.positioningFoundation}
      sectionTitle="Brand System Paths"
      docLinks={brandSystemDocLinks}
    />
  );
}
