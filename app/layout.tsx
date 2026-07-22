import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bossa",
  description:
    "Good technology deserves better design. Bossa builds it with care, at the pace AI makes possible.",
  icons: {
    icon: "/assets/logo_bossa.svg",
    shortcut: "/assets/logo_bossa.svg",
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
