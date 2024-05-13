import type { TemplateRenderProps, Tag } from "@yext/pages";
import defaultMetaTags from "./defaultMetaTags";

export default function directoryHeader(data: TemplateRenderProps): Tag[] {
  const metaTags: Tag[] = [
    {
      type: "meta",
      attributes: {
        name: "description",
        content: makeDescription(data),
      },
    },
    {
      type: "meta",
      attributes: {
        name: "og:site_name",
        content: makeTitle(data),
      },
    },
    {
      type: "meta",
      attributes: {
        name: "og:title",
        content: makeTitle(data),
      },
    },
    {
      type: "meta",
      attributes: {
        name: "og:description",
        content: makeDescription(data),
      },
    },
    {
      type: "meta",
      attributes: {
        property: "og:url",
        content: canonicalUrl(data),
      },
    },
    {
      type: "link",
      attributes: {
        rel: "canonical",
        href: canonicalUrl(data),
      },
    },
    {
      type: "link",
      attributes: {
        rel: "shortcut icon",
        type: "image/ico",
        href: "https://lib.intuitcdn.net/img/tto/fav-icons/tt-fav-icon.ico",
      },
    },
  ];

  const heroImageUrl = getHeroImageUrl(data);
  if (heroImageUrl) {
    metaTags.push({
      type: "meta",
      attributes: {
        name: "og:image",
        content: heroImageUrl,
      },
    });
  }

  return [...defaultMetaTags({ withRobots: true }), ...metaTags];
}

export function makeTitle(data: TemplateRenderProps): string {
  const { c_meta: entityMeta } = data.document;
  if (entityMeta?.title) return entityMeta.title;

  return "";
}

function makeDescription(data: TemplateRenderProps): string {
  const { c_meta: entityMeta } = data.document;
  if (entityMeta?.description) return entityMeta.description;

  const { dm_directoryParents_directory } = data.document;
  if (dm_directoryParents_directory) {
    return `${dm_directoryParents_directory
      .map((crumb: { name: string }) => crumb.name == "Directory" ? "United States" : crumb.name)
      .join(", ")}.`;
  }

  return "";
}

function canonicalUrl(data: TemplateRenderProps, locale?: string): string {
  let pagePath = data.path;

  const alfs = data.document?.alternateLanguageFields;
  if (alfs && locale) {
    const altLocalePath = alfs[locale]?.slug;
    if (altLocalePath) {
      pagePath = altLocalePath;
    }
  }

  if (pagePath === "index.html") {
    pagePath = "";
  }

  return `https://pros.turbotax.intuit.com/${pagePath}`;
}

function getHeroImageUrl(data: TemplateRenderProps): string | undefined {
  if (!data.document.c_directoryHeroImage?.url) return undefined;
  const imageUrl = data.document.c_directoryHeroImage.url;
  return imageUrl;
}
