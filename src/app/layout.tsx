import type { Metadata, Viewport } from "next";

import "./globals.css";

const description =
  "Larp engineering designs and builds web products, internal tools, and the systems behind them.";

export const metadata: Metadata = {
  metadataBase: new URL("https://larp.engineering"),
  title: "larp engineering / software that works",
  description,
  applicationName: "larp engineering",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "larp engineering",
    title: "larp engineering / software that works",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "larp engineering / software that works",
    description,
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#181816",
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
