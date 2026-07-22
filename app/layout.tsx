import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bossa",
  description:
    "Good technology deserves better design. We build it with care, at the pace AI makes possible.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
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
