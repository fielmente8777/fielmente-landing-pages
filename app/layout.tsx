import type { Metadata } from "next";
import localFont from "next/font/local";
import { SITE_URL } from "@/content/site";
import "./globals.css";
import Salesiq from "@/components/zohochatbot/Salesiq";
import Script from "next/script";
import Call from "@/components/ContactButton/Call";
import Whatsapp from "@/components/ContactButton/WhatsApp";

// Self-hosted Poppins (SIL OFL, see app/fonts/OFL.txt). No automatic fallback
// metrics, so characters Poppins lacks (★) render in system-ui as before.
const poppins = localFont({
  src: [
    { path: "./fonts/poppins-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/poppins-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

type LayoutProps<P> = {
  children: React.ReactNode;
  params: P;
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // Landing pages add a "js" class to <html> before React hydrates.
    <html
      lang="en"
      className={poppins.variable}
      suppressHydrationWarning={true}
    >
      <head>
        <meta
          name="google-site-verification"
          content="vKQyk75wG0kfB4x60GCRAmVeErtPS9rgcM9-YNRAvLw"
        />

        <Script
          id="google-tag-manager"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WQ5LPRNM');
            `,
          }}
        />

        {/* <!-- Clarity tracking code for Fielmente new 06 09 2024--> */}
        <Script
          id="clarity-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/" + i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "o0h0ldtiip");`,
          }}
        />

        <Script
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-PVZG7NGGMG');`,
          }}
        />

        <Script id="openai-pixel" strategy="afterInteractive">
          {`
            (function (w, d, s, u) {
              if (w.oaiq) return;
              var q = function () {
                q.q.push(arguments);
              };
              q.q = [];
              w.oaiq = q;

              var js = d.createElement(s);
              js.async = true;
              js.src = u;

              var f = d.getElementsByTagName(s)[0];
              f.parentNode.insertBefore(js, f);
            })(window, document, "script", "https://bzrcdn.openai.com/sdk/oaiq.min.js");

            oaiq("init", {
              pixelId: "YC5yCXHuJoMj9wYFBgWuTC",
              debug: true
            });
                        oaiq(
      "measure",
      "page_viewed",
      { type: "contents" }
    );
          `}
        </Script>

        <Script
          async
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-5H2JL2ZPTS"
        ></Script>
        <Script
          id="gtag-init"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5H2JL2ZPTS');`,
          }}
        />

        <Salesiq />
      </head>
      <body className="m-0 overflow-x-hidden">{children}
        <Call callNumber="+91 95018 68775" />
      </body>
    </html>
  );
}
