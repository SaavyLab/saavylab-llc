import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SaavyLab LLC — Software for Musicians",
    template: "%s — SaavyLab LLC",
  },
  description:
    "We craft tools for musicians and developers — makers of Staaf.",
  metadataBase: new URL("https://saavylab.com"),
  openGraph: {
    title: "SaavyLab LLC — Software for Musicians",
    description:
      "We craft tools for musicians and developers — makers of Staaf.",
    type: "website",
    url: "https://saavylab.com",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main className="container-page py-8 md:py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
