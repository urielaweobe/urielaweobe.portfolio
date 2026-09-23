const siteName = "Uriel Awe-Obe";
const siteUrl = "https://urielaweobe.com";

type MetaInput = {
  page?: string;
  path: string;
  description: string;
};

export function getMeta({ page, path, description }: MetaInput) {
  const title = page ? `${page} — ${siteName}` : siteName;
  const url = `${siteUrl}${path}`;
  const image = `${siteUrl}/og.png`;

  return [
    { title },
    { name: "description", content: description },
    { tagName: "link", rel: "canonical", href: url },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: siteName },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@urielaweobe" },
    { name: "twitter:image", content: image },
  ];
}
