import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  name?: string;
  type?: string;
  image?: string;
  url?: string;
}

export function SEO({ 
  title = "Chopped | Premium Butcher & Meat Delivery", 
  description = "Experience the pinnacle of culinary excellence with Chopped. We deliver farm-raised, expertly butchered premium meats including Wagyu, Ribeye, and Heritage Pork directly to your door.",
  name = "Chopped The Meat Shop",
  type = "website",
  image = "https://images.unsplash.com/photo-1544025162-81111421550a?q=80&w=1200&auto=format&fit=crop",
  url = "https://choppedmeatshop.com"
}: SEOProps) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* OpenGraph tags for social media sharing */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={name} />

      {/* Twitter Card tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data (JSON-LD) for Local Business / Store */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Store",
          "name": name,
          "image": image,
          "description": description,
          "url": url,
          "telephone": "+1-800-CHOPPED",
          "priceRange": "$$$",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Toronto",
            "addressRegion": "ON",
            "addressCountry": "CA"
          }
        })}
      </script>
    </Helmet>
  );
}
