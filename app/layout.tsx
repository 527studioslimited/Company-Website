import type { Metadata } from "next";
import "./globals.css";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "527Studios Limited | Mobile App Development",
  description:
    "527Studios Limited is a UK-based mobile application development company dedicated to designing and building high-quality consumer applications for iOS and React Native platforms.",
  keywords: [
    "mobile app development",
    "iOS development",
    "React Native",
    "app design",
    "UK app developer",
    "consumer apps",
    "527Studios",
  ],
  authors: [{ name: "527Studios Limited" }],
  openGraph: {
    title: "527Studios Limited | Mobile App Development",
    description:
      "Designing and building high-quality consumer applications with robust engineering and intuitive user experience.",
    url: "https://527studios.co.uk",
    siteName: "527Studios Limited",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "527Studios Limited | Mobile App Development",
    description:
      "Designing and building high-quality consumer applications with robust engineering and intuitive user experience.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <body>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
