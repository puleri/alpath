import DocsDetailTemplate from "../../_components/DocsDetailTemplate";
import { brandSystemDocLinks, brandSystemDocs } from "../../../../lib/brandSystemDocs";

export const metadata = {
  title: "Messaging System | Alpath Brand System Docs",
};

export default function MessagingSystemDocsPage() {
  return (
    <DocsDetailTemplate
      doc={brandSystemDocs.messagingSystem}
      sectionTitle="Brand System Paths"
      docLinks={brandSystemDocLinks}
    />
  );
}
