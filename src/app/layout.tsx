import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Archivo } from "next/font/google";



export const metadata: Metadata = {
  title: 'CreativeFlow Studio | Freelance Graphic Design & Marketing',
  description: 'Elevate your brand with expert freelance graphic design, web design, communication, and digital marketing services. Get a high-converting website and impactful visuals.',
  keywords: ["freelance, graphic design, web design, communication, marketing, digital marketing, branding, logo design, website development, SEO, social media, content strategy"],
  openGraph: {
    "title": "CreativeFlow Studio | Freelance Graphic Design & Marketing",
    "description": "Elevate your brand with expert freelance graphic design, web design, communication, and digital marketing services.",
    "url": "https://www.creativeflowstudio.com",
    "siteName": "CreativeFlow Studio",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-psd/neon-type-web-page-template_23-2149250894.jpg",
        "alt": "CreativeFlow Studio Portfolio Showcase"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "CreativeFlow Studio | Freelance Graphic Design & Marketing",
    "description": "Elevate your brand with expert freelance graphic design, web design, communication, and digital marketing services.",
    "images": [
      "http://img.b2bpic.net/free-psd/neon-type-web-page-template_23-2149250894.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${archivo.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
