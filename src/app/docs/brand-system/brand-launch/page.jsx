import DocsDetailTemplate from "../../_components/DocsDetailTemplate";
import { brandSystemDocLinks, brandSystemDocs } from "../../../../lib/brandSystemDocs";

export const metadata = {
  title: "Brand Launch | Alpath Brand System Docs",
};

export default function BrandLaunchDocsPage() {
  return (
    <DocsDetailTemplate
      doc={brandSystemDocs.brandLaunch}
      sectionTitle="Brand System Paths"
      docLinks={brandSystemDocLinks}
    />
  );
}
