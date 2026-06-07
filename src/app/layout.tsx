import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Manrope, Space_Mono } from "next/font/google";
import { Providers } from "./providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Analytics } from "@/components/analytics/Analytics";
import { organizationJsonLd, websiteJsonLd, LOGO_URL } from "@/lib/seo";
import "@/styles/gwz.css";
import "@/styles/gwz-pages.css";
import "@/styles/extras.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gigawebzone.com"),
  title: {
    default:
      "GigaWebZone — Web & App Development Studio in Pune | Full-Stack Build Studio",
    template: "%s | GigaWebZone",
  },
  description:
    "GigaWebZone is a full-stack web & app development studio — custom web apps, mobile apps, complex portals and premium WordPress. DPIIT-recognised, 400+ businesses served. Get a free consultation.",
  authors: [{ name: "GigaWebZone LLP" }],
  applicationName: "GigaWebZone",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "GigaWebZone",
    locale: "en_IN",
    url: "/",
    title:
      "GigaWebZone — Full-Stack Web & App Development Studio",
    description:
      "We design, develop and ship web apps, mobile apps, portals and premium WordPress — engineered to convert. DPIIT-recognised. 400+ businesses served.",
    images: [{ url: LOGO_URL, alt: "GigaWebZone" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GigaWebZone — Full-Stack Web & App Development Studio",
    description:
      "Web apps, mobile apps, portals and premium WordPress — engineered to convert. DPIIT-recognised.",
    images: [LOGO_URL],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafb" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1115" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${manrope.variable} ${spaceMono.variable}`}
    >
      {/* data-hero drives the homepage hero-variant visibility (Variant B). */}
      <body data-hero="b">
        <a href="#top" className="skip-link">
          Skip to content
        </a>
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <Providers>
          <Header />
          <main id="top">{children}</main>
          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
