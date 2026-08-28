import type { Metadata, Viewport } from "next";

import "./globals.css";

const description =
  "Software, systems, and interfaces that survive contact with reality. Built in public by larp engineering.";

export const metadata: Metadata = {
  metadataBase: new URL("https://larp.engineering"),
  title: "larp engineering / unfortunately real",
  description,
  applicationName: "larp engineering",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "larp engineering",
    title: "larp engineering / unfortunately real",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "larp engineering / unfortunately real",
    description,
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f3efe3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
