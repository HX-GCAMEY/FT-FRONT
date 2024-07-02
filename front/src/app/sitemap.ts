export default function sitemap() {
  return [
    {
      url: "https://mystore.com/home",
      lastModified: "2021-10-01",
      changefreq: "daily",
      priority: "1.0",
    },
    {
      url: "https://mystore.com/about",
      lastModified: "2021-10-01",
      changefreq: "monthly",
      priority: "0.8",
    },
    {
      url: "https://mystore.com/contact",
      lastModified: "2021-10-01",
      changefreq: "monthly",
      priority: "0.5",
    },
  ];
}
