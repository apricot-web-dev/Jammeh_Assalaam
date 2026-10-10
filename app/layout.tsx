import type { Metadata } from "next";
import { business, siteUrl, description, socialImage } from "../lib/site";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "East Bay Movers | Jammeh AsSalaam Moving",
    template: "%s | Jammeh AsSalaam Moving",
  },
  description,
  applicationName: business.name,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    url: "/",
    locale: "en_US",
    siteName: business.name,
    title: "East Bay Movers | Jammeh AsSalaam Moving",
    description,
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "East Bay Movers | Jammeh AsSalaam Moving",
    description,
    images: [socialImage],
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
