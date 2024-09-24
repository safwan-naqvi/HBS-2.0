import Header from "@/components/layout/Header";
import { Toaster } from "@/components/ui/toaster";
import SmoothScroll from "@/components/utils/SmoothScroll";
import ActiveSectionContextProvider from "@/context/active-section-context";
import TanstackProvider from "@/providers/TanstackProvider";
import { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

const poppins = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "HashBitStudio | Digital Services Agency",
    template: "%s - HashBitStudio",
  },
  description:
    "Your trusted partner for end-to-end digital solutions. We specialize in design, development, and deployment, helping businesses to dominate in the digital landscape.",
  keywords: ["hashbitstudio", "hbs", "hashbit", "digital services", "web development", "design", "app development"],
  twitter: {
    card: "summary_large_image",
    title: "HashBitStudio | Digital Services Agency",
    description:
      "Your trusted partner for end-to-end digital solutions. We specialize in design, development, and deployment, helping businesses dominate the digital landscape.",
    images: ["/opengraph-image.png"], // Ensure this image is in the public folder
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.hashbitstudio.com",
    title: "HashBitStudio | Digital Services Agency",
    description:
      "Your trusted partner for end-to-end digital solutions. We specialize in design, development, and deployment, helping businesses dominate the digital landscape.",
    images: [
      {
        url: "/opengraph-image.png", // Open Graph image
        width: 1200,
        height: 630,
        alt: "HashBitStudio Open Graph Image",
      },
    ],
    siteName: "HashBitStudio",
  },
  icons: {
    icon: "/favicon.ico", // Path to the favicon in the public folder
    apple: "/icons/apple-touch-icon.png", // Apple touch icon for iOS devices
  },
  // manifest: "/manifest.json", // Link to the Web App Manifest file
  themeColor: "#000000", // Theme color for mobile browsers
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SmoothScroll>
          <ActiveSectionContextProvider>
            <TanstackProvider>
              <Header />
              {children}
              <Toaster />
            </TanstackProvider>
          </ActiveSectionContextProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
