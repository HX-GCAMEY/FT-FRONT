import sitemap from "./sitemap";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/protected"],
      },
    ],
    sitemap: sitemap(),
  };
}
