import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PT GLOBAL INOVATIF INDONESIA - Innovation Beyond Boundaries",
  description: "Leading innovation company in Indonesia providing comprehensive business solutions, digital transformation, and technology integration services. Transform your business with our expert consulting and cutting-edge solutions.",
  keywords: ["PT Global Inovatif Indonesia", "innovation consulting", "digital transformation", "business solutions", "technology integration", "Indonesia", "Jakarta", "consulting services"],
  authors: [{ name: "PT GLOBAL INOVATIF INDONESIA" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "PT GLOBAL INOVATIF INDONESIA - Innovation Beyond Boundaries",
    description: "Leading innovation company in Indonesia providing comprehensive business solutions and digital transformation services.",
    url: "https://globalinovatif.co.id",
    siteName: "PT GLOBAL INOVATIF INDONESIA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT GLOBAL INOVATIF INDONESIA",
    description: "Innovation Beyond Boundaries - Leading business solutions and digital transformation in Indonesia",
  },
  other: {
    "facebook-domain-verification": "y0o1fmxul3cmug90hl3te2dgqll3u2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
