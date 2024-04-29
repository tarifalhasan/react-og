import { Helmet } from "react-helmet";
export function OGs({ title, description, imageUrl }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
    </Helmet>
  );
}
