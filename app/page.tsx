import type { Metadata } from "next";
import Home from "./home";
import { businessSchema } from "../lib/site";
export const metadata: Metadata = { alternates: { canonical: "/" } };
export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Home />
    </>
  );
}
