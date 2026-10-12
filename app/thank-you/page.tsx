import { Metadata } from "next";
import ThankUPopUp from "./ThankUPopUp";


export const metadata: Metadata = {
  title: "Thank You - Fielmente",
  description: "Thank you for contacting us.",
  alternates: {
    canonical: "https://fielmente.com/thank-you",
    languages: {
      "en-US": "https://fielmente.com/thank-you",
    },
  },
  robots: {
    index: false,
    follow: false,
    // googleBot: {
    //   index: false,
    //   follow: false,
    //   "max-video-preview": -1,
    //   "max-image-preview": "large",
    //   "max-snippet": -1,
    // },
  },
};

export default function Page() {
  return <ThankUPopUp />;
}
