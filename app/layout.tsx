import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bossa",
  description:
    "We partner with teams building ambitious technology and help shape it into products that feel clear, useful, and human.",
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
