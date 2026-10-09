"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    $zoho: {
      salesiq?: {
        ready?: () => void;
      };
    };
  }
}

const Salesiq = () => {
  const pathname = usePathname();

  const url = [
    "/thank-you/",
    // "/landing-page/",
    // "/resort/",
    // "/hospitality/",
    // "/dubai-restaurant/",
    // "/restaurant/",
    // "/UK/",
    // "/USA/",
    // "/google-ads-for-hotels/",
  ];

  const shouldHide = url.includes(pathname);

  useEffect(() => {
    if (shouldHide) return;

    const timer = setTimeout(() => {
      window.$zoho = window.$zoho || {};

      window.$zoho.salesiq = window.$zoho.salesiq || {
        ready: function () {},
      };

      if (document.getElementById("zsiqscript")) return;

      const script = document.createElement("script");

      script.id = "zsiqscript";

      script.src =
        "https://salesiq.zohopublic.in/widget?wc=siq3e552165893c13042e1d199f6774a60161bf7e2d236cee20afeec12690605bbe60e273bf1bbc69d76802e696c96db5df";

      script.async = true;

      document.body.appendChild(script);
    }, 8000);

    return () => clearTimeout(timer);
  }, [shouldHide]);

  if (shouldHide) {
    return null;
  }

  return (
    <>
      <link rel="preconnect" href="https://salesiq.zohopublic.in" />
    </>
  );
};

export default Salesiq;
