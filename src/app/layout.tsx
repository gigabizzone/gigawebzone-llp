import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Manrope, Space_Mono } from "next/font/google";
import { Providers } from "./providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
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
    "GigaWebZone is a Pune-based full-stack web & app development studio — custom web apps, mobile apps, complex portals and premium WordPress. DPIIT-recognised, 400+ businesses served. Get a free consultation.",
  authors: [{ name: "GigaWebZone LLP" }],
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
        <Providers>
          <Header />
          <main id="top">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
