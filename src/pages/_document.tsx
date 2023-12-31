import Document, { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { ReactElement } from 'react';

class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.png" />

          <meta
            name="description"
            content="I am Joiner Cantillo. Full Stack Engineer. Dedicated to provide innovative solutions for blockchain and AI development. Tech Stack are Full stack development, Blockchain, AI, Html, CSS, JS, TS, React, NEXT.JS, Tailwindcss, Scss."
          />

          <meta name="author" content="Joiner David Cantillo Camargo" />

          <meta name="robots" content="index, follow" />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:url" />
          <meta
            property="og:title"
            content="Portfolio - Joiner David Cantillo Camargo"
          />
          <meta
            property="og:description"
            content="I am Joiner Cantillo. Full Stack Engineer. Dedicated to provide innovative solutions for blockchain and AI development. Tech Stack are Full stack development, Blockchain, AI, Html, CSS, JS, TS, React, NEXT.JS, Tailwindcss, Scss."
          />
          <meta property="og:image" content="/HomePreview.png" />

          {/* Twitter  */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" />
          <meta
            property="twitter:title"
            content="Portfolio - Joiner David Cantillo Camargo"
          />
          <meta
            property="twitter:description"
            content="I am Joiner Cantillo. Full Stack Engineer. Dedicated to provide innovative solutions for blockchain and AI development. Tech Stack are Full stack development, Blockchain, AI, Html, CSS, JS, TS, React, NEXT.JS, Tailwindcss, Scss."
          />
          <meta property="twitter:image" content="/HomePreview.png" />

          <meta name="theme-color" content="#111119" />
          <link rel="apple-touch-icon" href="/logo192.png" />

          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@1,700&family=Roboto+Mono&family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700&family=Iceland&display=swap"
            rel="stylesheet"
          />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${}`}
          />
          <Script
            id="ga-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${}', {
                page_path: window.location.pathname,
              });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
