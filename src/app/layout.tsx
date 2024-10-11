import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Vamp",
  applicationName: "Vamp",
  category: "Leisure",
  referrer: "origin-when-cross-origin",
  description: "Vamp for smoking",
  publisher: "Vamp",
  creator: "Vamp",
  keywords: [],
  twitter: {
    creator: "Vamp",
    title: "Vamp",
    description: "Vamp for smoking",
    images: {
      url: "",
      alt: "Next.js Logo",
    },
    site: "@Vamp",
    card: "summary_large_image",
  },
  openGraph: {
    title: "Vamp",
    description: "Vamp for smoking",
    images: [
      {
        url: "",
        width: 800,
        height: 600,
      },
      {
        url: "",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    videos: [
      {
        url: "",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>{children}</body>
    </html>
  );
}
