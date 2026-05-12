import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Nice Computer Education | Computer Classes in West Vinod Nagar, Delhi",
  description:
    "Nice Computer Education — 20+ years of expert computer training in West Vinod Nagar, East Delhi. Typing, DTP, Tally with GST, MS Office, Graphics & Digital Marketing. Call 098918 02542.",
  robots: "index, follow",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Nice Computer Education | West Vinod Nagar, East Delhi",
    description:
      "20+ years of expert computer training in West Vinod Nagar, East Delhi. Courses in Typing, DTP, Tally, MS Office, Graphics & Digital Marketing. 5.0/5 Google Rating.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nice Computer Education | West Vinod Nagar, Delhi",
    description:
      "20+ years of expert computer training in West Vinod Nagar, East Delhi. Courses in Typing, DTP, Tally, MS Office, Graphics & Digital Marketing.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
