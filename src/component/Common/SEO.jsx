import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, image, url }) => {
  const siteTitle = "Tripdekhoo";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  console.log(fullTitle);
  
  const defaultDescription = "Explore the best tour packages with Tripdekhoo. From luxury stays to budget-friendly trips, we have it all.";
  const defaultImage = "https://d19k5x9tl64mcw.cloudfront.net/TripDekhooLogo.png";
  const siteUrl = "https://tripdekhoo.com";

  const metaDescription = description || defaultDescription;
  const metaImage = image || defaultImage;
  const metaUrl = url ? `${siteUrl}${url}` : siteUrl;


  return (
    <Helmet defer={false}>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />

      {/* Open Graph / Facebook tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaUrl} />

      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
    </Helmet>
  );
};

export default SEO;
