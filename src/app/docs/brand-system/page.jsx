import DocsDetailTemplate from "../_components/DocsDetailTemplate";
import { brandSystemDocLinks, brandSystemDocs } from "../../../lib/brandSystemDocs";

export const metadata = {
  title: "Brand System Docs | Alpath",
};

export default function BrandSystemDocsPage() {
  return (
    <DocsDetailTemplate
      doc={brandSystemDocs.overview}
      sectionTitle="Brand System Paths"
      docLinks={brandSystemDocLinks}
    />
  );
}
