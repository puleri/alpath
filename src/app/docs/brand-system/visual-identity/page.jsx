import DocsDetailTemplate from "../../_components/DocsDetailTemplate";
import { brandSystemDocLinks, brandSystemDocs } from "../../../../lib/brandSystemDocs";

export const metadata = {
  title: "Visual Identity | Alpath Brand System Docs",
};

export default function VisualIdentityDocsPage() {
  return (
    <DocsDetailTemplate
      doc={brandSystemDocs.visualIdentity}
      sectionTitle="Brand System Paths"
      docLinks={brandSystemDocLinks}
    />
  );
}
