import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tharindu Dilshan — Full-Stack Software Engineer",
  description:
    "Tharindu Dilshan is an aspiring full-stack software engineer building considered digital experiences, useful systems, and ideas for the web.",
  openGraph: {
    title: "Tharindu Dilshan — Software Engineer",
    description: "Building digital experiences through code.",
    type: "website",
    siteName: "Tharindu Dilshan",
  },
  twitter: { card: "summary_large_image", title: "Tharindu Dilshan — Software Engineer" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08090d",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
