import * as React from "react";
import { Helmet } from "react-helmet";

export function SEO(props: any) {
  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
    >
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />

      {/* <!-- For Google --> */}
      <meta
        name="description"
        content="Your Portal To The New, Open Internet."
      />
      <meta name="author" content="Mask Network" />
      <meta name="application-name" content="Mask Network" />

      {/* <!-- For Facebook --> */}
      <meta
        property="og:title"
        content="Mask Network — Your Portal To The New, Open Internet."
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/fb-share-banner.png" />
      <meta property="og:url" content="https://mask.io" />
      <meta
        property="og:description"
        content="Your Portal To The New, Open Internet."
      />
      <meta property="fb:app_id" content="321539018508290" />

      {/* <!-- For Twitter --> */}
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:title"
        content="Mask Network — Your Portal To The New, Open Internet."
      />
      <meta
        name="twitter:description"
        content="Your Portal To The New, Open Internet."
      />
      <meta name="twitter:image" content="https://mask.io/apple-touch-icon.png" />

      {/* <!-- For Apple --> */}
      <meta name="apple-itunes-app" content="app-id=1478382964" />
      <title>Mask Network</title>

      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "Organization",
          url: "https://mask.io",
          logo: "https://mask.io/assets/icons/logo.svg",
        }`}
      </script>

      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Mask Network",
          operatingSystem: "Android, iOS",
          applicationCategory: "SecurityApplication",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.1",
            reviewCount: 9,
          },
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }`}
      </script>

      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-2XCS4Y99TG"
      ></script>
      <script>
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2XCS4Y99TG');
              gtag('config', 'G-3GW35TS5N7');
            `}
      </script>

      <title>{props.title}</title>
      <link rel="shortcut icon" href="/favicon.ico" />
    </Helmet>
  );
}
