import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "biostate.AI - Redefining Precision Health",
  description:
    "Biostate AI connects samples, data, and decisions to redefine precision health.",
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
