import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Jammeh AsSalaam Moving | A peaceful move. A new beginning.",
  description:
    "Muslim-owned and veteran-led. A thoughtful moving business for East Bay families planning local and cross-country moves.",
  icons: { icon: "/favicon.svg" },
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
