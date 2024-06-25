import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Mohammed Adhil — Frontend Developer",
  description:
    "Frontend Engineer and Product Designer, currently at Dubai. Focused on interfaces and experiences.",
  generator: "Next.js",
  applicationName: "Mohammed Adhil",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "frontend",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "dubai",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Mohammed Adhil — Frontend Engineer",
    description:
      "Frontend Engineer and Product Designer, currently at Dubai. Focused on interfaces and experiences.",
    url: "https://mohammed-adhil-portfolio.vercel.app/",
    siteName: "https://mohammed-adhil-portfolio.vercel.app/",
    images: [
      {
        url: "https://github.com/MohammedAdhil/Adhil-Portfolio/assets/91864779/d973abce-2035-4f69-b2fb-3e690a4b9a24",
        width: 1200,
        height: 630,
        alt: "Mohammed Adhil — Frontend Engineer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Adhil — Frontend Engineer",
    description:
      "Frontend Engineer and Product Designer, currently at Dubai. Focused on interfaces and experiences.",
    creator: "Mohammed Adhil",
    creatorId: "1243720976552144897",
    images: [
      "https://github.com/MohammedAdhil/Adhil-Portfolio/assets/91864779/d973abce-2035-4f69-b2fb-3e690a4b9a24",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
