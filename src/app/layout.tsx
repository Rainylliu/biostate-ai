import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import ClientBody from "@/components/ClientBody";
import "./globals.css";

export const metadata: Metadata = {
  title: "biostate.AI - Redefining Precision Health",
  description:
    "Biostate AI connects samples, data, and decisions to redefine precision health.",
  other: {
    "facebook-domain-verification": "o47hr1x7qevdle3nftrncpzzloe84t",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientBody>
          <Header />
          <main>{children}</main>
          <Footer />
          <ChatWidget />
        </ClientBody>
      </body>
    </html>
  );
}
