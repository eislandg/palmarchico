import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Palmar Chico Official Website | NEXUS",
  description: "The Premier Nightlife Destination",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased dark scroll-smooth`}>
      <body className="min-h-screen bg-background text-foreground selection:bg-accent-red selection:text-white flex flex-col">
        {children}
      </body>
    </html>
  );
}
