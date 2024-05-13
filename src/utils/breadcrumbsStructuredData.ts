import { DirectoryProfile } from "../types/entities";
import { TemplateRenderProps } from "@yext/pages/*";

export function createBreadcrumbsStructuredData(data: TemplateRenderProps<DirectoryProfile<never>>): object {
  const breadcrumbs = data.document.dm_directoryParents_directory
  ? (
      data.document.dm_directoryParents_directory as Array<{
        slug: string;
        name: string;
      }>
    ).map((parent, idx) => ({
      "@type": "ListItem",
      name: parent.name == "Directory" ? "United States" : parent.name,
      position: idx + 1,
      item: {
        "@type": "Thing",
        "@id": data.relativePrefixToRoot + parent.slug,
      },
    }))
  : null;

  return {
    "@context": "http://www.schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs,
  };
}
