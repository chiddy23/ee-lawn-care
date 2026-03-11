import type { Metadata } from "next";

const siteUrl = "https://www.eelawncare.com";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "E&E Lawn Care Service, LLC | North Port & Port Charlotte Lawn Care",
    template: "%s | E&E Lawn Care Service, LLC",
  },
  description:
    "Professional lawn care services in North Port and Port Charlotte, FL. Family-owned and operated. Mowing, trimming, landscaping, pressure washing & more. Your Lawn Is My Problem!",
  keywords: [
    "lawn care North Port FL",
    "lawn mowing Port Charlotte",
    "landscaping North Port",
    "yard maintenance Sarasota County",
    "pressure washing North Port",
    "hedge trimming Port Charlotte",
    "lawn service near me",
    "E&E Lawn Care",
  ],
  authors: [{ name: "E&E Lawn Care Service, LLC" }],
  creator: "E&E Lawn Care Service, LLC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "E&E Lawn Care Service, LLC",
    title: "E&E Lawn Care Service, LLC | North Port & Port Charlotte Lawn Care",
    description:
      "Professional lawn care services in North Port and Port Charlotte, FL. Family-owned and operated. Your Lawn Is My Problem!",
  },
  twitter: {
    card: "summary_large_image",
    title: "E&E Lawn Care Service, LLC",
    description:
      "Professional lawn care in North Port & Port Charlotte, FL. Family-owned. Your Lawn Is My Problem!",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};
