import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Intentional Few | Rebuild. Grow. Live.",
  description:
    "Join a community of intentional people rebuilding their lives with insights, productivity hacks, spirituality, and a little sarcasm. Subscribe to the newsletter.",
  keywords: [
    "personal growth",
    "newsletter",
    "intentional living",
    "productivity",
    "spirituality",
  ],
  openGraph: {
    title: "The Intentional Few",
    description:
      "Life happens to most people. The Intentional Few rebuild the rest.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
