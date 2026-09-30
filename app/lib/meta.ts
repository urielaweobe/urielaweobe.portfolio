export const siteName = "Uriel Awe-Obe";
export const siteUrl = "https://urielaweobe.com";

type MetaInput = {
  page?: string;
  path: string;
  description: string;
};

export function getMeta({ page, path, description }: MetaInput) {
  const title = page
    ? `${page} — ${siteName}`
    : `${siteName} — Frontend Engineer at Paystack`;
  const url = `${siteUrl}${path}`;
  const image = `${siteUrl}/og.png`;
  const imageAlt = `${siteName}, Frontend Engineer, turning complex ideas into smooth, engaging web experiences.`;

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
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: imageAlt },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@urielaweobe" },
    { name: "twitter:image", content: image },
    { name: "twitter:image:alt", content: imageAlt },
  ];
}
