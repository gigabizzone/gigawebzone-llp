import "./globals.css";

export const metadata = {
  title: "GigaWebZone — Full-Stack Digital Build Studio",
  description:
    "GigaWebZone is a Pune-based full-stack web & app development studio — web apps, mobile apps, portals and premium WordPress.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body>{children}</body>
    </html>
  );
}
