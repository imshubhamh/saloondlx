import { Helmet } from "react-helmet-async";

const SITE_URL = "https://saloondlx.fun";

export default function SEO({
  title,
  description,
  path = "/",
  image = "/og-image.jpg",
}) {
  const canonical = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <html lang="hi" />

      <title>{title}</title>

      <meta name="description" content={description} />

      <meta
        name="robots"
        content="index, follow, max-image-preview:large"
      />

      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="SaloonDLX" />
      <meta property="og:image" content={`${SITE_URL}${image}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}${image}`} />
    </Helmet>
  );
}