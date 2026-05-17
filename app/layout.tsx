import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrimeAlux | Premium Aluminum Gates — Canadian Manufacturer",
  description:
    "PrimeAlux manufactures premium aluminum gates with patented foam-core slat technology. Sliding, automatic, backyard, and sloped gates. 9 colours. Ships across Canada and the US.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} scroll-smooth`}>
      <body className="bg-[#1a1a1a] text-[#f5f0e8] antialiased">{children}</body>
    </html>
  );
}
