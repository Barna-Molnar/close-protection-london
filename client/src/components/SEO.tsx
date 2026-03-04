import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
  canonicalPath: string;
  robots?: string;
};

const BASE_URL = "https://www.abvip.co.uk";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;

function upsertMetaByName(name: string, content: string) {
  let meta = document.head.querySelector(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", name);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}

function upsertMetaByProperty(property: string, content: string) {
  let meta = document.head.querySelector(`meta[property="${property}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("property", property);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}

function upsertCanonical(url: string) {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}

export default function SEO({ title, description, canonicalPath, robots = "index, follow" }: SEOProps) {
  useEffect(() => {
    const canonicalUrl = `${BASE_URL}${canonicalPath}`;
    document.title = title;

    upsertMetaByName("title", title);
    upsertMetaByName("description", description);
    upsertMetaByName("robots", robots);
    upsertMetaByName("twitter:title", title);
    upsertMetaByName("twitter:description", description);
    upsertMetaByName("twitter:url", canonicalUrl);
    upsertMetaByName("twitter:image", DEFAULT_IMAGE);

    upsertMetaByProperty("og:title", title);
    upsertMetaByProperty("og:description", description);
    upsertMetaByProperty("og:url", canonicalUrl);
    upsertMetaByProperty("og:image", DEFAULT_IMAGE);

    upsertCanonical(canonicalUrl);
  }, [canonicalPath, description, robots, title]);

  return null;
}
